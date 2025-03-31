import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage'
import ArticlesProfilePage from '../../pages/ArticlesProfilePage/ArticlesProfilePage'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlesProfilePage />} />
      </Routes>
    </>
  )
}

export default App
