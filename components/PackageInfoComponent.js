import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

function RenderPackage({item}){
    
    if(item){
        return(
            // <Card 
            //     featuredTitle={item.number}
            //     image={require('./images/GreenTaskBarIcon.png')}>
            //     <Text style={{margin:20}}>
            //         {item.description}
            //     </Text>

            // </Card>
            <SafeAreaView>
                <Card style={styles.cardContainer}>
                    <Card.Title style={styles.cardTitle}>
                        {item.number} {'\n'}
                        {item.job} {'\n'}
                        {item.description}
                    </Card.Title>
                    <Text style={styles.cardBody}>
                        LOCATION{'\n'}
                        {item.location}{'\n'}{'\n'}
                        STATUS{'\n'}
                        {item.remaining} out of {item.ordered} units remaining{'\n'}{'\n'}
                        NOTES{'\n'}{item.notes}
                    </Text>
                    {/* <Card.Image style={styles.cardImage} source={require('./images/boxes.jpeg')}/> */}
                </Card>
            </SafeAreaView>
        );
    }

    return <View />
}

function PackageInfo(props){
    return <RenderPackage item={props.item} />
}

const styles = StyleSheet.create({
    cardImage: {
        resizeMode: "cover",
    },

    cardTitle: {
        fontSize: 22,
        textAlign:"left",
        padding: 5,
        backgroundColor: '#e3e3e3'
    },
     cardBody: {
        fontSize: 18,
        paddingLeft: 5,
        
    },

    cardContainer: {
        marginTop:0,
        marginBottom:0,
        backgroundColor: 'lightgray'
    }
})


export default PackageInfo;