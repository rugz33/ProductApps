import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { generateRandomChar } from '../util/Util';

const ProductScreen = ({ navigation }) => (
  <ProductDetailScreen
    product={navigation.state.params.product}
    navigation={navigation}
  />
);

const ProductDetailScreen = ({ navigation, product }) => {
  const {
    container,
    viewContent,
    viewName,
    viewNameContent,
    txtName,
    viewDesc,
    txtDesc,
    viewPrice
  } = styles

  if(product === undefined){
    product = {
      product_id: navigation.state.params.productID,
      name: "Spa by Marga tilaar",
      price: "Rp 100.000,00",
      description: "Details details details details",
      image: "https://placeimg.com/128/128/nature"
    };
  }

  return(
    <View style={container}>
      <Image source={{uri: product.image+'?dummy='+generateRandomChar()}} resizeMode='stretch' style={container}/>
      <View style={viewContent}>
        <View style={container}>
          <View style={viewName}>
            <View style={viewNameContent}>
              <Text style={txtName}>{product.name}</Text>
            </View>
            <View style={viewNameContent}>
              <Text style={txtName}>Product ID: {product.product_id}</Text>
            </View>
          </View>
          <View style={viewDesc}>
            <Text style={txtDesc}>{product.description}</Text>
          </View>
          <View style={viewPrice}>
            <Text style={txtName}>{product.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewContent: {
    flex:1,
    backgroundColor:'white'
  },
  viewName: {
    flex:1,
    flexDirection: 'row',
    padding:10
  },
  viewNameContent: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  txtName: {
    fontSize:18,
    color:'black'
  },
  viewDesc: {
    flex:4,
    borderWidth:1,
    borderColor:'lightgray',
    padding:10,
    marginLeft:10,
    marginRight:10
  },
  txtDesc: {
    color:'black'
  },
  viewPrice: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    padding:10
  }
});

export default ProductScreen;
