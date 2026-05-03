const fs = require('fs');
const path = require('path');

// Mock AI Analysis (Real implementation would use Google Vision API + custom model)
async function analyzeDoorImage(imagePath) {
  // Simulate different analysis results based on filename (for demo)
  const filename = path.basename(imagePath);
  const randomSeed = filename.split('-')[0];
  
  const issues = generateRandomIssues(randomSeed);
  const goodPoints = generateGoodPoints(randomSeed);
  
  const score = calculateScore(issues.length, goodPoints.length);
  const status = score >= 80 ? 'OK' : 'Not OK';
  
  return {
    status,
    score: Math.round(score),
    issues,
    good_points: goodPoints,
    comments: generateComments(status, score, issues),
    door_type: detectDoorType(randomSeed),
    timestamp: new Date().toISOString()
  };
}

function generateRandomIssues(seed) {
  const issueTemplates = [
    { problem: "Scratches detected on surface", suggestion: "Repaint or polish the door surface" },
    { problem: "Door handle is loose", suggestion: "Tighten or replace door handle" },
    { problem: "Hinges are rusted", suggestion: "Replace hinges or apply rust treatment" },
    { problem: "Paint is peeling", suggestion: "Repaint the entire door" },
    { problem: "Door is misaligned", suggestion: "Adjust door frame alignment" },
    { problem: "Cracks visible on door", suggestion: "Repair cracks or replace door panel" }
  ];
  
  const numIssues = Math.floor(Math.random() * 3) + (parseInt(seed) % 2);
  const shuffled = issueTemplates.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numIssues);
}

function generateGoodPoints(seed) {
  const goodTemplates = [
    "Door handle is present and functional",
    "Hinges appear properly installed",
    "Surface paint looks clean",
    "Door alignment appears correct",
    "No major structural damage detected",
    "Overall good condition"
  ];
  
  const numGood = 3 + (parseInt(seed) % 2);
  const shuffled = goodTemplates.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numGood);
}

function calculateScore(numIssues, numGood) {
  let score = 100 - (numIssues * 15);
  score += (numGood * 5);
  return Math.max(0, Math.min(100, score));
}

function generateComments(status, score, issues) {
  const comments = {
    'OK': `Excellent condition! Score: ${score}/100. Minor maintenance recommended.`,
    'Not OK': `Maintenance required. Score: ${score}/100. Priority issues: ${issues.map(i => i.problem).join(', ')}`
  };
  return comments[status];
}

function detectDoorType(seed) {
  const types = ['Wood', 'Metal', 'Glass', 'Composite'];
  return types[Math.floor(Math.random() * types.length)];
}

module.exports = { analyzeDoorImage };