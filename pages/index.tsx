import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HomePage } from '@components/HomePage'
import { Header } from "@components/Header"
const Home: NextPage = () => {
  return (
    <div >
      <HomePage />
      <Header/>

    </div>
  )
}

export default Home
