import React, { useEffect, useState } from 'react'
import millify from 'millify';
import './Styles/exchanges.css'
import axios from 'axios';
function Exchange() {
  const [data, setData] =  useState([]);
  const [noofdata , setnoofdata]=useState('20');
  const nd =['10', '20', '50', '100'];
  const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges'
  const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: noofdata,
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'X-RapidAPI-Key': '0def025514msh08a6bd1c4a7e7dep1e1940jsn6588be3d8c55',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
useEffect(()=>{
  const fetchData = async () => {
      try {
        let response = await axios.get(url,options);
        return response?.data;
      }
      catch(error){
        return error;
      }
    }
    fetchData().then((data)=>{setData(data?.data?.exchanges)})
},[data,noofdata])
console.log(data);
if(!data) return(
<>
  <img src="https://media0.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif?cid=ecf05e47kxvvmg039vzxddp7181j1hkzjmfk80stchlx5ka9&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="loading" />
  <h2>Loading....</h2>
</>
)
else
  return (
    <>
    <div className='d-flex justify-content-center  mt-5'>
      <select  className='form-select w-25' onChange={(e)=>setnoofdata(e.target.value)} value={noofdata} placeholder='select data you want'>
      {
        nd.map((item)=>{
          return(
            <option key={item} value={item}>
            {item}
            </option>
          )
        })
      }
      </select>
    </div>
    <div style={{padding:'2% 15%'}}>
    <table className='table'>
      <thead>
        <tr>
        <th>#</th>
         <th  scope='col'>Exchanges</th>
         <th  scope='col'>2h Trade Volume</th>
         <th  scope='col'>Markets</th>
         <th  scope='col'>Price</th>
        </tr>
      </thead>
      <tbody>
      {
        data && data?.map((item)=>{
          const vol = item['24hVolume'];
          return(
            <tr key={item.uuid} >
            <th>{item.rank}</th>
             <th><div className="d-flex justify-content-start" style={{alignItems:'start',gap:'1em'}}>
              <img src={`${item.iconUrl}`} alt={item.name} style={{width:'2em'}}/>
              <p>{item.name}</p>
             </div></th>
             <th>${millify(vol)}</th>
             <th>{item.numberOfMarkets}</th>
             <th>${millify(`${item.price}`)}</th>
            </tr>
          )
        })
      }
       </tbody>
    </table>
    </div>
    </>
  )
}

export default Exchange
