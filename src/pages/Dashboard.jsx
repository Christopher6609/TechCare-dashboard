
import { Chart as ChartJS, LineElement, CategoryScale, PointElement, LinearScale, BarElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
import { faCalendar, faCaretDown, faCaretUp, faCircle, faContactCard, faCreditCard, faDownload, faEllipsisV, faGear, faHome, faMessage, faPhone, faSearch, faShield, faVenus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PatientCard from "../components/molecules/PatientCard";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { ChartContext } from "../context/chartContext";

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Tooltip);



export default function Dashboard(){

    const {users,currentUser} = useContext(UserContext); 
    const { chartData, options } = useContext(ChartContext)   
    const diagnosticList = currentUser.diagnostic_list || [];
  

  return ( 

    <>
                <main className="px-[18px] bg-[#F6F7F8]">
                <nav className="h-[72px] w-full rounded-[70px] opacity-[1px] bg-[#FFF] px-[32px] py-[12px] flex items-center justify-between">
                    <div className="w-[211px] h-[48px]">
                        <img className="object-contain w-full h-full" src={`/img/TestLogo.png`} alt="logo"/>
                    </div>
                    <div className="py-[23px]">
                        <ul className="font-[manrope] text-[14px] font-bold flex gap-[40px]">
                            <li className=" px-[16px] py-[11px] rounded-[41px]">
                                <a href="#" className=""><FontAwesomeIcon icon={faHome} className="w-[16px] h-[17px] px-[8px]" />Overview</a>
                            </li>
                            <li className="bg-[#01F0D0] px-[16px] py-[11px] rounded-[41px]">
                                {/* <a href="#" className=""><img src={`/img/group_FILL0_wght300_GRAD0_opsz24@2x.png`}  className="w-[16px]"/>Patients</a> */}
                                <a href="#" className=""><FontAwesomeIcon icon={faContactCard} className="w-[16px] h-[17px] px-[8px]" />Patients</a>
                            </li>
                            <li className=" px-[16px] py-[11px] rounded-[41px]">
                                <a href="#" className=""><FontAwesomeIcon icon={faCalendar} className="w-[16px] h-[17px] px-[8px]" />Schedule</a>
                            </li>
                            <li className=" px-[16px] py-[11px] rounded-[41px]">
                                <a href="#" className=""><FontAwesomeIcon icon={faMessage} className="w-[16px] h-[17px] px-[8px]" />Message</a>
                            </li>
                            <li className=" px-[16px] py-[11px] rounded-[41px]">
                                <a href="#" className=""><FontAwesomeIcon icon={faCreditCard} className="w-[16px] h-[17px] px-[8px]" />Transaction</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex gap-[8px]">
                            <div className="w-[44px] h-[44px]">
                                <img className="object-contain w-full h-full" src={`/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png`} />
                            </div>
                            <div className="font-[manrope]">
                                <h3 className="text-[14px] font-bold">
                                Dr. Jose Simmons
                                </h3>
                                <p className="text-[#707070] font-normal">General Practitioner</p>
                            </div>
                            <div className="flex items-center gap-[8px] px-[6px]">
                                <FontAwesomeIcon icon={faGear} />
                                 <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="py-[32px]">
                    <div className="flex justify-between gap-[33px]">
                        <div className="px-[20px] py-[20px] w-[367px] h-[1054px] overflow-scroll bg-[#FFFFFF] rounded-[16px]">
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-[#072635] text-[24px] font-[manrope] font-bold">Patients</h3>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div>
                                {Object.values(users).map((patient)=> {
                                    const {name, gender, age, profile_picture} = patient;
                                    return (
                                        <PatientCard key={name} name={name} sex={gender} age={age} img={profile_picture}/>
                                    )
                                })}
                            </div>
                          
                        </div>
        
                        <div className="w-[766px] space-y-[32px]">
                                <div className="px-[20px] py-[20px] w-full bg-[#FFFFFF] rounded-[16px] h-fit">
                                    <div className="flex  items-center w-full">
                                        <h3 className="text-[#072635] text-[24px] font-[manrope] font-bold">Diagnosis History</h3>
                                    </div>
                                    <div className="flex  items-center w-full my-[20px] rounded-[12px] h-[298px] p-[16px] bg-[#F4F0FE] gap-[36px]">
                                        <div className="w-[450px] h-full">
                                        <div className="flex justify-between">
                                        <h2 className="text-[18px] font-bold">Blood Pressure</h2>
                                        <div><select className="bg-[#F4F0FE]">
                                            <option>Last 6 months</option>
                                        </select></div>
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
                                <div className="px-[20px] py-[20px] w-full bg-[#FFFFFF] rounded-[16px] h-[349px] space-y-[40px]">
                                    <div className="flex items-center w-full">
                                            <h3 className="text-[#072635] text-[24px] font-[manrope] font-bold">Diagnosis List</h3>
                                    </div>
                                    
                                  

                            

                                    <div>
                                        <table className="w-full">
                                            <thead className="bg-[#F6F7F8] rounded-[24px]">
                                                <tr className="text-left text-[14px] font-bold">
                                                    <th className="py-[6px]">Problem/Diagnosis</th>
                                                    <th className="py-[6px]">Description</th>
                                                    <th className="py-[6px]">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-[14px] font-normal">
                                                {diagnosticList.map((item)=> {
                                                    const {name,description,status} = item;
                                                    return (
                                                        <tr key={name}>
                                                            <td className="py-[6px]">{name}</td>
                                                            <td className="py-[6px]">{description}</td>
                                                            <td className="py-[6px]">{status}</td>
                                                        </tr>
                                                    )
                                                })}
                                                
                                            </tbody>
                                        </table>
                                    </div>
        
                                </div>
                        </div>
        
                        <div className="w-[367px] space-y-[32px]">
                            
                                <div className="px-[20px] py-[20px] w-full  bg-[#FFFFFF] rounded-[16px] h-fit">
        
                                <div className="flex flex-col items-center justify-center gap-[24px]">
                                    <div className="w-[200px] h-[200px]">
                                        <img className="object-contain w-full h-full" src={currentUser.profile_picture} />
                                    </div>
                                    <div>
                                        <h2 className="text-[24px] font-[800]">{currentUser.name}</h2>
                                    </div>
                                </div>
                                <div className="py-[32px] space-y-[24px]">
                                    <div className="flex items-center gap-[16px]">
                                        <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-[50%] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCalendar} />
                                        </div>
                                        <div>
                                            <h3 className="text-[14px] capitalize font-normal">Date of Birth</h3>
                                            <p className="text-[14px] font-bold capitalize ">{currentUser.date_of_birth}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[16px]">
                                        <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-[50%] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faVenus} />
                                        </div>
                                        <div>
                                            <h3 className="text-[14px] capitalize font-normal">Gender</h3>
                                            <p className="text-[14px] font-bold capitalize ">{currentUser.gender}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[16px]">
                                        <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-[50%] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div>
                                            <h3 className="text-[14px] capitalize font-normal">Contact info</h3>
                                            <p className="text-[14px] font-bold capitalize ">{currentUser.phone_number}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[16px]">
                                        <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-[50%] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div>
                                            <h3 className="text-[14px] capitalize font-normal">Emergency Contacts</h3>
                                            <p className="text-[14px] font-bold capitalize ">{currentUser.emergency_contact}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[16px]">
                                        <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-[50%] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faShield} />
                                        </div>
                                        <div>
                                            <h3 className="text-[14px] capitalize font-normal">Insurance Provider </h3>
                                            <p className="text-[14px] font-bold capitalize ">{currentUser.insurance_type}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="w-[220px] h-[41px] bg-[#01F0D0] text-center py-[11px] text-[14px] font-bold rounded-[41px] text-[#072635]">Show All Information</button>
                                </div> 
                                
                                </div>
                            <div className="px-[20px] py-[20px] w-full  bg-[#FFFFFF] rounded-[16px] h-fit">
                            <div className="flex items-center w-full">
                                            <h3 className="text-[#072635] text-[24px] font-[manrope] font-bold">Lab Results</h3>
                                    </div>
                                    <div>
                                        <div className="flex justify-between py-[11px] px-[16px]">
                                            <h4 className="text-[13px] font-normal">Blood Tests</h4>
                                           <a href="#"> <FontAwesomeIcon icon={faDownload} /></a> 
                                        </div>
                                        <div className="flex justify-between py-[11px] px-[16px]">
                                            <h4 className="text-[13px] font-normal">CT Scans</h4>
                                            <FontAwesomeIcon icon={faDownload} />
                                        </div>
                                        <div className="flex justify-between py-[11px] px-[16px]">
                                            <h4 className="text-[13px] font-normal">Radiology Reports</h4>
                                            <FontAwesomeIcon icon={faDownload} />
                                        </div>
                                        <div className="flex justify-between py-[11px] px-[16px]">
                                            <h4 className="text-[13px] font-normal">X-rays</h4>
                                            <FontAwesomeIcon icon={faDownload} />
                                        </div>
                                        <div className="flex justify-between py-[11px] px-[16px]">
                                            <h4 className="text-[13px] font-normal">Urine Test</h4>
                                            <FontAwesomeIcon icon={faDownload} />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
        
                </section>
            </main>
    
    </>
    
    
  )
}

