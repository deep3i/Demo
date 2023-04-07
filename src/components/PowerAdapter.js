import React from "react";
import { useContext } from "react";
import letterContext from "../context/letterContext";


export default function Poweradapter() {

    const context = useContext(letterContext);
    const { poweradapter, Update_PowerAdapter } = context;

    return (
        <>
            <div className="power-adapter">

                <div className="card-option">
                    <h3>Power Adapter/Transformer</h3>

                    <div className={`btn_row`}>
                        <button onClick={() => Update_PowerAdapter("uk_ireland")} className={`nbtn ${poweradapter.uk_ireland === true ? 'act' : ''}`}>
                            <span>UK/Ireland 230V</span>
                        </button>

                        <button onClick={() => Update_PowerAdapter("europe")} className={`nbtn ${poweradapter.europe === true ? 'act' : ''}`}>
                            <span>Europe <br /> 230V</span>
                        </button>

                        <button onClick={() => Update_PowerAdapter("australia_nz")} className={`nbtn ${poweradapter.australia_nz === true ? 'act' : ''}`}>
                            <span>Australia/NZ 230V</span>
                        </button>



                        <button onClick={() => Update_PowerAdapter("usa_canada")} className={`nbtn ${poweradapter.usa_canada === true ? 'act' : ''}`}>
                            <span>USA/Canada 110V</span>
                        </button>

                        <button onClick={() => Update_PowerAdapter("japan")} className={`nbtn ${poweradapter.japan === true ? 'act' : ''}`}>
                            <span>Japan <br /> 100V</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}