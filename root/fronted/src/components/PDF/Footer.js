import React from 'react';
import { Text, View } from '@react-pdf/renderer';

function Footer() {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            paddingRight: '100',
            fontWeight: 700,
            fontSize: 6
          }}
        >
          El presente informe sólo afecta a las muestras ensayadas
        </Text>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 6
          }}
        >
          xxx-xxxx-xxx
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            paddingRight: '100',
            fontWeight: 700,
            fontSize: 6
          }}
        >
          Este informe no se podrá ser reproducido parcialmente,sin la autorización previa del
          laboratorio
        </Text>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 6
          }}
        >
          xxx-xxxx-xxx
        </Text>
      </View>
    </>
  );
}

export default Footer;
