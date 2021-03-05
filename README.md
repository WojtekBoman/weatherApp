# weatherApp
A simple mobile application that allows you to check the weather forecast in any location

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Functionalities](#functionalities)
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
![HomeScreen](https://user-images.githubusercontent.com/47774969/110146715-2ced6f80-7ddb-11eb-874b-bfed2b666a8f.PNG)
![WeatherScreen](https://user-images.githubusercontent.com/47774969/110146722-2fe86000-7ddb-11eb-947e-ccc0c05a5203.PNG)
![2screen](https://user-images.githubusercontent.com/47774969/110146733-32e35080-7ddb-11eb-9d3c-d86f000e9b6b.PNG)


## Setup

Make sure you have Expo CLI
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
