import React, {useEffect, useState} from 'react'
// Local teams
import teamsData from '../assets/teams.json'
import Teamcard from '../components/Teamcard'
import Title from '../components/Title'

export default function TeamsPage() {
  const [teams, setTeams] = useState([])
  const [teamsNb, setTeamsNb] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    fetch(setTeamsNb,setTeams)
  },[])

  const teamsList = teamsData.teams.map(
  // const teamsList = teams.map(
    (team,index) => {
        return (
          <Teamcard team={team} key={index}/>
        )
    }
  )

  return (
    <>
      <Title text={`${teamsNb} Teams`} />
      <div className="card">
          <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>{teamsList}</div>
      </div>
    </>
  )
}
