const LoadingSpinner = ({ message = "Analyzing door condition..." }) => (
  <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
    <div className="loading-spinner" style={{ margin: '0 auto 20px' }}></div>
    <h2>{message}</h2>
    <p style={{ color: '#666', marginTop: '10px' }}>
      AI is checking scratches, handle, hinges, paint, and alignment...
    </p>
  </div>
);

export default LoadingSpinner;