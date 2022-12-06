import "./Dashboard.css";


import LineChart from "../../features/Line";
import PieChart from "../../features/Pie";
import SecondPie from "../../features/SecondPie"
import Chart from "../../features/Chart"



function Dashboard() {



  return (
    <div className="container" >
        <div className="row" style={{minHeight:'100%'}}>
          <div className="cole-sm-12 col-md-6 mb-5"  style={{height:'100%' ,with:'100%'}}><Chart /></div>
       <div className="col-sm-12 col-md-3"><PieChart/></div>
       <div className="col-sm-12 col-md-3"><SecondPie/></div>
        </div> 
        <div className="row">
     <div className="col-sm-12 col-md-7 "> <LineChart/></div>
     
    </div>
    </div>
  );
};

export default Dashboard;
