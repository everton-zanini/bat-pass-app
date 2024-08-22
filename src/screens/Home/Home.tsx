import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View } from "react-native";

import { BatButton } from '../../components/BatButton/BatButton';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { styles } from './Style'

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatButton/>
            </View>

            <StatusBar style="light" />
        </View>
    );
}
