import axios from 'axios'

export default function nominatimFetch(adresse) {
    const url = 'https://nominatim.openstreetmap.org/?q='+adresse+'&format=json&limit=1'
    const config = {
        headers: {
            "content-type": "application/json"
        }
    }
    axios.get(url,config).then(res => {
        res
        console.log('response',res)
    })
}
