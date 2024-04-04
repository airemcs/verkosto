import { useState } from 'react'
const apiURL = import.meta.env.VITE_BACKEND_URL

export const useEditComment = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const editComment = async (commentId, content) => {
    setIsLoading(true)
    setError(null)

    console.log(content)

    const response = await fetch(apiURL + `comments/${commentId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ content })
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

  return { editComment, isLoading, error }
}