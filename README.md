# README for branch_03 #

This project requires us to develop a website template viewer. See details in [README.md in master branch](https://github.com/bganguly/siemens-coding-project/tree/master#readme) 

This specific branch is an SPA with the js/styles for it to render, but relies on /GETs on a locahost express app running on port 3001 to fetch other assets (images and templates.json).

To run:
```
// startup the express server first
// git clone and checkout the [branch_03_backend branch](https://github.com/bganguly/siemens-coding-project/tree/branch_03_backend) , thereafter
rm -rf package-lock.json ; rm -rf node-modules/ ; npm i
npm start

// bring up the React app next
// git clone and checkout this current [branch_03_ui] branch, thereafter
rm -rf package-lock.json ; rm -rf node-modules/ ; npm i
npm start
```