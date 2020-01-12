import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

class UserSelection extends React.Component {
  constructor() {
    super();
    this.state = {
    neighborhood: '',
    parking: '',
    freeWifi: '',
    food: '',
    alcohol: ''
  };}


  render() {
    let neighborhood = [{ value: 'Capitol Hill'}, { value: 'Downtown'}, {value: 'International District'}, { value: 'SLU'}, { value: 'Ravenna'}, { value: 'U-District'}, { value: 'Ballard'}, { value: 'Magnolia'}, { value: 'Fremont'}, { value: 'Wallingford'}];
  
    let parking = [{ value: 'lot', label: 
    'Lot/Garage'}, { value: 'Street'}]

    let wifi = [{ value: 'Yes'}, {value: 'No'}]

    let food = [{ value: 'Yes'}, {value: 'No'}]
// 
    let alcohol = [{ value: 'Yes'}, {value: 'No'}]

  return (
    <View style={styles.container}>
      <Dropdown
        containerStyle={styles.dropdown}
        label='Neighborhood'
        data={neighborhood}
        value={this.state.neighborhood}
        />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Parking'
        data={parking}
        value={this.state.parking} />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Free Wifi'
        data={wifi}
        value={this.state.wifi} />

      <Dropdown
        containerStyle={styles.dropdown}
        label='Food & Alcohol'
        data={food}
        value={this.state.food} />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dropdown: {
    width: '80%',
  }
})

export default UserSelection;