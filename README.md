# simple-react-hook-form

> A simple form library for react.js and react native using hooks

[![NPM](https://img.shields.io/npm/v/simple-react-hook-form.svg)](https://www.npmjs.com/package/simple-react-hook-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-hook-form
```

## Usage

```jsx
import React, { Component } from 'react'

import useForm from 'simple-react-hook-form'
import * as yup from 'yup'

let initialValues = { name: 'React' }
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, 'Name must be minimum of length 5')
    .required('Name is required')
})
const App = () => {
  const {
    handleChange,
    resetForm,
    clearForm,
    values,
    handleSubmit,
    errors
  } = useForm(initialValues, {
    validate: true,
    validateSchema: validationSchema,
    validationOnChange: true
  })

  const onSubmit = () => {
    console.log('form is valid, Do what you gotta do!')
  }
  return (
    <div className='App'>
      <form>
        <div>
          <label htmlFor={'Name'}>{'Name'}</label>
          <input
            onChange={(e) => handleChange('name', e.currentTarget.value)}
            name={'name'}
            placeholder={'Please enter name'}
            type={'text'}
            value={values.name}
          />
          {errors.name && <p className='errorText'>{errors.name.join('\n')}</p>}
        </div>

        <button type='button' onClick={() => handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  )
}
```

## License

MIT © [ravisojitra](https://github.com/ravisojitra)