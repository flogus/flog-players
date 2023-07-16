import React from 'react'
import ListWidget from '../components/ListWidget'

export default function HomePage() {
  return (
    <div className='flex'>
        <ListWidget type='players' />
        <ListWidget type='teams' />
        <ListWidget type='map' />
    </div>
  )
}
