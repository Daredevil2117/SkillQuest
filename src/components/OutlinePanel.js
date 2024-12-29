import React, { useState } from "react";

function OutlinePanel({tutorials, onSelectArticle}) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="panel" style={{position:"relative"}}>
      <div style={{position:"absolute", right:"0", fontSize:"10px"}}>
        Toggle ME
      </div>
      <div className="pd10" style={{fontWeight:"600", fontSize:"1.2rem"}}>Js Interview Questions !!</div>
      <div>
        {tutorials.map((item,index) => (
          <div
            key={item.id}
            onClick={() => {onSelectArticle(item);setSelected(index)}}
            className="outline-item cp"
            style={{
              padding:"3px 14px",
              fontWeight: "400",
              backgroundColor: selected === index ? "#CADCFC" : "#f3eeee",
              fontSize:"1.1rem",
            }}
            onMouseEnter={(e) => {
              if (selected !== index) e.target.style.backgroundColor = "#cccccc";
            }}
            onMouseLeave={(e) => {
              if (selected !== index) e.target.style.backgroundColor = "#f3eeee";
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutlinePanel;
