import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Maindesign from '../styles/Maindesign';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import { sliderdata } from '../data/data';
import { windowWidth } from '../data/dimensions';
import Bannerslider from '../data/Bannerslider';
import listitem from '../data/listitem';
const Home = () => {
    const renderbanner = ({ item,index }) => {
        return <Bannerslider data={item} />
    }
    return (
        <View style={Maindesign.homecontainer}>
            <View style={Maindesign.homeheader}>
                <Text style={{ fontSize: 25, fontFamily: 'Roboto-Medium', color: '#000' }}>Hi Sangeeth</Text>
                <Image source={require('../images/dp.png')}
                    style={{ height: 40, width: 40, borderRadius: 25 }} />
            </View>
            <View style={Maindesign.searchbar}>
                <Image style={{ height: 15, width: 15, marginHorizontal: 10, }} source={require('../images/search.png')} />
                <TextInput placeholder='Search here' />
            </View>
            <View style={Maindesign.homeheader}>
                <Text style={Maindesign.carouselheader}>Trending Works</Text>
                <TouchableOpacity>
                    <Text style={Maindesign.carousellink}>See All</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={sliderdata}
                renderItem={renderbanner}
                sliderWidth={windowWidth}
                itemWidth={300}
                loop={true}
            />
            <listitem/>
        </View>
    );
};

export default Home;
