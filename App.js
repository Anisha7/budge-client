import React from "react";
import Main from "./routes/main";
import * as Font from "expo-font";
import { Text } from "react-native";

class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Skia: require("./assets/fonts/Skia-Regular_Light.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    console.log(Main);
    if (this.state.fontLoaded) {
      return <Main />;
    }
    return <Text>Loading...</Text>;
  }
}

export default App;
