import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'encabezado': {
    'height': [{ 'unit': 'vh', 'value': 80 }],
    'display': 'flex',
    'flexDirection': 'column'
  },
  'encabezado en_en_cont': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column'
  },
  'en_buscador': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  'en_buscador h1': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'color': 'white'
  },
  'en_buscador buscador': {
    'background': 'white',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '10px',
    'width': [{ 'unit': 'em', 'value': 40 }]
  },
  'en_buscador buscador input': {
    'height': [{ 'unit': 'em', 'value': 2.5 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'borderRadius': '10px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'en_buscador buscador input:focus': {
    'outline': '0px'
  },
  'en_buscador buscador a img': {
    'width': [{ 'unit': 'px', 'value': 30 }]
  },
  'cantidad cant_cont': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height': [{ 'unit': 'vh', 'value': 20 }]
  },
  'cantidad li': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }]
  },
  'cantidad li numero': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': 'bold',
    'color': '#00A8D1'
  }
});
