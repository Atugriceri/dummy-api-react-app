import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import PostList from './Pages/PostList'
import UserList from './Pages/UserList'
import UserDetail from './Pages/UserDetail'
import Container from './Components/Container'
import NavigationBar from './Components/NavigationBar'

function App() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:user_id" element={<UserDetail />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
