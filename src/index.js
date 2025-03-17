import React from "react"; //
import ReactDOM from "react-dom/client"; //
import "./style.css";
/////////////////////////////
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

////////////////////////////

function App() {
  return (
    <div className="container">
      <Header />
      <Manu />
      <Footer />
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
function Manu()
{
  const numpiza=pizzaData.length;

   return(
   <div className="menu">
    <h2>Our menu</h2>
  {numpiza >0 ?
      <>
    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
    </p>
    <ul className="pizzas">
    {pizzaData.map(pizza=> 
 <Pizza pizaObject={pizza} key={pizza.name}/>

  )}

    </ul>
    
    
    </>
    
    :
    <p>we are working on manu please comeback</p>
}
   </div>);
}

function Pizza({pizaObject})
{
 return(
  <li className={`pizza ${pizaObject.soldOut ? "sold-out" : ""} `}>
   <img src={pizaObject.photoName}  alt={pizaObject.name}/>
   <div>
    <h3>{pizaObject.name}</h3>
    <p>
      {pizaObject.ingredients}
    </p>
    <span>{pizaObject.price}</span>
   </div>

   
  </li>
 );
}
 function Footer()
 { const hours =new Date().getHours();
  const open=12
  const close=22
     let isOpen= hours<close && hours>open? true :false; 
    isOpen=true
  return(
<footer className="footer">
  
 {isOpen ? <Oder open={open} close={close}/>: <p>sorry Our store are closed oder </p>
  }
</footer>)

 }

function Oder({open,close})
{
 
  return(
    <div className="order">
     <p>We're open from {open}:00 to {close}:00. Come visit us or order online.</p> 
     <button className="btn">Oder</button>
     </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
