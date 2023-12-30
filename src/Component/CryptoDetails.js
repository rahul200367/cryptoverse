import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import axios from 'axios';
import './Styles/Cryptocur.css'
import Linechart from './Linechart';
function CryptoDetails() {
  const {coinId} = useParams();
  const [time,settime] = useState('7d');
  const timeperiod = [ '1h', '3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']; 
    const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}`
    const hst = `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`
  const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: time,
    },
    headers: {
      'X-RapidAPI-Key': '0def025514msh08a6bd1c4a7e7dep1e1940jsn6588be3d8c55',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  let [data, setData] = useState([]);
  let [hisdata,sethistdata] = useState([]);
  useEffect(()=>{
    const response = axios.get(url,options)
    .then((response)=>{
      setData(response.data);
    })
    const hisres = axios.get(hst,options)
    .then((hisres)=> {
      sethistdata(hisres.data);
    })
  },[time])
  const cryptoDetails = data?.data?.coin;
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon:<i class="fa-solid fa-dollar-sign"></i> },
    { title: 'Rank', value: cryptoDetails?.rank, icon:<i class="fa-solid fa-hashtag"></i> },
    { title: '24h Volume', value: `$ ${(cryptoDetails?.['24hVolume'])}`, icon:<i class="fa-solid fa-bolt"></i>},
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon:<i class="fa-solid fa-shop"></i>},
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`, icon:<i class="fa-solid fa-trophy"></i> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon:<i class="fa-solid fa-chart-line"></i> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <i class="fa-brands fa-stack-exchange"></i> },
    { title: 'Aprroved Supply', value: cryptoDetails?.approvedSupply ? <i class="fa-regular fa-thumbs-up"></i> : <i class="fa-solid fa-circle-xmark"></i>, icon: <i class="fa-regular fa-thumbs-up"></i> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <i class="fa-regular fa-circle"></i> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply?.circulating)}`, icon: <i class="fa-regular fa-circle"></i> },
  ];
  return (
    <div className='container coin-detail'>
    <div className="container heading">
    <h3 className='text-primary text-center'>{cryptoDetails?.name}(<img src={cryptoDetails?.iconUrl} alt='iconUrl' style={{width:'3em'}}></img>)Price</h3>
    <p className='text-center text-secondary'>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
    </div>
    <div className="container">
    <select defaultValue="7d" className='form-select w-25' onChange={(e)=>settime(e.target.value)} value={time}>
        {timeperiod.map((item)=>{
          return(
          <option key={item} value={item}>{item}</option>
          )
          })}
      </select>
    </div>
    <Linechart hisdata={hisdata} cryptoDetails={cryptoDetails}/>
    <div className="container box-xonatiner">
    <div className="conatiner cointgf">
      <div className="p-2">
        <h3 className="text-center">{cryptoDetails?.name} Value Statistics</h3>
        <p className='text-center'>An overviwe showing the stats of {cryptoDetails?.name}</p>
      </div>
      <div className="container stats-container">
{
  stats.map((item,index)=>{
    return(
      <div key={index}>
      <div className="coin-stats d-flex">
        <div className="coin-stats-name d-flex" style={{gap:'1em'}}>
          <p>{item.icon}</p>
          <p>{item.title}</p>
        </div>
        <div className="coin-stats-value">
          <p>{item.value}</p>
        </div>
      </div>
      <hr />
      </div>
    )
  })
}
      </div>
    </div>
      <div className="container cointgf">
      <div className="p-3">
        <h3 className='text-center'>Other Statistics</h3>
        <p className='text-center'>An overview showing the stats of all cryptocurriency</p>
      </div>
      <div className="container stats-container">
{
  genericStats.map((item,index)=>{
    return(
      <div key={index}>
      <div className="coin-stats d-flex">
        <div className="coin-stats-name d-flex" style={{gap:'1em'}}>
          <p>{item.icon}</p>
          <p>{item.title}</p>
        </div>
        <div className="coin-stats-value">
          <p>{item.value}</p>
        </div>
      </div>
      <hr />
      </div>
    )
  })
}
      </div>
      </div>
      
    </div>
    <div className="coin-desc-link d-flex p-3">
      <div className="coin-desc">
        <h3 className='text-primary'>What is {cryptoDetails?.name}</h3>
        <h5>{HTMLReactParser(`${cryptoDetails?.description}`)}</h5>
      </div>
      <div className="coin-link p-3 w-75">
        <h3 className='text-primary'>{cryptoDetails?.name} Links
        </h3>
      {
        cryptoDetails?.links.map((link,index)=>{
          return(
            <div className="coin-link" key={link.name}>
            <div className="d-flex justify-content-between">
            <h4>{link.type}</h4>
            <h5><a href={link.url} target='_blank' rel='noreferrer' className='nav-link text-primary'>{link.name}</a></h5>
            </div>
            <hr />
            </div>
          )
        })
      }
      </div>
    </div>
    </div>
  )
}

export default CryptoDetails
