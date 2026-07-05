import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>DocCraft</h1>
        <p>Create • Edit • Format Documents</p>
      </header>

      <TextEditor />
    </div>
  );
}

export default App;