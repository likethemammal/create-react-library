import React from 'react';
import udiliaLogo from './udilia-logo.svg';

import {
    View,
    StyleSheet,
    Text,
    Touchable,
} from '@likethemammal/react-primitives'


const styles = StyleSheet.create({
    Example: {
        marginTop: 60,
        alignItems: 'center',
    },
    Example_text: {
        color: '#333',
        fontSize: 32,
        fontWeight: '300',
        textAlign: 'center',
        paddingTop: 20,
    },
    Example_touchable: {
        backgroundColor: 'lightgray',
        padding: 10,
    }
})

const onPress = () => {
    console.log('press')
}

const Example = () => (
  <View style={styles.Example}>
    <img src={udiliaLogo} alt="React logo" width="62" />
    <Text style={styles.Example_text}>Create React-Primitives Library</Text>
    <Touchable
        onPress={onPress}
    >
        <View style={styles.Example_touchable}>
            <Text>Press Me :]</Text>
        </View>
    </Touchable>
  </View>
);

export default Example;
