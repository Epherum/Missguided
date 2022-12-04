# MISSGUIDED REDESIGN

## Demo of this app:

![demo](./src/images/Missguided.gif)

### Or Go to the live site and try it for yourself [here](https://wassim-missguided.web.app/)

## What is this project about?

- This is an e-commerce app that allows shoppers to view, sort, and filter and search products according to different criteria.
- This serves as a React, Firebase, and Framer Motion learning project. I took the design of [this Behance presentation](https://www.behance.net/gallery/79949881/MISSGUIDED-Visual-Experiment).
- Instead of using dummy API data, I used some real product data from BOOHOO's online store. firebase firestore is used to host and query the data

## What technologies were used?

- react.js (create-react-app)

### Styling:

- SASS
- CSS (no premade components libraries)

### Routing:

- react-router

### Authentication:

- firebase Auth (currently redoing authentication so login and wishlist are down until 6/12 )

### Database:

- Firebase Firestore
- Firebase RealTime Database

### Hosting and server side functions

- Firebase Hosting

## What can be further improved?

1. Refactoring the HomeFirstVisit component, it was a quick and dirty solution to play a different animation on first visit,it's just a clone of the Home component but with a different animationt

2. Adding an image skeleton Loader, currently if you have slow internet they pop up in an ugly way

3. Change the transition circles animation randomly, at the moment it's always pink and isn't faithful to the original design

## How can you clone and tweak this project?

From your command line, first clone this repo:

```
# Clone this repository
$ git clone https://github.com/Epherum/Missguided.git

# Go into the repository
$ cd Missguided

# Remove current origin repository
$ git remote remove origin

```

Then you can install the dependencies using NPM:

```
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Happy coding!

---

## Author

**Epherum**

- [GitHub](https://github.com/Epherum)
- [Linkdin](https://www.linkedin.com/in/wassimfekih/)
