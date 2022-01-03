import React from 'react';
import { Text, View } from '@react-pdf/renderer';

function Firma() {
  return (
    <>
      <View style={{ width: '300px', height: '70px', marginTop: '20px' }} wrap={false}>
        <View
          style={{
            border: '1px solid #008433',
            borderRadius: '10%',
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
            style={{
              borderBottom: '1px solid #008433',
              height: '1px',
              width: '95%',
              marginBottom: 12
            }}
          >
            <Text></Text>
          </View>
        </View>
      </View>
    </>
  );
}
export default Firma;
