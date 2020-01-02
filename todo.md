# Crate project

Use below command to create a project:

`npx create-react-app reactjs-todo`

# Setup github repository

Check current remote with below code:

`git remote -v`

Add remote origin with below code:

`git init`
`git remote add origin https://github.com/maheshwaghmare/reactjs-todo.git`
`git push origin master`

# Start Project

`npm start`

# Install & Use Bootstrap 4

Install bootstrap with command:

`npm install react-bootstrap bootstrap`

In index.js file add below line:

`import 'bootstrap/dist/css/bootstrap.min.css';`

Now, Use bootstrap classes row, col-md-4, table, h3 etc.

# Install & Deply project on GitHub pages (gh-pages)

Install Github Pages with below code:

`npm install gh-pages --save-dev`

Add below code in `package.json` file:

`"homepage": "https://maheshwaghmare.github.io/reactjs-todo/",`

and in "scripts":

`
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build"
`

Deply Github pages with below code:

`npm run deploy`
`git add .`
`git commit -m "Deploy the App."`
`git push origin master`

Then visit:

https://maheshwaghmare.github.io/reactjs-todo/
