import React, {Component, PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'APPLE',
      data:"???",
    };
  }
  fetchstock = (namestock) => {
    this.setState({name: namestock })
    let API;
    if (namestock == "APPLE")
      API =
        'https://api.twelvedata.com/price?symbol=AAPL&interval=1min&apikey=911836fcb6b7436b98439de2e18233ed';
    else if (namestock == "GOOGLE")
      API =
        'https://api.twelvedata.com/price?symbol=GOOG&interval=1min&apikey=911836fcb6b7436b98439de2e18233ed';
    else if (namestock == "MICROSOFT")
      API =
        'https://api.twelvedata.com/price?symbol=MSFT&interval=1min&apikey=911836fcb6b7436b98439de2e18233ed';
    else if (namestock == "FACEBOOK")
      API =
        'https://api.twelvedata.com/price?symbol=FB&interval=1min&apikey=911836fcb6b7436b98439de2e18233ed';
    else if (namestock == "ALIBABA")
      API =
        'https://api.twelvedata.com/price?symbol=BABA&interval=1min&apikey=911836fcb6b7436b98439de2e18233ed';
    fetch(API)
      .then(res => res.json())
      .then(resJson => {
        this.setState({data: resJson.price});
      })
      .catch(e => console.log(e));
  };
  render() {
    console.log(this.state.data)
    return (
      <View style={styles.container}>
        <View style={styles.elec}>
          <Text style={styles.text}>{this.state.name}</Text>
          <Text style={styles.text}>{this.state.data}</Text>
        </View>
        <View style={styles.foot}>
          <TouchableOpacity
            style={{
              backgroundColor: '#A4A4A4',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={()=>this.fetchstock("APPLE")}>
            <Text>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={()=>this.fetchstock("GOOGLE")}>
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2F5A9',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={()=>this.fetchstock("MICROSOFT")}>
            <Text>Microsoft</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#4000FF',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={()=>this.fetchstock("FACEBOOK")}>
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#DF7401',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={()=>this.fetchstock("ALIBABA")}>
            <Text>Alibaba</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  elec: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foot: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
  },
});
