import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const useSingup = () => {

  const {Login} = useAuth()
  return (
    <div>useSingup</div>
  )
}

export default useSingup