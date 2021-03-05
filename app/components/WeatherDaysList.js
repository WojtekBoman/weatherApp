import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import { updateDay } from "../actions/forecastActions";
import { useDispatch } from "react-redux";

const WeatherDaysList = (props) => {

    const dispatch = useDispatch();
    const update = (day) => dispatch(updateDay(day));

    return(
        <View>
          {props.dayList.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={() => {update(l.date)}}>
              <ListItem.Content>
                <ListItem.Title>{l.day}</ListItem.Title>
              </ListItem.Content>
              {l.date !== props.currentDay && (
                <ListItem.Chevron/>
              )}
            </ListItem>
          ))}
        </View>
    )
}

export default WeatherDaysList;