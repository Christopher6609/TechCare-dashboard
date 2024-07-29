import { Chart as ChartJS, LineElement, CategoryScale, PointElement, LinearScale, BarElement, Tooltip } from "chart.js";
ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Tooltip);

import { Line } from "react-chartjs-2";
import { faCaretDown, faCaretUp, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChartContext } from "../../context/chartContext";
import { useContext } from "react";


const Chart = () => {
    const { chartData, options } = useContext(ChartContext);  
    return(
            <div className="px-[20px] py-[20px] w-full bg-[#FFFFFF] rounded-[16px] h-fit">
                <div className="flex  items-center w-full">
                    <h3 className="text-[#072635] text-[24px] font-[manrope] font-bold">Diagnosis History</h3>
                </div>
                <div className="flex  items-center w-full my-[20px] rounded-[12px] h-[298px] p-[16px] bg-[#F4F0FE] gap-[36px]">
                    <div className="w-[450px] h-full">
                        <div className="flex justify-between">
                            <h2 className="text-[18px] font-bold">Blood Pressure</h2>
                            <div>
                                <select className="bg-[#F4F0FE]">
                                    <option>Last 6 months</option>
                                </select>
                            </div>
                         </div>
                            <Line data={chartData} options={options} />
                    </div>
                    <div className=" text-[#072635]">
                        <div className="space-y-[8px]">
                                <p className="text-[14px] font-bold font-[manrope]"><FontAwesomeIcon icon={faCircle} className="text-[#E66FD2] w-[14px] px-[4px] h-[14px] "/> Systolic</p>
                                <h3 className="text-[22px] font-bold uppercase">160</h3>
                                <p className="text-[14px] font-normal"><FontAwesomeIcon icon={faCaretUp} className="text-[#072635] w-[14px] px-[4px] h-[14px]"/> Highter than Average</p>
                            </div>
                        <div className="py-[16px]" >
                    <hr/>
                        </div>
                        <div className="space-y-[8px]">
                               <p className="text-[14px] font-bold font-[manrope]"><FontAwesomeIcon icon={faCircle} className="text-[#8C6FE6] w-[14px] px-[4px] h-[14px] "/> Diastolic</p>
                                <h3 className="text-[22px] font-bold uppercase">78</h3>
                                <p className="text-[14px] font-normal"><FontAwesomeIcon icon={faCaretDown} className="text-[#072635] w-[14px] px-[4px] h-[14px]"/> Lower than Average</p>
                         </div>
                    </div>
                </div>
                <div className="flex justify-between gap-[21px]">
                    <div className="w-[228px] h-[242px] bg-[#E0F3FA] rounded-[12px] p-[16px]">
                        <div className="pb-[16px]">
                            <div className="w-[96px] h-[96px]">
                                <img className="w-full h-full object-contain" src="/img/respiratory rate.png" />
                            </div>
                        </div>
                        <div className="text-[#072635]">
                            <p className="text-[16px] font-medium">Respiratory Rate</p>
                                <h2 className="text-[30px] font-[800]">20 bpm</h2>
                        </div>
                        <div className="pt-[17px]">
                            <p className="text-[14px]">Normal</p>
                        </div>
                        </div>
                        <div className="w-[228px] h-[242px] bg-[#FFE6E9] rounded-[12px] p-[16px]">
                            <div className="pb-[16px]">
                                <div className="w-[96px] h-[96px]">
                                    <img className="w-full h-full object-contain" src="/img/temperature.png" />
                                </div>
                            </div>
                        <div className="text-[#072635]">
                            <p className="text-[16px] font-medium">Temperature</p>
                                <h2 className="text-[30px] font-[800]">98.6&deg;F</h2>
                        </div>
                        <div className="pt-[17px]">
                            <p className="text-[14px]">Normal</p>
                        </div>
                        </div>
                        <div className="w-[228px] h-[242px] bg-[#FFE6F1] rounded-[12px] p-[16px]">
                        <div className="pb-[16px]">
                        <div className="w-[96px] h-[96px]">
                             <img className="w-full h-full object-contain" src="/img/HeartBPM.png" />
                        </div>
                        </div>
                        <div className="text-[#072635]">
                            <p className="text-[16px] font-medium">Heart Rate</p>
                                <h2 className="text-[30px] font-[800]">78 bpm</h2>
                        </div>
                        <div className="pt-[17px]">
                             <p className="text-[14px]"> <FontAwesomeIcon icon={faCaretDown} className="px-[8px]"/>Lower than average</p>
                        </div>
                        </div>
                         </div>
                    </div>
    )
    
}
export default Chart;
