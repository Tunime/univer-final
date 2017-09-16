import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'encabezado': {
    'background': 'url("../img/fondo.png")'
  },
  'encabezado menu': {
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 6 }]
  },
  'encabezado menu figure': {
    'width': [{ 'unit': 'px', 'value': 50 }]
  },
  'encabezado menu figure img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'encabezado menu select option div': {
    'display': 'flex',
    'flexDirection': 'column'
  }
});
