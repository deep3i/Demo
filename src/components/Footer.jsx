import React, { useEffect, useContext } from 'react';
import signContext from "../context/signContext";
import * as THREE from 'three';
import { useRef } from 'react';
import letterContext from '../context/letterContext';

function Footer() {

    const context = useContext(signContext)
    const { backboardshape, fontsizebtn, styleletter } = context

    const Lettercontext = useContext(letterContext);
    const { placement, fixingkit, poweradapter, rarcewaycustomcolor, eleinstallation, fontsizeInfooter, litoption, racewayColor } = Lettercontext;

    const RacewayRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ canvas: RacewayRef.current });
        renderer.setSize(100, 50);

        // const bbox = new THREE.Box3().setFromObject(meshSteel);
        const containerWidth = 20;
        const containerHeight = 5;
        const containerShape = new THREE.Shape();
        containerShape.moveTo(0, 0);
        containerShape.lineTo(containerWidth, 0);
        containerShape.lineTo(containerWidth, containerHeight);
        containerShape.lineTo(0, containerHeight);
        containerShape.lineTo(0, 0);
        const containerGeometry = new THREE.ShapeGeometry(containerShape);
        const containerMaterial = new THREE.MeshBasicMaterial({
            color: racewayColor.black === true ? "#000000" : racewayColor.metal === true ? 0x555555 : racewayColor.goldbrushesh === true ? 0xffd700 : rarcewaycustomcolor,
            specular: 0xffff,
            transparent: true,
            shininess: 100,
            metalness: 1,
            roughness: 0,
            envMapIntensity: 1.5,
            side: THREE.DoubleSide
        });

        const containerMesh = new THREE.Mesh(containerGeometry, containerMaterial);
        // containerMesh.position.copy(meshSteel.position);
        containerMesh.position.set(-10, -1.5, -0.1)
        scene.add(containerMesh);

        function animate() {
            requestAnimationFrame(animate);
            // containerMesh.rotation.y += 0.01;
            if (backboardshape.raceway === true) {
                renderer.render(scene, camera);
            }
        }
        animate();

    }, [backboardshape, rarcewaycustomcolor, racewayColor]);


    return (
        <>
            <div className='bottom_sec'>
                <div className='inner_container'>
                    <div className='act_opt'>

                        {/* Lit option */}
                        {styleletter.ChennelLetter === true ? <>
                            {litoption.frontlit === true || litoption.backlit === true ? <div className='opt_item'>
                                <button className='nbtn'><span>{litoption.frontlit === true ? 'FrontLit' : litoption.backlit === true ? 'BackLit' : ''}</span></button>
                            </div> : ''}
                        </> : ''}
                        {styleletter.Fulllitletter === true ? <>
                            {litoption.doublelit === true || litoption.fulllit === true ? <div className='opt_item'>
                                <button className='nbtn'><span>{litoption.doublelit === true ? 'DoubleLit' : litoption.fulllit === true ? 'FullLit' : ''}</span></button>
                            </div> : ''}
                        </> : ''}

                        {/* FontSize option */}
                        {fontsizeInfooter === true ? <div className='opt_item'>
                            <button className='nbtn two_row'><span>{fontsizebtn.twenty === true ? '20x20cm' : fontsizebtn.thirty === true ? '30x30cm' : fontsizebtn.fourty === true ? '40x40cm' : fontsizebtn.fifty === true ? '50x50cm' : fontsizebtn.sixty === true ? '60x60cm' : fontsizebtn.seventy === true ? '70x70cm' : fontsizebtn.eighty === true ? '80x80cm' : fontsizebtn.hundred === true ? '100x100cm' : fontsizebtn.onehundredten === true ? '110x110cm' : fontsizebtn.onehundredtwenty === true ? '120x120cm' : fontsizebtn.onehundredthirty === true ? '130x130cm' : fontsizebtn.onehundredfourty === true ? '140x140cm' : '50x50cm'}</span></button>
                        </div> : ''}

                        {/* Placement option */}
                        {placement.indoor === true || placement.outdoor === true ? <div className='opt_item'>
                            <button className='nbtn'><span>{placement.indoor === true ? 'Indoor' : placement.outdoor === true ? 'Outdoor' : ''}</span></button>
                        </div> : ''}

                        {/* FixingKit option */}
                        {fixingkit.wallmounted === true || fixingkit.freestanding === true || fixingkit.hangingchain === true ? <div className='opt_item'>
                            <button className='nbtn'><span>{fixingkit.wallmounted === true ? 'WallMounted' : fixingkit.freestanding === true ? 'FreeStanding' : fixingkit.hangingchain === true ? 'HangingChain' : ''}</span></button>
                        </div> : ''}

                        {/* Letter Mouting Setup option */}
                        <div className='opt_item'>
                            <button className='nbtn' style={{ display: `${backboardshape.raceway === false ? 'none' : ''}` }}>
                                <canvas ref={RacewayRef} />
                            </button>
                            {/* <button className='nbtn'><span>{ }</span></button> */}
                        </div>

                        {/* Power Adapter Option */}
                        {poweradapter.uk_ireland === true || poweradapter.europe === true || poweradapter.australia_nz === true || poweradapter.usa_canada === true || poweradapter.japan === true ? <div className='opt_item'>
                            <button className='nbtn'><span>{poweradapter.uk_ireland === true ? 'UK/Ireland 230V' : poweradapter.europe === true ? 'Europe 230V' : poweradapter.australia_nz === true ? 'Australia/NZ 230V' : poweradapter.usa_canada === true ? 'USA/Canada 110V' : poweradapter.japan === true ? 'Japan 100V' : ''}</span></button>
                        </div> : ''}

                        {/* Electrical Installation option */}
                        {eleinstallation.walloutplug === true || eleinstallation.hardwire === true ? <div className='opt_item'>
                            <button className='nbtn'><span>{eleinstallation.walloutplug === true ? 'Wallout Plug' : eleinstallation.hardwire === true ? 'Hardwire' : ''}</span></button>
                        </div> : ''}

                    </div>
                    <div className='price_info'>
                        <div className='price_part'>
                            <div className='price_amt'>
                                <h3>620,22 €</h3>
                            </div>
                            <div className='price_sub'>
                                <p>incl. VAT & excl. Shipping</p>
                            </div>
                        </div>
                        <div className='buy_btn'>
                            <button className='nbtn'>buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;