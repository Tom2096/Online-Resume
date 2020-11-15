import React, { useEffect, useRef } from "react";

import {connect} from "react-redux";
import {createSession} from "./actions/watson";
import {toggleChat, setOffset} from "./actions/app";

// import components
import Chat from "./components/chat/Chat";

import Home from "./components/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";

import {CSSTransition} from "react-transition-group";


const refreshTimer = 4 * 60000;

function App({showChat, offset, createSession, toggleChat, setOffset}) {

  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);
  

  const scrollToHome = () => {
    refHome.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToAbout = () => {
    refAbout.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToProjects = () => {
    refProjects.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToContact = () => {
    refContact.current.scrollIntoView({ behavior: "smooth" });
  }

  //Refresh and Create Watson Sessions

  useEffect(() => {
    createSession();
    const intervalID = setInterval(() => {
      console.log("session refreshed");
      createSession();
    }, refreshTimer);

    return () => clearInterval(intervalID);
  }, [])

  //Initalize setOffsetY on Scroll

  const handleScroll = () => setOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app">

        <div className="navbar">
            <div className="nav-bar-veil"></div>
            <div className="nav-center">
                <button 
                  className="nav-button nav-home"
                  onClick={() => scrollToHome()}
                >Home</button>
                <button 
                  className="nav-button nav-about"
                  onClick={() => scrollToAbout()}
                >About</button>
                <button 
                  className="nav-button nav-projects"
                  onClick={() => scrollToProjects()}
                >Projects</button>
                <button 
                  className="nav-button nav-contact"
                  onClick={() => scrollToContact()}
                >Contact</button>
            </div>
        </div>

      <div className="section-home">
        <div ref={refHome}></div>
        <div 
          className="section-home-background"
          style={{transform: "translateY(" + offset * 0.5 + "px)"}}
        ></div>
        <Home />
      </div>

      <div className="section-about">
        <div ref={refAbout}></div>
        <About />
      </div>
      
      <div className="section-projects">
        <div ref={refProjects}></div>
        <div className="section-projects-background"></div>
        <Projects />
      </div>

      <div className="section-contact">
        <div ref={refContact}></div>
        <Contact />
      </div>

      <CSSTransition
        in={showChat}
        timeout={300}
        classNames="chat-animation"
        unmountOnExit={true}
        appear={false}
      >
        <Chat />
      </CSSTransition>
      <CSSTransition
        in={!showChat}
        timeout={300}
        classNames="chat-icon-animation"
        unmountOnExit={true}
        appear={false}
      >
        <img 
            className="chat-icon"
            onClick={() => toggleChat()} 
            src="https://img.icons8.com/cotton/2x/chat.png"
        ></img>
      </CSSTransition>
    </div>
  );
}

const mapStateToProps = state => ({
  showChat: state.app.showChat,
  offset: state.app.offset
})

export default connect(mapStateToProps, {createSession, toggleChat, setOffset})(App);