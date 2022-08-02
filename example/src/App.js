import React, { useMemo } from 'react'
import useForm from 'simple-react-hook-form';
import { registerSchema } from './schema'
import './index.css'

const Input = ({ label, placeholder, type = 'text', onChange, value = '', error }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        onChange={(e) => onChange && onChange(e.currentTarget.value)}
        name={label}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {
        error &&
        <p className='errorText'>{error.join("\n")}</p>
      }
    </div>
  )
}

const TitleInput = ({ label, onChange, value = '', error }) => {
  return (
    <div>
      <label>{label}</label>
      <select name="title" value={value} onChange={(e) => onChange && onChange(e.target.value)}>
        <option value="">Select {label}</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
      </select>
      {
        error &&
        <p className='errorText'>{error.join("\n")}</p>
      }
    </div>

  )
}

const App = () => {

  const initialValues = useMemo(() => {
    return {
      name: {firstName:'Ravi'},
      email: '',
      title: '',
      website: ''
    }
  });

  const { handleChange, resetForm, clearForm, values, handleSubmit, errors } = useForm(
    initialValues,
    {
      validate: true,
      validateSchema: registerSchema,
      validationOnChange: true
    }
  );
  const onSubmit = (data) => {
    console.log("form is valid, Do what you gotta do!",data);
  }

  return (
    <div className="App">
      <form >

        <Input
          label={'Full Name'}
          placeholder={'Ravi Sojitra'}
          onChange={(value) => handleChange('name.firstName', value)}
          value={values.name?.firstName}
          error={errors.name?.firstName}
        />

        <Input
          label={'Email'}
          placeholder={'ravisojitra79@gmail.com'}
          onChange={(value) => handleChange('email', value)}
          value={values.email}
          error={errors.email}
        />

        <Input
          label={'Website'}
          placeholder={'Your Website'}
          onChange={(value) => handleChange('website', value)}
          value={values.website}
          error={errors.website}
        />

        <TitleInput
          label={'Title'}
          onChange={(value) => handleChange('title', value)}
          value={values.title}
          error={errors.title}
        />

        <div className="buttonContainer">
          <button type="reset" onClick={clearForm}>Clear</button>
          <button type="reset" onClick={resetForm}>Reset Default</button>
          <button type="button" className='submitButton' onClick={() => handleSubmit(onSubmit)} >Submit</button>
        </div>

      </form>
    </div>
  )
}

export default App
