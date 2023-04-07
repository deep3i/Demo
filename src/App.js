import React, { useContext } from "react";
import '../src/css/menu.css';
import '../src/css/style.css';

import TopHeader from "./components/TopHeader";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import signContext from "./context/signContext";
import FixingKit from "./components/Fixingkit";
import Placement from "./components/Placement";
import Poweradapter from "./components/PowerAdapter";
import Plug from "./components/Plug";
import BackboardColor from "./components/Backboardcolor";
import Designpanel from "./components/Designpanel";
import Fontsize from "./components/FontSize";
import BackboardShape from "./components/Backboardshape";
import BoardShapes from "./components/BoardShapes";
import RacewayColor from "./components/RacewayColor";
import NonilluminateOption from "./components/Nonilluminate";
import { Collapsible } from "@shopify/polaris";
import letterContext from "./context/letterContext";
import Litoption from "./components/Litoption";
import StyleColor from "./components/StyleColor";

function App() {

  const context = useContext(signContext);
  const { opensidebar, styleletter, nonilluletter, backboardshape, setOpenSidebar } = context

  const lettercontext = useContext(letterContext);
  const { neonselect } = lettercontext

  return (
    <>
      <div className='mainarea'>
        <div className='container'>
          <TopHeader />
          <MainContent />
          <Footer />
        </div>
      </div>
      <div className="effect-list">
        <div className={`sidebar_close${opensidebar === true ? " open" : ""}`} >
          <button className="clsbtn" onClick={() => setOpenSidebar(!opensidebar)}><span><svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" /></svg></span></button>
        </div>
        <div id="ssbar" className={`sidebar${opensidebar === true ? " open" : ""}`}>
          <div className="inner_sidebar">
            <Designpanel />
            {styleletter.ChennelLetter === true || styleletter.Fulllitletter === true ? <Litoption/> : ''}
            <Collapsible open={styleletter.Nonilluminateletter === true ? nonilluletter : ''} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}>
              {styleletter.Nonilluminateletter === true ? <NonilluminateOption /> : ''}
            </Collapsible>
            <StyleColor/>
            {neonselect === true ? "" : <Fontsize />}
            {neonselect === true ? '' : <BackboardShape />}
            {backboardshape.independent === true ? "" : backboardshape.raceway === true ? <RacewayColor /> : ''}
            {backboardshape.independent === true ? "" : backboardshape.backboard === true ? <BackboardColor /> : ''}
            {backboardshape.independent === true ? "" : backboardshape.backboard === true ? <BoardShapes /> : ''}
            <Placement />
            <FixingKit />
            <Poweradapter />
            {/* <Plug /> */}
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
