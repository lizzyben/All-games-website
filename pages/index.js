import React, { useState } from 'react';

function RainbowText() {
  const [fontSize, setFontSize] = useState(16);

  const handleHover = () => {
    setFontSize(fontSize + 2);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        display: 'inline-block',
      }}
    >
      <h1
        onMouseEnter={handleHover}
        style={{ fontSize: `${fontSize}px`, transition: 'font-size 0.5s ease' }}
      >
        My "math" help
      </h1>
    </div>
  );
}

function App() {
  const [redirectLink, setRedirectLink] = useState('https://lizzyben.github.io/poopy-games/');

  const handleButtonClick = () => {
    setRedirectLink('https://lizzyben.github.io/poopy-games/');
  };

  const handleBackupLinkClick = () => {
    setRedirectLink('https://edunut.netlify.app/');
  };

  return (
    <div>
      <RainbowText />
      <button onClick={handleButtonClick}>Math games</button>
      <div>
        <small>
          <a href="#" onClick={handleBackupLinkClick}>
            backup link
          </a>
        </small>
      </div>
      {redirectLink && <meta http-equiv="refresh" content={`0; URL='${redirectLink}'`} />}
    </div>
  );
}

export default App;
