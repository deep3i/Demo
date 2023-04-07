import signContext from "../context/signContext";
import React,{useContext} from "react";

export default function NonilluminateOption() {

    const context = useContext(signContext);
    const { Update_Non_Letter, illuminatebtn } = context

    return (
        <>
            <div className="choose-size">
                <div className="card-option">
                    <h3 >Letter Option</h3>

                    <div className="btn_row">
                        <button value={'steel'} className={`nbtn ${illuminatebtn.steel === true ? 'act' : ''}`}>
                            <span onClick={()=>Update_Non_Letter("steel")}>Steel</span>
                        </button>

                        <button value={'metal'} className={`nbtn ${illuminatebtn.metal === true ? 'act' : ''}`}>
                            <span onClick={()=>Update_Non_Letter("metal")}>Metal</span>
                        </button>

                        <button value={'acrylic'} className={`nbtn ${illuminatebtn.acrylic === true ? 'act' : ''}`}>
                            <span  onClick={()=>Update_Non_Letter("acrylic")}>Acrylic</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}