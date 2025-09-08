import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef', // Cor de fundo neutra mais suave
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40, // Espaço no topo
  },
  txt: {
    fontSize: 38, 
    color: '#000000ff', 
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto', 
  },
  inp: {
    height: 45,
    borderColor: '#000000ff', 
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#fff', 
    fontSize: 16,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  pre: {
    backgroundColor: '#000000ff',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: '70%', 
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease', 
  },
  txtb: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  img: {
    height: 180, // Altura reduzida para a imagem
    width: '70%', // Ajuste da largura para ficar proporcional
    marginBottom: 30,
    borderColor: '#000000ff',
    borderWidth: 5,
    borderRadius: 15, // Bordas arredondadas mais suaves
    resizeMode: 'contain', 
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', // Efeito de sombra na imagem
    transition: 'all 0.5s ease', // Transição suave quando a imagem mudar
  },
  sub: {
    fontSize: 17,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555',
  },
  obs: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
