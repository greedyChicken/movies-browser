# Movies Browser 🎥

![headline.png](/src/images/headline.png)

**Movies Browser** is an application that allows users to browse movies and people from film industry. It was created as the final project of the Frontend Developer course at YouCode and was based on the graphic design in Figma. Data about movies and people is fetched from an [external API](https://www.themoviedb.org/).

## Table of content

- [Demo](#demo)
- [Preview](#preview)
- [General Information](#general-information)
- [How to use](#how-to-use)
- [Tech Stack](#tech-stack)
- [Authors](#authors)
- [External Sources](#external-sources)
- [Available Scripts](#available-scripts)

## Demo

You can find a demo version [here](https://greedychicken.github.io/movies-browser/index#/movies/1).

## Preview

![Preview](...)

## General Information

Application allows to easily browse movies and actors based on **external API**. Entire project is styled with use of **Styled Components**, and it is also adapted to follow **Responsive Web Design Principle**, which makes it fully responsive for all popular devices. In addition, each movie and person has a separate page with information about the crew, cast, and many more.

## How to use

Movies Browser is composed of four main views:

**`Movies page`**

On this page you can browse recently popular movies. Each movie tile includes information such as title, release year, film genres and viewers' rate. To find out more about the specific movie, just click on its tile, and then you will be redirected to a movie subpage.

**`Movie subpage`**

On this subpage, in addition to the data from the main movie list, you can find country of production, the exact release date, consize film description, cast and crew lists. You can also go to a specific cast or crew member subpage by clicking its tile.

**`People page`**

On this page you can look through recently popular people from film industry. You can go to person subpage by clicking its tile.

**`Person subpage`**

On this subpage you can learn more about person's personal data, read short bio of the person and see the lists of films in which that person participated as a cast or crew member.

**`Search bar`**

At the top of application you can see a search bar, it allows to search for specific movie or person - depending on the selected page view. To search, just click on input and type in your query.

## Tech Stack

- Responsive Web Design
- CSS (Flex/Grid/Media Queries)
- HTML - Semantic & accessible HTML
- JavaScript (ES6+)
- React
- React Router
- React Redux
- Redux Toolkit
- Redux Saga
- Styled Components
- Error Handling
- Working with API
- Promises, async/await
- ThemeProvider
- Figma

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Authors

- [Bartłomiej Dębiec](https://github.com/bartekdbc)
- [Jan Hickiewicz](https://github.com/greedyChicken)
- [Grzegorz Pacewicz](https://github.com/GrzegorzPacewicz)

## External Sources

[![tmdb.svg](/src/images/tmdb.svg)](https://www.themoviedb.org/)

This project uses API provided by [**The Movie Database**](https://www.themoviedb.org/). In order to use this API, you have to firstly create an account and generate your personal API key.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
