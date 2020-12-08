import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Avatar, ListItem, Badge } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem 
            onPress={() => props.onPress(item.id)}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95}
            containerStyle={styles.listContainer} //
            linearGradientProps={{
            //   colors: ['#FFA262', '#DA620B'],
            //   colors: ['#239f03', '#1a7d00'],
            //   colors: ['#239f03', '#1a7d00'],
            // colors: ['#587db9', '#3662a6'],
                // colors: ['#f39f0c', '#fbb741'],
                colors: ['#ffa262', '#eca06c'],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}>
                <Avatar size='large' rounded source={require('./images/orange-avatar-white-bg.png')} />
                <ListItem.Content>
                    <ListItem.Title style={styles.listItemTitle}>
                        {item.number}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.listItemSubtitle}>
                        {item.job} {'\n'}
                        {item.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={props.packages}
            renderItem={renderDirectoryItem}
            style={styles.flatlistOverview}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles=StyleSheet.create({
    flatlistOverview: {
        marginTop: 75,
        marginLeft: 5,
        marginRight: 5
    },

    listItemTitle: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 28
    },

    listContainer: {
        margin: 5,
        borderRadius:15
    },
    listItemSubtitle:{
        color: 'white',
        fontSize: 18
    }

})

export default Directory;