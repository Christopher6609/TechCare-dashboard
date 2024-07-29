import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import PatientCard from "./PatientCard";
import { faSearch, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Patient = () => {
    const {users} = useContext(UserContext); 
    return(
        <div className="px-[20px] py-[20px] w-[367px] h-[1054px] overflow-scroll bg-[#FFFFFF] rounded-[16px]">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-[#0b0e0f] text-[24px] font-[manrope] font-bold">Patients</h3>
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
    )
}

export default Patient;