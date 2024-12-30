import React, { useState } from "react";
import tutorialsData from "../data/TutorialsData";
import OutlinePanel from "./OutlinePanel";
import ArticlePanel from "./ArticlePanel";
import CodeEditor from "./CodeEditor";

function TutorialBody(props) {
  const [currentArticle, setCurrentArticle] = useState(tutorialsData[0]);
  return (
    <>
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      <div
        style={{
          flex: props.showOutline ? "1" : "0",
          transition: "flex 0.3s ease, opacity 0.3s ease",
          opacity: props.showOutline ? 1 : 0,
          borderRight: props.showOutline ? "1px solid #ddd" : "none",
          overflow: "hidden",
        }}
      >
        {props.showOutline && <OutlinePanel
          tutorials={tutorialsData}
          onSelectArticle={setCurrentArticle}
        />}
      </div>
      <div
        style={{
          flex: props.showOutline && props.showCodeEditor ? "2" : "3",
          padding: "10px",
          borderRight: props.showCodeEditor ? "1px solid #ddd" : "none",
          transition: "flex 0.3s ease",
        }}
      >
         <ArticlePanel article={currentArticle} />
      </div>
      <div
        style={{
          flex: props.showCodeEditor ? "2" : "0",
          transition: "flex 0.3s ease, opacity 0.3s ease",
          opacity: props.showCodeEditor ? 1 : 0,
          overflow: "hidden",
        }}
      >
        {props.showCodeEditor && <CodeEditor />}
      </div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
      </div>
    </div>
    </>
  );
}

export default TutorialBody;
