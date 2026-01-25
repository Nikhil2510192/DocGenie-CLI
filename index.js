#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
const { generateComments } = require('./aiService.js');
const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: docgenie <file-path>");
  process.exit(1);
}

async function run() {
  try {
    const absolutePath = path.resolve(filePath);
    
    if (!fs.existsSync(absolutePath)) {
      console.error("Error: File not found.");
      return;
    }

    console.log("Reading file...");
    const code = fs.readFileSync(absolutePath, 'utf8');

    console.log("Generating AI documentation...");
    const commentedCode = await generateComments(code);

    // Save the new version with a suffix or overwrite
    const newFilePath = absolutePath.replace(/\.js$/, '.documented.js');
    fs.writeFileSync(newFilePath, commentedCode);

    console.log(`Success! Documented file saved at: ${newFilePath}`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

run();