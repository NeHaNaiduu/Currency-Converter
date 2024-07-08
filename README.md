# React + Vite
## Currency Converter App

This React application allows users to convert amounts between different currencies using real-time exchange rates fetched from an API.

### Features

- **Currency Selection**: Choose the currency you want to convert from and to using dropdown menus.
- **Real-time Conversion**: Fetches the latest exchange rates from an external API to ensure accurate conversions.
- **Swap Functionality**: Quickly switch between the source and target currencies with the "Swap" button.
- **Responsive Design**: Designed to be responsive and user-friendly across different devices.

### Technologies Used

- **React**: Frontend framework for building user interfaces.
- **JavaScript (ES6+)**: Programming language used for frontend logic.
- **CSS (Tailwind CSS)**: Utility-first CSS framework for styling components.
- **API**: Uses an external API (`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`) to fetch currency exchange rates.

### Components

#### App Component (`App.jsx`)

Handles state management and user interface rendering. It includes input fields for amount and currency selection, and buttons for conversion and swapping currencies.

#### Input Component (`Input.jsx`)

Reusable component for input fields and dropdowns used in the currency converter. Handles amount input and currency selection.

#### useCurrency Hook (`useCurr.jsx`)

Custom hook that fetches currency exchange rate data based on the selected currency. Utilizes `useEffect` to fetch data on component mount and when the currency changes.

### Author

Neha
