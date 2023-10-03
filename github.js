const { execSync } = require("child_process");

/**
git add ####
git commit -m ######
git push
npm run deploy
*/
(() => {
  try {
    if (process.argv.length !== 4) {
      throw new Error("Missing Arguments");
    }

    execSync(`git add ${process.argv[2]}`);
    execSync(`git commit -m "${process.argv[3]}"`);
    execSync("git push");
    execSync("npm run deploy");
    
  } catch (error) {
    console.error(error.message);
  }
})();
