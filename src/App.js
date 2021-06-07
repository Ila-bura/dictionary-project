
import './App.css';
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo}
        className="App-logo img-fluid"
        alt="logo" 
      />
      
      </header>
      <main>
        <Dictionary defaultKeyword="yoga"/>
      </main>
      <footer className="App-footer">
        <small>
        Coded by Ila with SheCodes {""}
        - {""}
        <a
          href="https://github.com/Ila-bura/dictionary-project" 
          className="github me-1" target="_blank" rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>{""}{""}
        and
        <a
          href="https://ila-dictionary-app.netlify.app/"
          className="github ms-1" target="_blank" rel="noreferrer"
        >
        hosted on Netlify
        </a>
        </small>
      </footer>
    </div>
    </div>
  );
}

 
