import { CiHome } from "react-icons/ci";
import { IoIosBed } from "react-icons/io";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdOutlineFlight } from "react-icons/md";
import { MdCarRental } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function Introduction(){
return(
    <div>
        <div className="introduction-container">
            <h1>Where to ?</h1>
            <div className="intro-menu">
            <div className="item active">
                <CiHome />
                <small>Search All</small>
            </div>
            <div className="item">
                <IoIosBed />
                <small>Hotels</small>
            </div>
            <div className="item">
                <IoRestaurantSharp />
                <small>Restraunt</small>
            </div>
            <div className="item">
            <MdOutlineFlight />
            <small>Flight</small>
            </div>
            <div className="item">
            <MdCarRental />
            <small>Rental</small>
            </div>
            </div>
            <div className="search">
                <CiSearch id="go" size={20} cursor={'pointer'}/>
                <input type="text" placeholder="Place to go,Things to do,hotel..." />
                <button>Search</button>
            </div>
        </div>
    </div>
)
}


export default Introduction