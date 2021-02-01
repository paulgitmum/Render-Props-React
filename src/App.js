import logo from "./logo.svg";
import "./App.css";
import Change from "./components/change";
import ChangeByClick from "./components/changeByClick";
import ChangeByHover from "./components/changeByHover";

function App() {
  return (
    <div className="App">
      <h1>render props</h1>
      <Change
        render={(name, handleName) => (
          <ChangeByClick name={name} handleName={handleName} />
        )}
      />

      <Change
        render={(name, handleName) => (
          <ChangeByHover name={name} handleName={handleName} />
        )}
      />
    </div>
  );
}

export default App;
