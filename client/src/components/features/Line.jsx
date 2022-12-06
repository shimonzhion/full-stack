import 'chart.js/auto'
import { useContext } from 'react';
import {Line} from "react-chartjs-2"
import { salesContext } from '../../contexts/sales-context';


function LineChart () {
    const {sales} = useContext (salesContext)
    const salesArray = [ ]
    sales?.map(item=>{
        salesArray.push(item.profits)
    })
    console.log(salesArray);
  const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug"],
        datasets: [
          {
            label: "Sale Items",
            data: salesArray,
            fill: true,
            backgroundColor: "rgba(20,0,0,0.5)",
            borderColor: "rgba(20,120,192,1)"
          }
        ]
      };
    return(
        <Line data={data} className="bg-light"/>
    )
}

export default LineChart