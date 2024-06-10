/* eslint-disable react/prop-types */
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PatientCard = ({name,sex, age,img }) => {
  return (
    <>
      <div className="flex justify-between pt-[35px]">
                        <div className="flex gap-[8px]">
                            <div className="w-[44px] h-[44px]">
                                <img className="object-contain w-full h-full" src={img} />
                            </div>
                            <div className="font-[manrope]">
                                <h3 className="text-[14px] font-bold">
                                {name}
                                </h3>
                                <p className="text-[#707070] font-normal">{sex}, {age}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[8px] px-[6px]">
                         <FontAwesomeIcon icon={faEllipsisH} />
            </div>
                    
        </div>
    </>
  )
}

export default PatientCard
