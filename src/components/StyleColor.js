import React, { useState } from "react";
import Colorimg from '../images/color-palette.png';
import { TwitterPicker } from "react-color";
import { useContext } from "react";
import letterContext from "../context/letterContext";
import signContext from "../context/signContext";

export default function StyleColor() {
    const [open, setOpen] = useState(false);

    const context = useContext(letterContext);
    const { styleColor, setStyleColor, litoption, styleletter } = context;

    const signcontext = useContext(signContext);
    const { blockpickervalue, setBlockPickerValue } = signcontext

    const Open_Color_Picker = () => {
       setOpen(!open);
    }

    return (
        <>
            <div className="board_color" id="item">

                <div className="card-option">

                    <h3>Style color</h3>

                    <div className="btn_row">

                        <button onClick={Open_Color_Picker} className="nbtn">
                            <span>
                                <img src={Colorimg} alt="colorimg" />
                            </span>
                        </button>

                        <button className="nbtn">
                            <span>
                            </span>
                        </button>

                        <button className="nbtn">
                            <span>
                            </span>
                        </button>

                        <button className="nbtn">
                            <span>
                            </span>
                        </button>

                        <button className="nbtn">
                            <span>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
           { open === true ? <div style={{position:"absolute", top:"750px", right:"200px"}}>
                <TwitterPicker color={litoption.frontlit === true ? styleColor : litoption.backlit === true ? blockpickervalue : '' } onChange={(value)=>{
                    if (litoption.frontlit === true) {
                        setStyleColor(value.hex);
                    } if (litoption.backlit === true) {
                        setBlockPickerValue(value.hex);
                    } 
                    }}/>
            </div> : ''}
        </>
    )
}