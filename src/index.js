import React from "react"; //
import ReactDOM from "react-dom/client"; //
import "./style.css";
function App() {
  return (
    <div className="container">
      <Header />
      {/* <Manu />
     <footer />  */}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
