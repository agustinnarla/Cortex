import { colors } from "@/themes/colors";
import { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const calander = [
  {
    id: 1,
    date: "lunes",
    ab: "lun",
  },
  {
    id: 2,
    date: "martes",
    ab: "mar",
  },
  {
    id: 3,
    date: "miercoles",
    ab: "mie",
  },
  {
    id: 4,
    date: "jueves",
    ab: "jue",
  },
  {
    id: 5,
    date: "viernes",
    ab: "vie",
  },
  {
    id: 6,
    date: "sabado",
    ab: "sab",
  },
  {
    id: 7,
    date: "domingo",
    ab: "dom",
  },
];

export const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {calander.map((item) => {
        const isSelected = item.id === selectedDate;
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.container, isSelected && styles.selected]}
            onPress={() => setSelectedDate(item.id)}
          >
            <Text style={[styles.text, isSelected && styles.selectedText]}>
              {item.ab.toLocaleUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 60,
    height: 50,
  },
  text: {
    fontFamily: "InterBold",
    textAlign: "center",
  },
  selected: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  selectedText: {
    color: colors.primary,
  },
});
