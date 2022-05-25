import {StyleSheet} from 'react-native';

const Maindesign = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'inter',
  },
  //HOME PAGE DESIGN
  homecontainer:{
      flex:1,
      marginTop:30,
      marginHorizontal:20,
  },
  homeheader:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
    alignItems:'center',
      },
      searchbar:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#c6c6c6',
        borderWidth:1,
        borderRadius:8,
      },
      carouselheader:{
fontSize:18,
fontWeight:'500',
color:'#000'
      },
      carousellink:{
fontSize:15,
fontWeight:'bold',
color:'#0aada8',
      },
});

export default Maindesign;
