import Navigation from "../components/molecules/Navigation";
import Patient from "../components/molecules/Patient";
import Chart from "../components/molecules/Chart";
import DiagnosticList from "../components/molecules/DiagnosticList";
import UserProfile from "../components/molecules/UserProfile";
import LabResult from "../components/molecules/LabResult";

const Dashboard = () => {

  return ( 

        <main className="px-[18px] bg-[#F6F7F8]">
            <Navigation />
                <section className="py-[32px]">
                    <div className="flex justify-between gap-[33px]">
                        <Patient />
                    <div className="w-[766px] space-y-[32px]">
                        <Chart />
                        <DiagnosticList />
                    </div>
                    <div className="w-[367px] space-y-[32px]">
                        <UserProfile />
                        <LabResult />
                    </div>
                    </div>
        
                </section>
            </main> 
  )

} 
export default Dashboard
