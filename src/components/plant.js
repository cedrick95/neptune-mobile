import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo";

import Footer from "./common/footer";


class Plant extends React.Component {
  constructor(props){
    super(props);
    this.navigation = this.navigation.bind(this);
  }

  navigation(event){
    this.props.navigation.navigate(event.navDestination)
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#FFF','#e6faff', '#b3f0ff', '#99ebff', '#80e5ff', '#66e0ff']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../assets/icons/planticon.png')} style={{ height: 253 , width: 200 }}/>
            </View>
            <Footer navProps={this.navigation}/>
        </LinearGradient>
      </View>
    )
  }
}

export default Plant;
