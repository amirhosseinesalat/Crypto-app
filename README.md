Crypto Tracker App

A responsive cryptocurrency tracking application built with React.
This project fetches real-time market data from the CoinGecko API and allows users to explore prices, market changes, and historical charts for popular cryptocurrencies.

<<<<<<< HEAD
Features
=======
The goal of this project was to practice working with external APIs, data visualization, pagination, and clean UI design.
>>>>>>> 2443a449f2718b8bf1527c809d5ea0f7ccca2a86

Features

Fetches live cryptocurrency data from the CoinGecko API

Displays key information such as:

Coin name and symbol

Current price

24-hour price change

Trading volume

Market capitalization

Interactive 7-day charts for each coin

Search and filter functionality

Pagination for large datasets

Responsive layout for different screen sizes

Toast notifications and loading indicators

Tech Stack

React.js (Vite)

CSS Modules

Recharts

React Hot Toast

React Loader Spinner

CoinGecko API

<<<<<<< HEAD
Installation

# Clone this repository

git clone https://github.com/amirhosseinesalat/Crypto-app

# Install dependencies

npm install

# Start the development server
=======
Getting Started

Clone the repository:

git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker


Install dependencies:

npm install


Run the project:
>>>>>>> 2443a449f2718b8bf1527c809d5ea0f7ccca2a86

npm run dev

Project Structure
src/
<<<<<<< HEAD
├── assets/ # Images and icons
├── components/
│ ├── modules/ # TableCoin, Chart, Search, etc.
│ └── pages/ # HomePage
├── helpers/ # Utility functions (convertData.js)
├── services/ # API functions (cryptoApi.js)
=======
├── assets/        # Images and icons
├── components/
│   ├── modules/   # Coin table, charts, search components, etc.
│   └── pages/     # Home page
├── helpers/       # Utility functions
├── services/      # API services (CoinGecko)
>>>>>>> 2443a449f2718b8bf1527c809d5ea0f7ccca2a86
├── App.jsx
├── main.jsx
└── index.css

<<<<<<< HEAD
Preview
=======
How It Works
>>>>>>> 2443a449f2718b8bf1527c809d5ea0f7ccca2a86

The app fetches market data using CoinGecko public APIs.

<<<<<<< HEAD
API Reference
=======
Users can search for specific coins by name or symbol.

Clicking on a coin opens a detailed view with a 7-day chart.

Charts can display price, market cap, or total volume.

Pagination is used to improve performance and usability.

API Reference

Base URL:

https://api.coingecko.com/api/v3
>>>>>>> 2443a449f2718b8bf1527c809d5ea0f7ccca2a86


Endpoints used:

/coins/markets

/search

/coins/{id}/market_chart

<<<<<<< HEAD
Author

Developed by Amirhosein Esalatfae— Frontend Developer

License

This project is open source and available under the MIT License
.
=======
Developer

Amirhossein Esalat
Frontend Developer
Email: sltamirhosein@gmail.com
>>>>>>> 2443a449f2718b8bf1527c809d5ea0f7ccca2a86
