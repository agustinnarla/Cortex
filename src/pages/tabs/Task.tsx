import { CalendarComponent } from "@/components/task/CalendarComponent";
import { TaskComponent } from "@/components/task/TaskComponent";
import { ButtonComponent } from "@/components/ux/Button";
import { View, Text } from "react-native";

const task = [
  {
    id: "1",
    title: "Comprar figuritas del mundial",
    priority: "Alta",
    time: "16:00",
  },
  {
    id: "2",
    title: "Comprar figuritas del mundial",
    priority: "Alta",
    time: "16:00",
  },
  {
    id: "3",
    title: "Comprar figuritas del mundial",
    priority: "Alta",
    time: "16:00",
  },
];

export const TaskPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <CalendarComponent />
      <View style={{ flex: 1 }}>
        <TaskComponent tasks={task} />
      </View>
      <ButtonComponent />
    </View>
  );
};
