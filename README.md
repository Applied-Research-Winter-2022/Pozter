# Pozter

Applied Research Winter 2022 Project Pozter

# Project setup:

No node_modules should be going up because of the `.gitignore` if it is please remove.
Install node:

```
npm install
```

Run back-end:

```
cd server
npm run start
```

# FAQ

### What is the difference between the `server/query` folder and the `server/sql`?

- query is to hold any CRUD postgres queries
- sql is to hold any table or view creations/updates

This gives us an opportunity to do migration/seeding in the future if needed to and ensures our table and view creation is the same.
Since table and view creations are 1 time run keeping them separate from endpoints keeps things organized.
