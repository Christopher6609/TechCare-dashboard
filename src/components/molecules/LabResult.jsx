import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LabResult = () => {
    return(
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
    )
}

export default LabResult;