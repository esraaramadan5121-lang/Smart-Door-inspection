import { useState, useRef, useCallback, useEffect } from 'react';

const CameraView = ({ onCapture, isAnalyzing }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameras, setCameras] = useState([]);
  const [currentCamera, setCurrentCamera] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initCamera();
  }, []);

  const initCamera = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setCameras(videoDevices);

      if (videoDevices.length > 0) {
        const backCamera = videoDevices.find(device => 
          device.label.toLowerCase().includes('back') || 
          device.label.toLowerCase().includes('environment')
        ) || videoDevices[0];
        
        setCurrentCamera(backCamera);
        startCamera(backCamera.deviceId);
      }
    } catch (err) {
      setError('Camera access denied. Please allow camera permissions.');
      console.error('Camera error:', err);
    }
  };

  const startCamera = useCallback(async (deviceId) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: deviceId ? undefined : 'environment',
          deviceId: deviceId ? { exact: deviceId } : undefined,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError('Failed to start camera');
    }
  }, []);

  const switchCamera = async () => {
    if (cameras.length < 2) return;

    const currentIndex = cameras.findIndex(cam => cam.deviceId === currentCamera?.deviceId);
    const nextCamera = cameras[(currentIndex + 1) % cameras.length];
    setCurrentCamera(nextCamera);
    startCamera(nextCamera.deviceId);
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    canvas.toBlob((blob) => {
      onCapture(blob);
    }, 'image/jpeg', 0.9);
  };

  return (
    <div className="card">
      <h2>📸 Position camera at door</h2>
      
      {error && (
        <div style={{color: 'red', padding: '20px', textAlign: 'center'}}>
          {error}
        </div>
      )}

      <div className="video-container">
        <video ref={videoRef} autoPlay playsInline muted />
        <div className="camera-overlay">
          <div className="door-frame"></div>
          <div>
            <button 
              className="btn btn-camera" 
              onClick={switchCamera}
              disabled={cameras.length < 2 || isAnalyzing}
            >
              🔄 Switch Camera
            </button>
            <button 
              className="btn" 
              onClick={captureImage}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? '🔄 Analyzing...' : '📷 Capture Door'}
            </button>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default CameraView;