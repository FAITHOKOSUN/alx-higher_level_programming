#!/usr/bin/node
function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
  } catch (error) {
    console.log(`An error occurred while reading the file: ${error}`);
  }
}
