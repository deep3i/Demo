import React, { useContext } from "react";
import letterContext from "../context/letterContext";
import { GithubPicker } from "react-color";
import { useState } from "react";


export default function RacewayColor() {

    const Lettercontext = useContext(letterContext);
    const { Update_Raceway_Color, racewayColor, setRacewayCustomcolor, rarcewaycustomcolor } = Lettercontext;

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="raceway_color">
                <div className="card-option">

                    <h3>Race way color</h3>

                    <div className="btn_row">

                        <button onClick={() => Update_Raceway_Color('black')} className={`nbtn ${racewayColor.black === true ? 'act' : ''} two_row`}>
                            <span><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_126_233)">
                                    <rect x="4" width="48" height="48" rx="24" fill="url(#paint0_linear_126_233)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_126_233" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_233" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_233" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_126_233" x1="28" y1="0" x2="28" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="0.0001" stopColor="#3F3F3F" />
                                        <stop offset="1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </span>
                            <span>Black</span>
                        </button>

                        <button onClick={() => Update_Raceway_Color('metal')} className={`nbtn ${racewayColor.metal === true ? 'act' : ''} two_row`}>
                            <span><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_126_237)">
                                    <rect x="4" width="48" height="48" rx="24" fill="url(#paint0_linear_126_237)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_126_237" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_237" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_237" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_126_237" x1="28" y1="0" x2="28" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#BCBAC2" />
                                        <stop offset="1" stopColor="#9D9AA5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </span>
                            <span>Metal</span>
                        </button>

                        <button onClick={() => Update_Raceway_Color('goldbrushesh')} className={`nbtn ${racewayColor.goldbrushesh === true ? 'act' : ''} two_row`}>
                            <span><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_126_241)">
                                    <rect x="3" width="48" height="48" rx="24" fill="url(#paint0_linear_126_241)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_126_241" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3" />
                                        <feGaussianBlur stdDeviation="1.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_241" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_241" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_126_241" x1="27" y1="0" x2="27" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F1A55F" />
                                        <stop offset="1" stopColor="#B89C07" />
                                    </linearGradient>
                                </defs>
                            </svg>

                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.378174 18.2127C1.00132 17.9726 1.6359 17.7668 2.2419 17.4867C3.13374 17.0751 3.73973 16.349 4.27141 15.5372C4.58012 15.0627 4.88884 14.5653 5.30046 14.1823C6.38668 13.1647 7.69014 12.7359 9.16511 13.1075C10.3199 13.3991 11.046 14.1937 11.4233 15.2971C12.0579 17.1551 11.3261 19.0188 9.58816 20.0479C8.26755 20.8311 6.82117 21.0769 5.31189 20.9797C4.16279 20.8997 3.06514 20.6139 2.05895 20.0307C1.34434 19.6191 0.761209 19.0817 0.423909 18.3099C0.418192 18.2928 0.395325 18.2756 0.378174 18.2585C0.378174 18.247 0.378174 18.2299 0.378174 18.2127Z" fill="white" />
                                    <path d="M12.7726 14.9826C12.178 13.3475 11.1375 12.2442 9.40527 11.7354C9.52533 11.6496 9.61108 11.6096 9.67397 11.5467C13.2185 8.15655 16.763 4.7664 20.3075 1.37626C21.0564 0.661641 21.9425 0.530151 22.7886 1.00466C23.7662 1.55348 24.0521 2.95413 23.3603 3.84026C23.1431 4.11467 22.8973 4.36622 22.6571 4.61776C19.4156 8.00791 16.1741 11.3981 12.9326 14.7939C12.8869 14.8397 12.8469 14.8968 12.7726 14.9826Z" fill="white" />
                                </svg>

                            </span>
                            <span>Gold<br />Brushes</span>
                        </button>

                        <button onClick={() => {
                            Update_Raceway_Color('custom');
                            setOpen(!open);
                        }} className={`nbtn ${racewayColor.custom === true ? 'act' : ''} two_row`}>
                            <span><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_126_248)">
                                    <rect x="4" width="48" height="48" rx="24" fill="url(#paint0_linear_126_248)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_126_248" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_248" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_248" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_126_248" x1="28" y1="0" x2="28" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#E15185" />
                                        <stop offset="1" stopColor="#FF0060" />
                                    </linearGradient>
                                </defs>
                            </svg>

                                <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.8639 25.4537C8.35868 25.3739 7.84681 25.3141 7.34824 25.2011C3.76519 24.4034 0.76047 21.5914 0.115652 17.7624C-0.156899 16.147 0.0757668 14.5782 0.567689 13.0359C1.2258 10.9818 2.25618 9.11386 3.43945 7.33231C5.16783 4.73309 7.16876 2.3599 9.37576 0.159542C9.42894 0.106362 9.48213 0.0598284 9.5486 0C9.58184 0.0265904 9.62173 0.0465332 9.64832 0.0731236C12.4137 2.85182 14.9066 5.84324 16.8477 9.26676C17.7916 10.922 18.5495 12.6504 18.9217 14.5383C19.6862 18.4205 17.9113 22.2429 14.4412 24.184C13.1848 24.8886 11.8487 25.3074 10.4128 25.4204C10.3596 25.4271 10.3064 25.447 10.2466 25.4603C9.78792 25.4537 9.32923 25.4537 8.8639 25.4537ZM9.5486 4.83946C9.53531 4.82616 9.51536 4.81951 9.50207 4.80622C9.46883 4.85275 9.43559 4.89928 9.39571 4.93917C8.05289 6.47477 6.80314 8.09013 5.71293 9.81186C4.80886 11.2411 4.0045 12.7302 3.51923 14.3588C3.14696 15.6086 3.02065 16.865 3.47269 18.1214C4.26376 20.3217 5.88577 21.5848 8.11937 22.1099C8.57805 22.2163 9.06333 22.2362 9.5486 22.3027C9.5486 16.4395 9.5486 10.6362 9.5486 4.83946Z" fill="white" />
                                </svg>
                            </span>
                            <span>Custom<br />color cursor</span>
                        </button>

                    </div>
                </div>
            </div>
            {open === true ? <div style={{ position: "absolute", top: "1590px", right: "80px" }}>
                <GithubPicker color={rarcewaycustomcolor} onChange={(value) => setRacewayCustomcolor(value.hex)} triangle="top-right" />
            </div> : ''}
        </>
    )
}