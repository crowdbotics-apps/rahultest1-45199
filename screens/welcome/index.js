import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
const API_URL = 'https://api.publicapis.org/entries';

const ListScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_URL).then(response => response.json()).then(json => setData(json.entries)).catch(error => console.error(error));
  }, []);

  const renderItem = ({
    item
  }) => <View>
      <Text>{item.API}</Text>
      <Text>{item.Description}</Text>
    </View>;

  return <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.API} />
    </SafeAreaView>;
};

export default ListScreen;