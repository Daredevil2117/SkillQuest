import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    const handleTitleClick = ()=>{
        navigate("/")
    }
  return (
    <div>
      <div className="header-section">
        <div className="df jc_sb pd0_10 ai_c h100p">
          <div onClick={()=>handleTitleClick()} className="nav-title cp">SkillQuest</div>
          <div className="nav-heading">JavaScript Interview Preparation</div>
          <div className="nav-message">Welcome !!</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
