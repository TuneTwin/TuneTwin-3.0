import { Link } from "react-router-dom";

function HomePage() {
    return (
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>tunetwin</h1>
          <p>feel the tune, find your match.</p>

          <Link to="/search" className="hero-button">
            search your song
          </Link>
        </div>
      </section>
    );
  }
  
  export default HomePage;
  