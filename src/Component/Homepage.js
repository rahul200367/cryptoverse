import React  from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import News from './News'
import Cryptocurriencies from './Cryptocurriencies';
function Homepage({datacoin,newsdata}) {
  const globalstats = datacoin.data?.data?.stats;
  return (
    <>
    <div className='container'>
    <h3>Global Crypto Stats</h3>
    <div className="d-flex justify-content-around">
        <div>Total Crypto cUrrency<div>
        {millify(globalstats?.totalCoins)}
        </div></div>
        <div>Total exchange
        <div>
{millify(globalstats?.totalExchanges)}
        </div></div>
    </div>
    <div className="d-flex justify-content-around">
        <div>Total Markets Cap
        <div>
{millify(globalstats?.totalMarketCap)}
        </div></div>
        <div>Total 24hvolume
        <div>
{millify(globalstats?.total24hVolume)}
        </div></div>
    </div>
    <div className="d-flex justify-content-around">
        <div>Total markets
        <div>
{millify(globalstats?.totalMarkets)}
        </div></div>
    </div>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Top 5 Crypto Currency</h3>
       <Link className='nav-link' to='/cryptocurrencies'>
       <span className='text-primary fs-5'> Show more</span>
       </Link>
      </div>
      <Cryptocurriencies datacoin={datacoin} count = {5} style={{gap:'.5em'}}/>
    </div>
    <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">
        <h3>Top 6 News of Crypto</h3>
        <Link to='/news' className='nav-link'>
                <span className='text-primary fs-5'>Show more</span>
        </Link>
        </div>
        <News newsdata={newsdata} count ={6} style={{gap:'5em'}}/>
    </div>
    </div>
    </>
  )
}

export default Homepage
