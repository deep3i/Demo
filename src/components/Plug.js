
import React from "react";
import { useContext } from "react";
import letterContext from "../context/letterContext";

export default function Plug() {
    
    const Lettercontext = useContext(letterContext);
    const { Update_Electrical_Installation, eleinstallation } = Lettercontext

    return (
        <>
            <div className="plug">

            <div className="card-option">
                    <h3>Electrical installation</h3>

                    <div className="btn_row">
                        <button onClick={()=>Update_Electrical_Installation("walloutplug")} className={`nbtn ${eleinstallation.walloutplug === true ? 'act' : ''}`}>
                            <span>Wall Outlet Plug</span>
                        </button>

                        <button onClick={()=>Update_Electrical_Installation("hardwire")} className={`nbtn ${eleinstallation.hardwire === true ? 'act' : ''}`}>
                            <span>Hard Wire</span>
                        </button>

                    </div>
                </div>
                
            </div>
        </>
    )
}