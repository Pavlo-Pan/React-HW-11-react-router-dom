import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import { HomePage, ArticlesPage, ArticlesProfilePage } from '../../pages/pages.js';

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
