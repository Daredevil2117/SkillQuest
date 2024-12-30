import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TutorialBody from '../components/TutorialBody'

function Tutorial() {
  const [showOutline, setShowOutline] = useState(true);
  const [showCodeEditor, setShowCodeEditor] = useState(true);
  const toggleOutline = () => setShowOutline(!showOutline);
  const toggleCodeEditor = () => setShowCodeEditor(!showCodeEditor);
  return (
    <div>
        <div>
            <Header/>
            <Navbar toggleOutline={toggleOutline} toggleCodeEditor = {toggleCodeEditor}/>
            <TutorialBody showOutline={showOutline} showCodeEditor={showCodeEditor}/>
        </div>
      
    </div>
  )
}

export default Tutorial
