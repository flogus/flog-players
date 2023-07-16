import React, {useEffect} from 'react'
import Map from './Map'
import axios from 'axios'

export default function Teamcard(team,index) {
  //"https://nominatim.openstreetmap.org/search?q=Stadio Giuseppe Meazza&limit=2&format=json"
  const getPosition = () => {
    const url = 'https://nominatim.openstreetmap.org/search?q=Stadio Giuseppe Meazza&limit=2&format=json'
    const result = axios.get(url).then(res => {
        const pos = res.data;
        console.log(pos)
    })
  }
  // useEffect(() => {
  //     getPosition()
  // ();
  // }, [])

  return (
    // console.log('team',team.team.id)
    <div key={index} className='flex flex-col justify-start bg-green-700 p-7 hover:text-green-100 text-green-400'>
        <a href={`/${team.team.id}`} title='Team info...'>
            <h3 className='flex justify-center items-end text-2xl mb-3' style={{height:'70px'}}>{team.team.name}</h3>
            <div className='border-2 flex justify-center items-center py-16 bg-green-900 border-green-400' style={{height:'100px',width:'auto'}}>
                {team.team.crest ? <img style={{height:'80px',width:'auto'}} src={team.team.crest} /> : 'no logo'}
            </div>
        </a>
        {team.team.venue ? <span className='text-base'>Stade {team.team.venue}</span> : null}
        {team.team.website ? <a href={team.team.website} target='_blank' className='text-xs hover:text-green-500' rel="noreferrer">Website</a> : null}
        {team.team.address ? <span className='text-xs'>Adresse {team.team.address}</span> : null}
        <div style={{width:'100%',height:'200px', border:'2px solid blue'}}>
          <Map mapid={team} text='hoho' position={[43, -8]} adresse={team.team.address} />
        </div>
    </div>
  )
}
