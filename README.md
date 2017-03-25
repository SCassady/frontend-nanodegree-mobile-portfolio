Website Performance Optimization portfolio project
===============================

This is an optimized version of Cameron's portfolio, for the Website Optimization project of the
Udacity Front-End Nanodegree.

### Optimizations

##### Part 1: Optimize PageSpeed Insights score for index.html

To improve the PageSpeed score, I did the following:
- Reduced size and applied compression to all images on the page.
- Inlined the main css and mobile css in the html file.
- Created media queries for both the inlined mobile css and the linked print css.
- Implemented asynchronous web font loading.
- Made both analytics.js and perfmatters.js script tags asynchronous.
- Implemented browser caching using index.appcache to cache all images, css files and both perfmatters.js and analytics.js. (Not recognized by PageSpeed however.)

#### Part 2: Optimize fps for views/pizza.html while scrolling.

To achieve over 60fps while scrolling, I made the following optimizations:

- Pulled the call to document.body.scrollTop out of the for loop, so the updatePositions function only triggers layout once per call, and so avoids many instances of forced synchronous layout.

#### Part 3: Reduce resize time for pizzas with pizza size slider in views/pizza.html.

To reduce the resize time of the pizzas to under 5ms, I did the following in changePizzaSizes:

- Removed determineDX, and replaced it with a simpler switch statement.
- The above allowed me to also remove the call to offsetWidth in changePizzaSizes, as width is now given as a percentage.
- Both of the above steps allowed me to simplify the for loop, with now only one step per iteration, rather than 3(one of which was calling determineDX in its entirety).

### Viewing/Installation :

To view the web application, do one of the following:
- To install and view the app locally, clone or download this repository and open index.html in the /dist directory. An internet connection is required for viewing as the application sends several API requests.
- To simply view the project, you can see it hosted on Github Pages [here](https://scassady.github.io/frontend-nanodegree-mobile-portfolio/).

### Build process:

If you have forked or cloned the repository, you should do the following if you want to make use of gulp to push changes in /src to /dist:

First, install all dependencies, using:

> npm install

Once installed, run the following at the command line to push changes you've made in /src to /dist:

> gulp
