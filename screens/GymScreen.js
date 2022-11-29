import {Text, View , StyleSheet} from 'react-native'

function GymScreen(){
    return (
        <View style= {styles.container}>
                 <Text> Gym Screen !! </Text>
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
  


export default GymScreen;