import {HomeScreenStyles} from "./HomeRoute.styles";
import {Text, View, TouchableOpacity, Pressable} from 'react-native';
import {backgroundColor} from "../../utils/constants"

export const HomeScreen = ({navigation}) => {
  const {containerStyle, textStyle, headingStyle, buttonStyle, buttonTextStyle} = HomeScreenStyles;
  return (
    <View style={containerStyle}>
      <Text style={headingStyle}>Navigate to:</Text>
      <Pressable style={buttonStyle} onPress={() => {
        navigation.navigate('imageList')
      }}><Text style={buttonTextStyle}>ImageList</Text></Pressable>
    </View>
  );
}


