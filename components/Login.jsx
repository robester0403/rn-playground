import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Login = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen>
        <Text>asda</Text>
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Login;
