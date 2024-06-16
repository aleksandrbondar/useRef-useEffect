import { useEffect, useState } from 'react'

const useEffectUsers = () => {
  interface User {
    id: number
    name: string
    email: string
    phone: string
    website: string
  }

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const TRUE_URL = 'https://jsonplaceholder.typicode.com/users'
    const FALSE_URL = 'https://jsonplaceholder.typicode.com/wrongURL'
    const URL = Math.random() >= 0.5 ? TRUE_URL : FALSE_URL
    setIsLoading(true)

    setTimeout(() => {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setUsers(data))
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, Math.random() * 5000);
  }, [])

  const renderUsers = () => {
    return users.map((user) => {
      const { id, name, email, phone, website } = user
      return (
        <li className='list-group-item' key={id}>
          <p>User: <b>{name}</b></p>
          <p>Email: <b>{email}</b></p>
          <p>Phone: <b>{phone}</b></p>
          <p>Website: <b>{website}</b></p>
        </li>
      )
    })
  }

  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        {isLoading ? <p className="alert alert-info">Loading...</p> :
          error ? <p className="alert alert-danger">{error}</p> :
            <p className="alert alert-success">Users loaded</p>}
        {users.length > 0 && renderUsers()}
      </ul>
    </div>
  )
}

export default useEffectUsers