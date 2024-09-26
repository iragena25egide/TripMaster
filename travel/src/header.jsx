import { TbWorldPin } from "react-icons/tb";
import React from "react";

function Header(){
    return(
        <div>
            <div className="header-container">
                <div className="header-logo">
                    <img src="./airplane.png" width={40} height={40} />
                    <h4>Tripmaster</h4>
                </div>
                <div className="header-option">
                    <small>Discover</small>
                    <small>Trips</small>
                    <small>Reviews</small>
                    <small>Master</small>
                    <small>More</small>
                </div>
                <div className="header-menu">
                    <div className="country">
                        <div className="code">
                        <TbWorldPin  size={20} cursor={'pointer'}/>
                        </div>
                        <div className="currency">
                            RWF
                        </div>
                    </div>
                    <div className="sign">
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header