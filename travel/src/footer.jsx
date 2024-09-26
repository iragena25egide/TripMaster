import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="left-cont">
                        <img src="./airplane.png" width={70} height={70} alt="" />
                        <br /><br /><br />
                        <div className="list">
                        <CiLocationOn size={22}/>
                        <small>Kigali,Rwanda</small>

                        </div>
                        <br />
                        <div className="list">
                        <IoCallOutline size={22}/>
                        <small>0798555420</small>

                        </div>
                        <br />
                        <div className="list">
                        <HiOutlineMail size={22}/>
                        <small>iragenaegide205@gmail.com</small>

                        </div>
                        
                    </div>
                    <div className="center-cont">
                        <h2>Parteners</h2>
                        <br /><br /><br />
                        <small>Visit Rwanda</small>
                        <br />
                        <small>Tap&Go</small>
                        <br />
                        <small>Norsken</small>
                        <br />
                        <small>Anta INC</small>
                        <br />
                        <small>1:55 AM</small>
                    </div>
                    <div className="right-cont">
                        <small>Follow Us</small>
                        <div className="media">
                            <FiInstagram size={30} cursor={'pointer'}/>
                            <FaXTwitter size={30} cursor={'pointer'}/>
                            <FaTiktok size={30} cursor={'pointer'}/>
                            <FaFacebook size={30} cursor={'pointer'}/>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <small>Copyright &copy; 2024 TripMaster.All right reserved.</small>
                </div>
            </div>
        </div>
    )
}

export default Footer