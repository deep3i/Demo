import React from "react";
import { useContext } from "react";
import signContext from "../context/signContext";
import letterContext from "../context/letterContext";

function TopHeader() {
    const context = useContext(signContext)
    const { opensidebar, handleToggle, OpenNonilluminateletter, ActiveStyleletter, setGlowSwitch, glowswitch } = context

    const lettercontext = useContext(letterContext);
    const { Show_Neon_Select } = lettercontext

    return (
        <>
            <div className={`bheader${opensidebar === true ? " drwidth" : ""}`}>
                <div className="inner_container">
                    <div className='menu_part'>
                        <div className="menu-open">
                            <span className="open" />
                        </div>
                        <div className="ozmenu bmenu">
                            <div className="menu-close">
                                <span className="close" />
                            </div>
                            <ul className="ozmenu-nav">
                                <li className="item dropdownitem b1">
                                    <a className="nav-dropdown">
                                        Style
                                    </a>
                                    <div className="dropdown">
                                        <ul>
                                            <li className="item">
                                                <a href="#" onClick={() => {
                                                    ActiveStyleletter("chennel");
                                                    Show_Neon_Select('');
                                                }}><span className="mname">Channel Letters</span>
                                                    <span className='micon'>
                                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.17392 4.17944L1.65015 6.70321C1.34277 7.01059 0.991063 7.07918 0.595026 6.90899C0.198342 6.73945 -2.464e-08 6.43627 -4.37334e-08 5.99947L-2.62246e-07 1.00047C-2.8134e-07 0.563667 0.198342 0.260492 0.595026 0.0909466C0.991063 -0.0792456 1.34277 -0.0106512 1.65015 0.29673L4.17392 2.82049C4.27099 2.91756 4.34379 3.02272 4.39232 3.13596C4.44085 3.24921 4.46512 3.37055 4.46512 3.49997C4.46512 3.62939 4.44085 3.75073 4.39232 3.86397C4.34379 3.97722 4.27099 4.08238 4.17392 4.17944Z" fill="#454545" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a href="#" onClick={() => {
                                                    ActiveStyleletter("neonled");
                                                    Show_Neon_Select('SHOW_NEON_OPTION');
                                                }} ><span className="mname">Neon Led</span>
                                                    <span className='micon'>
                                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.17392 4.17944L1.65015 6.70321C1.34277 7.01059 0.991063 7.07918 0.595026 6.90899C0.198342 6.73945 -2.464e-08 6.43627 -4.37334e-08 5.99947L-2.62246e-07 1.00047C-2.8134e-07 0.563667 0.198342 0.260492 0.595026 0.0909466C0.991063 -0.0792456 1.34277 -0.0106512 1.65015 0.29673L4.17392 2.82049C4.27099 2.91756 4.34379 3.02272 4.39232 3.13596C4.44085 3.24921 4.46512 3.37055 4.46512 3.49997C4.46512 3.62939 4.44085 3.75073 4.39232 3.86397C4.34379 3.97722 4.27099 4.08238 4.17392 4.17944Z" fill="#454545" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a href="#" onClick={() => {
                                                    OpenNonilluminateletter()
                                                    ActiveStyleletter("nonilluminate");
                                                    Show_Neon_Select('');
                                                }}><span className="mname">Non illuminated</span>
                                                    <span className='micon'>
                                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.17392 4.17944L1.65015 6.70321C1.34277 7.01059 0.991063 7.07918 0.595026 6.90899C0.198342 6.73945 -2.464e-08 6.43627 -4.37334e-08 5.99947L-2.62246e-07 1.00047C-2.8134e-07 0.563667 0.198342 0.260492 0.595026 0.0909466C0.991063 -0.0792456 1.34277 -0.0106512 1.65015 0.29673L4.17392 2.82049C4.27099 2.91756 4.34379 3.02272 4.39232 3.13596C4.44085 3.24921 4.46512 3.37055 4.46512 3.49997C4.46512 3.62939 4.44085 3.75073 4.39232 3.86397C4.34379 3.97722 4.27099 4.08238 4.17392 4.17944Z" fill="#454545" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a href="#" onClick={() => {
                                                    ActiveStyleletter("lightbox");
                                                    Show_Neon_Select('');
                                                }}><span className="mname">Lightbox</span>
                                                    <span className='micon'>
                                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.17392 4.17944L1.65015 6.70321C1.34277 7.01059 0.991063 7.07918 0.595026 6.90899C0.198342 6.73945 -2.464e-08 6.43627 -4.37334e-08 5.99947L-2.62246e-07 1.00047C-2.8134e-07 0.563667 0.198342 0.260492 0.595026 0.0909466C0.991063 -0.0792456 1.34277 -0.0106512 1.65015 0.29673L4.17392 2.82049C4.27099 2.91756 4.34379 3.02272 4.39232 3.13596C4.44085 3.24921 4.46512 3.37055 4.46512 3.49997C4.46512 3.62939 4.44085 3.75073 4.39232 3.86397C4.34379 3.97722 4.27099 4.08238 4.17392 4.17944Z" fill="#454545" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a href="#" onClick={() => {
                                                    ActiveStyleletter("marquee");
                                                    Show_Neon_Select('');
                                                }}><span className="mname">Marquee Letters</span>
                                                    <span className='micon'>
                                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.17392 4.17944L1.65015 6.70321C1.34277 7.01059 0.991063 7.07918 0.595026 6.90899C0.198342 6.73945 -2.464e-08 6.43627 -4.37334e-08 5.99947L-2.62246e-07 1.00047C-2.8134e-07 0.563667 0.198342 0.260492 0.595026 0.0909466C0.991063 -0.0792456 1.34277 -0.0106512 1.65015 0.29673L4.17392 2.82049C4.27099 2.91756 4.34379 3.02272 4.39232 3.13596C4.44085 3.24921 4.46512 3.37055 4.46512 3.49997C4.46512 3.62939 4.44085 3.75073 4.39232 3.86397C4.34379 3.97722 4.27099 4.08238 4.17392 4.17944Z" fill="#454545" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a href="#" onClick={() => {
                                                    ActiveStyleletter("fulllit");
                                                    Show_Neon_Select('');
                                                }}><span className="mname">Full lit</span>
                                                    <span className='micon'>
                                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.17392 4.17944L1.65015 6.70321C1.34277 7.01059 0.991063 7.07918 0.595026 6.90899C0.198342 6.73945 -2.464e-08 6.43627 -4.37334e-08 5.99947L-2.62246e-07 1.00047C-2.8134e-07 0.563667 0.198342 0.260492 0.595026 0.0909466C0.991063 -0.0792456 1.34277 -0.0106512 1.65015 0.29673L4.17392 2.82049C4.27099 2.91756 4.34379 3.02272 4.39232 3.13596C4.44085 3.24921 4.46512 3.37055 4.46512 3.49997C4.46512 3.62939 4.44085 3.75073 4.39232 3.86397C4.34379 3.97722 4.27099 4.08238 4.17392 4.17944Z" fill="#454545" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="item b1">
                                    <a href="#" onClick={() => handleToggle("fonts")}>Fonts</a>
                                </li>
                                <li className="item b1">
                                    <a href="#item" onClick={() => {
                                        handleToggle("color");
                                    }}>Color</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='eoptions' style={{ marginRight: `${opensidebar === true ? '550px' : ''}`, transition:"0.4s ease-in-out"}}>
                    <div className='eopt'>
                        <button className='nbtn twd'><span>2D</span></button>
                    </div>
                    <div className='eopt'>
                        <button className='nbtn twd'><svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.943 0.535824C11.4385 0.826409 11.934 1.11699 12.4295 1.40152C15.0928 2.90893 17.7622 4.41634 20.4317 5.92981C20.4998 5.96613 20.5617 6.00851 20.6485 6.05694C19.899 6.48071 19.1744 6.89237 18.4435 7.30403C15.997 8.68431 13.5505 10.0706 11.1041 11.457C10.9802 11.5296 10.8811 11.5659 10.7262 11.4812C7.59226 9.6953 4.44589 7.92152 1.30572 6.14169C1.26236 6.11748 1.21282 6.08721 1.15088 6.04483C1.72689 5.71792 2.28431 5.40312 2.84174 5.08227C5.44926 3.61118 8.05679 2.13404 10.6643 0.662955C10.7262 0.626632 10.7882 0.578201 10.8439 0.535824C10.8811 0.535824 10.9121 0.535824 10.943 0.535824Z" fill="white" />
                            <path d="M11.5935 23.7827C11.5935 20.1988 11.5935 16.6088 11.5935 13.025C11.5935 12.8312 11.6431 12.7162 11.8227 12.6133C14.9133 10.8758 18.0039 9.12627 21.0946 7.38276C21.1689 7.34039 21.2432 7.30406 21.3547 7.24353C21.3547 7.35855 21.3547 7.43725 21.3547 7.51595C21.3547 11.0211 21.3547 14.5203 21.3609 18.0254C21.3609 18.2131 21.2989 18.3039 21.1379 18.3947C18.0659 20.1261 15 21.8575 11.928 23.595C11.8289 23.6495 11.736 23.7161 11.6431 23.7766C11.6245 23.7827 11.6059 23.7827 11.5935 23.7827Z" fill="white" />
                            <path d="M10.1565 23.7826C9.63627 23.4799 9.11601 23.1712 8.58955 22.8685C5.94487 21.3671 3.29399 19.8718 0.643111 18.3826C0.513044 18.3099 0.438721 18.2373 0.438721 18.0738C0.444914 14.5323 0.444914 10.9908 0.444914 7.44932C0.444914 7.39484 0.451108 7.34641 0.457302 7.24955C0.544013 7.29192 0.605949 7.32219 0.667885 7.35852C3.78329 9.12019 6.90488 10.8879 10.0327 12.6496C10.1813 12.7343 10.1999 12.8312 10.1999 12.9765C10.1999 16.5785 10.1999 20.1806 10.1999 23.7826C10.1875 23.7826 10.1689 23.7826 10.1565 23.7826Z" fill="white" />
                        </svg>
                        </button>
                    </div>
                    <div className='eopt'>
                        <input type="checkbox" id="switch"
                            className="checkbox" checked={glowswitch} onChange={() => setGlowSwitch(!glowswitch)} />
                        <label htmlFor="switch" className="toggle">
                            <p>ON</p>
                            <p>OFF</p>
                        </label>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}


export default TopHeader;
