import { colors } from "@/themes/colors";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

interface Task {
  id: string;
  title: string;
  priority: string;
  time: string;
}

interface TaskComponentProps {
  tasks: Task[];
}

export const TaskComponent = ({ tasks }: TaskComponentProps) => {
  if (!tasks.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tareas del Día</Text>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay tareas para hoy 🎉</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas del Día</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.taskContainer}
      >
        <View style={styles.itemContainer}>
          {tasks.map((task, index) => (
            <View key={task.id}>
              <TouchableOpacity style={styles.taskRow} activeOpacity={0.7}>
                <TouchableOpacity style={styles.item} />
                <View style={styles.taskContent}>
                  <Text style={styles.taskText}>{task.title}</Text>
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>{task.time}</Text>
                    <Text style={styles.priorityText}>{task.priority}</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {index < tasks.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "GlassRegular",
    fontSize: 24,
  },
  taskContainer: {
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 16,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "rgba(255,255,255,0.15)",
    maxHeight: 300,
  },
  emptyContainer: {
    paddingVertical: 24,
    alignItems: "center",
    marginVertical: 16,
  },
  emptyText: {
    fontFamily: "InterRegular",
    color: "grey",
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: "column",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    gap: 10,
  },
  taskContent: {
    flex: 1,
    gap: 4,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "grey",
    marginVertical: 8,
    opacity: 0.5,
  },
  item: {
    borderRadius: 100,
    borderWidth: 1,
    width: 20,
    height: 20,
    borderColor: "blue",
    flexShrink: 0,
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  taskText: {
    fontFamily: "InterBold",
  },
  footerText: {
    fontFamily: "InterRegular",
    color: "grey",
    fontSize: 12,
  },
  priorityText: {
    fontFamily: "InterRegular",
    color: colors.primary,
    fontSize: 12,
  },
});
