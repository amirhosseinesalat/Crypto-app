Crypto Tracker App

A responsive cryptocurrency tracking application built with React.
This project fetches real-time market data from the CoinGecko API and allows users to explore prices, market changes, and historical charts for popular cryptocurrencies.

The goal of this project was to practice working with external APIs, data visualization, pagination, and clean UI design.

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

Getting Started

Clone the repository:

git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker


Install dependencies:

npm install


Run the project:

npm run dev

Project Structure
src/
├── assets/        # Images and icons
├── components/
│   ├── modules/   # Coin table, charts, search components, etc.
│   └── pages/     # Home page
├── helpers/       # Utility functions
├── services/      # API services (CoinGecko)
├── App.jsx
├── main.jsx
└── index.css

How It Works

The app fetches market data using CoinGecko public APIs.

Users can search for specific coins by name or symbol.

Clicking on a coin opens a detailed view with a 7-day chart.

Charts can display price, market cap, or total volume.

Pagination is used to improve performance and usability.

API Reference

Base URL:

https://api.coingecko.com/api/v3


Endpoints used:

/coins/markets

/search

/coins/{id}/market_chart

Developer

Amirhossein Esalat
Frontend Developer
Email: sltamirhosein@gmail.com
