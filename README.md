## Important

Before running the app you should get an **API key** from [Finnhub](https://finnhub.io/).

Then put it in the *env.json* file.

Also create an *.env* in `src` directory and paste the **API key** as it's done in *env.example*.

## Installation

Install the dependencies.

```sh
cd src
npm i
```

## Build 

Build the app from the root directory.

```sh
sam build
```

## Run the app locally

Run the app locally from the root directory.

```sh
sam local invoke -e -  --env-vars env.json StockPriceFunction
```
In a prompt paste the company name you want to inquiry in a following format:

`"{\"company\": \"name\"}"`

## Tests

For running tests do

```sh
cd src
npm run test
```
