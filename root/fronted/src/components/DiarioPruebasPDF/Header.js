import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/images/logo.png';

const styles = StyleSheet.create({
  section: {
    width: 70,
    height: 70
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  }
});

function Header(props) {
  const fecha = new Date(props.fecha);
  return (
    <View style={styles.flexColumn}>
      <View style={[styles.flex, { marginLeft: '50px', marginBottom: '10px' }]}>
        <View style={styles.section}>
          <Image src={logo} styles={{}}></Image>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 600, marginLeft: '90px' }}>
          Diario de pruebas a la comprensión
        </Text>
      </View>
      <View
        style={{ height: '1px', backgroundColor: '#008433', width: '95%', marginLeft: '2.5%' }}
      ></View>
      <View
        style={[
          styles.flex,
          {
            justifyContent: 'flex-end',
            marginTop: '12px',
            marginRight: '20px',
            marginBottom: '12px'
          }
        ]}
      >
        <Text style={{ fontSize: 14, fontWeight: 600 }}>EQUIPO EL - </Text>
        <Text style={{ fontSize: 14, borderBottom: '1px solid #008433', width: '32px' }}></Text>
        <Text style={{ fontSize: 14, fontWeight: 600, marginLeft: '90px' }}>Fecha: </Text>
        <Text style={{ fontSize: 10, borderBottom: '1px solid #008433' }}>
          {fecha.toLocaleDateString('es-ES', { year: 'numeric' }) +
            '-' +
            fecha.toLocaleDateString('es-ES', { month: 'long' }) +
            '-' +
            fecha.toLocaleDateString('es-ES', { day: 'numeric' })}
        </Text>
      </View>
    </View>
  );
}

export default Header;
