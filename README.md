# Pozter

Applied Research Winter 2022 Project Pozter

# Project setup:

No node_modules should be going up because of the `.gitignore` if it is please remove.
Install node. Run this twice, back-end and front-end by cd to the directory:

```
npm install
```

You will need to have 2 terminals. One for the back-end and another for the front-end.

## Back end:

Run back-end:

```
cd server
npm install
npm run start
```

## Front end:

In new terminal run the following command.

Run front-end:

```
cd front-end
npm install
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# FAQ

### What is the difference between the `server/query` folder and the `server/sql`?

- query is to hold any CRUD postgres queries
- sql is to hold any table or view creations/updates

This gives us an opportunity to do migration/seeding in the future if needed to and ensures our table and view creation is the same.
Since table and view creations are 1 time run keeping them separate from endpoints keeps things organized.
