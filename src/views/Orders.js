import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Text,
    TouchableHighlight
} from "react-native";

export default class OrdersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({ refreshing: true });
        fetch('https://northwind.vercel.app/api/orders')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>
        <TouchableHighlight style={styles.container}>
           <View style={{ backgroundColor: 'white' }}>
           <Text  style={{ fontSize: 22, fontWeight: '700' }} >Order Date:  {data.item.orderDate}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Customer ID: {data.item.customerId}</Text>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>Ship Address: </Text>
                <Text style={{ fontSize: 14, opacity: .6 , color: 'blue'}}>{data.item.shipAddress.street}</Text> 
                <Text style={{ fontSize: 14, opacity: .6 , color: 'blue'}}>{data.item.shipAddress.region}</Text>                            
                <Text style={{ fontSize: 14, opacity: .6 , color: 'blue'}}>{data.item.shipAddress.city}</Text>
            </View>
        </TouchableHighlight>
 
    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchData() });
    }

    render() {
      return (
        <SafeAreaView>
          <FlatList
            data={this.state.data.sort((a, b) => b.orderDate > a.orderDate ? 1: -1)}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 500,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',

  },
  image: {
    height: '10%',
    borderRadius: 4,
  },
});