import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Login from '../components/layouts/login'
import { useRouter } from "next/router";

export default function Home() {

  const route = useRouter()

  const [value, setValue] = useState({
    username: '',
    password: '',
  })
  const [notifikasi, setNotifikasi] = useState('')
  const [status, setStatus] = useState('')
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = value.username
    localStorage.setItem('username', username)
    route.push('dashboard')
  }
  return (
    <Login
      {...value}
      
      value={value}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
