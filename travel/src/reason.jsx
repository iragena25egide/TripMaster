import { RiApps2AddLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegFaceLaugh } from "react-icons/fa6";

function Reason(){
    return(
        <div className="why">
            <div className="left">
                <h2>Why you choose us</h2>
                <br /><br /><br />
                <small>
                I chose your services because of your strong reputation for excellence and commitment to quality. From the start, it was clear that you prioritize your clients' needs, offering personalized and innovative solutions that stand out from the rest. Your attention to detail, professionalism, and proven expertise in the field made my decision an easy one.
                </small>
            </div>
            <div className="right">
                <div className="box">
                    <RiApps2AddLine />

                    <h2>Easy Booking</h2>
                    <small>Its easy with us to book your trip</small>
                </div>
                <div className="box">
                <FaRegHandshake />
                <h2>Best Trip Guide</h2>
                <small>We Guide you in your trip.</small>
                </div>
                <div className="box">
                <RiFileList3Line />
                <h2>Lot of choice</h2>
                <small>We giveout many choice as you wish</small>
                </div>
                <div className="box">
                <FaRegFaceLaugh />
                <h2>Customer satisfication</h2>
                <small>Customer satisfy is our periorty</small>
                </div>
            </div>

        </div>
    )

}

export default Reason