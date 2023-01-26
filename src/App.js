import './App.scss';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import Product from './components/product';
import Profile from './components/profile';
import InterestCalculator from './components/interestCalculator';

function App() {
  // Initialize an array of product objects
  const products = [
    {
      name: "Cozy chunky knit jumper",
      img: "./images/chunkyJumper.jpg",
      price: 85
    },
    {
      name: "Oversized long-line trench coat",
      img: "./images/trenchCoat.jpg",
      price: 175
    },
    {
      name: "Oversized distressed denim jeans",
      img: "./images/jeans.jpg",
      price: 100
    }
  ]

  // Initialize user state with empty string for username and logged out
  const [user, setUser] = useState({
    username: '',
    isLoggedIn: false
  });

  // Update state when login button is pressed
  const handleLogin = () => {
    // Call askName function and retrieve users name
    let nameInput = askName();

    setUser({
      username: nameInput,
      isLoggedIn: true
    });
  }

  // Update state when logout button is pressed + send alert to user
  const handleLogout = () => {
    setUser({
      isLoggedIn: false
    });

    alert(`${user.username} has logged out.`)
  }

  // Ask user their name
  const askName = () => {
    let input = prompt("What's your first name?");
    while (!input) {
      input = prompt("What's your first name?");
    }
    return input;
  }

  // Render custom components to different routes using react-router-dom
  return (
    <div className="App">
      <NavBar handleClick={handleLogin} user={user} />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ProductsPage products={products} />} />
        <Route path="/profile" element={<ProfilePage user={user} handleClick={handleLogout} />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/interest" element={<InterestCalcPage />} />
      </Routes>
    </div>
  );
}

// Navbar component
function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Menu />
        <Header handleClick={props.handleClick} user={props.user} />
      </div>
    </nav>
  )
}

// LandingPage component
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="about">
        <div className="about-img">
          <img src="./images/largeLogo.png"></img>
        </div>
        <div className="about-text">
          <h3>We are Sloe Apparel</h3>
          <p>We are passionate about curating a sustainable and slow fashion clothing line. We source from companies who maintain the highest level of sustainability and fairtrade practices. The styles we like to stock within our collection include timeless fabrics and shapes that you can hand down through generations.</p>
        </div>
      </div>
    </div>
  )
}

// ProductsPage component
function ProductsPage(props) {
  return (
    <div className="page products-list">
      <h2>Women's Clothing</h2>
      <div className="products text-center">
        {props.products.map(item => (
          <Product key={item.name} product={item} />
        ))}
      </div>
    </div>
  )
}

// ProfilePage component
function ProfilePage(props) {
  return (
    <Profile user={props.user} handleClick={props.handleClick} />
  );
}

// LegalPage component
function LegalPage() {
  return (
    <div className="page">
      <h2>Legal Page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Sed augue lacus viverra vitae. Fermentum posuere urna nec tincidunt praesent semper. Ullamcorper sit amet risus nullam. Gravida dictum fusce ut placerat orci nulla. Quis ipsum suspendisse ultrices gravida. Porttitor rhoncus dolor purus non enim praesent. Senectus et netus et malesuada fames. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Id interdum velit laoreet id donec. Convallis posuere morbi leo urna molestie at. Blandit libero volutpat sed cras ornare arcu dui. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.</p>
    </div>
  );
}

// InterestCalcPage component
function InterestCalcPage() {
  return (
    <div className="page interest-calculator-container">
      <h2>Interest Calculator</h2>
      <InterestCalculator />
    </div>
  );
}

export default App;
