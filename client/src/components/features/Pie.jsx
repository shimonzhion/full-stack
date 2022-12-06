import 'chart.js/auto'
import {Pie} from "react-chartjs-2"






function PieChart (){
    const dataPie = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],
        }]
      };
    return(
    <Pie data={dataPie} className="bg-light"/>
    )
}


export default  PieChart