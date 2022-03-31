# Pozter

Applied Research Winter 2022 Project Pozter

# Project setup:

No `node_modules` should be going up because of the `.gitignore` if it is please remove.

Steps:

- Install [Node.js](https://nodejs.org/en/) if you havn't already.
- You will need to have 2 terminals. One for the back-end and another for the front-end.

## Back end:

Run the following commands in the first terminal:

```console
$ cd server
$ npm install
$ npm run start
```

## Front end:

In the second terminal run the following commands:

```console
$ cd front-end
$ npm install
$ npm run serve
```

## Pull Request:

Before each pull request or for each new commit on a pull request `npm run build` needs to be ran. This is to build the front end changes and have it all be placed into the `/front-end/dist` folder for deployment.

```
cd front-end
npm run build
```

### Compiles and minifies for production

In either the front end or the back end directory, run the following command:

```console
$ npm run build
```

### Lints and fixes files

In either the front end or the back end directory, run the following command:

```console
$ npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# FAQ

### What is the difference between the `server/query` folder and the `server/sql`?

- query is to hold any CRUD postgres queries
- sql is to hold any table or view creations/updates

This gives us an opportunity to do migration/seeding in the future if needed to and ensures our table and view creation is the same.
Since table and view creations are 1 time run keeping them separate from endpoints keeps things organized.
