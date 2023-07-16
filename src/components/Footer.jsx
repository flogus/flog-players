import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <nav className='text-green-700 flex flex-row justify-center'>
            <Link className='p-2 text-xs hover:text-green-600' to={'home'}>Home</Link>
            <Link className='p-2 text-xs hover:text-green-600' to={'map'}>Map</Link>
            <Link className='p-2 text-xs hover:text-green-600' to={'teams'}>Teams</Link>
            <Link className='p-2 text-xs hover:text-green-600' to={'about'}>About</Link>
        </nav>
    </>
  )
}
