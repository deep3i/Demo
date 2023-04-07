import React from "react";
import { useContext } from "react";
import letterContext from "../context/letterContext";


export default function BackgroundImg() {

    const context = useContext(letterContext);
    const { Upload_BackgroundFile } = context;

    const uploadFile = () => {
        document.getElementById('filer_input2').click();
    }

    return (
        <>
            {/* <div className="input_field"> */}
            <div className="Neon Neon-theme-dragdropbox">
                <div style={{display:"none"}}>
                    <input onChange={(e)=>Upload_BackgroundFile(e)} name="files[]" id="filer_input2" multiple="multiple" type="file" />
                </div>
                <div onClick={uploadFile} className="Neon-input-dragDrop"><div className="Neon-input-inner"><div className="Neon-input-icon"><i className="fa fa-file-image-o"></i></div><div className="Neon-input-text"><h3>Drag&amp;Drop files here</h3> <span style={{ display: 'inline-block', margin: '15px 0' }}>or</span></div><a className="Neon-input-choose-btn blue">Browse Files</a></div></div>
            </div>
            {/* </div> */}
        </>
    )
}