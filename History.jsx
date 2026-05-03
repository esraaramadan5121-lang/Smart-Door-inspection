import { Link } from 'react-router-dom';

const History = () => {
  const history = [
    { id: 1, date: '2024-01-15', score: 85, status: 'OK', doorType: 'Wood' },
    { id: 2, date: '2024-01-14', score: 62, status: 'Not OK', doorType: 'Metal' },
  ];

  return (
    <div>
      <div className="card">
        <h2>📋 Scan History</h2>
        {history.map(item => (
          <div key={item.id} className="good-item" style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{item.doorType} Door</strong><br />
                <small>{item.date} • Score: {item.score}</small>
              </div>
              <span className={`status-${item.status.toLowerCase().replace(' ', '-')}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="btn">🔄 New Scan</button>
      </Link>
    </div>
  );
};

export default History;