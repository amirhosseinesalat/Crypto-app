🪙 Crypto Tracker App

A responsive React application that displays real-time cryptocurrency market data using the CoinGecko API.
Users can view prices, 24-hour changes, market caps, and even open a detailed 7-day chart for each coin.

 Features

Fetches live crypto market data from CoinGecko API

Displays key info: name, symbol, price, 24h change, volume, and market cap

Interactive 7-day line chart with Recharts

Search and filter functionality

Pagination support

Responsive design for all devices

Toast notifications and loading spinners

 Tech Stack

React.js (Vite)

CSS Modules

Recharts

React Hot Toast

React Loader Spinner

CoinGecko API

 Installation
# Clone this repository
git clone https://github.com/<your-username>/<repo-name>.git

# Go to project directory
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev

 Project Structure
src/
 ├── assets/           # Images and icons
 ├── components/
 │   ├── modules/      # TableCoin, Chart, Search, etc.
 │   └── pages/        # HomePage
 ├── helpers/          # Utility functions (convertData.js)
 ├── services/         # API functions (cryptoApi.js)
 ├── App.jsx
 ├── main.jsx
 └── index.css

 Preview

Click on a coin symbol to view its detailed chart.
You can also switch between Prices, Market Cap, and Total Volume charts.

 API Reference

Base URL: https://api.coingecko.com/api/v3

Endpoints used:

/coins/markets

/search

/coins/{id}/market_chart

 Author

 Developed by Amirhosein Esalatfae— Frontend Developer

 License

This project is open source and available under the MIT License
.

🇮🇷 توضیحات فارسی

این پروژه یک اپلیکیشن واکنش‌گرا با React است که اطلاعات لحظه‌ای بازار ارزهای دیجیتال را از CoinGecko API دریافت می‌کند.
کاربر می‌تواند قیمت‌ها، تغییرات ۲۴ ساعته، حجم معاملات و نمودار ۷ روز اخیر هر کوین را مشاهده کند.

ویژگی‌ها

دریافت داده‌های لحظه‌ای از CoinGecko

نمایش نام، نماد، قیمت، درصد تغییر، حجم و مارکت کپ

نمودار ۷ روزه با Recharts

جست‌وجو و فیلتر کردن کوین‌ها

صفحه‌بندی (Pagination)

طراحی ریسپانسیو برای همه‌ی دستگاه‌ها

نوتیفیکیشن‌های زیبا با React Hot Toast

نمایش لودینگ با React Loader Spinner

🧠 تکنولوژی‌ها

React.js - CSS Modules - Recharts - React Hot Toast - React Loader Spinner - CoinGecko API

🧩 نحوه‌ی اجرا

1️⃣ پروژه را کلون کن
2️⃣ وابستگی‌ها را نصب کن (npm install)
3️⃣ پروژه را اجرا کن (npm run dev)