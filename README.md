# Nutrition Analysis App

This is a simple web application for analyzing nutrition data of various food products. The app allows users to enter the quantity, unit, and name of a food product, and then fetches the nutrition data for that product from the Edamam API.

## Features

- Input field for entering the quantity, unit, and name of the food product.
- Analyze button to fetch and display the nutrition data for the entered product.
- Reset button to clear the input field and reset the analysis.
- Displays basic nutrition information such as calories, total fat, saturated fat, cholesterol, sodium, total carbohydrate, dietary fiber, sugars, protein, vitamin D, calcium, iron, and potassium.
- Provides the percentage of daily value (%DV) for each nutrient based on a 2000 calorie diet.

## Technologies Used

- React.js for building the frontend user interface.
- Fetch API for making requests to the Edamam API.
- Font Awesome for icons.

## Setup

1. Clone the repository:

`git clone https://github.com/yourusername/nutrition-analysis-app.git`

2. Install dependencies:

`cd nutrition-analysis-app`

`npm install`

3. Obtain API credentials from Edamam by signing up for an account on their website.
4. Create a `.env` file in the root directory and add your API credentials:

`REACT_APP_EDAMAM_APP_ID=6590dde0`

`REACT_APP_EDAMAM_APP_KEY=b2a254f2b9be408c005471a70901b6c3`

5. Start the development server:

`npm start`

6. Open your browser and navigate to http://localhost:3000 to view the app.
