export const exerciseOptions =    {
  
        method: 'GET',
      
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '98a9bbf7d7msh8a1fd81535647f0p18e9e8jsn93ccdecc8a00'
          
        }
      };





    //   const options = {
    //     method: 'GET',
    //     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    //     headers: {
    //       'X-RapidAPI-Key': '98a9bbf7d7msh8a1fd81535647f0p18e9e8jsn93ccdecc8a00',
    //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //     }
    //   };

     export const youtubeOptions=  {
      method: 'GET',
  
      headers: {
        'X-RapidAPI-Key': '98a9bbf7d7msh8a1fd81535647f0p18e9e8jsn93ccdecc8a00',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };





export const fetchData = async (url, options) => {

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}