import React from 'react';
import { Text, View } from 'react-native';

function Inicial({ navigation }) {

    const sobre = () => {
        navigation.navigate('Sobre')
    }
    const detalhes = () => {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={{flex: 1, backgroundColor: '20b2aa'}}>
         
                <Text>Edição de Vídeo com Gustavo Rocha</Text>
               
            </View>

        
    )
}

export default Inicial;