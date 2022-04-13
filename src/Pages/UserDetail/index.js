import React, { useEffect } from 'react'
import { useUsers } from '../../Contexts/UserContext'
import { useParams } from 'react-router-dom'
import UserDetailCard from '../../Components/UserDetailCard'
import Spinner from '../../Components/Spinner'

const UserDetail = () => {

  const { user, loading, setUserId } = useUsers()
  
  const { user_id } = useParams()

  useEffect(() => {
    setUserId(user_id)
  }, [])

  return (
    <>
      {!loading && user ? 
      <UserDetailCard 
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        userImg={user.picture}
        dateOfBirth={user.dateOfBirth}
        email={user.email}
        gender={user.gender}
        phone={user.phone}
        registerDate={user.registerDate}
        updatedDate={user.updatedDate}
        location={user.location}
        key={user.id}
      /> : 
      <Spinner />}
    </>
  )
}

export default UserDetail