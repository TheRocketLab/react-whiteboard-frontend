# react-whiteboard

## How to run it

This is a basic CRA application with `styled-component` setup in it. We use a theme located in `styles/styled-component-theme.js`  
Additionaly we have a local JSON server that will start automatically when you start the React Application. This server is serving a static JSON file located in `data`.
You won't need to worry about this server for this test.

Install the modules:

```shell
$ yarn
```

Start the Server and the Application

```shell
$ yarn start
```

## TODO

As mention above, for this project we are using a local API using `json-server` running on http://localhost:3004

Here is the list of things you need to do:

- [ ] Update the `LeagueSection` and `TeamCard` component to make it look like the provided design
- [ ] Introduce animations to display the teams on the page with the library of you choice
- [ ] Modularise the existing app creating a Component for the logo
- [ ] Introduce the notion of Layout so we don't have to copy/paste the `Header` on every `Page`
- [ ] Add loader while fetching the data using `react-content-loader`

It should take you around 45 minutes to do so.

![Design Preview](https://github.com/TheRocketLab/react-whiteboard-frontend/blob/nba/docs/demo-nba.png)
![Card Preview](https://github.com/TheRocketLab/react-whiteboard-frontend/blob/nba/docs/nba-card.png)
