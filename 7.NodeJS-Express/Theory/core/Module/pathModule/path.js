const path = require("path");

// Get the filename
console.log("Filename:", __filename);

// Get the directory name
console.log("Directory name:", __dirname);

// Get the base file name
console.log("Base file name:", path.basename(__filename)); // Output: index.js
console.log("Base directory name:", path.basename(__dirname)); // Output: Theory

// Get the file extension
console.log("File extension:", path.extname(__filename)); // Output: .js
console.log("Directory extension:", path.extname(__dirname)); // Output: (empty string)

// Parse the file path
console.log("Parsed path:", path.parse(__filename));
/*
Output:
{
  root: '/',
  dir: '/Users/vikashkumar/DevelopmentSpace/Full-stack-preparation-2025/7.NodeJS-Express/Theory',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/

// Join paths
console.log("Joined path:", path.join(__dirname, "test", "second.html"));
// Output: /Users/vikashkumar/DevelopmentSpace/Full-stack-preparation-2025/7.NodeJS-Express/Theory/test/second.html

// Resolve paths
console.log("Resolved path:", path.resolve("test", "second.html"));
// Output: /Users/vikashkumar/DevelopmentSpace/Full-stack-preparation-2025/7.NodeJS-Express/Theory/test/second.html

// Normalize paths
console.log(
  "Normalized path:",
  path.normalize(
    "/Users/vikashkumar/DevelopmentSpace//Full-stack-preparation-2025/7.NodeJS-Express/Theory/../Theory/test/second.html"
  )
);
// Output: /Users/vikashkumar/DevelopmentSpace/Full-stack-preparation-2025/7.NodeJS-Express/Theory/test/second.html

// Check if path is absolute
console.log(
  "Is absolute path:",
  path.isAbsolute(
    "/Users/vikashkumar/DevelopmentSpace/Full-stack-preparation-2025/7.NodeJS-Express/Theory"
  )
);
// Output: true
console.log("Is absolute path:", path.isAbsolute("test/second.html"));
// Output: false
