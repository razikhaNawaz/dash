import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../Pages/AuthPage'

const Routing = () => {
  return (
   
    <Suspense fallback={<div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>}>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          
        </Routes>
      </Suspense>
  )
}

export default Routing