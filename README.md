# Crypto Tracking Project

This project consists of a backend service and a frontend application that work together to provide real-time data for cryptocurrencies.

## Backend

### Features

- Fetches real-time data from external APIs and stores it in MongoDB.
- Provides APIs to fetch and manage symbols.

### Technologies

- Node.js
- Express
- MongoDB

### Setup

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

### Endpoints

- **GET** `/api/data?symbol=<symbol>`

## Frontend

### Features

- Displays and updates real-time data in a table.
- Allows changing the stock or cryptocurrency via a modal.

### Technologies

- Next.js
- TypeScript
- Redux
- Axios

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AI-Varun/crypto-tracking.git
    cd client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

### Components

- **CryptoSelector.tsx**
- **Modal.tsx**
- **PriceTable.tsx**

### Redux Setup

- **Actions and Selectors**
  - Actions: `fetchCryptoData`
  - Selectors: `selectCryptoState`
