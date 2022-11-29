import {Text, View , StyleSheet} from 'react-native'

function FoodScreen(){
    return (
        <View style= {styles.container}>
                 <Text> Fooood Screen !! </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

  });
  


export default FoodScreen;