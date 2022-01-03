import React from 'react';
import { Text, View } from '@react-pdf/renderer';
function Firmas() {
  return (
    <>
      <View style={{ flex: 1, margin: 1 }}>
        <View
          style={{
            border: '1px solid #000',
            borderRadius: '20%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <Text style={{ height: 55, marginTop: 5 }}>Elaboro</Text>
          </View>
          <View
            style={{ borderBottom: '1px solid #000', marginBottom: 8, height: '1px', width: '80%' }}
          ></View>
        </View>
      </View>
    </>
  );
}

export default Firmas;
