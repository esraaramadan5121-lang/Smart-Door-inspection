import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnalysisResult from '../components/AnalysisResult';
import LoadingSpinner from '../components/LoadingSpinner';

const Results = () => {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAnalysis = sessionStorage.getItem('doorAnalysis');
    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    } else {
      navigate('/camera');
    }
    setLoading(false);
  }, [navigate]);

  const handleReScan = () => {
    navigate('/camera');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <AnalysisResult analysis={analysis} onReScan={handleReScan} />
  );
};

export default Results;