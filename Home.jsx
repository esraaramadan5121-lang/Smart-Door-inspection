import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h1>🚪 Smart Door Inspection</h1>
    <p style={{ color: 'white', fontSize: '18px', marginBottom: '40px', opacity: 0.9 }}>
      AI-powered analysis of door condition using your camera
    </p>
    
    <Link to="/camera">
      <button className="btn" style={{ fontSize: '20px', padding: '20px 40px' }}>
        🚀 Start Door Scan
      </button>
    </Link>

    <Link to="/history" style={{ marginTop: '20px', textDecoration: 'none' }}>
      <button className="btn btn-secondary" style={{ fontSize: '16px', padding: '12px 24px' }}>
        📋 View History
      </button>
    </Link>
  </div>
);

export default Home;