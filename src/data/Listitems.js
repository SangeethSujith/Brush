import {Image, View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'


const Listitems = ({image,title,sub}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
      <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <Image style={{height:55,width:55,borderRadius:10,marginHorizontal:8}} source={image}/>
      <View>
          <Text style={{fontWeight:'bold',fontSize:16,color:'#000'}}>{title}</Text>
          <Text>{sub}</Text>
      </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'#0aada8',padding:10,borderRadius:10}}>
          <Text style={{fontWeight:'bold'}}>Download</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Listitems