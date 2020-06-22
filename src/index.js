import React, { useReducer, useCallback } from 'react'

const getInitialState = initialValues => {
  return {
    values: {
      ...initialValues
    },
    errors: {}, // all errors
    touched: {}, // dirty field names
    isSubmitted: false, //is form submitted to check validation
    submitCounter: 0
  }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'INPUT_CHANGE':
      let inputKey = payload.key, inputValue = payload.value;
      return {
        ...state,
        values: { ...state.values, [inputKey]: inputValue },
        touched: { ...state.touched, [inputKey]: true }
      }
    case 'VALIDATE_FORM':
      let errors = payload.errors || {}
      return {
        ...state,
        errors
      }
    case 'SET_VALUES':
      return { ...state, values: { ...payload.values } }
    case 'RESET_FORM':
      return { ...payload, errors: {} }
    case 'SUBMIT_FORM':
      return { ...state, isSubmitted: true, submitCounter: ++state.submitCounter }
    case 'CLEAR_FORM':
      return { ...state, values: { ...payload.values }, errors: {} }
    default:
      return state;
  }
}

const defaultConfig = {
  validate: true, //should validate form?
  validationOnChange: false, //should form validate on blur input
  validateSchema: false //yup validation schema
}

const useForm = (initialValues = {}, config = { ...defaultConfig }) => {
  let initalState = getInitialState(initialValues);
  const [state, dispatch] = useReducer(reducer, initalState);
  const { validate, validationOnChange, validateSchema } = config;

  React.useEffect(() => {
    async function checkForm() {
      await validateForm();
    }
    if (validationOnChange && state.isSubmitted) {
      checkForm();
    }
  }, [state.values, validationOnChange])

  // React.useEffect(() => {
  //   async function checkForm() {
  //     if (await validateForm()) {
  //       onSubmit();
  //     }
  //   }

  //   state.isSubmitted && checkForm()
  // }, [state.submitCounter, state.isSubmitted])

  const validateForm = async () => {
    let { isValid, errors } = await getValidationErrors();
    dispatch({ type: 'VALIDATE_FORM', payload: { errors } });
    return isValid;
  }

  const getValidationErrors = () => {
    return new Promise((resolve, _) => {
      if (validateSchema) {
        try {
          let isValid = validateSchema.validateSync(state.values, { abortEarly: false });
          resolve({ isValid, errors: {} })
        } catch (err) {
          let errors = {};
          err.inner.forEach((yupErr) => {
            if (errors[yupErr.path]) {
              errors[yupErr.path].push(yupErr.message);
            } else {
              errors[yupErr.path] = [yupErr.message];
            }
          });
          resolve({ isValid: false, errors })
        }
      } else {
        resolve({ isValid: true, errors: {} })
      }
    })
  }

  const handleChange = useCallback(async (key, value) => {
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { key, value }
    });
  })

  const resetForm = useCallback(() => {
    dispatch({
      type: 'RESET_FORM',
      payload: {
        ...initalState
      }
    })
  }, [initalState]);

  const clearForm = useCallback(() => {
    let oldValues = { ...state.values }
    let values = Object.keys(oldValues).forEach(function (key) { oldValues[key] = "" });
    dispatch({
      type: 'CLEAR_FORM',
      payload: {
        ...values
      }
    })
  })

  const setValues = values => {
    dispatch({
      type: 'SET_VALUES',
      payload: {
        ...values
      }
    })
  }

  const handleSubmit = useCallback(async (onSubmit) => {
    if (validate) {
      dispatch({ type: 'SUBMIT_FORM' })
      if (await validateForm()) {
        onSubmit();
      }
    } else {
      onSubmit();
    }
  });

  return { handleChange, resetForm, handleSubmit, clearForm, setValues, ...state }
}

export default useForm;