// App.jsx
import React from 'react';
import './App.css';
import foodieBoxLogo from './assets/foodiebox.png'


function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would handle the form submission,
    // e.g., posting to an API or using a service like Netlify forms or Firebase.
    alert("Thank you for subscribing!");
  };

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
          <h2>Fer is cooo cuuuute 🤰🏼</h2>
          <form onSubmit={handleSubmit} name="signup" data-netlify="true">
            <label htmlFor="email">Join our waitlist</label><br />
            <input type="email" id="email" name="email" placeholder="Your email address" required /><br />
            <button type="submit">Subscribe</button>
          </form>
        </section>
        {/* Addi🥰tional sections like Recipes, Plans, Blog, and Contact Us would go here */}
      </main>
      <footer>
        <p>&copy; 2024 FoodieBox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
