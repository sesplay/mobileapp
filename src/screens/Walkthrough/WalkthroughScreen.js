import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import { white, greenish_cyan, pinkish_red, sun_yellow } from '../../styles/colors';
import { aganeS65, robotoBlack } from '../../styles/fonts';
import { SesplayLogo } from '../../assets/logo';
import LineScreenView from '../../components/LineScreenView';
import deviceStorage from '../../functions/deviceStorage';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
  },
  image: {position: 'absolute', width: Dimensions.get('window').width, height: Dimensions.get('window').height},
  text: {
    ...aganeS65,
    color: '#fff',
    fontSize: 48,
    letterSpacing: -2.16,
  },
  textLarge: {
      fontSize: 68
  },
  textContainer: {
      position: 'absolute',
      bottom: 124,
      marginRight: 15,
      marginLeft: 111
  }
})

const Logo = ({color}) => (
    <View style={{marginLeft: 47, marginTop: 30}}>
        <SesplayLogo color={color} />
    </View>
) 

export default class Example extends Component {
    skip = async() => {
        await deviceStorage.saveWalkthrough(true)
        return this.props.navigation.navigate('Auth')
    }
    render(){
        return (
            <React.Fragment>
                <StatusBar hidden />
                <TouchableOpacity style={{position: 'absolute', bottom: 0, right: 0, paddingVertical: 25, paddingHorizontal: 42, zIndex: 100}} onPress={this.skip}>
                    <Text style={{...robotoBlack, fontSize: 18, color: white}}>Skip</Text>
                </TouchableOpacity>
                <Swiper 
                    style={styles.wrapper}
                    dotStyle={{width: 12, height: 12, borderRadius: 6, marginHorizontal: 3.5, opacity: 0.3}}
                    dotColor={white}
                    activeDotStyle={{width: 12, height: 12, borderRadius: 6, marginHorizontal: 3.5}}
                    activeDotColor={white}
                    loop={false}
                    paginationStyle={{marginBottom: 3}}
                >
                    <LineScreenView contentContainerStyle={styles.slide} lineColor={greenish_cyan}>
                        <Image source={require('../../assets/walkthrough/walkthrough-1.jpg')} style={styles.image} />
                        <Logo color={greenish_cyan} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.textLarge]}>Play Together,</Text>
                            <Text style={styles.text}>at Sesplay</Text>
                        </View>
                    </LineScreenView>
                    <LineScreenView contentContainerStyle={styles.slide} lineColor={pinkish_red}>
                        <Image source={require('../../assets/walkthrough/walkthrough-2.jpg')} style={styles.image} />
                        <Logo color={pinkish_red} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.textLarge]}>Get your session player,</Text>
                            <Text style={styles.text}>at Sesplay</Text>
                        </View>
                    </LineScreenView>
                    <LineScreenView contentContainerStyle={styles.slide} lineColor={sun_yellow}>
                        <Image source={require('../../assets/walkthrough/walkthrough-3.jpg')} style={styles.image} />
                        <Logo color={sun_yellow} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.textLarge]}>Book  musician to an event, </Text>
                            <Text style={styles.text}>at Sesplay</Text>
                        </View>
                    </LineScreenView>
                </Swiper>
            </React.Fragment>
        );
    }
}
