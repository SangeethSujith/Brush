import {ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Maindesign from '../styles/Maindesign';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import { sliderdata } from '../data/data';
import { windowWidth } from '../data/dimensions';
import Bannerslider from '../data/Bannerslider';
import Listitems from '../data/Listitems';
import { listdata } from '../data/data';
const Home = () => {
    const renderbanner = ({ item,index }) => {
        return <Bannerslider data={item} />
    }
    return (
        <View style={Maindesign.homecontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
            <View>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={sliderdata}
                renderItem={renderbanner}
                sliderWidth={windowWidth-40}
                itemWidth={300}
                loop={true}
            />
            </View>     
                    <View style={{marginTop:25}}>
                       {listdata.map(item=>(
                           <Listitems 
                           key={item.id}
                           image={item.image}
                           title={item.title}
                           sub={item.sub}
                           />
                       ))}
                       </View>
                    </ScrollView>
        </View>
        
    );
};

export default Home;
