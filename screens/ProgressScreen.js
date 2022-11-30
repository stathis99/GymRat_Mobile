import {Text, View , StyleSheet} from 'react-native'

function ProgressScreen(){
    return (
        <View style= {styles.container}>
                 <Text> Progress Screen !! </Text>
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
  


export default ProgressScreen;