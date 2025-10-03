import { StyleSheet } from "react-native";

// Global styles

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    image: {
        width: 250,
        height: 250,
        padding: 10,
        marginLeft: 25,
        
    },

    groupButtons: {
        flexDirection: 'row',
        gap: 10,
        
    },

    inputBox: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        textAlign: "center",
        marginVertical: 5,
        borderRadius: 5,
        minWidth: 250,
    },

    button: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#4395d8ff",
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    },


// Test
    courseItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        minWidth: 300,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    coursePurpose: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    coursePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2ecc71',
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    courseCount: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginBottom: 10,
    },
    textSection: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        minWidth: 300,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#4395d8ff',
    },
    sectionContent: {
        fontSize: 16,
        lineHeight: 22,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2ecc71',
    },
    courseType: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 15,
    },

});

