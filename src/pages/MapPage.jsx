import React from 'react'
import Title from '../components/Title'
import Map from '../components/Map'

export default function MapPage() {
  return (
    <>
      <Title text='Map' />
      <div style={{width:'600px',height:'400px', border:'2px solid blue'}}>
          <Map
          position={[43, -8]}
          mapid='globalmap'
          text='texte test'
          adresse='europe'
          zoom='5'
          />
      </div>
    </>
  )
}
