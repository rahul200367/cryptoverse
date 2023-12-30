
import './App.css';
import CryptoDetails from './Component/CryptoDetails';
import Cryptocurriencies from './Component/Cryptocurriencies';
import Exchange from './Component/Exchange';
import Footer from './Component/Footer';
import Homepage from './Component/Homepage';
import News from './Component/News'
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom';
import {useState , useEffect} from 'react';
import {getnews} from './Component/Newsapi'
import axios from 'axios';
const url = 'https://coinranking1.p.rapidapi.com/coins';
const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      offset: '0',
      limit:'100',
    },
    headers: {
      'X-RapidAPI-Key': '0def025514msh08a6bd1c4a7e7dep1e1940jsn6588be3d8c55',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
function App() {
  const [datacoin,setdatacoin] = useState([]);
  const [newsdata, setNewsdata]=useState([]);
    useEffect( ()=>{
        const getplaces =  async ()=>{
            try{
                const response = await axios.get(url,options)
                return response;
            }
            catch(error){
            console.log(error)
            }
        }
        getplaces().then((res)=>{
            setdatacoin(res);
        })
        getnews().then((res)=>{
          setNewsdata(res);
        })
    },[]);
    console.log(newsdata);
  return (
   <>
   <div className='contn'>
   <div className='navigation'>
   <Navbar/>
   </div>
    <div className='main'>
      <div className="sidemain">
      <Routes>
        <Route path='/' element={<Homepage datacoin={datacoin} newsdata={newsdata}/>}/>
        <Route path ='/exchange' element={<Exchange/>}/>
        <Route path ='/cryptocurrencies' element={<Cryptocurriencies datacoin={datacoin}  count={1000} style={{gap:'2em'}}/>}/>
        <Route path ='/Crypto/:coinId' element={<CryptoDetails/>}/>
        <Route path ='/news' element={<News newsdata={newsdata} count ={1000} style={{gap:'3em'}}/>}/>
      </Routes>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
   </div>
   </>
  );
}

export default App;
