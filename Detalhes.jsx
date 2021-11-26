import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function Detalhes({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={{flex: 1, backgroundColor: '20b2aa'}}>

        
        
            <Text>Detalhes</Text>
           <Text>Aluno: Gustavo Feijó Rocha 2°DSB-B</Text>
           <Text>Este Aplicativo Mobile terá como finalidade a Divulgação do meu trabalho
            no mercado de Edições de Vídeo, além de ensinar um pouco sobre o mundo da Edição.
           </Text>
         
    </View>

    )
}
export default Detalhes;