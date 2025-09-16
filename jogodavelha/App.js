import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-web'; 
import styles from './styles/styles'; 

export default function App() {
  const [timeDigitado, settimeDigitado] = React.useState('');
  const [imagem, setImagem] = React.useState(require('./assets/img/time.png'));
  const [mensagem, setMensagem] = React.useState('');

  useEffect(() => {
    document.title = "Times de Futebol";
  }, []);

  function trocarImagem() {
    const time = timeDigitado.trim();  
    const timeFormatado = time.charAt(0).toUpperCase() + time.slice(1).toLowerCase(); 
    let novaImagem = null;

    switch (timeFormatado) {
      case "Palmeiras":
        novaImagem = require('./assets/img/img01.png');
        break;
      case "Flamengo":
        novaImagem = require('./assets/img/img02.png');
        break;
      case "Internacional":
        novaImagem = require('./assets/img/img03.png');
        break;
      case "Corinthians":
        novaImagem = require('./assets/img/img04.png');
        break;
      case "Vasco":
        novaImagem = require('./assets/img/img05.png');
        break;
      case "Cruzeiro":
        novaImagem = require('./assets/img/img06.png');
        break;
      case "Gremio":
        novaImagem = require('./assets/img/img07.png');
        break;
      case "Santos":
        novaImagem = require('./assets/img/img08.png');
        break;
      case "Fluminense":
        novaImagem = require('./assets/img/img09.png');
        break;
      case "Botafogo":
        novaImagem = require('./assets/img/img10.png');
        break;
      default:
        setMensagem("Time não encontrado. Digite um dos times disponíveis!");
        break;
    }

    if (novaImagem) {
      setImagem(novaImagem);
      setMensagem('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Bem-vindo ao Projeto NodeJs</Text>

      <View style={styles.cont}>
        <Text style={styles.sub}>
          Os times disponíveis são: Palmeiras, Flamengo, Internacional, Corinthians, Vasco, Cruzeiro, Gremio, 
        </Text>

        <Image style={styles.img} source={imagem} />

        <TextInput
          style={styles.inp}
          onChangeText={(value) => settimeDigitado(value)}
          placeholder="Digite o time escolhido"
        />

        <Pressable style={styles.pre} onPress={trocarImagem}>
          <Text style={styles.txtb}>Procurar</Text>
        </Pressable>

        {mensagem ? <Text style={styles.obs}>{mensagem}</Text> : null}
      </View>
    </View>
  );
}
