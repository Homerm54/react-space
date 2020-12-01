import { useState, useEffect, useRef } from 'react';



/**
 *  Example:
 *  URL: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-12-30
 * 
 * 
 * Return:
 * 
 * {
 * 
 *  "copyright":"Stanislav Volskiy",
 *  "date":"2019-12-30",
 *  "explanation":"...",
 *  "hdurl":"https://apod.nasa.gov/apod/image/1912/M20_volskiy.jpg"
 *  "media_type":"image",
 *  "service_version":"v1",
 *  "title":"Messier 20 and 21",
 *  "url":"https://apod.nasa.gov/apod/image/1912/M20_volskiy1024.jpg"
 * 
 * }
 * 
 * 
*/

/**
 * 
 * @param {string} url The API URL
 * @return {Object} {
  data: false,
  fetching: true,
  error: false,
}
 */
export default function useFetch(url) {

  const isMounted = useRef(true);
  const [fetchedData, setFetchedData] = useState({
    data: null,
    fetching: true,
    error: null,
  });

  if (!url) throw new Error('No URL was provided to useFetch hook.');


  useEffect(() => {
    // Avoid setState unmounted component error
    return () => { isMounted.current = false };
  }, []);


  useEffect(() => {

    
    setFetchedData({
      data: null,
      fetching: true,
      error: null,
    });
    

    fetch(url)
      .then(response => response.json())
      .then(data => {

        if (isMounted.current) {
          // TEST
          // if (data.code) throw {
          //   message: data.msg
          // }; // API related REMOVE THIS

          setFetchedData({
            data, // CHECK THIS
            fetching: false,
            error: null,
          });
        }
      })
      .catch(e => {
        setFetchedData(prevState => ({
          ...prevState,
          error: e,
          fetching: false,
        }))
      })

  }, [url]);


  return fetchedData;
}

