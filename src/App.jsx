import React from 'react';
import './App.css';
import foodieBoxLogo from './assets/foodiebox.png';
// Import SVG placeholders
// Replace these with actual SVG imports once you have the images
import featureIcon1 from './assets/react.svg';
import featureIcon2 from './assets/react.svg';
import featureIcon3 from './assets/react.svg';

function App() {
  // Placeholder for demo video ID, replace with actual ID
  const demoVideoID = "UnOGy7GGXHU";

  return (
    <div className="App">
      <header className="App-header">
        <img src={foodieBoxLogo} className="logo" alt="FoodieBox Logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Coming Soon...</h1>
          <h2>Like Instacart and Instagram had a baby 🤰🏼</h2>
          <p>Transform the way you cook with AI-driven recipe discovery, personalized to your taste and dietary needs. Join our waitlist today!</p>
          <form name="signup" method="post">
            <input type="hidden" name="form-name" value="signup" />
            <label htmlFor="email">Join our waitlist</label><br />
            <input type="email" id="email" name="email" placeholder="Your email address" required /><br />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        <section id="features">
          <h2>Our Features</h2>
          <div className='feature-list'>
          <div className="feature">
            {/* <img src={featureIcon1} alt="AI Icon" /> */}
            <h3>AI-Powered Culinary Intelligence</h3>
            <p>Get personalized recipe suggestions based on your preferences and dietary restrictions.</p>
          </div>
          <div className="feature">
            {/* <img src={featureIcon2} alt="Inventory Icon" /> */}
            <h3>Comprehensive Inventory Management</h3>
            <p>Effortlessly keep track of your kitchen inventory with our advanced barcode scanning and image recognition technology.</p>
          </div>
          <div className="feature">
            {/* <img src={featureIcon3} alt="Community Icon" /> */}
            <h3>Vibrant Foodie Community</h3>
            <p>Share your culinary adventures and discover recipes from a community of food enthusiasts.</p>
          </div>
          </div>
        </section>

        <section id="demo">
          <h2>See FoodieBox in Action</h2>
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube-nocookie.com/embed/${demoVideoID}`} 
            title="FoodieBox Demo Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>FoodieBox was born out of a passion for food and technology. Our team has worked tirelessly to bring this vision to life. We aim to make cooking accessible, enjoyable, and personalized for everyone.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 FoodieBox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
