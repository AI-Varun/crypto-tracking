# Crypto Tracking Frontend

This frontend application displays real-time data for cryptocurrencies or stocks in a dynamic table. It uses Next.js, TypeScript, and Redux for state management.

## Features

- Displays the most recent 20 entries of real-time data for a selected stock or cryptocurrency.
- Updates the table dynamically with new data.
- Includes a modal to change the stock or cryptocurrency.

## Technologies

- Next.js
- TypeScript
- Redux
- Axios

## Setup

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

## Components

- **CryptoSelector.tsx**
  - Allows users to select or add a new symbol. Opens a modal with an input field for custom symbols.

- **Modal.tsx**
  - A reusable modal component for displaying the `CryptoSelector`.

- **PriceTable.tsx**
  - Displays real-time data in a table format.

## Redux Setup

- **Store Configuration**
  - State is managed using Redux and stored in localStorage.

- **Actions and Selectors**
  - Actions: `fetchCryptoData`
  - Selectors: `selectCryptoState`

## Usage

- Navigate to the home page to view the table of real-time data.
- Click the "Change Crypto" button to open the modal and select or add a new symbol.
