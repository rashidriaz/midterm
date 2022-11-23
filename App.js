import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from './src/routes/home-route/HomeRoute';
import {ImageListScreen} from "./src/routes/image-list/ImageList.route";

const navigator = createStackNavigator(
  {
    home: HomeScreen,
    imageList: ImageListScreen,
  },
  {
    initialRouteName: "home",
  }

);
export default createAppContainer(navigator);
