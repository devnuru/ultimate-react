import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

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



function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
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

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza /> 
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()}We're currently open until 22:00. Come visit us or order online.</p>
    </footer>
  );
}

// function Test = () => {}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>

    </div>
  );
}



  


// Render the App component to the DOM
// React v18 and earlier
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);     

//React before 18
// React.render(<App />)


