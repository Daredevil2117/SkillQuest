import React from "react";

function ArticlePanel({article}) {
  return (
    <div className="panel tutorial-text">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticlePanel;
