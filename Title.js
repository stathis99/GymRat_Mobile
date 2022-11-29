import { Text, StyleSheet } from 'react-native'

function Title({children}){
    return <Text style= {styles.title} >{children}</Text>;
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        borderColor:'black',
        borderWidth: 2,
        padding:16,
    }

})

export default Title;