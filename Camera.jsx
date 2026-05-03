import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CameraView from '../components/CameraView';

const Camera = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCapture = async (imageBlob) => {
    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append('image', imageBlob, 'door.jpg');

    try {
      const response = await fetch('/api/analyze-door', {
        method: 'POST',
        body: formData,
      });

      const analysis = await response.json();
      
      // Store in sessionStorage for results page
      sessionStorage.setItem('doorAnalysis', JSON.stringify(analysis));
      navigate('/results');
    } catch (error) {
      alert('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      {isAnalyzing ? null : <CameraView onCapture={handleCapture} isAnalyzing={isAnalyzing} />}
    </>
  );
};

export default Camera;