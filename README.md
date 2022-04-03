# Assignment Final

#### The full circle

---

This is it. The Big one. Now it's time to put all our learnings into one final project. In this assignment you will be setting up a CD pipeline with all the steps done in previous assignments. You will be setting up a kubernetes cluster to deploy this application to.

What you will be working with is a Tic Tac Toe game that needs maintenance. Some logic is needed to complete the game and it is untested, some libraries are outdated and need to be updated.

The Project is a NextJS application with a Postgres database to keep track of the games.

**Please remember** to commit and push often (meaningful commits), the Git history is part of the assignment (only the history on the `main` branch).

**Group size**: 1 person

---

## The Assignment

#### **Fix it!**

- Currently the game can only tell when someone wins, but not when there is a draw. Write a test for such function and then implement it and add that to the game.
- Should the game be playable without the players names ?
    I added so you don't have to supply names, you will have the default ❌ and ⭕ names.
- There is an outdated library there somewhere, can you spot it ?
    The Moment library is the outdated library
- There are no unit tests. Add them.
- There are no ui integration tests. Add them.
- There are no e2e tests. Add them.

#### **Deploy it!**

- Create a Github action that does all the checks we've been doing in previous assignments and then deploys the application to a kubernetes cluster. Please note the checks should be done on any branch but the deployment should only happen on the `main` branch.
- When deploying it should be deploying a docker image that has been tagged with the commit hash to indicate the version.
- Add a link to the application running to this README.md file


#### **Monitor it!**

- Add Datadog RUM (Real user monitoring) to the application.
- Create a dashboard to monitor the health of the application.
- Add a screenshot of the dashboard to this README.md file

Image of datadog:
https://imgur.com/a/RpRuEpa
---

### Prerequisite

Copy the Github repo into your own repository and make it private.

Node v16 is required for this project to run.

We will be using Digital Ocean to host our kubernetes cluster and our databases. Students get $100 credits which is more than enough to cover our needs.

- [Sign up with Digital Ocean](https://www.digitalocean.com/) and claim [your $100](https://education.github.com/pack)
- Create a kubernetes cluster.
- Create a PostgresSQL database.
- (optional) Create Container registry, to host your docker images on.

#### Setup your dev environment

Easiest is to use postgres running in a docker container. Create a script that will start a local postgres database running in a docker container.

### Helpful Commands

Run the following commands to get started:

`npm install`

`npm run prisma:init` 

`npm run dev`


## Hand in

Add me (arnif) as collaborator to the repository. Add a screenshot of your Datadog dashboard to the README.md.
Also make sure to send the Github link and a link to the application in Canvas when handing in the assignment.



Good luck and Have fun :)
