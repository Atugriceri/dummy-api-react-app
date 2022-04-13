import React, { useRef, useEffect, useState } from 'react'
import { useUsers } from '../../Contexts/UserContext'
import UserListCard from '../../Components/UserListCard'
import Spinner from '../../Components/Spinner'
import styles from './styles.module.css'

const UserList = () => {
  const { userList, loading, page, setPage } = useUsers()
  const [lastElement, setLastElement] = useState(null)

  const TOTAL_PAGE = 4

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0]
      if (first.isIntersecting) {
        setPage((prev) => prev + 1)
      }
    })
  )

  useEffect(() => {
    const currentElement = lastElement
    const currentObserver = observer.current

    if (currentElement) {
      currentObserver.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement)
      }
    }
  }, [lastElement])

  return (
    <>
      <div className={styles.userList} id="userList">
        {Object.keys(userList).map((key) => {
          return (
            <React.Fragment key={key}>
              {userList[key].map((user, id) => {
                return id === userList[key].length - 1 &&
                  !loading &&
                  page <= TOTAL_PAGE ? (
                  <div key={`user-${id}`} ref={setLastElement}>
                    <UserListCard
                      userId={user.id}
                      userImg={user.picture}
                      userFirstName={user.firstName}
                      userLastName={user.lastName}
                      userTitle={user.title}
                      key={`user-${id}`}
                      className={styles.card}
                    />
                  </div>
                ) : (
                  <UserListCard
                    userId={user.id}
                    userImg={user.picture}
                    userFirstName={user.firstName}
                    userLastName={user.lastName}
                    userTitle={user.title}
                    key={`user-${id}`}
                    className={styles.card}
                  />
                )
              })}
            </React.Fragment>
          )
        })}

      </div>
      {loading && <Spinner />}
      {page - 1 === TOTAL_PAGE && (
        <p className={styles.noMore}>😢 No More User 😢</p>
      )}
    </>
  )
}

export default UserList;
