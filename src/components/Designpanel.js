import { Collapsible } from "@shopify/polaris";
import { useContext } from "react";
import signContext from "../context/signContext";
import BackgroundImg from "./BackgroundImg";
import letterContext from "../context/letterContext";
// import StyleColor from "./Color";

export default function Designpanel() {

    const context = useContext(signContext)
    const { open, activebtn, Update_Font, Update_Text, setUpdateText, updatetext } = context

    const Lettercontext = useContext(letterContext);
    const { Update_Panel_Option, paneloption } = Lettercontext;

    return (
        <>
            <div className="design-panel">
                <div className="card-option">
                    <h2>Design Panel</h2>
                    <div className="text-btn">
                        <div className="btn_row">
                            <button onClick={() => Update_Panel_Option('text')} className={`nbtn ${paneloption.text === true ? 'act' : ''}`}><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000976562 1.52588e-05C4.16394 1.52588e-05 8.32691 1.52588e-05 12.5003 1.52588e-05C12.5003 1.25883 12.5003 2.49675 12.5003 3.75034C11.675 3.75034 10.855 3.75034 10.014 3.75034C10.014 3.34292 10.014 2.93551 10.014 2.51764C9.17308 2.51764 8.35825 2.51764 7.52252 2.51764C7.52252 6.68061 7.52252 10.8488 7.52252 15.0379C8.34258 15.0379 9.16264 15.0379 9.99836 15.0379C9.99836 15.8788 9.99836 16.6989 9.99836 17.5346C7.51208 17.5346 5.02056 17.5346 2.51338 17.5346C2.51338 16.7146 2.51338 15.8893 2.51338 15.0483C3.33866 15.0483 4.1535 15.0483 4.98922 15.0483C4.98922 10.8645 4.98922 6.69628 4.98922 2.51764C4.16917 2.51764 3.34389 2.51764 2.50816 2.51764C2.50816 2.92506 2.50816 3.32725 2.50816 3.76079C1.66198 3.76079 0.831481 3.76079 0.000976562 3.76079C0.000976562 2.5072 0.000976562 1.25361 0.000976562 1.52588e-05Z" fill="white" />
                                <path d="M12.5212 17.5346C12.5212 16.6989 12.5212 15.8788 12.5212 15.0483C12.9339 15.0483 13.3309 15.0483 13.7487 15.0483C13.7487 12.9538 13.7487 10.8802 13.7487 8.78561C13.3413 8.78561 12.9391 8.78561 12.516 8.78561C12.516 9.19303 12.516 9.59522 12.516 10.0131C11.6803 10.0131 10.855 10.0131 10.0193 10.0131C10.0193 8.76994 10.0193 7.53202 10.0193 6.27843C13.3465 6.27843 16.6633 6.27843 20.001 6.27843C20.001 7.51635 20.001 8.75949 20.001 10.0131C19.1809 10.0131 18.3609 10.0131 17.5199 10.0131C17.5199 9.61089 17.5199 9.2087 17.5199 8.79083C17.1021 8.79083 16.6947 8.79083 16.2716 8.79083C16.2716 10.8645 16.2716 12.9434 16.2716 15.0431C16.679 15.0431 17.0864 15.0431 17.499 15.0431C17.499 15.8841 17.499 16.7041 17.499 17.5399C15.8485 17.5346 14.1927 17.5346 12.5212 17.5346Z" fill="white" />
                            </svg>
                                <span>text</span>
                            </button>

                            <button onClick={() => Update_Panel_Option('logo')} className="nbtn"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7">
                                    <path d="M10.7001 20.5913C9.13288 20.5913 7.55918 20.6042 5.99194 20.5849C5.07609 20.572 4.18605 20.3785 3.35406 19.9786C1.77391 19.2111 0.890315 17.9147 0.561386 16.2185C0.458193 15.6896 0.406596 15.1479 0.406596 14.6125C0.393697 11.7554 0.406596 8.89821 0.400146 6.0475C0.400146 5.05426 0.529138 4.08682 0.922563 3.17743C1.65782 1.48119 2.98643 0.520203 4.76007 0.165476C5.25023 0.0687323 5.7533 0.0171356 6.24992 0.010686C9.24253 -0.00221315 12.2351 -0.00221315 15.2277 0.00423644C16.2468 0.00423644 17.2271 0.197724 18.143 0.668544C19.7553 1.49409 20.5938 2.8614 20.884 4.60279C20.9614 5.07361 20.9937 5.56378 20.9937 6.04105C21.0066 8.87241 20.9937 11.7038 21.0001 14.5351C21.0001 15.5284 20.8776 16.4958 20.4777 17.4117C19.7489 19.1079 18.4267 20.0753 16.6466 20.4301C16.0726 20.5462 15.4793 20.5784 14.8988 20.5913C13.4993 20.6107 12.0997 20.5978 10.7001 20.5978V20.5913ZM19.4522 10.9234C19.4522 10.775 19.4522 10.6912 19.4522 10.6009C19.4522 9.11105 19.4587 7.6212 19.4522 6.13779C19.4522 5.77016 19.4393 5.39609 19.3877 5.02846C19.1942 3.55151 18.4977 2.42283 17.053 1.87462C16.4596 1.64888 15.8405 1.55859 15.2084 1.55859C12.2222 1.55859 9.23608 1.55859 6.24992 1.55859C5.96614 1.55859 5.68881 1.57793 5.41147 1.61663C3.99256 1.81012 2.88969 2.45508 2.31567 3.83529C2.08994 4.3835 1.96095 4.95752 1.96095 5.55088C1.94805 8.09846 1.94805 10.6461 1.94805 13.2001C1.94805 13.8257 1.9416 14.4578 1.96095 15.0834C1.98029 15.6122 2.09639 16.1282 2.30277 16.6442C2.40597 16.5732 2.49626 16.5216 2.58011 16.4636C3.75393 15.6767 4.9213 14.8899 6.08868 14.103C6.64979 13.7225 7.2625 13.5935 7.92681 13.7354C8.40408 13.8386 8.79105 14.1159 9.15223 14.4255C9.50696 14.7351 9.91328 14.9286 10.3841 14.9866C11.0807 15.0705 11.6869 14.877 12.2158 14.4191C13.5637 13.2581 14.9182 12.1037 16.2597 10.9427C16.7756 10.4977 17.3626 10.2526 18.0462 10.3042C18.5622 10.3429 19.0136 10.5429 19.4522 10.9234Z" fill="black" />
                                    <path d="M7.61087 8.62088C6.24355 8.61443 5.14713 7.51155 5.16002 6.16358C5.17292 4.81562 6.28225 3.72564 7.61732 3.73209C8.96528 3.73854 10.0488 4.83497 10.0553 6.18293C10.0617 7.52445 8.95883 8.62733 7.61087 8.62088Z" fill="black" />
                                </g>
                            </svg>


                                <span>logo</span>
                            </button>

                            <button onClick={() => Update_Panel_Option('background')} className={`nbtn ${paneloption.background === true ? 'act' : ''}`}><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7">
                                    <path d="M10.7001 20.5913C9.13288 20.5913 7.55918 20.6042 5.99194 20.5849C5.07609 20.572 4.18605 20.3785 3.35406 19.9786C1.77391 19.2111 0.890315 17.9147 0.561386 16.2185C0.458193 15.6896 0.406596 15.1479 0.406596 14.6125C0.393697 11.7554 0.406596 8.89821 0.400146 6.0475C0.400146 5.05426 0.529138 4.08682 0.922563 3.17743C1.65782 1.48119 2.98643 0.520203 4.76007 0.165476C5.25023 0.0687323 5.7533 0.0171356 6.24992 0.010686C9.24253 -0.00221315 12.2351 -0.00221315 15.2277 0.00423644C16.2468 0.00423644 17.2271 0.197724 18.143 0.668544C19.7553 1.49409 20.5938 2.8614 20.884 4.60279C20.9614 5.07361 20.9937 5.56378 20.9937 6.04105C21.0066 8.87241 20.9937 11.7038 21.0001 14.5351C21.0001 15.5284 20.8776 16.4958 20.4777 17.4117C19.7489 19.1079 18.4267 20.0753 16.6466 20.4301C16.0726 20.5462 15.4793 20.5784 14.8988 20.5913C13.4993 20.6107 12.0997 20.5978 10.7001 20.5978V20.5913ZM19.4522 10.9234C19.4522 10.775 19.4522 10.6912 19.4522 10.6009C19.4522 9.11105 19.4587 7.6212 19.4522 6.13779C19.4522 5.77016 19.4393 5.39609 19.3877 5.02846C19.1942 3.55151 18.4977 2.42283 17.053 1.87462C16.4596 1.64888 15.8405 1.55859 15.2084 1.55859C12.2222 1.55859 9.23608 1.55859 6.24992 1.55859C5.96614 1.55859 5.68881 1.57793 5.41147 1.61663C3.99256 1.81012 2.88969 2.45508 2.31567 3.83529C2.08994 4.3835 1.96095 4.95752 1.96095 5.55088C1.94805 8.09846 1.94805 10.6461 1.94805 13.2001C1.94805 13.8257 1.9416 14.4578 1.96095 15.0834C1.98029 15.6122 2.09639 16.1282 2.30277 16.6442C2.40597 16.5732 2.49626 16.5216 2.58011 16.4636C3.75393 15.6767 4.9213 14.8899 6.08868 14.103C6.64979 13.7225 7.2625 13.5935 7.92681 13.7354C8.40408 13.8386 8.79105 14.1159 9.15223 14.4255C9.50696 14.7351 9.91328 14.9286 10.3841 14.9866C11.0807 15.0705 11.6869 14.877 12.2158 14.4191C13.5637 13.2581 14.9182 12.1037 16.2597 10.9427C16.7756 10.4977 17.3626 10.2526 18.0462 10.3042C18.5622 10.3429 19.0136 10.5429 19.4522 10.9234Z" fill="black" />
                                    <path d="M7.61087 8.62088C6.24355 8.61443 5.14713 7.51155 5.16002 6.16358C5.17292 4.81562 6.28225 3.72564 7.61732 3.73209C8.96528 3.73854 10.0488 4.83497 10.0553 6.18293C10.0617 7.52445 8.95883 8.62733 7.61087 8.62088Z" fill="black" />
                                </g>
                            </svg>
                                <span>background</span>
                            </button>
                        </div>
                        <div className="input_field">
                            {paneloption.text === true ? <>
                                <textarea rows="6" cols="50" value={updatetext} onChange={(e) => setUpdateText(e.target.value)}>
                                </textarea>
                                <div className="card__option__font__tools">
                                    <div className="left_side">
                                        <div className="img-alignment">
                                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 5.039H1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 1.039H1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11 9.039H1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                        <div className="img-alignment">
                                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 5.039H4" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 1.039H1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15 9.039H5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                        <div className="img-alignment">
                                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 5.039H5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 1.039H1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 9.039H9" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                    </div>

                                    <div className="right_side">
                                        <span>Press <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.87533 5.41675L2.16699 8.12508L4.87533 10.8334" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.8337 2.16675V5.95841C10.8337 6.53305 10.6054 7.08415 10.1991 7.49048C9.79273 7.89681 9.24163 8.12508 8.66699 8.12508H2.16699" stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> for a new line</span>
                                    </div>
                                </div>
                            </> : ''}
                            {paneloption.background === true ? <BackgroundImg /> : ''}
                        </div>
                    </div>
                    {paneloption.text === true ? <div className="submit_button">
                        <button className="nbtn sbmt" onClick={() => Update_Text()}><span>update</span></button>
                    </div> : ''}
                    <div className="collapsible">
                        <Collapsible open={open} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}>
                            <h3 >Font style</h3>

                            <div className="btn_row">
                                <button value={'delicioushandrawn'} onClick={(e) => Update_Font(e.target.value)} id="del" className={`nbtn ${activebtn.delicioushandrawn === true ? 'act' : ''} two_row`}>
                                    Delicious
                                </button>

                                <button value={'electralt'} id='ele' onClick={(e) => Update_Font(e.target.value)} className={`nbtn ${activebtn.electralt === true ? 'act' : ''} two_row`}>
                                    ElectraLT
                                </button>

                                <button value={'aurella'} id="aur" onClick={(e) => Update_Font(e.target.value)} className={`nbtn ${activebtn.aurella === true ? 'act' : ''} two_row`}>
                                    Aurella
                                </button>
                            </div>
                            <div style={{ display: "flex" }}>
                                <button value={'lacosta'} id="lac" onClick={(e) => Update_Font(e.target.value)} className={`nbtn ${activebtn.lacosta === true ? 'act' : ''} two_row`}>
                                    Lacosta
                                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button value={'pacifico'} id="pac" onClick={(e) => Update_Font(e.target.value)} className={`nbtn ${activebtn.pacifico === true ? 'act' : ''} two_row`}>
                                    Pacifico
                                </button>
                            </div>
                        </Collapsible><br />
                    </div>
                </div>
            </div>
        </>
    )
}