import React, { useState } from "react";
import tutorialsData from "../data/TutorialsData";
import OutlinePanel from "./OutlinePanel";
import ArticlePanel from "./ArticlePanel";

function TutorialBody() {
  const [currentArticle, setCurrentArticle] = useState(tutorialsData[0]);
  const [toggleLeftPanel, setToggleLeftPanel] = useState(false)
  return (
    <div className="df">
      <div  className="outline">
        <OutlinePanel
          tutorials={tutorialsData}
          onSelectArticle={setCurrentArticle}
        />
      </div>
      <div>
        <ArticlePanel article={currentArticle} />
      </div>
    </div>
  );
}

export default TutorialBody;
