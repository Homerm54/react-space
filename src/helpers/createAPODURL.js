import stringifyDate from './stringifyDate';

// VZst7lpwjTH73oNv6qjXywPqMpJ7himxgVpLgceV API KEY 
// Using second email, the one with the t.
// 
// Domains:
// 
// Nasa APOD: https://api.nasa.gov/planetary/apod
// With Date:
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=YYYY-MM-DD



// For secret keys, never store then on Front End Code.
// Using env variables will write the API_KEY to the bundle anyway
// so I decided to declare it here.
const API_KEY = 'VZst7lpwjTH73oNv6qjXywPqMpJ7himxgVpLgceV';


export default function createAPODURL(date, hd = false){

  if(!date) throw new Error('A Date Object must be provided');

  const stringDate = stringifyDate(date);

  return (
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${stringDate}&hd=${hd? 'true': 'false'}`
    );
}


