# Eidos Script Template

help developers create a new Eidos script project quickly.

use this template to create a new Eidos script project.

## Development

1. install dependencies
   ```bash
   pnpm install
   ```
2. develop
   ```bash
   pnpm dev
   ```
3. build
   ```bash
   pnpm build
   ```
4. deploy

   > don't ignore the `dist` folder, it's the output of your script. commit it to git. push build files to github, then people can use your script from github directly.

   ```bash
   git add .
   git commit -m "your commit message"
   git push
   ```
