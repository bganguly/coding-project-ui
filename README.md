# README for branch_03 #

This project requires us to develop a website template viewer. See details in [README.md in master branch](https://github.com/bganguly/website-template-viewer-ui/tree/master#readme) 

This specific branch builds on top of branch_02 and provides state management via hooks in addition to appropriate js/styles for it to render.  
It also relies on /GETs on a separate freestanding locahost express app running on port 3001 to fetch other assets (images and templates.json have been moved out from this branch to the [backend branch branch_03](https://github.com/bganguly/website-template-viewer-backend)).  
The express app is runnable via checking out the [backend branch branch_03](https://github.com/bganguly/website-template-viewer-backend).  
More instructions follow.  

To run:
```
// startup the express server first
// git clone and checkout the backend branch_03 branch , thereafter
rm -rf package-lock.json ; rm -rf node-modules/ ; npm i
npm start

// bring up the React app next
// git clone and checkout this current branch_03 branch, thereafter
rm -rf package-lock.json ; rm -rf node-modules/ ; npm i
npm start
```