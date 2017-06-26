import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapsScreen = ({ navigation }) => {
  let { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.1;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  return(
    <View style={{flex:1}}>
      <MapView style={{flex:1}}
        initialRegion={{
          latitude: -6.208973,
          longitude: 106.845384,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
      </MapView>

      <View style={{position: 'absolute',
        top: 0,
        left: 10,
        right: 50,
        flex:1,}}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2}
          autoFocus={false}
          returnKeyType={'search'}
          fetchDetails={true}
          listViewDisplayed='auto'
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
          }}
          query={{
               key: 'AIzaSyCZNe3BkX6DI0MRR-GAzWELqfx0-6sfDGg',
               language: 'id',
               location: '-6.208973,106.845384',
               radius: 40000
          }}
          styles={{
            container: {
              backgroundColor: 'rgba(0,0,0,0)',
            },
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth:0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            listView: {
              backgroundColor: 'white'
            }
          }}
          currentLocation={false}
        />
      </View>
    </View>
  );
};

export default MapsScreen;
