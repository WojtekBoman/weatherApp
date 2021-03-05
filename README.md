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
![image](https://user-images.githubusercontent.com/47774969/110148961-be5de100-7ddd-11eb-94b5-23011ae5d4cd.png)
![image](https://user-images.githubusercontent.com/47774969/110149074-e5b4ae00-7ddd-11eb-8107-f04c6cce872f.png)
![image](https://user-images.githubusercontent.com/47774969/110149141-fa914180-7ddd-11eb-9c6c-2c1d388d235c.png)



## Setup

Make sure that you have Expo CLI
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
