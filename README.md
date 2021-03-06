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
![5](https://user-images.githubusercontent.com/47774969/110202170-315f6a00-7e67-11eb-8e79-71ccba73949e.PNG)
![6](https://user-images.githubusercontent.com/47774969/110202171-345a5a80-7e67-11eb-99de-8c3e3654d1bd.PNG)
![7](https://user-images.githubusercontent.com/47774969/110202174-36241e00-7e67-11eb-9f4f-2b645341f960.PNG)
![8](https://user-images.githubusercontent.com/47774969/110202175-37ede180-7e67-11eb-8344-490eb430c4bb.PNG)


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
