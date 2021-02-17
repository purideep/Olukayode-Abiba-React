import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'


// Helper Functions
import NavigationService from './NavigationService';
import { createDrawerNavigator, DrawerContentScrollView, useIsDrawerOpen } from '@react-navigation/drawer';
import Login from './Screens/Login';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Navigations
function navigationScreens() {

    return (
      // <BeforeLoginStack.Navigator headerMode={"none"} >
      <RootStack.Navigator headerMode={"none"} >
        <RootStack.Screen  name="Welcome" component={Login}  />
      </RootStack.Navigator>
    );
  }