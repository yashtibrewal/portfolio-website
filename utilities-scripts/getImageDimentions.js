const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDirectoryPath = path.join(__dirname, 'public/images'); // Replace with your base directory

const processDirectory = (directoryPath, images = []) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Unable to scan directory:', err);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(directoryPath, file);

      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error('Error retrieving file stats:', fullPath, err);
          return;
        }

        if (stats.isDirectory()) {
          processDirectory(fullPath, images);
        } else if (['.png', '.jpg', '.jpeg', '.webp'].includes(path.extname(file))) {
          sharp(fullPath)
            .metadata()
            .then(metadata => {
              const relativePath = path.relative(baseDirectoryPath, fullPath).replace(/\\/g, '/');
              images.push({
                file: `/${relativePath}/`,
                width: metadata.width,
                height: metadata.height
              });
            })
            .catch(err => {
              console.error('Error processing file:', fullPath, err);
            });
        }
      });
    });
  });
};

const imageData = [];

processDirectory(baseDirectoryPath, imageData);

// Save results to a JSON file
setTimeout(() => {
  fs.writeFileSync('image-dimensions.json', JSON.stringify(imageData, null, 2));
  console.log('Image dimensions have been saved to image-dimensions.json');
}, 5000);
