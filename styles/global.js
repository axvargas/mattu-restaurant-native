import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginHorizontal: '2.5%',
        flex: 1
    },
    btn: {
        backgroundColor: '#ab47bc',
    },
    txtBtn: {
        textTransform: 'none',
        fontWeight: 'bold',
        color: '#FFF'
    },
    title: {
        textAlign: 'center',
    },
    img: {
        height: 300,
        width: "100%"
    },
    quantity: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700'
    },
    btnSecondary: {
        backgroundColor: '#26a69a',
    }
})

export default globalStyles