# weatherApp
A simple mobile application that allows you to check the weather forecast in any location

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [Setup](#setup)

## General info
Mobile application developed with React Native and free OpenWeather API (https://openweathermap.org/forecast5)

## Technologies
Project is created with:
* React Native
* Redux
* Expo CLI
* OpenWeather API - https://openweathermap.org/forecast5

## Screenshots
![Przechwytywanie](https://user-images.githubusercontent.com/47774969/110199976-98772180-7e5b-11eb-8465-0ef100aaadb9.PNG)
![Przechwytywanie2](https://user-images.githubusercontent.com/47774969/110199979-9c0aa880-7e5b-11eb-863b-2623766e7ee6.PNG)
![Przechwytywanie3](https://user-images.githubusercontent.com/47774969/110199980-9d3bd580-7e5b-11eb-94af-796d2ac32843.PNG)
![Przechwytywanie4](https://user-images.githubusercontent.com/47774969/110199982-9f059900-7e5b-11eb-8b53-4ca4bab8131a.PNG)

## Setup

Make sure that you have Expo CLI installed globally
```
npm install -g expo-cli
```
Clone the repo
```
git clone https://github.com/WojtekBoman/weatherApp.git
```
Install dependencies
```
$ cd ../weatherApp
$ npm install
```
Create an .env file in the main project folder and place the API key in it - https://openweathermap.org/forecast5
```
REACT_APP_WEATHER_API_KEY=your_key
```
Run the project
```
expo start
```
