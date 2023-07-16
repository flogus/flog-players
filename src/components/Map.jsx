import { useEffect } from 'react';
import './map.css'
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import nominatimFetch from './nominatimFetch';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
// const position = [47.2, -1.55]
export default function Map({mapid,text,position,adresse, zoom=10}) {
  nominatimFetch(adresse)
  console.log('mapid:',Object.values(mapid)[0].id)
  console.log('text:',text)
  console.log('position:',position)
  let theMap = 'map'+Object.values(mapid)[0].id
  useEffect(() => {
    var container = L.DomUtil.get(theMap);
    if (container != null) {
      container._leaflet_id = null;
    }
    var map = L.map(theMap).setView(position, zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
    {
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 1,
      maxZoom: 20
    }
    ).addTo(map);
    
    if(mapid === 'globalmap'){
      L.Marker.prototype.options.icon = DefaultIcon;
      var marker = L.marker(position).addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

      const villes = {
          "Paris": { "lat": 48.852969, "lon": 2.349903 },
        "Brest": { "lat": 48.383, "lon": -4.500 },
        "Quimper": { "lat": 48.000, "lon": -4.100 },
        "Bayonne": { "lat": 43.500, "lon": -1.467 }
      };

      for(const [key,value] of Object.entries(villes)){
        console.log(`${key}: ${value.lat} ${value.lon}`);
      }
      // for (city in villes) {
      //   // let marker = L.marker([villes[city].lat, villes[city].lon]).addTo(map);
      // }    
    }
  },[]); 
  return(
    <div id={theMap} className='map' style={{width:'100%',height:'100%'}}>map</div>
  )
}
