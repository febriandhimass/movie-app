# Getting Started

Here is a quick start guide. 

> Basicly it's all about `movie-app`, but there is an `Anagram` also. To run this `anagram` will be explained on [Run App](#run-app)

## Table of Contents

1. [Development Setup](#development-setup)
2. [Run App](#run-app)
3. [Available Commands](#available-commands)

## Development Setup

Make sure you're already install [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/). After that run this several command.

```bash
$ git clone https://github.com/febriandhimass/movie-app.git
$ cd movie-app
$ cp env.example .env
$ yarn # install all dependencies
```

## Run App

After have the `.env` values and install all dependencies. Run this command.

```bash
$ yarn start
```

Open http://localhost:3000 to view it in the browser.

> To run the `Anagram`, make sure you are at the parent directory. Then type `node anagram` on your terminal

## Available commands

- `yarn start` - Run local server
- `yarn test` - Run all unit tests