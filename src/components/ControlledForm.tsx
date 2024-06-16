import { FormEvent, useState } from 'react'

const ControlledForm = () => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formData)
  }

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleFormSubmit} className="col-6">
        <div className="mb-3">
          <label htmlFor="username" className='form-label'>Username: <b>{formData.username || ''}</b></label>
          <input
            id="username"
            type="text"
            className='form-control'
            name='username'
            placeholder='Username...'
            onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password: <b>{formData.password || ''}</b></label>
          <input
            id="password"
            type="text"
            className='form-control'
            name='password'
            placeholder='Password...'
            onChange={(e) => handleInputChange(e)} />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm