const AnalysisResult = ({ analysis, onReScan }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'score-ok';
    if (score >= 60) return 'score-warning';
    return 'score-danger';
  };

  return (
    <div className="card">
      <h2>📊 Analysis Complete</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className={`status-${analysis.status.toLowerCase().replace(' ', '-')}`}>
          <h1>{analysis.status}</h1>
        </div>
        
        <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
          {analysis.score}
        </div>
        <div style={{ fontSize: '18px', color: '#666' }}>out of 100</div>
        
        <div className="score-bar">
          <div 
            className={`score-fill ${getScoreColor(analysis.score)}`}
            style={{ width: `${analysis.score}%` }}
          />
        </div>
      </div>

      <div>
        <h3>🚨 Issues Found ({analysis.issues.length})</h3>
        {analysis.issues.length === 0 ? (
          <p style={{ color: '#4CAF50', textAlign: 'center', fontSize: '18px' }}>
            ✅ No issues detected!
          </p>
        ) : (
          analysis.issues.map((issue, index) => (
            <div key={index} className="issue-item">
              <strong>{issue.problem}</strong>
              <br />
              <small style={{ color: '#666' }}>💡 {issue.suggestion}</small>
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>✅ Good Points ({analysis.good_points.length})</h3>
        {analysis.good_points.map((point, index) => (
          <div key={index} className="good-item">
            {point}
          </div>
        ))}
      </div>

      <div style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '12px', 
        marginTop: '20px',
        textAlign: 'center'
      }}>
        <strong>💬 AI Comments:</strong><br />
        {analysis.comments}
      </div>

      <div style={{ marginTop: '30px' }}>
        <p><strong>Door Type:</strong> {analysis.door_type}</p>
        <p><strong>Analyzed:</strong> {new Date(analysis.timestamp).toLocaleString()}</p>
      </div>

      <button className="btn" onClick={onReScan}>
        🔄 Re-scan Door
      </button>
    </div>
  );
};

export default AnalysisResult;