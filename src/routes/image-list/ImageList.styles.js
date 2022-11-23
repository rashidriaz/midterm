import {Dimensions, StyleSheet} from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 0.25);
const imageWidth = dimensions.width * 0.5;
export const ImageStyles = StyleSheet.create(
  {
    imageStyle: {
      marginHorizontal: "auto",
      height: imageHeight,
      width: imageWidth,
      resizeMode: "contain"
    },
    buttonRowStyle:{
      flex: 2,
      flexDirection: "row",
      width: dimensions.width,
      justifyContent: "space-around",
    },
    buttonStyle: {
      fontSize: 50,
      padding: 10,
      borderRadius: "100%",
    }
  }
)
