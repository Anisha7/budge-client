import React from 'react'
import Main from './routes/main'
// import * as Font from 'expo-font';
// import {
//   View
// } from "react-native";

// export default class App extends React.Component {
//   state = {
//     fontLoaded: false
//   }
//   async componentDidMount() {
//     await Font.loadAsync({
//       'Skia': require('./assets/fonts/Skia.ttf'),
//     });
//     this.setState({ fontLoaded: true });
//   }

//   render() {
//     return (
//       <View>
//       {
//         this.state.fontLoaded ? (
//           <Main />
//         ) : null
//       }
//     </View>
//     )
//   }
// }


// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducers from './reducers'
// const store = createStore(reducers)

const App = () => (
  // <Provider store={store}>
    <Main />
  // </Provider>
)

export default App;
