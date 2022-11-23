import {View, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from "react";
import {ImageStyles} from "./ImageList.styles";

import * as img1 from "../../../assets/img/1.avif";
import * as img2 from "../../../assets/img/2.jpeg";
import * as img3 from "../../../assets/img/3.jpg";
import * as img4 from "../../../assets/img/4.jpg";
import * as img5 from "../../../assets/img/5.jpeg";

export const ImageListScreen = () => {

  const imageList = [img1, img2, img3, img4, img5];
  const [currentImage, setCurrentImage] = useState(0);
  const {imageStyle, buttonRowStyle, buttonStyle} = ImageStyles;
  const previousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  }
  const nextImage = () => {
    if (currentImage !== imageList.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  }
  return (<View>
    <Image style={imageStyle} source={imageList[currentImage]}/>
    <View style={buttonRowStyle}>
      {(currentImage > 0) &&
        <TouchableOpacity onPress={previousImage}><Icon name="arrow-left" style={buttonStyle}/></TouchableOpacity>
      }
      {(currentImage < imageList.length - 1) &&
        <TouchableOpacity onPress={nextImage}><Icon name="arrow-right" style={buttonStyle}/></TouchableOpacity>}
    </View>
  </View>)
}
