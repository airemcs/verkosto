import { useAuthContext } from './useAuthContext'
const apiURL = import.meta.env.VITE_BACKEND_URL

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    
  }

  return { logout }
}