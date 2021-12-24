import React from 'react';
import { Text, View } from '@react-pdf/renderer';
function Notas(props) {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <Text
          style={{
            padding: '2',
            paddingRight: '100',
            fontWeight: 700
          }}
        >
          NOTAS:
        </Text>
        <Text
          style={{
            padding: '2',
            fontWeight: 700
          }}
        >
          1 kgf / cm2 = 0,0981 MPa
        </Text>
        <Text
          style={{
            padding: '2',
            fontWeight: 700
          }}
        >
          1 kgf = 9,81 N
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            padding: '2',
            paddingRight: '100',
            fontWeight: 700
          }}
        >
          NOTAS:
        </Text>
        <Text
          style={{
            padding: '2',
            flex: 1
          }}
        >
          ZAPATAS Y DADOS DE CED 14ZAPATAS Y DADOS DE CED 14 ZAPATAS Y DADOS DE CED 14 ZAPATAS Y
          ZAPATAS Y DADOS DE CED 14ZAPATAS Y DADOS DE CED 14 ZAPATAS Y DADOS DE CED 14 ZAPATAS Y
          ZAPATAS Y DADOS DE CED 14ZAPATAS Y DADOS DE CED 14 ZAPATAS Y DADOS DE CED 14 ZAPATAS Y
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            padding: '2',
            paddingRight: '100',
            fontWeight: 700
          }}
        >
          {'Resistencia Obtenida a ' + props.data.edadDias + ' Dias'}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            margin: '5',
            fontSize: 5
          }}
        >
          NORMAS NMX-C-161-ONNCCE-2013
        </Text>
        <Text
          style={{
            margin: '5',
            fontSize: 5
          }}
        >
          NMX-C-156-ONNCCE-2010
        </Text>
        <Text
          style={{
            margin: '5',
            fontSize: 5
          }}
        >
          NMX-C-160-ONNCCE-2004
        </Text>
        <Text
          style={{
            margin: '5',
            fontSize: 5
          }}
        >
          NMX-C-109-ONNCCE-2013
        </Text>
        <Text
          style={{
            margin: '5',
            fontSize: 5
          }}
        >
          NMX-C-083-ONNCCE-2014
        </Text>
      </View>
    </>
  );
}

export default Notas;
