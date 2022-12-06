
import 'chart.js/auto'
import {Chart} from "react-chartjs-2"
function CharT (){

    const dataChart = {
        labels: ['December','January','February','March','April','May','June'],
        datasets: [{
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor:'#CB4335',
          borderColor: "rgba(20,120,192,1)",
          data: [40, 19, 3, 5, 2, 3,100],
       
        }],
        
      };


return (
    <Chart data={dataChart} className="bg-light"/>
)


}

export default  CharT