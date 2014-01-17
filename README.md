### Info page for Łódź tech/startup hashtag initiative #nowLDZ

#### Requirements
It's simple HTML+CSS page, no advanced stuff, so you don't really need anything to get started and make changes. 
But if you have node.js installed you can use Grunt tooling available (details below).

#### Development
If it is your first time (assuming you have node.js installed), run `npm install` to download all required dependencies for development.


Then just run `grunt server` and you'll get watch with livereload. Go to [http://localhost:9000](http://localhost:9000) and every time you make a change and save file, your browser will automatically refresh the page (no need for abusing F5).

##### Deploy to Github Pages
There is no need to deploy things like `Gruntfile.js` and so on. So if you are ready to deploy your changes just push to master as usual and invoke `grunt deploy`. It'll deploy only HTML+CSS+img files to `gh-pages` branch for you.