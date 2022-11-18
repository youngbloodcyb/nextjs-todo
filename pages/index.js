import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen font-mono flex justify-center items-center">
      <Link href="/">
        <h1 className='text-center'>Welcome</h1>
      </Link>
    </div>
  )
}
