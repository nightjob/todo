1. Create a new folder
2. `npm init`
3. `npm install --save-dev jest ts-jest @types/jest`
4. go to package.json, add a`test` script that looks like this:
   "scripts": {
   "test": "jest"
   },
   so we can run `npm run test` to run jest
5. create the basic `add.ts` file, make sure you can run it with `tsx add.js`.
6. run `npx ts-jest config:init` to create the `jest.config.js` file that lets jest know we are using typescript.
7. create the basic `add.test.ts` file, make sure you can run it with `npm run test`.
