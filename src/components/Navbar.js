import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {  
  const navigate = useNavigate();
  const handleClickCTA = (CTA) => {
    switch (CTA) {
      case "quizz":
        navigate("/jsInterviewQuestions/quizz");
        break;
      case "progress":
        navigate("/jsInterviewQuestions/progress");
        break;
    }
  };
  return (
    <div className="header-navbar">
      <div className="cp" onClick={()=>handleClickCTA("quizz")}>Quizz</div>
      <div className="cp" onClick={()=>handleClickCTA("progress")}>Progess</div>
      <div>
      <button
          onClick={()=>props.toggleOutline()}
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
          }}
        >
          Toggle Outline
        </button>
        <button
          onClick={()=>props.toggleCodeEditor()}
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
          }}
        >
          Toggle Code Editor
        </button>
      </div>
    </div>
  );
}

export default Navbar;
