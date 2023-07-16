import axios from "axios";

export default function fetch(setTeamsNb,setTeams) {
    const url = 'https://api.football-data.org/v4/teams?limit=100&offset=100'
    const config = {
        headers: {
            "X-Auth-Token": 'ba670d6d972a463f9ba67f7651c31d0d',
            "content-type": "application/json"
        }
    }
    axios.get(url,config).then(res => {
        const nbOfTeams = res.data.count
        const respteams = res.data.teams
        const count = res.data.count
        setTeams(respteams)
        setTeamsNb(count)
        console.log('respteams',respteams)
        console.log('nbOfTeams',nbOfTeams)
    })
}
