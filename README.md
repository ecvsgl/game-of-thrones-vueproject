# game-of-thrones-quotes-vueproject

This is a Vue.js mini project that uses the API endpoints of https://gameofthronesquotes.xyz/

Project stack uses SASS preprocessors for CSS generation, routing mechanism of vue-router (tried
not to use Axios) is used to switch in between different Views. JS scripts are used for JSON 
deserialization. In styling, Bootstrap buttons and table styles are used. No DB is running to log 
activity.

Project scope is to use the API endpoints stated above to get data and create a basic webpage as 
a SPA. Quotes are generated randomly from the API, as seen in the homepage. Character-house details
are given in the other two views.

## Tech Stack

* Javascript & Vue.js 
* HTML5 + CSS3
* SASS & SASS-Loader
* Vite
* Vue-router
* Bootstrap
* Vitejs/vite-plugin-vue

## How to try the project out?

Required dependencies;

- Node.js & Node Package Manager (npm)(npm is usually installed along Node.js, via its official installer)
- Vue.js (can be installed via npm easily, npm would install this once `npm install` is executed but global setup should do better)

After installing the dependencies above to your system, simply open up a new folder then start a 
terminal/cmd inside the folder and then use the following commands;

```
git init
git clone https://github.com/ecvsgl/game-of-thrones-vueproject.git
cd /game-of-thrones-vueproject/
npm install
npm run dev
```
3rd line above is to relocate the terminal location to the project folder itself.

Once `npm run dev` command is used, it will start VITE dev environment. Here, you can even 
experiment with the code! Changes will be observed in real-time thanks to VITE's Hot-Module-Replacement(HMR).

Once done, simply press `q` in the terminal/cmd to exit.

