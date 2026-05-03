const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { analyzeDoorImage } = require('./ai-analysis');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Analyze door image endpoint
app.post('/api/analyze-door', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    console.log('Analyzing image:', req.file.filename);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const analysis = await analyzeDoorImage(req.file.path);
    
    res.json(analysis);
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
});

// History endpoint (mock)
app.get('/api/history', (req, res) => {
  res.json([
    {
      id: 1,
      date: '2024-01-15',
      score: 85,
      status: 'OK',
      doorType: 'Wood'
    },
    {
      id: 2,
      date: '2024-01-14',
      score: 62,
      status: 'Not OK',
      doorType: 'Metal'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚪 Door Inspection Server running on port ${PORT}`);
});