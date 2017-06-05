import StyleSheet from 'react-style';


const Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    headerContainer: {
        flex: 2,
        backgroundColor: '#cce6ff', 
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    displayContainer: {
        flex: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#99ccff',

    },

    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#99ccff'
    },

    image: {
        flex: 1,
        width: 161,
        height: 161,
        resizeMode: 'contain',
        justifyContent: 'center',
    },

     blue: {
        fontFamily: 'serif',  
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
  }


});

export default Style;