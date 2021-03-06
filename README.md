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
![157458604_340963857279634_7612827004636973960_n](https://user-images.githubusercontent.com/47774969/110199829-a4aeaf00-7e5a-11eb-8697-a05fb530cdf0.jpg)
![157312456_500863537959112_2915628201097817619_n](https://user-images.githubusercontent.com/47774969/110199843-b42df800-7e5a-11eb-985d-72df38a80eb1.jpg)
![157481308_126678812717973_6106478944346272993_n](https://user-images.githubusercontent.com/47774969/110199854-bf812380-7e5a-11eb-8ee7-627459ae9ed4.jpg)




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
