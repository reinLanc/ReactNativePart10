import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import theme from "../config/theme";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  info: {
    flex: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 5,
  },
  language: {
    backgroundColor: "#0366d6",
    color: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 12,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
  },
  text: {
    fontFamily: theme.fontFamily,
  },
});

const RepositoryItem = ({ repository }) => {
  const formatCount = (count) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.info}>
          <Text style={styles.fullName}>{repository.fullName}</Text>
          <Text style={styles.description}>{repository.description}</Text>
          <Text style={styles.language}>
            {repository.language || "No language specified"}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {formatCount(repository.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {formatCount(repository.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{repository.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{repository.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
