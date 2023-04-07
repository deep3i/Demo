import React, { useContext } from "react";
import letterContext from "../context/letterContext";

export default function Placement() {
    const context = useContext(letterContext);
    const { Update_Placement, placement } = context;
    return (
        <>
            <div className="placement">
                <div className="card-option">
                    <h3>Placement</h3>

                    <div className="btn_row">
                        <button onClick={()=>Update_Placement("indoor")} className={`nbtn ${placement.indoor === true ? 'act' : ''}`}>
                            <span>Indoor</span>
                        </button>

                        <button onClick={()=>Update_Placement("outdoor")} className={`nbtn ${placement.outdoor === true ? 'act' : ''}`}>
                            <span>Outdoor</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}