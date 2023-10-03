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

    console.log('%cExecuting git add', 'color: yellow');
    execSync(`git add ${process.argv[2]}`);

    console.log('%cExecuting git commit', 'color: yellow');
    execSync(`git commit -m "${process.argv[3]}"`);

    console.log('%cExecuting git push', 'color: yellow');
    execSync("git push");

    console.log('%cExecuting deploy script', 'color: yellow');
    execSync("npm run deploy");
    
  } catch (error) {
    console.error(error.message);
  }
})();
