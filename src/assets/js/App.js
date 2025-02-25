import logo from '@/assets/images/logo.svg';
import Button from "@/assets/js/components/Button";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/assets/js/App.js</code> and save to reload.
        </p>
        <a
          className="App-link tw-py-8"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button title="Click Me" onClick={handleClick} className="tw-bg-red-500 hover:tw-bg-red-600"/>
      </header>
    </div>
  );
}

export default App;
