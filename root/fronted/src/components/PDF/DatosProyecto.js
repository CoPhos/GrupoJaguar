import React from 'react';
import { Text, View } from '@react-pdf/renderer';
function DatosProyecto(props) {
  return (
    <>
      <View style={{ borderBottom: '1px solid #000', borderTop: '1px solid #000' }}>
        <Text
          style={{
            padding: '0',
            margin: '0',
            fontWeight: 700,
            fontSize: 9,
            marginLeft: 40
          }}
        >
          DATOS DEL PROYECTO
        </Text>
      </View>
      <View style={{ borderBottom: '1px solid #000', display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            padding: '2',
            paddingRight: '100',
            fontWeight: 700,
            borderRight: '1px solid #000',
            width: '192px'
          }}
        >
          RESISTENCIA A LA COMPRENSIÓN (f' c)
        </Text>
        <Text
          style={{
            padding: '2',
            borderRight: '1px solid #000'
          }}
        >
          {Math.ceil(props.data.resistenciaComprensionProyecto * 0.0981) + ' MPa'}
        </Text>
        <Text
          style={{
            padding: '2',
            borderRight: '1px solid #000'
          }}
        >
          {props.data.resistenciaComprensionProyecto + ' kgf/cm2'}
        </Text>
        <Text
          style={{
            padding: '2'
          }}
        >
          {'REVENIMIENTO ' + props.data.revenimientoProyecto.toLocaleString('pt-BR')}
        </Text>
      </View>
      <View style={{ borderBottom: '1px solid #000', display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            padding: '2',
            borderRight: '1px solid #000',
            width: '192px'
          }}
        >
          RESISTENCIA TIPO ADITIVO
        </Text>
        <Text
          style={{
            padding: '2',
            flex: 2
          }}
        >
          {props.data.resistenciaTipo}
        </Text>
      </View>
      <View style={{ borderBottom: '1px solid #000', display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            padding: '2',
            borderRight: '1px solid #000',
            width: '192px'
          }}
        >
          EQUIPOS DE MEZCLADO
        </Text>
        <Text style={{ padding: '2', flex: 2 }}>{props.data.equipoMezclado}</Text>
      </View>
      <View
        style={{
          borderBottom: '1px solid #000',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Text
          style={{
            padding: '2',

            borderRight: '1px solid #000',
            width: '192px'
          }}
        >
          CONCRETERA O CEMENTO
        </Text>
        <Text style={{ padding: '2', flex: 2 }}>{props.data.concretera}</Text>
      </View>
    </>
  );
}

export default DatosProyecto;
