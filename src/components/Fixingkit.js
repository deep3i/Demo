import letterContext from "../context/letterContext";
import { useContext } from "react";

export default function FixingKit() {
    
    const context = useContext(letterContext);
    const { neonselect, fixingkit, Update_Fixingkit } = context;

    return (
        <>
            <div className="fixing-kit">

                <div className="card-option">
                    <h3>Fixing kit</h3>

                    <div className="btn_row">
                        <button onClick={()=>Update_Fixingkit("wallmounted")} className={`nbtn${fixingkit.wallmounted === true ? ' act' : ''}`}>
                            <span>Wall mounted</span>
                        </button>

                      { neonselect === true ? "" :  <button onClick={()=>Update_Fixingkit("hangingchain")} className={`nbtn${fixingkit.hangingchain === true ? ' act' : ''}`}>
                            <span>Hanging Chain</span>
                        </button>}

                        <button onClick={()=>Update_Fixingkit("freestanding")} className={`nbtn${fixingkit.freestanding === true ? ' act' : ''}`}>
                            <span>Free Standing</span>
                        </button>

                    </div>
                </div>

            </div>
        </>
    )
}