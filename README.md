# Fixer cli utility

A simple currency converter utility based on the Fixer.io API

## Installation

fixer-cli requires [Node.js](https://nodejs.org/) v18+ to run.
Install fixer-cli with github

```bash
  git clone https://github.com/ankhurtin/fixer-cli.git
  cd fixer-cli
  npm install -g .
```

## Usage

Add Fixer.io API Key
https://apilayer.com/marketplace/fixer-api#pricing
(You can choose a free plan)

```sh
fixer-cli key your_key
```

Now you can use fixer-cli

```sh
fixer-cli convert usd eur 1500
fixer-cli info
```

To see available commands

```sh
fixer-cli --help
```
