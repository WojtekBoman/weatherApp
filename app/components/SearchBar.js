import React, { useRef, useState } from "react";
import {View} from 'react-native';
import { Input, Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import {fetchForecast} from '../actions/forecastActions';
import { useSelector } from "react-redux";
import { Keyboard } from "react-native";


const SearchBar = () => {
 
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const input = useRef(null);
    const loading = useSelector((state) => state.forecast.loading)
    const search = () =>{
      if(searchText){
        dispatch(fetchForecast(searchText))
        Keyboard.dismiss();
        setSearchText('');
      }else{
        input.current.shake()
      } 
    } 
    
    return (
      <View>
          <Input value={searchText} ref={input} placeholder="Enter your location" onChangeText={text => setSearchText(text)}/>
          <Button loading={loading} title="Search" onPress={() => search()}/>
      </View>
    );
  }

export default SearchBar;
