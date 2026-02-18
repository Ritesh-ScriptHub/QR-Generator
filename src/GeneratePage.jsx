import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { platforms } from './LandingPage';
import './GeneratePage.css';

const platformLogos = {
  instagram: '/assets/instagram.png',
  twitter: '/assets/twitter.png',
  facebook: '/assets/Facebook.png',
  telegram: '/assets/Telegram_logo.svg',
  whatsapp: '/assets/WhatsApp.svg',
  linkedin: '/assets/LinkedIn_logo.png',
  youtube: '/assets/YouTube_logo.svg',
  custom: null,
};

function GeneratePage() {
  const { platformId } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState(null);
  const canvasWrapperRef = useRef(null);

  const platform = platforms.find((p) => p.id === platformId);

  if (!platform) {
    return (
      <div className="generate-page">
        <div className="not-found">
          <h2>Platform not found</h2>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
      </div>
    );
  }

  const handleGenerate = () => {
    const trimmed = inputValue.trim();
    if (trimmed.length === 0) {
      return;
    }
    if (platform.id === 'custom') {
      setQrValue(trimmed);
    } else {
      setQrValue(platform.prefix + trimmed);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  const handleDownload = () => {
    const canvas = canvasWrapperRef.current?.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${platform.name.replace(/\s+/g, '-').toLowerCase()}-qr.png`;
    link.href = url;
    link.click();
  };

  const logo = platformLogos[platform.id];

  return (
    <div className="generate-page">
      <div className="gen-bg">
        <div className="gen-bg-shape gen-shape-1" style={{ background: platform.gradient }}></div>
        <div className="gen-bg-shape gen-shape-2" style={{ background: platform.gradient }}></div>
      </div>

      <header className="gen-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </button>
        <div className="gen-logo">
          <i className="fa-solid fa-qrcode"></i>
          <span>BuildYourQR</span>
        </div>
      </header>

      <main className="gen-main">
        <div className="gen-card" style={{ '--platform-gradient': platform.gradient, '--platform-color': platform.color }}>
          <div className="gen-card-header">
            <div className="gen-platform-icon">
              <i className={platform.icon}></i>
            </div>
            <div>
              <h1 className="gen-title">{platform.name}</h1>
              <p className="gen-subtitle">{platform.description}</p>
            </div>
          </div>

          <div className="gen-input-group">
            {platform.id !== 'custom' && (
              <span className="gen-input-prefix">{platform.prefix}</span>
            )}
            <input
              type="text"
              placeholder={platform.placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="gen-input"
            />
          </div>

          <button
            className="gen-button"
            onClick={handleGenerate}
            style={{ background: platform.gradient }}
          >
            <i className="fa-solid fa-qrcode"></i>
            Generate QR Code
          </button>

          {qrValue && (
            <div className="gen-result">
              <div className="qr-display" ref={canvasWrapperRef}>
                <QRCodeCanvas
                  value={qrValue}
                  size={256}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  marginSize={2}
                  imageSettings={
                    logo
                      ? {
                          src: logo,
                          x: undefined,
                          y: undefined,
                          height: 50,
                          width: 50,
                          excavate: true,
                        }
                      : undefined
                  }
                />
              </div>
              <p className="qr-url">{qrValue}</p>
              <button className="download-btn" onClick={handleDownload}>
                <i className="fa-solid fa-download"></i>
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default GeneratePage;