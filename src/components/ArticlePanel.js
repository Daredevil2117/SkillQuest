import React, { useState } from "react";

function ArticlePanel({ article, currentArticleId }) {
  const [markAsRead, setMarkAsRead] = useState(false);
  function addArticleRead(articleType, articleId) {
    let articlesData = localStorage.getItem("articles");
    if (articlesData) {
      articlesData = JSON.parse(articlesData);
    } else {
      articlesData = {
        jsArticles: [],
        reactArticles: [],
      };
    }
    if (articleType === "jsArticles") {
      if (!articlesData.jsArticles.includes(articleId)) {
        articlesData.jsArticles.push(articleId);
      }
    } else if (articleType === "reactArticles") {
      if (!articlesData.reactArticles.includes(articleId)) {
        articlesData.reactArticles.push(articleId);
      }
    }
    localStorage.setItem("articles", JSON.stringify(articlesData));
  }

  return (
    <div className="panel tutorial-text">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div className="df jc_c">
        <button
          className="cp"
          onClick={() => {setMarkAsRead(true); addArticleRead("jsArticles", currentArticleId) }}
          style={{
            padding: "10px",
            background: markAsRead ? " #d9d6d6" : "#00a699",
            border: "none",
            borderRadius: "5px",
            color: markAsRead ? "#000" : "#fff",
          }}
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
}

export default ArticlePanel;
