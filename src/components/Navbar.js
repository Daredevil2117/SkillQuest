import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
