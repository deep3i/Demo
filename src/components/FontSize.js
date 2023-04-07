import React, { useContext } from "react";
import signContext from "../context/signContext";
import letterContext from "../context/letterContext";

export default function Fontsize() {

    const context = useContext(signContext)
    const { setFontSizeChennelLetter, Active_Size_Btn, fontsizebtn } = context

    const Lettercontext = useContext(letterContext);
    const { setFontSizeINFooter } = Lettercontext;

    return (
        <>
            <div className="font_size">
                <div className="card-option">

                    <h3>Font size</h3>

                    <div className="btn_row">
                        <button onClick={() => {
                            setFontSizeChennelLetter(20)
                            Active_Size_Btn('20')
                            setFontSizeINFooter(true)
                        }} className={`nbtn ${fontsizebtn.twenty === true ? 'act' : ''}`}>
                            <span>20x20cm</span>
                        </button>

                        <button onClick={() => {
                            setFontSizeChennelLetter(30)
                            Active_Size_Btn('30')
                            setFontSizeINFooter(true)
                        }} className={`nbtn ${fontsizebtn.thirty === true ? 'act' : ''}`}>
                            <span>30x30cm</span>
                        </button>

                        <button onClick={() => {
                            setFontSizeChennelLetter(40)
                            Active_Size_Btn('40')
                            setFontSizeINFooter(true)
                        }} className={`nbtn ${fontsizebtn.fourty === true ? 'act' : ''}`}>
                            <span>40x40cm</span>
                        </button>

                        <button className={`nbtn ${fontsizebtn.fifty === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(50)
                            Active_Size_Btn('50')
                            setFontSizeINFooter(true)
                        }}>
                            <span>50x50cm</span>
                        </button>
                        <button className={`nbtn ${fontsizebtn.sixty === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(60)
                            Active_Size_Btn('60')
                            setFontSizeINFooter(true)
                        }
                        }>
                            <span>60x60cm</span>
                        </button>
                        <button className={`nbtn ${fontsizebtn.seventy === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(70)
                            Active_Size_Btn('70')
                            setFontSizeINFooter(true)
                        }}>
                            <span>70x70cm</span>
                        </button>


                        <button className={`nbtn ${fontsizebtn.eighty === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(80)
                            Active_Size_Btn('80')
                            setFontSizeINFooter(true)
                        }}>
                            <span>80x80cm</span>
                        </button>
                        <button className={`nbtn ${fontsizebtn.hundred === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(100)
                            Active_Size_Btn('100')
                            setFontSizeINFooter(true)
                        }}>
                            <span>100x100cm</span>
                        </button>
                        <button className={`nbtn ${fontsizebtn.onehundredten === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(110)
                            Active_Size_Btn('110')
                            setFontSizeINFooter(true)
                        }}>
                            <span>110x110cm</span>
                        </button>


                        <button onClick={() => {
                            setFontSizeChennelLetter(120)
                            Active_Size_Btn('120')
                            setFontSizeINFooter(true)
                        }} className={`nbtn ${fontsizebtn.onehundredtwenty === true ? 'act' : ''}`}>
                            <span>120x120cm</span>
                        </button>
                        <button className={`nbtn ${fontsizebtn.onehundredthirty === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(130)
                            Active_Size_Btn('130')
                            setFontSizeINFooter(true)
                        }}>
                            <span>130x130cm</span>
                        </button>
                        <button className={`nbtn ${fontsizebtn.onehundredfourty === true ? 'act' : ''}`} onClick={() => {
                            setFontSizeChennelLetter(140)
                            Active_Size_Btn('140')
                            setFontSizeINFooter(true)
                        }}>
                            <span>140x140cm</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}