import React from "react";
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);

  const bgStyles = { backgroundColor: color, ...style.bgStyles };

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={style.content}>
        <View style={style.header}>
          <Text style={style.name}>{capitalize(name)}</Text>
          <Text style={style.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={style.contentImg}>
          <Image source={{ uri: image }} style={style.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  content: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export default Header;
