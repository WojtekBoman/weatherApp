import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { updateDay } from "../actions/forecastActions";
import { useDispatch } from "react-redux";

const WeatherDaysList = (props) => {
  const dispatch = useDispatch();
  const update = (day) => dispatch(updateDay(day));
  const isCurrentDay = (date, currentDay) => date !== currentDay;

  return (
    <View>
      {props.dayList.map((l, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() => {
            if (isCurrentDay(l.date, props.currentDay)) update(l.date);
          }}
        >
          <ListItem.Content>
            <ListItem.Title>{l.day}</ListItem.Title>
            <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
          </ListItem.Content>
          {console.log(l.date, props)}
          {isCurrentDay(l.date, props.currentDay) && <ListItem.Chevron />}
        </ListItem>
      ))}
    </View>
  );
};

export default WeatherDaysList;
