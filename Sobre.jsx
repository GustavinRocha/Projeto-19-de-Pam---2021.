import React from 'react';
import { Text, View } from 'react-native';

function Sobre({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={{flex: 1, backgroundColor: '248eff'}}>
            <Text>Sobre</Text>
            <Text> 
                Criador: Gustavo Feijó Rocha.
            </Text>
            <text>
                Tal Aplicação criada foi inspirada pelo meu gosto e facilidade de expressar minha criatividade dentro
                do mundo de Edição de Vídeo, no qual posso produzir e mostrar, além de ensinar para as pessoas, tudo do
                Universo AudioVisual.
            </text>
            <text>
                Mais pra frente pretendo expandir mais ainda o mercado de Edição de Vídeo, além de inspirar a criação de
                mais cursos, principalmente uma Faculdade, no qual ajudaria ainda mais no reconhecimento do Mundo do AudioVisual.
            </text>
    </View>

    )
}

export default Sobre;