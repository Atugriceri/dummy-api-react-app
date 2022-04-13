import { useState, createContext, useContext, useEffect } from 'react'
import { fetchUsers, fetchUserById } from '../Service/DataService'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([])
  const [page, setPage] = useState(0)
  const [userId, setUserId] = useState("")
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(page <= 4) {
      const getUser = async () => {
        setLoading(true)
        try {
          const userData = await fetchUsers(page)
          setUserList(prev => [...prev, userData.data])
          setLoading(false)
        } catch (e) {
          setLoading(false)
        }
      }
      getUser()
    }
  }, [page])

  useEffect(() => {
    setLoading(true)
    const getUserById = async () => {
      try {
        const userData = userId && userId.length > 0 && await fetchUserById(userId)
        setUser(userData)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }
    getUserById()
  }, [userId])

  const values = {
    userList,
    page,
    setPage,
    user,
    userId,
    setUserId,
    loading,
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

const useUsers = () => useContext(UserContext)

export { UserProvider, useUsers }