import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { BatTextInput } from '../BatTextInput/BatTextInput';
import { styles } from './BatButtonStyles';

import generatePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton(){
        let generateToken = generatePass
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    function handleCleanButton(){
        setPass('')
    }

    return (
        <>
            <BatTextInput pass={pass}/>
            <Pressable
                style={styles.button}
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}>🔒 GENERATE </Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}>📝 COPY</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={handleCleanButton}
            >
                <Text style={styles.text}>🗑️ CLEAN</Text>
            </Pressable>
        </>
    );
}