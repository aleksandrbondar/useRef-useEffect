import { FormEvent, useRef } from 'react'

const UncontrolledForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)


  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ username: usernameRef.current?.value, password: passwordRef.current?.value })
  }


  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleFormSubmit} className="col-6">
        <div className="mb-3">
          <label htmlFor="username" className='form-label'>Username</label>
          <input ref={usernameRef} id="username" type="text" className='form-control' name='username' placeholder='Username...' />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password</label>
          <input ref={passwordRef} id="password" type="text" className='form-control' name='password' placeholder='Password...' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm