import React, { useEffect, useRef, useState } from 'react'
import millify from 'millify';
import './Styles/Cryptocur.css'
import {Link} from 'react-router-dom'
function Cryptocurriencies({datacoin,count,style}) {
  const [data,setdata] = useState([]);
  const [search ,setsearch] = useState('');
  const ref = useRef('')
  useEffect(()=>{
    if(ref.current)  ref.current.focus();
   const b = datacoin?.data?.data?.coins.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()))
   console.log(b);
   setdata(b);
  },[search,datacoin]);
  return (
    <>
    <div className="container">
    {count> 10 && 
    <div className="container d-flex justify-content-around">
    <div><h3>Crypto Currency</h3></div>
    <div className="text-center m-3"> Search: <input type="text" ref={ref} value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search CryptoCurrency'/></div>
    </div>
    }
    <div className='d-flex flex-wrap justify-content-around' style={style}>
      {
        data  && data.map((item, index) => {
          if(index < count){
          return(
        <div key ={index}>
        <Link to={`/Crypto/${item.uuid}`} className='nav-link'>
        <div className="card shadow" style={{width:'15em'}}>
          <div className="card-body">
            <div className="d-flex justify-content-around align-items-center">
            <div className="title">{index+1}.{item.name}</div>
            <div className="img"><img src={item.iconUrl} alt="imagecrypt" style={{width:'2em'}}/></div></div>
            <hr />
            <p>Price: {millify(item.price)}$</p>
            <p>Market Cap: {millify(item.marketCap)}</p>
            <p>Daily Change: {millify(item.change)}%</p>
          </div>
        </div>
        </Link>      
        </div>
          )
          }
          else return false;
        })
      }
    </div>
    </div>
    </>
  )
}

export default Cryptocurriencies
