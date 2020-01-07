import {
    StyleSheet
  } from "react-native";

// TODO: change values
const colors = {
    black : "black",
    white : "white",
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: 'center',
        margin: 20,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Skia'
    },
    description: {
        marginBottom: 40,
        fontFamily: 'Skia'
    },
    form: {
        alignItems: 'center',
    },
    formField: {
        flexDirection: "row",
        marginBottom: 20,
        padding: 20,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 25,
    },
    input: {
        fontSize: 16,
        width: "70%",
        marginLeft: 10,
        marginRight: 10,
        fontFamily: 'Skia'
    },
    inputTitle: {
        fontSize: 16,
        color: colors.black,
        fontFamily: 'Skia'
    },
    button: {
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 50,
        paddingRight: 50,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 25,
        fontFamily: 'Skia'
    }
    
  });
  
export default styles;