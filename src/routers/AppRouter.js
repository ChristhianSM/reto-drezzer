import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  )
}
