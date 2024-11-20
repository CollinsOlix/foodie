import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FieldsetLegend = ({
  legend,
  innerText,
}: {
  legend: string;
  innerText: string;
}) => {
  return (
    <View style={styles.fieldSet}>
      <Text style={styles.legend}>{legend}</Text>
      <Text>{innerText}</Text>
    </View>
  );
};

export default FieldsetLegend;

const styles = StyleSheet.create({
  fieldSet: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    // alignItems: "center",
    borderColor: "#000",
  },
  legend: {
    position: "absolute",
    top: -10,
    left: 10,
    fontWeight: "600",
    fontSize: 15,
    backgroundColor: "#FFFFFF",
  },
});
