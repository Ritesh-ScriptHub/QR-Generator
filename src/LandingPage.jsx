import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'fa-brands fa-instagram',
    color: '#E4405F',
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    description: 'Generate QR for your Instagram profile',
    placeholder: 'Enter Instagram username',
    prefix: 'https://instagram.com/',
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    icon: 'fa-brands fa-x-twitter',
    color: '#000000',
    gradient: 'linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)',
    description: 'Generate QR for your Twitter profile',
    placeholder: 'Enter Twitter username',
    prefix: 'https://x.com/',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'fa-brands fa-facebook-f',
    color: '#1877F2',
    gradient: 'linear-gradient(45deg, #1877F2, #42a5f5)',
    description: 'Generate QR for your Facebook profile',
    placeholder: 'Enter Facebook username',
    prefix: 'https://facebook.com/',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: 'fa-brands fa-telegram',
    color: '#26A5E4',
    gradient: 'linear-gradient(45deg, #0088cc, #26A5E4, #54c7fc)',
    description: 'Generate QR for your Telegram profile',
    placeholder: 'Enter Telegram username',
    prefix: 'https://t.me/',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
    color: '#25D366',
    gradient: 'linear-gradient(45deg, #128C7E, #25D366, #4fce5d)',
    description: 'Generate QR for your WhatsApp number',
    placeholder: 'Enter phone number with country code',
    prefix: 'https://wa.me/',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    color: '#0A66C2',
    gradient: 'linear-gradient(45deg, #004182, #0A66C2, #378fe9)',
    description: 'Generate QR for your LinkedIn profile',
    placeholder: 'Enter LinkedIn username',
    prefix: 'https://linkedin.com/in/',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: 'fa-brands fa-youtube',
    color: '#FF0000',
    gradient: 'linear-gradient(45deg, #cc0000, #FF0000, #ff4444)',
    description: 'Generate QR for your YouTube channel',
    placeholder: 'Enter YouTube channel name',
    prefix: 'https://youtube.com/@',
  },
  {
    id: 'custom',
    name: 'Custom Link',
    icon: 'fa-solid fa-link',
    color: '#8B5CF6',
    gradient: 'linear-gradient(45deg, #6d28d9, #8B5CF6, #a78bfa)',
    description: 'Generate QR for any URL or text',
    placeholder: 'Enter any URL or text',
    prefix: '',
  },
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-bg">
        <div className="landing-bg-shape shape-1"></div>
        <div className="landing-bg-shape shape-2"></div>
        <div className="landing-bg-shape shape-3"></div>
      </div>

      <header className="landing-header">
        <div className="logo">
          <i className="fa-solid fa-qrcode"></i>
          <span>BuildYourQR</span>
        </div>
      </header>

      <section className="hero">
        <h1 className="hero-title">
          Generate <span className="gradient-text">QR Codes</span> for
          <br />Your Social Profiles
        </h1>
        <p className="hero-subtitle">
          Create beautiful, branded QR codes for Instagram, Twitter, Facebook,
          Telegram, and more. Share your profiles instantly with a single scan.
        </p>
      </section>

      <section className="platforms-grid">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="platform-card"
            onClick={() => navigate(`/generate/${platform.id}`, { state: platform })}
            style={{ '--card-gradient': platform.gradient, '--card-color': platform.color }}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon">
                <i className={platform.icon}></i>
              </div>
              <h3 className="card-title">{platform.name}</h3>
              <p className="card-description">{platform.description}</p>
              <div className="card-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-bolt"></i>
          </div>
          <h3>Instant Generation</h3>
          <p>Create your QR code in seconds, no sign-up required</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-palette"></i>
          </div>
          <h3>Branded Design</h3>
          <p>Each QR code features the platform logo at its center</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-download"></i>
          </div>
          <h3>Easy Download</h3>
          <p>Download your QR code as an image with one click</p>
        </div>
      </section>

      <footer className="landing-footer">
        <p>Built with React | Solodev - Ritesh | last updated: 18-Feb-2026</p>
      </footer>
    </div>
  );
}

export { platforms };
export default LandingPage;