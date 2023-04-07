import { useCallback, useState } from "react"
import letterContext from "./letterContext";
import changebg from "../images/bg.png";

export default function LetterState(props) {

    //  Make State 
    const [neonselect, setNeonSelect] = useState(false);
    const [styleColor, setStyleColor] = useState("#ffffff");
    const [rarcewaycustomcolor, setRacewayCustomcolor] = useState("#ffffff");
    const [fontsizeInfooter, setFontSizeINFooter] = useState(false);
    const [paneloption, setPanelOption] = useState({
        text: true,
        logo: false,
        background: false
    });
    const [placement, setPlacement] = useState({
        indoor: false,
        outdoor: false
    });
    const [fixingkit, setFixingKit] = useState({
        wallmounted: false,
        hangingchain: false,
        freestanding: false
    });
    const [poweradapter, setPowerAdapter] = useState({
        uk_ireland: false,
        europe: false,
        australia_nz: false,
        usa_canada: false,
        japan: false
    });
    const [eleinstallation, setEleInstallation] = useState({
        walloutplug: false,
        hardwire: false
    });
    const [bgfileupload, setBGFileUpload] = useState(changebg);
    const [litoption, setLitOption] = useState({
        frontlit:false,
        backlit:false,
        doublelit:false,
        fulllit:false
    });
    const [racewayColor, setRaceWayColor] = useState({
       black:false,
       metal:false,
       goldbrushesh:false,
       custom:false
    });
    const [boxshape, setBoxShape] = useState({
        cutaround: false,
        ractangular: false,
        nobackboard: false
    });
    const [test, setTest] = useState({
        circlecolor:"#ffffff",
        ractangularcolor:"#ffffff"
    });


    //Make Functions

    const Show_Neon_Select = useCallback((type) => {
        if (type === 'SHOW_NEON_OPTION') {
            setNeonSelect(true);
        } else {
            setNeonSelect(false);
        }
    }, []);

    const Update_Placement = useCallback((active) => {
        setPlacement({
            indoor: active === "indoor",
            outdoor: active === "outdoor"
        });
    }, []);

    const Update_Fixingkit = useCallback((active) => {
        setFixingKit({
            wallmounted: active === "wallmounted",
            hangingchain: active === "hangingchain",
            freestanding: active === "freestanding"
        });
    }, []);

    const Update_PowerAdapter = useCallback((active) => {
        setPowerAdapter({
            uk_ireland: active === "uk_ireland",
            europe: active === "europe",
            australia_nz: active === "australia_nz",
            usa_canada: active === "usa_canada",
            japan: active === "japan"
        });
    }, []);

    const Update_Electrical_Installation = (active) => {
        setEleInstallation({
            walloutplug: active === 'walloutplug',
            hardwire: active === 'hardwire'
        });
    };

    const Update_Panel_Option = (active) => {

        setPanelOption({
            text: active === 'text',
            logo: active === 'logo',
            background: active === 'background',
        });
    };

    const Upload_BackgroundFile = (event) => {
        const file = event.target.files[0];
        const uploadedImage = window.URL.createObjectURL(file);
        const image = new Image();
        image.src = uploadedImage;
        setBGFileUpload(image.src);
    };

    const Update_Lit_Option = (active) => {
        setLitOption({
          frontlit:active === 'frontlit',
          backlit:active === 'backlit',
          doublelit:active === 'doublelit',
          fulllit:active === 'fulllit',
        });
    };

    const Update_Raceway_Color = (active) => {
        setRaceWayColor({
            black:active === "black",
            metal:active === "metal",
            goldbrushesh:active === "goldbrushesh",
            custom:active === "custom"
       });
    };

    const Update_Box_Shape = (active) => {
        setBoxShape({
            cutaround: active === "cutaround",
            ractangular: active === "ractangular",
            nobackboard: active === "nobackboard"
        });
    };

    return (
        <letterContext.Provider value={{ test, setTest, boxshape, Update_Box_Shape, rarcewaycustomcolor, setRacewayCustomcolor, racewayColor, Update_Raceway_Color, setStyleColor, styleColor, litoption, Update_Lit_Option, bgfileupload, Upload_BackgroundFile, paneloption, Update_Panel_Option, poweradapter, Update_PowerAdapter, fixingkit, Update_Fixingkit, Update_Placement, Update_Electrical_Installation, setFontSizeINFooter, fontsizeInfooter, eleinstallation, placement, neonselect, Show_Neon_Select }}>
            {props.children}
        </letterContext.Provider>
    )
}