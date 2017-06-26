import React from 'react';
import {
  View,
  ListView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { generateRandomChar } from '../util/Util';

const HomeScreen = ({navigation, screenProps}) => {
  const ds = new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2});

  const {
    centering,
    container,
    viewSearch,
    viewSearchContent,
    inputSearch,
    viewList,
    viewRow,
    viewRowContent,
    img,
    viewText,
    txt,
    txtPrice
  } = styles

  const renderRow = ({ rowData }) => (
    <TouchableOpacity activeOpacity={0.8}
        focusedOpacity={1}
        style={viewRow}
        onPress={() => navigation.navigate('Product', { product: rowData, productID: rowData.product_id })}>
      <View style={viewRowContent}>
        <Image source={{uri: rowData.image+'?dummy='+generateRandomChar()}} resizeMode='stretch' style={img}/>
        <View style={viewText}>
          <Text style={txt}>{rowData.name}</Text>
          <Text style={[txt, txtPrice]}>{rowData.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const spinner = screenProps.appData.isFetching ?
    (
      <View style={centering}>
        <ActivityIndicator size='large'/>
      </View>
    ) :
    ( screenProps.appData.error ? (
      <View style={centering}>
        <Text>Failed fetch data, please check your connection</Text>
      </View>
    ) : (<View/>));

  return(
    <View style={container}>
        <View style={viewSearch}>
          <View style={viewSearchContent}>
            <Ionicons
              name={'ios-search'}
              size={18}
              style={{color: 'gray' }}
            />
            <TextInput style={inputSearch} placeholder='Search' placeholderTextColor='dimgray' underlineColorAndroid='transparent'/>
          </View>
        </View>
        <View style={viewList}>
          <ListView
            enableEmptySections={true}
            dataSource={ds.cloneWithRows(screenProps.appData.data)}
            renderRow={(rowData, sectionID, rowID, highlightRow) => renderRow({rowData})}
          />
        </View>
      {spinner}
    </View>
  );
};

const styles = StyleSheet.create({
  centering: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.5
  },
  container: {
    flex: 1
  },
  viewSearch: {
    flex:1,
    backgroundColor: 'lightgray',
    padding:10
  },
  viewSearchContent: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'white',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:10
  },
  inputSearch: {
    flex:1,
    marginTop:5,
    marginLeft:5
  },
  viewList: {
    flex:11
  },
  viewRow: {
    backgroundColor:'white',
    marginBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
  },
  viewRowContent: {
    flex:1,
    flexDirection:'row'
  },
  img: {
    width:128,
    height:128
  },
  viewText: {
    flex:1,
    alignItems: 'center',
    padding:10
  },
  txt: {
    color:'black',
    fontSize: 16
  },
  txtPrice: {
    marginTop: 15
  }
});

export default HomeScreen;
