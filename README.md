## Important

Before running the app you should get an **API key** from [Finnhub](https://finnhub.io/).

Then put it in the *env.json* file.

Also create an *.env* in `src` directory and paste the **API key** as it's done in *env.example*.

Company name should be in proper `stock symbol` format, like `AAPL` is for `APPLE`.
Vist [here](https://business.unl.edu/outreach/econ-ed/nebraska-council-on-economic-education/student-programs/stock-market-game/documents/Top%202000%20Valued%20Companies%20with%20Ticker%20Symbols.pdf) for reference.

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
