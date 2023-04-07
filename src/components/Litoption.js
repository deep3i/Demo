
import React from "react";
import { useContext } from "react";
import letterContext from "../context/letterContext";
import signContext from "../context/signContext";

export default function Litoption() {

    const context = useContext(signContext);
    const { styleletter } = context;

    const Lettercontext = useContext(letterContext);
    const { Update_Lit_Option, litoption } = Lettercontext;
    
    console.log("inside lit option:", styleletter);
    return (
        <>
            {styleletter.ChennelLetter === true ? <div className="placement">
                <div className="card-option">
                    <h3 >Choose Lit option</h3>
                    <div className="btn_row">
                        <button onClick={() => Update_Lit_Option('frontlit')} className={`nbtn ${litoption.frontlit === true ? 'act' : ''} two_row`}>
                            <span>Front lit</span>
                        </button>
                        <button onClick={() => Update_Lit_Option('backlit')} className={`nbtn ${litoption.backlit === true ? 'act' : ''} two_row`}>
                            <span>Back lit</span>
                        </button>
                    </div>
                </div>
            </div> : ''}

            {styleletter.Fulllitletter === true ? <div className="placement">
                <div className="card-option">
                    <h3 >Lit option</h3>
                    <div className="btn_row">
                        <button onClick={() => Update_Lit_Option('doublelit')} className={`nbtn ${litoption.doublelit === true ? 'act' : ''} two_row`}>
                            <span>Doubleside lit</span>
                        </button>
                        <button onClick={() => Update_Lit_Option('fulllit')} className={`nbtn ${litoption.fulllit === true ? 'act' : ''} two_row`}>
                            <span>Full lit</span>
                        </button>
                    </div>
                </div>
            </div> : ''}
        </>
    )
}