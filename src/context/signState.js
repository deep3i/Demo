import React, { useState, useEffect, useCallback, useContext } from "react";
import { useRef } from "react";
import signContext from "./signContext";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

//Fonts
import Marquee from "../Fonts/Codystar_Light.json";
import DeliciousHandrawn from "../Fonts/Delicious Handrawn_Regular.json";
import Notosans from "../Fonts/Noto Sans Tagbanwa_Regular.json";
import ElectraLT from "../Fonts/Electra LT Std_Regular.json";
import Aurella from "../Fonts/Aurella_Script.json";
import Lacosta from "../Fonts/Lacosta PERSONAL USE ONLY_Regular.json";
import pacifico from "../Fonts/Pacifico_Regular.json";
import letterContext from "./letterContext";

export default function Signstate(props) {

    const context = useContext(letterContext);
    const { bgfileupload, litoption, boxshape, styleColor, racewayColor, test, rarcewaycustomcolor } = context;

    const textRef = useRef();
    const [open, setOpen] = useState(false);
    const [stylecolor, setStyleColor] = useState(false);
    const [nonilluletter, setNonilluLetter] = useState(false);
    const [blockpicker, setBlockPicker] = useState(false);
    const [blockpickervalue, setBlockPickerValue] = useState("#ffffff");
    const [chennellettertext, setChennelLetterText] = useState("Supernova");
    const [updatetext, setUpdateText] = useState('Supernova');
    const [opensidebar, setOpenSidebar] = useState(true);
    const [glowswitch, setGlowSwitch] = useState(false);
    const [fontchennelletter, setFontChennelLetter] = useState(Notosans);
    const [activebtn, setActiveBtn] = useState(
        {
            delicioushandrawn: false,
            electralt: false,
            aurella: false,
            lacosta: false,
            pacifico: false,
            addraceway: false,
            independentletter: false,
        }
    );
    const [fontsizechennelletter, setFontSizeChennelLetter] = useState(50);
    const [fontsizebtn, setFontSizeBtn] = useState({
        twenty: false,
        thirty: false,
        fourty: false,
        fifty: false,
        sixty: false,
        seventy: false,
        eighty: false,
        hundred: false,
        onehundredten: false,
        onehundredtwenty: false,
        onehundredthirty: false,
        onehundredfourty: false,
    });
    const [backboardshape, setBackboardShape] = useState({
        raceway: false,
        independent: false,
        backboard: false,
    });
    const [styleletter, setStyleLetter] = useState({
        ChennelLetter: true,
        Neonledletter: false,
        Nonilluminateletter: false,
        Lightboxletter: false,
        Marqueeletter: false,
        Fulllitletter: false,
        // defaultletter: true,
    });
    const [illuminatebtn, setIlluminateBtn] = useState({
        steel: true,
        metal: false,
        acrylic: false,
    });

    const Fontarr = ["delicioushandrawn", "electralt", "aurella", "lacosta", "pacifico"]
    const handleToggle = useCallback((value) => {
        if (value === "fonts") {
            setOpen((open) => !open)
            setStyleColor(false);
        } else if (value === "color") {
            setStyleColor((stylecolor) => !stylecolor)
            setOpen(false);
        } else {
            setOpen(false);
            setStyleColor(false);
        }
    }, []);

    const OpenNonilluminateletter = useCallback(() => setNonilluLetter((nonilluletter) => !nonilluletter), []);

    // Main functions

    const ActiveStyleletter = (active) => {
        setStyleLetter({
            ChennelLetter: active === 'chennel',
            Neonledletter: active === 'neonled',
            Nonilluminateletter: active === 'nonilluminate',
            Lightboxletter: active === 'lightbox',
            Marqueeletter: active === 'marquee',
            Fulllitletter: active === 'fulllit',
            defaultletter: active === "default"
        });
    };

    const Backboard_Shape = (active) => {
        setBackboardShape({
            raceway: active === 'raceway',
            independent: active === 'independent',
            backboard: active === 'backboard'
        });
    };

    const Active_Font_Btn = (active) => {
        setActiveBtn({
            delicioushandrawn: active === "del",
            electralt: active === "ele",
            aurella: active === "aur",
            lacosta: active === "lac",
            pacifico: active === "pac"
        });
    };

    const Active_Size_Btn = (active) => {
        setFontSizeBtn({
            twenty: active === '20',
            thirty: active === '30',
            fourty: active === '40',
            fifty: active === '50',
            sixty: active === '60',
            seventy: active === '70',
            eighty: active === '80',
            hundred: active === '100',
            onehundredten: active === '110',
            onehundredtwenty: active === '120',
            onehundredthirty: active === '130',
            onehundredfourty: active === '140',
        })
    };

    const Update_Font = (value) => {
        const Value = value;
        if (Value === Fontarr[0]) {
            setFontChennelLetter(DeliciousHandrawn);
            Active_Font_Btn("del");
        } else if (Value === Fontarr[1]) {
            setFontChennelLetter(ElectraLT);
            Active_Font_Btn("ele");
        } else if (Value === Fontarr[2]) {
            setFontChennelLetter(Aurella);
            Active_Font_Btn("aur");
        } else if (Value === Fontarr[3]) {
            setFontChennelLetter(Lacosta);
            Active_Font_Btn("lac");
        } else if (Value === Fontarr[4]) {
            setFontChennelLetter(pacifico);
            Active_Font_Btn("pac");
        } else {
            setFontChennelLetter(fontchennelletter);
        }
    };

    const Change_Chennel_text = (e) => {
        setUpdateText(e.target.value);
    };

    const Update_Text = () => {
        setChennelLetterText(updatetext);
    };

    const Update_Non_Letter = (active) => {
        setIlluminateBtn({
            steel: active === "steel",
            metal: active === "metal",
            acrylic: active === "acrylic",
        });
    };

    //All Effect and shape and letter 

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ canvas: textRef.current });
        renderer.setClearColor("#ffffff", 0);
        renderer.setSize(window.innerWidth, window.innerHeight);

        //Background images
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(bgfileupload);
        scene.background = texture

        //orbit control to add camera view 
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.2;
        controls.enableZoom = true;

        const fontLoader = new FontLoader();
        const font = fontLoader.parse(fontchennelletter);
        const textGeometry = new TextGeometry(updatetext, {
            font,
            size: fontsizechennelletter / 100, //Size in threejs (1 unit = 1 m)
            height: 0.2,
        });

        //Glow Effect4
        const params = {
            exposure: 1,
            bloomStrength: glowswitch === true ?  0.6 : '',
            bloomThreshold: 0,
            bloomRadius: 0,
        };
        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass();
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;

        const bloomComposer = new EffectComposer(renderer);
        bloomComposer.renderToScreen = true;
        bloomComposer.addPass(renderScene);
        bloomComposer.addPass(bloomPass);

        //Default letter

        // if (styleletter.defaultletter === true) {
        //     //Create text default

        //     // Set up text material with red color and white border
        //     const textMaterial = new THREE.MeshPhongMaterial({
        //         color: blockpickervalue,
        //         specular: '#ff00ff',
        //         shininess: 1,
        //         side: THREE.FrontSide,
        //     });
        //     textMaterial.side = THREE.DoubleSide;
        //     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        //     textMesh.position.set(-5, -0.03, 0);
        //     scene.add(textMesh);

        //     const backMaterial = new THREE.MeshPhongMaterial({
        //         color: 0xffffff,
        //         specular: 0x111000,
        //         shininess: 10,
        //         side: THREE.BackSide,
        //         polygonOffset: true,
        //         polygonOffsetFactor: 1,
        //         polygonOffsetUnits: 1,
        //     });

        //     // Create backside text mesh with updated material
        //     const backMesh = new THREE.Mesh(textGeometry, backMaterial);
        //     backMesh.position.x = -5
        //     backMesh.position.z = -0.01; // offset slightly behind front text mesh
        //     backMesh.receiveShadow = true;

        //     const group = new THREE.Group();
        //     group.add(textMesh);
        //     group.add(backMesh);
        //     scene.add(group);

        //     //Light on text
        //     const light = new THREE.HemisphereLight(0xffffff, 0x888888);
        //     light.position.set(0, 0, 10);
        //     scene.add(light);

        //     // Make the text draggable
        //     let dragging = false;
        //     let currentX;
        //     let currentY;
        //     textRef.current.addEventListener("mousedown", function (event) {
        //         dragging = true;
        //         currentX = event.clientX;
        //         currentY = event.clientY;
        //     });
        //     textRef.current.addEventListener("mousemove", function (event) {
        //         if (dragging) {
        //             const deltaX = event.clientX - currentX;
        //             const deltaY = event.clientY - currentY;
        //             group.position.x += deltaX / 35;
        //             group.position.y -= deltaY / 35;
        //             currentX = event.clientX;
        //             currentY = event.clientY;
        //         }
        //     });
        //     textRef.current.addEventListener("mouseup", function () {
        //         dragging = false;
        //     });
        //     function animate() {
        //         requestAnimationFrame(animate);
        //         renderer.render(scene, camera);
        //     }
        //     animate();
        // };

        //chennel letter with frontlit, backlit, fulllit

        if (styleletter.ChennelLetter === true) {

            const frontMaterial = new THREE.MeshBasicMaterial({ color: styleColor });
            const backMaterial = new THREE.MeshBasicMaterial({ color: blockpickervalue });
            const fullMaterial = new THREE.MeshBasicMaterial({ color: blockpickervalue });


            const letters = [];
            textGeometry.center();
            const letterWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
            textGeometry.translate(-(letterWidth / 1.7), 0, 0);

            //   for (let i = 0; i < textGeometry.parameters.shapes.length; i++) {
            const letter = new THREE.Mesh(textGeometry, fullMaterial);
            letter.position.x = letterWidth;
            letter.position.y -= 0.2;
            letter.position.z = 0;
            letters.push(letter);

            const backLetter = letter.clone();
            backLetter.material = backMaterial;
            backLetter.position.z = -0.01;
            letters.push(backLetter);

            const fullLetter = letter.clone();
            fullLetter.material = frontMaterial;
            fullLetter.position.z = 0.01;
            letters.push(fullLetter);

            letters.forEach(letter => scene.add(letter));

            // Create container
            const bbox = new THREE.Box3().setFromObject(letter);
            const containerWidth = bbox.getSize(new THREE.Vector3()).x + fontsizechennelletter / 100;
            const containerHeight = backboardshape.raceway === true ? fontsizechennelletter / 100 : 0;
            const containerShape = new THREE.Shape();
            containerShape.moveTo(0, 0);
            containerShape.lineTo(containerWidth, 0);
            containerShape.lineTo(containerWidth, containerHeight);
            containerShape.lineTo(0, containerHeight);
            containerShape.lineTo(0, 0);
            const containerGeometry = new THREE.ShapeGeometry(containerShape);
            const containerMaterial = new THREE.MeshBasicMaterial(racewayColor.custom === true ? {
                color: rarcewaycustomcolor,
                specular: 0xffff,
                transparent: true,
                shininess: 100,
                metalness: 1,
                roughness: 0,
                envMapIntensity: 1.5,
                side: THREE.DoubleSide,
            } : racewayColor.black === true ? {
                color: '#000000',
                specular: 0xffff,
                transparent: true,
                shininess: 100,
                metalness: 1,
                roughness: 0,
                envMapIntensity: 1.5,
                side: THREE.DoubleSide,
            } : racewayColor.metal === true ? {
                color: 0x555555, // Set the base color to a dark gray
                metalness: 0.9, // Set the material to a metallic material with high metalness
                roughness: 0.2, // Set the roughness to 0.2 for a slightly rough surface
                reflectivity: 0.5, // Set the reflectivity to create a shiny surface
                side: THREE.DoubleSide,
            } : racewayColor.goldbrushesh === true ? {
                color: 0xffd700, // Set the base color to a gold color
                metalness: 1, // Set the material to a metallic material
                roughness: 0.1, // Set the roughness to 0.1 for a slightly rough surface
                reflectivity: 0.5, // Set the reflectivity to create a shiny surface
                side: THREE.DoubleSide,
            } : {
                color: "#ffffff",
                specular: 0xffff,
                transparent: true,
                shininess: 100,
                metalness: 1,
                roughness: 0,
                envMapIntensity: 1.5,
                side: THREE.DoubleSide,
            });

            const containerMesh = new THREE.Mesh(containerGeometry, containerMaterial);
            // containerMesh.position.copy(letter.position);
            containerMesh.position.z -= 0.2;
            containerMesh.position.x -= fontsizechennelletter / 100;
            containerMesh.position.y -= fontsizechennelletter / 130; //30cm = 0.04, 40cm = 0, 50cm = -0.06
            letter.add(containerMesh);                                      //60cm = -0.1, 70cm = -0.18, 80cm = -0.24
            // if (fulllitoption === true) {                                // etc try /100 plus 15 in
            // fullLetter.add(containerMesh);
            //     // backLetter.add(containerMesh);
            // } else {
            fullLetter.add(containerMesh);
            backLetter.add(containerMesh);
            // }

            const group = new THREE.Group();
            group.add(letter);
            // if (fulllitoption === true) {
            group.add(backLetter);
            group.add(fullLetter);
            // } else {
            // group.add(backLetter);
            // group.add(fullLetter);
            // }
            group.add(containerMesh);
            group.position.set(-5, 0, 0)
            scene.add(group);

            function animate() {
                // if (glowswitch === true) {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                bloomComposer.render()
                // }
            }
            animate();
        }

        //  Neon Led letter 

        if (styleletter.Neonledletter === true) {

            // Create the front-side material for the text
            const frontMaterial = new THREE.MeshBasicMaterial({
                color: "#ff00ff", // Set the color of the text
                transparent: true, // Make the material transparent
                opacity: 0.7, // Set the opacity of the material
            })

            // Create the back-side material for the text
            const backMaterial = new THREE.MeshBasicMaterial({
                color: "#ff00ff", // Set the color of the background
            })

            // Create the text mesh with the front and back materials
            const textMesh = new THREE.Mesh(textGeometry, [backMaterial, frontMaterial])
            textMesh.position.set(0, 0, 0)

            // Create the neon light material for the front of the text
            const neonMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 1 }, // Used to animate the light effect
                    thickness: { value: 0.1 }, // Set the thickness of the light effect
                    glowColor: { value: new THREE.Color("#ffff00") }, // Set the color of the light
                },
                vertexShader: `
        uniform float time;
        uniform float thickness;
        varying vec3 vNormal;
  
        void main() {
          vNormal = normal;
          vec3 pos = position + normal * thickness * sin(time);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
                fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
  
        void main() {
          float intensity = pow(0.2 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
          gl_FragColor = vec4(glowColor * intensity, 1.0);
        }
      `,
                transparent: true, // Make the material transparent
                side: THREE.FrontSide, // Only apply the material to the front of the text
            })
            // Create a mesh to represent the neon light effect
            const neonMesh = new THREE.Mesh(textGeometry, neonMaterial)

            // Set the position of the neon light mesh
            neonMesh.position.set(0, 0, 0)

            // Create container
            const bbox = new THREE.Box3().setFromObject(textMesh);
            const containerWidth = bbox.getSize(new THREE.Vector3()).x + 0.1;
            const containerHeight = backboardshape.raceway === true ? 0.5 : 0;
            const containerShape = new THREE.Shape();
            containerShape.moveTo(0, 0);
            containerShape.lineTo(containerWidth, 0);
            containerShape.lineTo(containerWidth, containerHeight);
            containerShape.lineTo(0, containerHeight);
            containerShape.lineTo(0, 0);
            const containerGeometry = new THREE.ShapeGeometry(containerShape);
            const containerMaterial = new THREE.MeshBasicMaterial({
                color: '#DEB886',
                specular: 0xffff,
                transparent: true,
                shininess: 100,
                metalness: 1,
                roughness: 0,
                envMapIntensity: 1.5,
                side: THREE.DoubleSide,
            });

            const containerMesh = new THREE.Mesh(containerGeometry, containerMaterial);
            containerMesh.position.copy(textMesh.position);
            containerMesh.position.z -= 0.1;
            textMesh.add(containerMesh);

            // Create a group to contain the text and neon light meshes
            const group1 = new THREE.Group()
            group1.add(textMesh, neonMesh)
            group1.position.set(-5, 0, 0)
            group1.add(containerMesh)
            scene.add(group1)

            // Create a line around the text mesh
            const lineGeometry1 = new THREE.EdgesGeometry(textGeometry)
            const lineMaterial1 = new THREE.LineBasicMaterial({
                color: "#000fff", //Set the color of the line
            })
            const lineMash = new THREE.LineSegments(lineGeometry1, lineMaterial1)
            lineMash.position.set(-5, 0, 0.1)
            scene.add(lineMash)

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                neonMaterial.uniforms.time.value += 0
                if (glowswitch === true) {
                    bloomComposer.render()
                }

            }
            animate();
        }

        //  Non - illuminated letter

        if (styleletter.Nonilluminateletter === true) {
            // Set up materials Steel, metal and Acrilic

            const textGeometryNon = new TextGeometry(chennellettertext, {
                font,
                size: fontsizechennelletter / 100, //Size in threejs (1 unit = 1 m)
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.05,
                bevelSize: 0.05,
                bevelSegments: 10,
            });

            const materials = {
                steel: new THREE.MeshStandardMaterial({
                    color: '#ffffff',
                    metalness: 1,
                    roughness: 0.4,
                }),
                metal: new THREE.MeshStandardMaterial({
                    color: '#ffffff',
                    metalness: 0.8,
                    roughness: 0.1,
                }),
                acrylic: new THREE.MeshStandardMaterial({
                    color: '#ffffff',
                    metalness: 0,
                    roughness: 0.4,
                    transparent: true,
                    opacity: 0.8,
                })
            }

            const Steel = materials.steel;
            const Metal = materials.metal;
            const Acrylic = materials.acrylic;

            // const meshSteel = new THREE.Mesh(geometry, nonilluminateletter === 1 ? Steel : nonilluminateletter === 2 ? Acrylic : nonilluminateletter === 3 ? Metal : Steel)
            const meshSteel = new THREE.Mesh(textGeometryNon, illuminatebtn.steel === true ? Steel : illuminatebtn.metal === true ? Metal : illuminatebtn.acrylic === true ? Acrylic : Steel)
            meshSteel.position.set(-5, 0, 0)
            scene.add(meshSteel)

            // Add ambient light, hemisphere light, directionallight

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(0.5, 0.5, 1)
            scene.add(directionalLight);

            const ambientLight = new THREE.AmbientLight(0xffffff, 1)
            scene.add(ambientLight)

            const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
            scene.add(hemisphereLight);

            //Add container on backside of Text

            const bbox = new THREE.Box3().setFromObject(meshSteel);
            const containerWidth = bbox.getSize(new THREE.Vector3()).x + 0.1;
            const containerHeight = backboardshape.raceway === true ? 0.5 : 0;
            const containerShape = new THREE.Shape();
            containerShape.moveTo(0, 0);
            containerShape.lineTo(containerWidth, 0);
            containerShape.lineTo(containerWidth, containerHeight);
            containerShape.lineTo(0, containerHeight);
            containerShape.lineTo(0, 0);
            const containerGeometry = new THREE.ShapeGeometry(containerShape);
            const containerMaterial = new THREE.MeshBasicMaterial({
                color: "#fff00f",
                specular: 0xffff,
                transparent: true,
                shininess: 100,
                metalness: 1,
                roughness: 0,
                envMapIntensity: 1.5,
                side: THREE.DoubleSide
            });

            const containerMesh = new THREE.Mesh(containerGeometry, containerMaterial);
            containerMesh.position.copy(meshSteel.position);
            containerMesh.position.z -= 0.1;
            meshSteel.add(containerMesh);

            const group = new THREE.Group();
            group.add(containerMesh);
            group.add(meshSteel);
            scene.add(group);

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate();
        }

        //  Lightbox Shape

        if (styleletter.Lightboxletter === true) {

            const textMaterial = new THREE.MeshPhongMaterial({ color: '#ff00f0' });
            const text1 = new THREE.Mesh(textGeometry, textMaterial);
            text1.position.set(-5, 0, 0);
            scene.add(text1);

            // Set up the light
            const light = new THREE.PointLight(0xffffff, 1, 100);
            light.position.set(0, 0, 5);
            scene.add(light);

            //Simple Plate illuminate Shape 1
            const CircleGeometry = new THREE.CircleGeometry(2, 32);
            const CircleMaterial = new THREE.MeshPhongMaterial({
                color: test.circlecolor,
                emissiveIntensity: 2,
                side: THREE.DoubleSide,
            });

            const Circle = new THREE.Mesh(CircleGeometry, CircleMaterial);
            Circle.position.set(-3.3, 0.2, 0)
            scene.add(boxshape.cutaround === true ? Circle : '');

            //Simple Plate illuminate Shape 2 cirlce
            const SquareGeometry = new THREE.PlaneGeometry(4, 1);
            const SquareMaterial = new THREE.MeshPhongMaterial({
                color: test.ractangularcolor,
                // emissive: Squarecolor,
                emissiveIntensity: 2,
                side: THREE.DoubleSide,
            });

            const SquarePlate = new THREE.Mesh(SquareGeometry, SquareMaterial);
            SquarePlate.position.set(-3.3, 0.1, 0)
            scene.add(boxshape.ractangular === true ? SquarePlate : '');

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate();
        }

        //  MarqueeLetter Shape

        if (styleletter.Marqueeletter === true) {

            // // Create the text geometry and extrude it to give it depth
            const fontLoader = new FontLoader();
            const marqueeFont = fontLoader.parse(Marquee);
            const latoFont = fontLoader.parse(Notosans);

            const marqueeGeometry = new TextGeometry(updatetext, {
                font: marqueeFont,
                size: 0.9,
                height: 0.1,
            });

            const latoGeometry = new TextGeometry(updatetext, {
                font: latoFont,
                size: 1,
                height: 0.1,
            });

            const marqueeMaterial = new THREE.MeshPhongMaterial({
                color: "#ffffff",
                side: THREE.FrontSide,
            });

            const latoMaterial = new THREE.MeshPhongMaterial({
                color: "#ff0000",
                side: THREE.DoubleSide,
            });

            const marqueeMesh = new THREE.Mesh(marqueeGeometry, marqueeMaterial);
            const latoMesh = new THREE.Mesh(latoGeometry, latoMaterial);
            marqueeMesh.position.set(-2.9, 0, 0.5);
            latoMesh.position.set(-3, 0, 0);

            scene.add(marqueeMesh);
            scene.add(latoMesh);

            const light3 = new THREE.AmbientLight("#ffffff", 1, 2);
            light3.position.set(0, 0, 0);
            scene.add(light3);

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate();
        }

    }, [chennellettertext, boxshape, litoption, bgfileupload, updatetext, styleletter, fontchennelletter, fontsizechennelletter, styleColor, backboardshape, glowswitch, illuminatebtn, blockpickervalue, racewayColor, rarcewaycustomcolor, test]);

    // All Letter Value Store in Array
    const StoreValue = [
        {
            "ChennelLetter":
            {
                text: chennellettertext,
                font: fontchennelletter.familyName,
                size: `${fontsizechennelletter}CM`,
                choosesize: "",
                logo: "",
                background: "",
                glowswitch: glowswitch,
                backboardshape: backboardshape,
                plug: "",
                poweradapte: "",
                fixingkit: "",
                placement: "",
            }
        },
        {
            "Neonledletter":
            {
                text: chennellettertext,
                font: fontchennelletter.familyName,
                size: `${fontsizechennelletter}CM`,
                choosesize: "",
                logo: "",
                background: "",
                backboardshape: "",
                plug: "",
                poweradapte: "",
                fixingkit: "",
                placement: "",
            }
        }
    ];

    console.log("outside useeffect:", boxshape);

    return (
        <signContext.Provider value={{ stylecolor, setFontSizeChennelLetter, handleToggle, open, opensidebar, chennellettertext, setOpenSidebar, setFontChennelLetter, textRef, setUpdateText, Change_Chennel_text, backboardshape, updatetext, Update_Text, setBackboardShape, ActiveStyleletter, glowswitch, setGlowSwitch, Backboard_Shape, Update_Font, Active_Font_Btn, nonilluletter, OpenNonilluminateletter, fontsizebtn, Active_Size_Btn, setBlockPicker, blockpicker, styleletter, illuminatebtn, activebtn, blockpickervalue, setBlockPickerValue, Update_Non_Letter }}>
            {props.children}
        </signContext.Provider>
    );
}