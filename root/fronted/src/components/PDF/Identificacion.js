import React from 'react';
import { Text, View } from '@react-pdf/renderer';

function Identificacion(props) {
  return (
    <>
      <View style={{ borderBottom: '1px solid #000' }}>
        <Text
          style={{
            padding: '0',
            margin: '0',
            fontWeight: 700,
            fontSize: 9,
            marginLeft: 40
          }}
        >
          IDENTIFICACIÓN
        </Text>
      </View>
      <View style={{ borderBottom: '1px solid #000', display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            padding: '2',
            fontWeight: 700,
            borderRight: '1px solid #000',
            width: '192px'
          }}
        >
          ENSAYE No.
        </Text>
        <Text
          style={{
            padding: '2',
            flex: 2
          }}
        >
          {props.data.numMuestra}
        </Text>
      </View>
      <View style={{ borderBottom: '1px solid #000', display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            padding: '2',
            width: '192px',
            fontWeight: 700,
            borderRight: '1px solid #000'
          }}
        >
          MUESTRA No.
        </Text>
        <Text style={{ padding: '2', flex: 2 }}>{props.data.numObra}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '52px'
        }}
      >
        <Text
          style={{
            padding: '2',
            width: '192px',
            fontWeight: 700,
            borderRight: '1px solid #000'
          }}
        >
          TOMADA DE
        </Text>
        <Text style={{ padding: '2', flex: 2, display: 'flex', flexDirection: 'row' }}>
          {props.data.elementoColado}
        </Text>
      </View>
    </>
  );
}

export default Identificacion;
