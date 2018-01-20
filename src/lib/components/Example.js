import React from 'react';
import udiliaLogo from './udilia-logo.svg';

import {
    View,
    StyleSheet,
    Text,
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
    }
})

const Example = () => (
  <View style={styles.Example}>
    <img src={udiliaLogo} alt="React logo" width="62" />
    <Text style={styles.Example_text}>Create React-Primitives Library</Text>
  </View>
);

export default Example;
