// src/App.tsx

import "./App.css";

function App() {
  // Generate snowflakes with random positions and delays
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 5 + Math.random() * 10,
    size: 0.5 + Math.random() * 1.5,
  }));

  return (
    <div className="winter-wrapper">
      {/* Falling snowflakes */}
      <div className="snowflakes" aria-hidden="true">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              fontSize: `${flake.size}rem`,
            }}
          >
            *
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container">
        <div className="frost-frame">
          <img
            src="/oc-winter-bash.png"
            alt="OC Tech Community Winter Bash event banner - December 16 at Mess Hall at Flight"
            className="main-image"
          />
        </div>
      </div>

      {/* Ground snow */}
      <div className="snow-ground" aria-hidden="true"></div>
    </div>
  );
}

export default App;
