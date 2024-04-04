import { useState } from 'react'
const apiURL = import.meta.env.VITE_BACKEND_URL

export const useCreateComment = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const createComment = async (content, userID, postID) => {
    setIsLoading(true)
    setError(null)

    console.log(content)

    const response = await fetch(apiURL + 'comments/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ content, userID, postID })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // update loading state
      setIsLoading(false)
    }
  }

  return { createComment, isLoading, error }
}