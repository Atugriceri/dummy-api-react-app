import { useState, createContext, useContext, useEffect } from 'react'
import { fetchPosts } from '../Service/DataService'

const PostContext = createContext()

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getPosts = async () => {
      try {
        const postData = await fetchPosts(page)
        setPosts((prev) => [...prev, ...postData.data])
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }
    getPosts()
  }, [page])


  const values = {
    posts,
    loading,
    page,
    setPage,
  }

  return (
    <PostContext.Provider value={values}>
      {children}
    </PostContext.Provider>
  )
}

const usePosts = () => useContext(PostContext)

export { PostProvider, usePosts }