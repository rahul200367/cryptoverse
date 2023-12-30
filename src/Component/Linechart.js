import React from 'react'
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
export default function Linechart({hisdata,cryptoDetails}) {
  const coinName = cryptoDetails?.name;
  const coincurprice = cryptoDetails?.price;
  const coinPrice =[];
  const coinTimestamp =[];
  for(let i = 0;i<hisdata?.data?.history?.length;i+=1){
coinPrice.push(hisdata?.data?.history[i].price)
coinTimestamp.push(new Date(hisdata?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data ={
    labels:coinTimestamp,
datasets:[
    {
      label:'Price',
      data:coinPrice,
      fill:false,
      background:'#0071',
      borderColor:'#0071bd'
  }
]
  }
  const options ={
    scales:{
      YAxes:[
        {
          ticks:{
            beginAtZero:true,
          }
        }
      ]
    }

  }
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
  return (
    <div>
      <div className="chart-haedr d-flex justify-content-between">
        <p className='chat-title text-primary fs-2'>{coinName} Price Chart</p>
        <div className="price-container d-flex fs-4" style={{gap:'3em',fontWeight:'bolder'}}>
        <p>{hisdata?.data?.change}%</p>
        <p>{coinName} Price: ${coincurprice}</p>
        </div>
      </div>
      <Line data={data} options={options}/>
    </div>
  )
}
