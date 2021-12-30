import React from 'react';
import { Text, View } from '@react-pdf/renderer';
function InfoGeneral(props) {
  return (
    <View
      style={{
        border: '1px solid #000',
        borderRadius: '10%'
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%'
        }}
      >
        <Text style={{ margin: 2 }}>OBRA:</Text>
        <Text style={{ borderBottom: '1px solid #000', flex: '1 1 auto', margin: 2 }}>
          {props.data.nombreObra}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ width: '60%' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ margin: 2 }}>LOCALIZACIÓN:</Text>
            <Text style={{ borderBottom: '1px solid #000', margin: 2, flex: '1 1 auto' }}>
              {props.data.ubicacion}
            </Text>
          </View>
        </View>
        <View style={{ width: '40%' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ margin: 2 }}>FECHA DE RECIBO:</Text>
            <Text style={{ borderBottom: '1px solid #000', margin: 2, flex: '1 1 auto' }}>
              {props.data.fechaColado.toLocaleDateString('es-ES', { year: 'numeric' }) +
                '-' +
                props.data.fechaColado.toLocaleDateString('es-ES', { month: 'long' }) +
                '-' +
                props.data.fechaColado.toLocaleDateString('es-ES', { day: 'numeric' })}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ width: '60%' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ margin: 2 }}>SOLICITADO POR:</Text>
            <Text style={{ borderBottom: '1px solid #000', margin: 2, flex: '1 1 auto' }}>
              {props.data.solicitadoPor}
            </Text>
          </View>
        </View>
        <View style={{ width: '40%' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ margin: 2 }}>FECHA DE INFORME:</Text>
            <Text style={{ borderBottom: '1px solid #000', margin: 2, flex: '1 1 auto' }}>
              {props.data.fechaRuptura.toLocaleDateString('es-ES', { year: 'numeric' }) +
                '-' +
                props.data.fechaRuptura.toLocaleDateString('es-ES', { month: 'long' }) +
                '-' +
                props.data.fechaRuptura.toLocaleDateString('es-ES', { day: 'numeric' })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default InfoGeneral;
