// App.jsx
import React from 'react';
import './App.css';
import foodieBoxLogo from './assets/foodiebox.png'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a href="" target="_blank">
          <img src={foodieBoxLogo} className="logo" alt="Vite logo" />
        </a>
        {/* <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#plans">Subscription Plans</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav> */}
      </header>
      <main>
        <section id="home">
          <h1>Coming Soon...</h1>
          <h2>Like Instacart and Instagram had a baby 🤰🏼</h2>
          <form name="signup" data-netlify="true" netlify>
            <label htmlFor="email">Join our waitlist</label><br />
            <input type="email" id="email" name="email" placeholder="Your email address" required /><br />
            <button type="submit">Subscribe</button>
          </form>
        </section>
        {/* Additional sections like Recipes, Plans, Blog, and Contact Us would go here */}
      </main>
      <footer>
        <p>&copy; 2024 FoodieBox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
