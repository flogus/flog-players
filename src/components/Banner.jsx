import React from 'react'
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
        <h1 className='bg-green-800 text-6xl text-green-500 text-center p-5'>FOOTBALL DATA</h1>
        <nav className='bg-green-900 text-green-700 flex flex-row justify-center'>
            <Link className='p-2 hover:bg-green-800 hover:text-green-600' to={'home'}>Home</Link>
            <Link className='p-2 hover:bg-green-800 hover:text-green-600' to={'map'}>Map</Link>
            <Link className='p-2 hover:bg-green-800 hover:text-green-600' to={'teams'}>Teams</Link>
            <Link className='p-2 hover:bg-green-800 hover:text-green-600' to={'about'}>About</Link>
        </nav>
    </>
  )
}
