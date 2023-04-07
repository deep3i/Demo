import { useContext } from "react";
import signContext from "../context/signContext";
import Colorimg from '../images/color-palette.png';
import { TwitterPicker } from "react-color";
import letterContext from "../context/letterContext";

export default function BackboardColor() {

    const context = useContext(signContext);
    const { blockpicker, setBlockPicker } = context

    const LetterContext = useContext(letterContext);
    const { test, setTest, boxshape } = LetterContext

    return (
        <>

            <div className="board_color">

                <div className="card-option">

                    <h3>Backboard color</h3>

                    <div className="btn_row">

                        <button onClick={() => setBlockPicker(!blockpicker)} className="nbtn">
                            <span>
                                <img src={Colorimg} alt="colorimg" />
                            </span>
                        </button>

                        <button className="nbtn">
                            <span><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.751465" y="0.708618" width="33.1143" height="33.1143" rx="16.5571" fill="url(#paint0_linear_198_462)" />
                                <defs>
                                    <linearGradient id="paint0_linear_198_462" x1="17.3086" y1="0.708618" x2="17.3086" y2="33.8229" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="0.0001" stopColor="#131313" />
                                        <stop offset="1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </span>
                        </button>

                        <button className="nbtn">
                            <span><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.05981" y="1.20862" width="32.1143" height="32.1143" rx="16.0571" fill="white" stroke="#DBDADA" />
                            </svg>

                            </span>
                        </button>

                        <button className="nbtn">
                            <span><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.368652" y="0.70874" width="33.1143" height="33.1143" rx="16.5571" fill="#E1B045" />
                            </svg>

                            </span>
                        </button>

                        <button className="nbtn">
                            <span><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.177002" y="0.708618" width="33.1143" height="33.1143" rx="16.5571" fill="url(#paint0_linear_199_475)" />
                                <defs>
                                    <linearGradient id="paint0_linear_199_475" x1="16.7341" y1="0.708618" x2="16.7341" y2="33.8229" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D5D4D2" />
                                        <stop offset="1" stopColor="#AFAFAF" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            </span>
                        </button>

                        <button className="nbtn">
                            <span><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7">
                                    <path d="M8.17065 24.2355C9.04087 24.5227 9.91109 24.8009 10.7992 25.097C8.6551 20.2512 9.11264 15.8181 12.9344 12.1568C16.5588 8.69291 20.8471 8.36088 25.4584 10.4338C25.1623 9.52747 24.8842 8.66599 24.615 7.81348C28.5624 8.98904 33.2813 13.4849 33.1916 20.1973C33.1019 26.5867 28.1408 32.0338 21.7263 32.7427C15.1414 33.4606 9.78549 29.207 8.17065 24.2355ZM10.9069 25.088C12.6922 28.5699 17.0522 31.3338 22.0223 30.5262C27.0014 29.7185 30.6796 25.6444 31.0116 20.5024C31.3076 15.7822 28.383 11.9773 25.4584 10.5505C26.1402 14.813 25.1085 18.582 22.0493 21.6511C18.9811 24.7291 15.2131 25.779 10.9069 25.088Z" fill="black" />
                                    <path d="M8.0451 24.1011C3.64916 22.1178 0.329776 17.1553 1.03851 11.4301C1.75621 5.61503 6.33158 1.28069 11.9028 0.661498C17.9674 -0.0205102 22.7221 3.71259 24.4446 7.67901C19.4386 6.25217 14.9171 7.11366 11.194 10.8288C7.48887 14.535 6.61866 19.0578 8.0451 24.1011Z" fill="black" />
                                </g>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
            {blockpicker === true ?
                <div style={{ position: "absolute", top: "1530px", right: "200px" }}>
                    <TwitterPicker colors={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']} color={boxshape.cutaround === true ? test.circlecolor : boxshape.ractangular === true ? test.ractangularcolor : ''} onChange={(value) => {
                        if (boxshape.cutaround === true) {
                            setTest({...test, circlecolor:value.hex })
                        } if(boxshape.ractangular === true) {
                            setTest({...test, ractangularcolor:value.hex})
                        }
                    }} />
                </div> : ''}
        </>
    )
}