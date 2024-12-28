import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();
  const goToTutorialPage = () => {
    navigate("/jsInterviewQuestions");
  };
  return (
    <div>
      <Header />
      <div className="mid-section m10"></div>
      <div className="footer-section">
        <div className="df jc_c ai_c h100p">
          <button
            onClick={()=>goToTutorialPage()}
            className="button-bottom-01 fff cp"
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
