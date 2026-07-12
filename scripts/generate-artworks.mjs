import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const outputPath = path.join(__dirname, '..', 'data', 'artworks.json');

const seriesNames = [
  '19.1',      // series1
  '19.2',      // series2
  '20.1',      // series3
  '20.2',      // series4
  '21',        // series5
  '22.1',      // series6
  '22.2',      // series7
  '22.3',      // series8
  '22.5日绘',  // series9
  '22.7日绘',  // series10
  '22写生',    // series11
  '23',        // series12
  '实物图',     // series13
  '板绘作品',   // series14
  '温差播报格', // series15
  '短篇',      // series16
  '绘本',      // series17
];

const imageExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff'];

function scanSeries(seriesDir, seriesNum) {
  const files = [];
  const items = fs.readdirSync(seriesDir);

  for (const item of items.sort()) {
    const fullPath = path.join(seriesDir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (imageExts.includes(ext)) {
        const relativePath = '/assets/series' + seriesNum + '/' + item;
        files.push(relativePath);
      }
    } else if (stat.isDirectory()) {
      // Recurse into subdirectories
      const subFiles = scanSeries(fullPath, seriesNum);
      files.push(...subFiles);
    }
  }
  return files;
}

const result = {};

for (let i = 0; i < seriesNames.length; i++) {
  const seriesNum = i + 1;
  const seriesDir = path.join(assetsDir, 'series' + seriesNum);
  const key = 'series_' + seriesNum;
  
  console.log('Scanning series' + seriesNum + ' (' + seriesNames[i] + ')...');
  
  const imageFiles = scanSeries(seriesDir, seriesNum);
  
  result[key] = imageFiles.map((filePath, idx) => {
    const fileName = path.basename(filePath);
    const nameWithoutExt = fileName.replace(/\.[^.]+$/, '');
    return {
      id: 's' + seriesNum + '-' + (idx + 1),
      title: nameWithoutExt,
      image_url: filePath,
      desc_en: seriesNames[i],
      desc_zh: seriesNames[i],
      bgColor: '#E8D4C4'
    };
  });
  
  console.log('  Found ' + imageFiles.length + ' images');
}

const totalImages = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);
console.log('Total images: ' + totalImages);

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
console.log('Written to ' + outputPath);
