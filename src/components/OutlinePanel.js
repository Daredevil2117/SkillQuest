import React from "react";

function OutlinePanel({tutorials, onSelectArticle}) {
  return (
    <div className="panel">
      <div>Js Interview Questions !!</div>
      <div>
        {tutorials.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectArticle(item)}
            className="outline-item"
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutlinePanel;
