import { faCalendar, faPhone, faShield, faVenus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const UserProfile = () => {

    const {currentUser} = useContext(UserContext);

    return(
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
    )
}

export default UserProfile;