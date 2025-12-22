import { Link } from "react-router-dom";

const mockSong = {
    title: "Lost",
    artist: "Frank Ocean",
    description: "a hazy, introspective track that drifts between freedom and uncertainty, capturing the feeling of being untethered.",
    quote: "I'm lost in the heat of it all.",
    tags: ["introspective", "late night", "dreamy"],
    albumCover: ""
};

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
                <h3>{mockSong.title}</h3>
                <div className="artist">{mockSong.artist}</div>

                <p>
                    {mockSong.description}
                </p>

                <div className="lyrics-preview">
                    <p>
                        "{mockSong.quote}"
                    </p>
                </div>

                <div className="mood-tags">
                    {mockSong.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
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
  