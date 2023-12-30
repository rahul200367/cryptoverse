import React from 'react'
import moment from 'moment'
function News({newsdata,count,style}) {
  const demoim = 'https://academy-public.coinmarketcap.com/srd-optimized-uploads/bbfa9a5efea941339b90a0885a80c32c.jpeg'
  const data = newsdata?.data;
  console.log(data);
  return (
    <div className="container">
    <div className='d-flex flex-wrap' style={style}>
    {
      data?.map((item,i)=>{
        if(i < count){
          return(
            <div key={i}>
            <div className="card shadow" style={{width:'20em'}}>
              <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <a href={item.url} className='nav-link'>{item.title}</a>
                <img src={item?.thumbnail || demoim} alt={item.name} style={{width:'10em'}} />
              </div>
              <p className="card-text text-muted mt-3">{item.description < 100 ? item.description : `${item.description.substring(0,100)}...`}</p>
              <div className="container">
                <p className='text-primary'>{moment(item.createdAt).startOf('ss').fromNow()}</p>
              </div>
              </div>
            </div>
            </div>
          )
        }
        else{
          return false;
        }
      })
    }
    </div>
    </div>
  )
}

export default News
