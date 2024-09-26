import { CiHeart } from "react-icons/ci";


function Trip(){
return(
    <div className="trip">
        <h2>Explore Rwanda</h2>
        <div className="explore">
            <div className="content">
                <div className="name">
                    <small>Akagera National Park</small>
                </div>
                <div className="like">
                    <CiHeart size={22} cursor={'pointer'}/>
                </div>
                <img src="./akagera.jpeg" alt=""  />
            

            </div>
            <div className="content">
            <div className="name">
                    <small>Virunga National Park</small>
                </div>
                <div className="like">
                    <CiHeart size={22} cursor={'pointer'}/>
                </div>
            <img src="./virunga.jpeg" alt=""  />
            </div>
            <div className="content">
            <div className="name">
                    <small>Nyungwe National Park</small>
                </div>
                <div className="like">
                    <CiHeart size={22} cursor={'pointer'}/>
                </div>
            <img src="./nyungwe.jpeg" alt=""  />
            </div>
            <div className="content">
            <div className="name">
                    <small>Lake Kivu</small>
                </div>
                <div className="like">
                    <CiHeart size={22} cursor={'pointer'}/>
                </div>
            <img src="./kivu.jpeg" alt=""  />
            </div>
        </div>
    </div>
)
}


export default Trip