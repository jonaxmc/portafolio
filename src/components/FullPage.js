import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import { HomeSection } from './sections/HomeSection';
import { AbaoutSection } from './sections/AbaoutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProyectSection } from './sections/ProyectSection';
import { ContactSection } from './sections/ContactSection';



export const Fullpage = (dispatch) => (


  <ReactFullpage
    //fullpage options
    // anchors={anchors}
    // navigationTooltips={anchors}
    licenseKey= '2xmGhXS^d3'
    navigation //Mostrar los indicadores
    // autoScrolling={true} //OJOOO
    scrollBar={false} //Ocultar el scrollbar
    scrollingSpeed={700}
    responsiveWidth={800}
    //Scrolling
    css3={true}
    // autoScrolling= {true}
    fitToSection={true}
    fitToSectionDelay={1000}
    easing='easeInOutCubic'
    easingcss3='ease'
    onLeave={(origin, destination, direction) => {
      if (destination.index === 0) {
        document.getElementsByClassName("jonaxmc")[1].style.fill = "#ccf381";
      } else if (destination.index !== 0) {
        document.getElementsByClassName("jonaxmc")[1].style.fill = "#537F82";
      }
    }}
    afterLoad={(origin, destination, direction) => {
      if (destination.index === 0) {
        document.getElementsByClassName("jonaxmc")[1].style.fill = "#ccf381";
      }
    }}

    render={({ state, fullpageApi }) => {


      return (
        <ReactFullpage.Wrapper className="fullpage-screen">
          <div className="section section-home ">
            <HomeSection />
          </div>
          <div className="section section-abaout ">
            <AbaoutSection />
          </div>
          <div className="section section-skills ">
            <SkillsSection />
          </div>
          <div className="section section-proyects ">
            <ProyectSection />
          </div>
          <div className="section section-contacts ">
            <ContactSection />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
