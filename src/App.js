import { useState } from "react";
import MyButton from "./Button";
import "./styles.css";

function App() {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    active ? setActive(false) : setActive(true);
  };
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <h2>MyButton Component</h2>

      {active ? (
        <div style={{backgroundColor: 'yellow', padding: 25}}>
          <p>Thanks for Learning</p>
          <p>@learnmern</p>
        </div>
      ) : null}

      <MyButton primary color="blue" onClick={handleClick}>
        {active ? "cancel" : "Primary MyButton"}
      </MyButton>
      <MyButton color="blue" onClick={handleClick}>
        {active ? "cancel" : "MyButton"}
      </MyButton>
    </div>
  );
}

export default App;