import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="w-screen h-screen font-mono flex justify-center items-center">
        <Link href="/">
          <h1 className='text-center'>Welcome</h1>
        </Link>
      </div>
    </div>
  )
}
