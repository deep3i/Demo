import { useContext } from "react";
import signContext from "../context/signContext";

export default function BackboardShape() {

    const context = useContext(signContext)
    const { Backboard_Shape, backboardshape, styleletter } = context

    return (
        <>
            <div className="backboard-shape">

                <div className="card-option">
                    <h3>Letter Mounting Setup</h3>

                    <div className="btn_row">

                        <button onClick={() => Backboard_Shape("independent")} className={`nbtn ${backboardshape.independent === true ? 'act' : ''}`} >
                            <span>Independent letters</span>
                        </button>

                       { styleletter.Lightboxletter === true ?  <button onClick={() => Backboard_Shape("backboard")} className={`nbtn ${backboardshape.backboard === true ? 'act' : ''}`} >
                            <span>Backboard</span>
                        </button> : ''}
                        
                        <button disabled={styleletter.Lightboxletter === true ? true : false} style={{background:`${styleletter.Lightboxletter === true ? '#eff1f3' : ''}`}} onClick={() => Backboard_Shape("raceway")} className={`nbtn ${backboardshape.raceway === true ? 'act' : ''}`}>
                            <span>Race way</span>
                        </button>

                </div>
            </div>


            {/* <div>
                <LegacyCard sectioned>
                    <h3 style={{ fontWeight: "bold", color: "black", marginBottom: "10px" }}>Backboard shape</h3>
                    <div className="backboard">
                        <ButtonGroup spacing="loose">
                            <Button size="large">Race way</Button>
                            <div className="onclick">
                                <Button size="large">Independent letter</Button>
                            </div>
                        </ButtonGroup>
                    </div>
                </LegacyCard>
            </div> */}

        </div>
        </>
    )
}