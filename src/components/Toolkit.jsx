import "../pages/About.css";

const Toolkit = () => {
  return (
    <div className="toolkit-container">
      <p id="toolkit" className="toolkit-bg-header">
        Toolkit
      </p>
      <div className="toolkit">
        <div className="tool-section frontend">
          <p className="tool-section-header frontend-header">Frontend</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
              <p>JavaScript</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/react.png" alt="react logo" />
              <p>React.js</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/html.png" alt="html logo" />
              <p>HTML</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/css.png" alt="css logo" />
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="tool-section backend">
          <p className="tool-section-header backend-header">Backend</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/express.png" alt="express logo" />
              <p>Express.js</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/node.png" alt="node logo" />
              <p>Node.js</p>
            </div>
          </div>
        </div>
        <div className="tool-section tools">
          <p className="tool-section-header tools-header">Tools</p>
          <div className="tool-logos">
           
            <div className="single-tool-container">
              <img src="/toolkit-logos/git.png" alt="git logo" />
              <p>Git</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/vscode.png" alt="vscode logo" />
              <p>VS Code</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/github.png" alt="github logo" />
              <p>GitHub</p>
            </div>
            <div className="single-tool-container">
              <img src="data:image/png;base64,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" alt="github logo" />
              <p>Post man</p>
            </div>
          </div>
        </div>
        <div className="tool-section learning">
          <p className="tool-section-header learning-header">Learning</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/java.png" alt="java logo" />
              <p>Java</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/python.png" alt="python logo" />
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
