import axios from 'axios';
const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
const options = {
  headers: {
    'X-RapidAPI-Key': '0def025514msh08a6bd1c4a7e7dep1e1940jsn6588be3d8c55',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  }
};
export const getnews = async()=>{
    try {
        const response = await axios.request(url,options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
