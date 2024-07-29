import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const DiagnosticList = () => {
    const { currentUser } = useContext(UserContext);
    const diagnosticList = currentUser.diagnostic_list || [];

    return(
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
    )
}

export default DiagnosticList;