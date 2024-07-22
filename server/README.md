# Crypto Tracking Backend

This backend service fetches real-time data for cryptocurrencies or stocks from external APIs and stores the data in a MongoDB database.

## Features

- Polls real-time data every few seconds for up to 5 stocks or cryptocurrencies.
- Stores fetched data in a MongoDB database.
- Provides APIs to fetch and manage symbols.

## Technologies

- Node.js
- Express
- MongoDB

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AI-Varun/crypto-tracking.git
    cd server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

## Endpoints

- **GET** `/api/data?symbol=<symbol>`
  - Fetch the latest data for a specific symbol.

## Polling Interval

Data is fetched every 40 seconds. You can adjust this interval in the `server.ts` file.
