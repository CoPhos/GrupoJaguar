import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  subtittle: {
    padding: '2',
    paddingRight: '100',
    fontWeight: 700,
    borderRight: '1px solid #000',
    width: '192px'
  },
  subtittle2: {
    padding: '2',
    fontWeight: 700,
    borderRight: '1px solid #000',
    paddingRight: 41,
    width: '139.5px'
  },
  subNopadding: {
    padding: '2',
    borderRight: '1px solid #000',
    width: '170.5px'
  },
  subNopadding2: {
    padding: '2',
    fontWeight: 700,
    borderRight: '1px solid #000',
    width: '31px'
  },
  subContent: {
    padding: '2',
    width: '77px',
    borderRight: '1px solid #000'
  },
  borderFlex: {
    borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row'
  },
  noBorderFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  borderFlexWidht: {
    borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row',
    width: '139.5px'
  },

  flexWidth: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  tittle: {
    padding: '0',
    margin: '0',
    fontWeight: 700,
    fontSize: 9,
    marginLeft: 40
  },
  paddingWidth: {
    padding: '2',
    width: '192px'
  },
  flexRow: { display: 'flex', flexDirection: 'row' }
});
function verticalText() {
  return (
    <View
      style={{
        borderRight: '1px solid #000',
        marginLeft: 6,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '16px'
      }}
    >
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        D
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        A
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        T
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        O
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        S
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        {' '}
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        D
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        E
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        L
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        {' '}
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        E
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        S
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        P
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        É
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        C
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        I
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        M
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        E
      </Text>
      <Text style={{ display: 'inline-block', marginTop: -2, marginBottom: -2, fontWeight: '700' }}>
        N
      </Text>
    </View>
  );
}
function fields(...args) {
  let count = 0;
  let component = [];
  if (!(args[0] === ' ') && !(args[0] === 0) && !(args[0] === '0.0')) {
    component.push(<Text style={styles.subContent}>{args[0].toLocaleString('pt-BR')}</Text>);
  } else {
    count = count + 1;
  }
  if (!(args[1] === ' ') && !(args[1] === 0) && !(args[1] === '0.0')) {
    component.push(<Text style={styles.subContent}>{args[1].toLocaleString('pt-BR')}</Text>);
  } else {
    count = count + 1;
  }
  if (!(args[2] === ' ') && !(args[2] === 0) && !(args[2] === '0.0')) {
    component.push(<Text style={styles.subContent}>{args[2].toLocaleString('pt-BR')}</Text>);
  } else {
    count = count + 1;
  }
  if (!(args[3] === ' ') && !(args[3] === 0) && !(args[3] === '0.0')) {
    component.push(<Text style={styles.subContent}>{args[3].toLocaleString('pt-BR')}</Text>);
  } else {
    count = count + 1;
  }

  for (let i = 0; i < count; i++) {
    component.push(<Text style={styles.subContent}></Text>);
  }
  return component;
}
function DatosObtenidos(props) {
  return (
    <>
      <View style={{ borderBottom: '1px solid #000' }}>
        <Text style={styles.tittle}>DATOS OBTENIDOS</Text>
      </View>
      <View style={styles.borderFlex}>
        <Text style={styles.subtittle}>REVENIMIENTO, cm</Text>
        <Text style={styles.paddingWidth}>
          {props.data.revenimientoObtenido.toLocaleString('pt-BR')}
        </Text>
      </View>

      <View style={styles.flexRow}>
        {verticalText()}
        <View style={{ width: '100%' }}>
          {/* altura */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>ALTURA, cm</Text>
            {fields(
              props.data.altura1,
              props.data.altura2,
              props.data.altura3,
              props.data.altura4
            ).map(item => {
              return item;
            })}
          </View>
          {/* masa kg*/}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>MASA, kg</Text>
            {fields('_ _ _', '_ _ _', ' ', ' ').map(item => {
              return item;
            })}
          </View>
          {/* diametro cm */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>DIAMETRO, cm</Text>
            {fields(
              props.data.diametro1,
              props.data.diametro2,
              props.data.diametro3,
              props.data.diametro4
            ).map(item => {
              return item;
            })}
          </View>
          {/* seccion cm2 */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>SECCION, cm2</Text>
            {fields(props.data.area1, props.data.area2, props.data.area3, props.data.area4).map(
              item => {
                return item;
              }
            )}
          </View>
          {/* fecha colado */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>FECHA DE COLADO</Text>
            <Text style={styles.subContent}>
              {props.data.fechaColado.toLocaleDateString('es-ES', { year: 'numeric' }) +
                '-' +
                props.data.fechaColado.toLocaleDateString('es-ES', { month: 'long' }) +
                '-' +
                props.data.fechaColado.toLocaleDateString('es-ES', { day: 'numeric' })}
            </Text>
          </View>
          {/* edad dias */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>EDAD, DIAS</Text>
            <Text style={styles.subContent}>{props.data.edadDias}</Text>
          </View>
          {/* fecha ruptura */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>FECHA DE RUPTURA</Text>
            <Text style={styles.subContent}>
              {props.data.fechaRuptura.toLocaleDateString('es-ES', { year: 'numeric' }) +
                '-' +
                props.data.fechaRuptura.toLocaleDateString('es-ES', { month: 'long' }) +
                '-' +
                props.data.fechaRuptura.toLocaleDateString('es-ES', { day: 'numeric' })}
            </Text>
          </View>
          {/* carga maxima */}
          <View style={{ width: '100%' }}>
            <View style={styles.flexWidth}>
              <View style={styles.borderFlexWidht}>
                <Text style={styles.subtittle2}>CARGA MÁXIMA</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                  <View style={styles.borderFlex}>
                    <Text style={styles.subNopadding2}>kgf</Text>
                    {fields(
                      props.data.carga1,
                      props.data.carga2,
                      props.data.carga3,
                      props.data.carga4
                    ).map(item => {
                      return item;
                    })}
                  </View>
                  <View style={styles.borderFlex}>
                    <Text style={styles.subNopadding2}>N</Text>
                    {fields(
                      Math.trunc(props.data.carga1 * 9.81),
                      Math.trunc(props.data.carga2 * 9.81),
                      Math.trunc(props.data.carga3 * 9.81),
                      Math.trunc(props.data.carga4 * 9.81)
                    ).map(item => {
                      return item;
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* resistencia a la comprension */}
          <View style={{ width: '100%' }}>
            <View style={styles.flexWidth}>
              <View style={styles.borderFlexWidht}>
                <Text style={styles.subtittle2}>RESISTENCIA A LA COMPRENSION</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                  <View style={styles.borderFlex}>
                    <Text style={[styles.subNopadding2, { fontWeight: '6px' }]}>kgf/cm2</Text>
                    {fields(
                      props.data.resistenciaComprension1,
                      props.data.resistenciaComprension2,
                      props.data.resistenciaComprension3,
                      props.data.resistenciaComprension4
                    ).map(item => {
                      return item;
                    })}
                  </View>
                  <View style={styles.borderFlex}>
                    <Text style={styles.subNopadding2}>MPa</Text>
                    {fields(
                      (props.data.resistenciaComprension1 * 0.0981).toFixed(1),
                      (props.data.resistenciaComprension2 * 0.0981).toFixed(1),
                      (props.data.resistenciaComprension3 * 0.0981).toFixed(1),
                      (props.data.resistenciaComprension4 * 0.0981).toFixed(1)
                    ).map(item => {
                      return item;
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* % resistencia comprension */}
          <View style={styles.borderFlex}>
            <Text style={styles.subNopadding}>% DE LA RESISTENCIA DE PROYECTO</Text>
            {fields(
              props.data.porcentajeResistenciaComprension1,
              props.data.porcentajeResistenciaComprension2,
              props.data.porcentajeResistenciaComprension3,
              props.data.porcentajeResistenciaComprension4
            ).map(item => {
              return item;
            })}
          </View>
          {/* tipo falla */}
          <View style={styles.noBorderFlex}>
            <Text style={styles.subNopadding}>TIPO DE FALLA DE RUPTURA</Text>
            {fields(
              props.data.tipoFalla,
              props.data.tipoFalla,
              props.data.tipoFalla,
              props.data.tipoFalla
            ).map(item => {
              return item;
            })}
          </View>
        </View>
      </View>
    </>
  );
}

export default DatosObtenidos;
