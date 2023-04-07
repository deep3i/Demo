import React, { useContext } from 'react';
import signContext from '../context/signContext';

function MainContent() {
    const context = useContext(signContext)
    const { textRef } = context

    return(
        <>
        <div className='maincontent'>
            <div className='inner_container'>
                {/* <h1>Enter Your Message</h1> */}
                <canvas id="myCanvas" ref={textRef} width="100%" height="100%"/>
            </div>
        </div>
        </>
    )
}


export default MainContent;