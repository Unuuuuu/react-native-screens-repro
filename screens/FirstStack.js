import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useNavigation } from "@react-navigation/native";

export default function FirstStack() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FirstStack</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/FirstStack.tsx" />
      <Button
        title="Second Stack"
        onPress={() => {
          navigation.navigate("SecondStack");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
