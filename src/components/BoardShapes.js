import letterContext from "../context/letterContext";
import React,{useContext} from "react";

export default function BoardShapes() {

    const context = useContext(letterContext);
    const { Update_Box_Shape, boxshape } = context

    return (
        <>
            <div className="board_shapes">

                <div className="card-option">
                    <h3>Backboard shape</h3>

                    <div className="btn_row">

                        <button onClick={()=>Update_Box_Shape("cutaround")} className={`nbtn ${boxshape.cutaround === true ? 'act' : ''} two_row`}><span><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_199_487)">
                                <rect x="4.2" y="0.2" width="35.6" height="35.6" rx="17.8" stroke="#AEA8A8" strokeWidth="0.4" shapeRendering="crispEdges" />
                            </g>
                            <defs>
                                <filter id="filter0_d_199_487" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_487" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_199_487" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        </span><span>Cut around</span></button>

                        <button  onClick={()=>Update_Box_Shape("ractangular")} className={`nbtn ${boxshape.ractangular === true ? 'act' : ''} two_row`}><span><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" fill="#F5F5F5" />
                            <g clipPath="url(#clip0_0_1)">
                                <rect width="1920" height="2535" transform="translate(-1621 -2016)" fill="white" />
                                <rect x="-241" y="-1936" width="540" height="2959" fill="#FAF8F8" />
                                <g filter="">
                                    <rect x="-211" y="-78" width="480" height="183" rx="10" fill="white" />
                                </g>
                                <rect x="-41.6" y="-11.6" width="127.2" height="86.2" rx="3.6" fill="white" stroke="#DDDDDD" strokeWidth="0.8" />
                                <g filter="url(#filter1_d_0_1)">
                                    <rect x="4.2" y="0.2" width="35.6" height="35.6" rx="17.8" stroke="#AEA8A8" strokeWidth="0.4" shapeRendering="crispEdges" />
                                </g>
                                <rect opacity="0.7" x="13.75" y="13.75" width="15.5" height="9.5" rx="3.25" fill="white" stroke="black" strokeWidth="1.5" />
                            </g>
                            <defs>
                                <filter id="filter0_d_0_1" x="-285" y="-152" width="628" height="331" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="37" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.9625 0 0 0 0 0.934427 0 0 0 0 0.934427 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>
                                <filter id="filter1_d_0_1" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>
                                <clipPath id="clip0_0_1">
                                    <rect width="1920" height="2535" fill="white" transform="translate(-1621 -2016)" />
                                </clipPath>
                            </defs>
                        </svg>


                        </span><span>Rectangular</span></button>

                        <button  onClick={()=>Update_Box_Shape("nobackboard")} className={`nbtn ${boxshape.nobackboard === true ? 'act' : ''} two_row`}><span><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" fill="#F5F5F5" />
                            <g clipPath="url(#clip0_0_1)">
                                <rect width="1920" height="2535" transform="translate(-1758 -2016)" fill="white" />
                                <rect x="-378" y="-1936" width="540" height="2959" fill="#FAF8F8" />
                                <g filter="url(#filter0_d_0_1)">
                                    <rect x="-348" y="-78" width="480" height="183" rx="10" fill="white" />
                                </g>
                                <rect x="-41.6" y="-11.6" width="127.2" height="86.2" rx="3.6" fill="white" stroke="#DDDDDD" strokeWidth="0.8" />
                                <g filter="url(#filter1_d_0_1)">
                                    <rect x="4.2" y="0.2" width="35.6" height="35.6" rx="17.8" stroke="#AEA8A8" strokeWidth="0.4" shapeRendering="crispEdges" />
                                </g>
                                <rect opacity="0.7" x="11.5" y="11.5" width="21" height="14" rx="3.5" fill="white" stroke="black" />
                                <rect opacity="0.7" x="15.5" y="14.5" width="13" height="8" rx="2.5" fill="white" stroke="black" />
                            </g>
                            <defs>
                                <filter id="filter0_d_0_1" x="-422" y="-152" width="628" height="331" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="37" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.9625 0 0 0 0 0.934427 0 0 0 0 0.934427 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>
                                <filter id="filter1_d_0_1" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                </filter>
                                <clipPath id="clip0_0_1">
                                    <rect width="1920" height="2535" fill="white" transform="translate(-1758 -2016)" />
                                </clipPath>
                            </defs>
                        </svg>


                        </span><span>No Backboard</span></button>

                    </div>
                </div>

            </div>
        </>
    )
}