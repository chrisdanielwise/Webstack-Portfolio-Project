import { useState, useEffect } from "react";

const useFetch = ()=>{

  
  const [items, setItems]= useState([]);

useEffect(()=>{ 
  fetchData()
}, []);

const fetchData = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR RAPIDAPI-KEY',
      'X-RapidAPI-Host': 'YOUR RAPIDAPI-HOST NAME',
    },
  };

  fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
    .then((response) => response.json())
    .then((response) => {
      // Check if 'hits' property exists in the response
      if (!response.hits) {
        console.error('No "hits" property found in the API response:', response);
        return;
      }

      const data = [];
      response.hits.map(({ id, title, coverPhoto, purpose, price, location }) => {
        const state = location && location[0] ? location[0].name : '';
        data.push({
          id,
          title,
          purpose,
          price,
          url: coverPhoto.url,
          state,
        });
        return data;
      });

      setItems(data);
      console.log(data);
    })
    .catch((err) => console.error(err));
};
  
  return {items};
  }
  
  
  export default useFetch;
  
