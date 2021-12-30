import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo1.png';

const styles = StyleSheet.create({
  section: {
    width: 80,
    height: 80
  },
  flex: {
    display: 'flex',
    flexDirection: 'row'
  }
});

function Header(props) {
  return (
    <View style={styles.flex}>
      <View style={styles.section}>
        <Image
          src={props.data.logotipo === '1' ? logo : logo2}
          styles={{ width: '75px', height: '80px' }}
        ></Image>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600 }}>JAGUAR Y ASOCIADOS S.A. DE C.V.</Text>
        <Text style={{ fontSize: 11 }}>
          Laboratorio de pruebas en concreto hidráulico y materiales de construcción
        </Text>
        <Text style={{ fontSize: 11 }}>
          Paseo Vicente Lombardo Toledano No. 182-425 San Pedro Totoltepec, Toluca, Mex. C.P. 50200
        </Text>
        <Text style={{ fontSize: 11 }}>
          Tel.(733)275-13-33 (722)275-35-06 (722)199-75-54 E-mail: jaguaryasoc@hotmail.com
        </Text>
        <Text style={{ fontWeight: 600 }}>INFORME DE PRUEBAS DE CONCRETO HIDRÁULICO</Text>
      </View>
    </View>
  );
}

export default Header;
