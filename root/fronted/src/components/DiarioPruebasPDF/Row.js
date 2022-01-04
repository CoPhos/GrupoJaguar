import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid #008433',
    borderRight: '1px solid #008433'
  },
  text: {
    width: '42px',
    height: '17px',
    borderBottom: '1px solid #008433',
    borderRight: '1px solid #008433',
    fontWeight: 700
  }
});
function Row(props) {
  return (
    <View style={styles.flex}>
      <Text style={[styles.text, { borderLeft: '1px solid #008433' }]} break>
        {props.info.numMuestra}
      </Text>
      <Text style={styles.text} break>
        {props.info.numObra}
      </Text>
      <Text style={styles.text} break>
        {props.info.resistenciaComprensionProyecto}
      </Text>
      <Text style={styles.text} break>
        {props.info.edadDias}
      </Text>
      <Text style={[styles.text, { padding: '0px', width: '32px' }]} break></Text>
      <Text style={[styles.text, { padding: '0px', width: '32px' }]} break></Text>
      <Text style={[styles.text, { padding: '0px', width: '33px' }]} break></Text>
      <Text style={[styles.text, { padding: '0px', width: '32px' }]} break></Text>
      <Text style={[styles.text, { padding: '0px', width: '32px' }]} break></Text>
      <Text style={[styles.text, { padding: '0px', width: '33px' }]} break></Text>
      <Text style={styles.text} break></Text>
      <Text style={[styles.text, { width: '32px' }]} break></Text>
      <Text style={[styles.text, { width: '32px' }]} break></Text>
      <Text style={[styles.text, { width: '47px' }]} break></Text>
      <Text style={[styles.text, { width: '57px' }]} break></Text>
      <Text style={[styles.text, { width: '42px' }]} break></Text>
      <Text style={[styles.text, { width: '32px' }]} break></Text>
      <Text style={[styles.text, { width: '32px' }]} break></Text>
      <Text style={[styles.text, { width: '97px' }]} break></Text>
    </View>
  );
}

export default Row;
