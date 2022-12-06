import "chart.js/auto";
import { Pie } from "react-chartjs-2";

function SecondPie() {
  const dataPie2 = {
    labels: ["Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        borderWidth: 1,
        backgroundColor: ["#1F618D", "#F1C40F"],
      },
    ],
  };

  return <Pie data={dataPie2} className="bg-light"/>;
}

export default SecondPie