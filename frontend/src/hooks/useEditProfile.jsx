import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useEditProfile = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const edit = async (email, firstName, lastName, bio, country, city, facebook, linkedin, image, organizationId) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:5555/users/edit', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, firstName, lastName, bio, country, city, facebook, linkedin, image, organizationId })
    })
    const json = await response.json()
    console.log("edited");

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { edit, isLoading, error }
}