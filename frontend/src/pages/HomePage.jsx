import { Link } from "react-router-dom";

function HomePage() {
    return (
    <>
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

      <main className="main-content">
        <section className="tune-section" id="tuneSection">
          <h2 className="section-title">tonight's song</h2>

          <div className="tune-card">
            <div className="tune-info">
                <h3>Song Title</h3>
                <div className="artist">Artist Name</div>

                <p>
                    This is a short description of the song to set the mood and give a quick vibe
                </p>

                <div className="lyrics-preview">
                    <p>
                        "Sample lyric or quote goes here"
                    </p>
                </div>

                <div className="mood-tags">
                    <span className="tag">dreamy</span>
                    <span className="tag">late night</span>
                    <span className="tag">chill</span>
                </div>

                <div className="buttons">
                    <button className="play-button">play</button>
                    <button className="refresh-button">refresh song</button>
                </div>
            </div>

            <div className="visual-section">
                <div className="album-art">
                    <img src="" alt="Album cover placeholder"/>
                </div>
                <div className="mood-board">
                    <div className="mood-item"></div>
                    <div className="mood-item"></div>
                    <div className="mood-item"></div>
                    <div className="mood-item"></div>
                </div>
            </div>
          </div>
        </section>
      </main>
      </>
    );
  }
  
  export default HomePage;
  