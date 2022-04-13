import React, {useEffect, useRef, useCallback} from 'react'
import { usePosts } from '../../Contexts/PostContext'
import PostListCard from '../../Components/PostListCard'
import Spinner from '../../Components/Spinner'
import styles from './styles.module.css'

const PostList = () => {
  const { posts, loading, setPage } = usePosts()

  const loader = useRef(null)

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if(target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "60px",
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if(loader.current) {
      observer.observe(loader.current)
    }
  }, [handleObserver])

  return (
    <>
    <div className={styles.postList} id="postList">
      {posts?.map((postItem, id) => {
        return (
        <PostListCard
          {...postItem}
          key={`post-item-${id}`} 
        />
        )
      })}
    </div>
    {loading && <Spinner />}
    <div ref={loader} />
    </>
  )
}

export default PostList