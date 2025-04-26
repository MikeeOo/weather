# Weather App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo Screenshots](#demo-screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Inspiration](#inspiration)

## Overview

A React-based weather application that allows users to search for and save multiple locations to display their corresponding weather data and image sliders. The app uses OpenWeatherMap API for weather data and Pixabay API for location images.

## Features

- Search for locations worldwide
- Display current weather conditions for multiple locations
- Save favorite locations for quick access
- Image sliders showing location photos
- Light/dark theme toggle
- Responsive design for all device sizes
- Persistent data storage using localStorage

## Technologies

- React: 18.2.0
- TypeScript: 4.8.3
- Redux Toolkit: 1.9.0
- React Redux: 8.0.4
- React Router: 6.4.3
- Styled Components: 5.3.6
- React Icons: 4.7.1
- Slick Carousel: 1.8.1
- UUID: 9.0.0

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this project locally:

```
$ git clone https://github.com/yourusername/weather-app.git
$ cd weather-app
$ npm install
$ npm start
```

The application will run on [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_IMAGE_API_KEY=your_pixabay_api_key
```

You'll need to sign up for free API keys at:

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Pixabay API](https://pixabay.com/api/docs/)

## Usage

1. Search for a location using the search bar
2. View weather details including temperature, conditions, and other metrics
3. Navigate between your saved locations
4. Click on a location card to view more detailed information
5. Toggle between light and dark themes using the theme button

## Project Structure

```
src/
├── components/       # UI components organized by atomic design
├── redux/            # Redux state management
│   ├── api/          # API integration with thunks
│   ├── slices/       # Redux slices for state management
├── styles/           # Global styles and themes
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── App.tsx           # Main application component
```

## Inspiration

This app draws inspiration from Frontend Mentor's challenge:
[REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).
