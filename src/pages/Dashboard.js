import CardContainer from "D:/Colleg_project/tradexr/src/components/CardContainer";
import ChartContainer from "D:/Colleg_project/tradexr/src/components/ChartContainer";
import FrequencySelector from "D:/Colleg_project/tradexr/src/components/FrequencySelector";
import MarketList from "D:/Colleg_project/tradexr/src/components/MarketList";
import TotalCard from "D:/Colleg_project/tradexr/src/components/TotalCard";
import Header from "./Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="bg-black p-4 w-full">
  
      <Header />
      <div className="bg-bggray rounded-lg w-full  p-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="text-xl text-black font-semibold">Overview</div>
          <FrequencySelector />
        </div>
        <div className="flex flex-row w-full justify-between gap-x-4 mt-4 ">
          <CardContainer />
          <TotalCard
            title="Total Holding"
            value="₹ 8,52,144.00"
            return_value="+1.54"
            return_percentage="0.89%"
          />
        </div>
        <div className="flex flex-row w-full justify-between gap-x-4 mt-4">
          <ChartContainer />
          <MarketList />
        </div>
      </div>
    
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
