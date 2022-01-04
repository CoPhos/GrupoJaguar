import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Row from './Row';
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
    height: '37px',
    padding: '2px , 2px',
    borderBottom: '1px solid #008433',
    borderRight: '1px solid #008433',
    borderTop: '1px solid #008433'
  }
});

function Column(props) {
  return (
    <View>
      <View style={styles.flex}>
        <Text style={[styles.text, { borderLeft: '1px solid #008433' }]} break>
          Ensaye No.
        </Text>
        <Text style={styles.text} break>
          Muestra No. (Obra)
        </Text>
        <Text style={styles.text} break>
          f´c proyecto
        </Text>
        <Text style={styles.text} break>
          Edad dias Horas
        </Text>
        {/* altura */}
        <View style={[styles.flexColumn, {}]}>
          <Text style={{ padding: '0px', height: '18px' }}>Altura cm</Text>
          <View style={styles.flex}>
            <Text style={[styles.text, { padding: '0px', height: '18px', width: '32px' }]} break>
              h1
            </Text>
            <Text style={[styles.text, { padding: '0px', height: '18px', width: '32px' }]} break>
              h2
            </Text>
            <Text
              style={[
                styles.text,
                { padding: '0px', height: '18px', borderRight: '0px ', width: '32px' }
              ]}
              break
            >
              Prom. H
            </Text>
          </View>
        </View>
        {/* Diametro */}
        <View style={[styles.flexColumn, {}]}>
          <Text style={{ padding: '0px', height: '18px' }}>Diametro cm</Text>
          <View style={styles.flex}>
            <Text style={[styles.text, { padding: '0px', height: '18px', width: '32px' }]} break>
              d1
            </Text>
            <Text style={[styles.text, { padding: '0px', height: '18px', width: '32px' }]} break>
              d2
            </Text>
            <Text
              style={[
                styles.text,
                { padding: '0px', height: '18px', borderRight: '0px ', width: '32px' }
              ]}
              break
            >
              Prom. D
            </Text>
          </View>
        </View>
        {/* ------ */}
        <Text style={styles.text} break>
          Area cm2
        </Text>
        <Text style={[styles.text, { width: '32px' }]} break>
          Planiciadad
        </Text>
        <Text style={[styles.text, { width: '32px' }]} break>
          Perpendicularidad
        </Text>
        <Text style={[styles.text, { width: '47px' }]} break>
          Carga Maxima Kgf
        </Text>
        <Text style={[styles.text, { width: '57px' }]} break>
          Resistencia a la comprensión Kgf/cm2
        </Text>
        <Text style={[styles.text, { width: '42px' }]} break>
          % Resist.
        </Text>
        <Text style={[styles.text, { width: '32px' }]} break>
          Tipo Falla
        </Text>
        <Text style={[styles.text, { width: '32px' }]} break>
          Hora de ensayo
        </Text>
        <Text style={[styles.text, { width: '97px' }]} break>
          Observaciones
        </Text>
      </View>
      {props.data.map((element, index) => {
        return <Row key={index} info={element}></Row>;
      })}
    </View>
  );
}
export default Column;
