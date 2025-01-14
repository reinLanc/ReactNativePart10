import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-web";
import { Link } from "react-router-native";
import theme from "../config/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: theme.fontFamily,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.tab}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
