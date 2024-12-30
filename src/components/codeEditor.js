import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; // You can replace this with any Prism theme

function CodeEditor() {
  const [code, setCode] = useState("// Write your JavaScript code here");

  const runCode = () => {
    try {
      const result = eval(code); // Use eval carefully, only for learning purposes
      document.getElementById("output").textContent = result ?? "Code executed successfully!";
    } catch (err) {
      document.getElementById("output").textContent = `Error: ${err.message}`;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(code) => highlight(code, languages.javascript, "javascript")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          backgroundColor: "#f5f5f5",
          border: "1px solid #ddd",
          borderRadius: "4px",
          minHeight: "200px",
        }}
      />
      <button
        onClick={runCode}
        style={{
          padding: "10px 20px",
          backgroundColor: "#405cf5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Run Code
      </button>
      <div
        id="output"
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          minHeight: "50px",
        }}
      >
        {/* Output will appear here */}
      </div>
    </div>
  );
}

export default CodeEditor;
