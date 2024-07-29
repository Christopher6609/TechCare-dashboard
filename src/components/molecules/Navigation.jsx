import { faCalendar, faContactCard, faCreditCard, faEllipsisV, faGear, faHome, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = () => {
    return(
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
    )
}

export default Navigation;