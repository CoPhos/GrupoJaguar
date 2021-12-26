import React from 'react';
import { Page, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo from '../../assets/images/logo3.png';
import Header from './Header';
import InfoGeneral from './InfoGeneral';
import Identificacion from './Identificacion';
import DatosProyecto from './DatosProyecto';
import DatosObtenidos from './DatosObtenidos';
import Notas from './Notas';
import Firmas from './Firmas';
import Footer from './Footer';

import PTSerif from '../../assets/fonts/PT_Serif/PTSerif-Regular.ttf';
import PTSerifBold from '../../assets/fonts/PT_Serif/PTSerif-Bold.ttf';

Font.register({
  family: 'Playfair Display',
  fonts: [
    {
      src: PTSerif,
      fontWeight: 'normal'
    },

    {
      src: PTSerifBold,
      fontWeight: 700
    }
  ]
});
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Playfair Display',
    fontSize: 8,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    lineHeight: 1.5,
    flexDirection: 'column',
    boxSizing: 'border-box',
    position: 'relative',
    '*': {
      boxSizing: 'inherit'
    },
    '*::before': {
      boxSizing: 'inherit'
    },
    '*::after': {
      boxSizing: 'inherit'
    }
  },
  cell: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: '575px'
  }
});
// const data = {
//   numMuestra: '001',
//   numObra: '62',
//   nombreObra: 'REMODELACION Y AMPLIACION DEL AEROPUERTO DE TAMPICO',
//   ubicacion: 'TAMPICO TAMPS.',
//   solicitadoPor: 'ICA CONSTRUCTORA S.A.DE C.V.',
//   elementoColado: 'ZAPATAS Y DADOS DE CED 14',
//   resistenciaComprensionProyecto: '250',
//   revenimientoProyecto: '10.0',
//   revenimientoObtenido: '12.0',
//   fechaColado: new Date(2021, 11, 1),
//   siete: '20-1-14',
//   catorce: '20-1-21',
//   veintiocho: '20-2-4',
//   veintiochoDos: '20-2-4',
//   equipoMezclado: 'OLLA',
//   resistenciaTipo: 'NORMAL',
//   concretera: 'CONCRETOS TANCOL SA. DE C.V',
//   observaciones: '',
//   altura1: ' ',
//   altura2: ' ',
//   altura3: 29.9,
//   altura4: 29.9,
//   diametro1: ' ',
//   diametro2: ' ',
//   diametro3: 15,
//   diametro4: 15,
//   area1: ' ',
//   area2: ' ',
//   area3: 176.7,
//   area4: 176.7,
//   carga1: ' ',
//   carga2: ' ',
//   carga3: 65810,
//   carga4: 66310,
//   resistenciaComprension1: ' ',
//   resistenciaComprension2: ' ',
//   resistenciaComprension3: 372,
//   resistenciaComprension4: 375,
//   porcentajeResistenciaComprension1: ' ',
//   porcentajeResistenciaComprension2: ' ',
//   porcentajeResistenciaComprension3: '115',
//   porcentajeResistenciaComprension4: '115',
//   tipoFalla: ' ',
//   laboratorista: 'Luis Ramón Sánchez C',
//   fechaRuptura: new Date(2021, 11, 29),
//   edadDias: 28,
//   fechaRecibo: new Date()
// };

function Pdf(props) {
  const data = props.info;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* image base water mark */}
        <Image
          fixed
          src={logo}
          style={{ position: 'relative', top: 230, left: 10, width: 550, height: 400 }}
        ></Image>
        {/* header */}
        <View style={styles.cell}>
          <Header></Header>
          <InfoGeneral data={data}></InfoGeneral>
          {/* cuerpo */}
          <View
            style={{
              border: '1px solid #000',
              borderRadius: '1%'
            }}
          >
            <Identificacion data={data}></Identificacion>
            <DatosProyecto data={data}></DatosProyecto>
            <DatosObtenidos data={data}></DatosObtenidos>
          </View>
          <View
            style={{
              border: '1px solid #000',
              borderRadius: '10%',
              marginTop: 2
            }}
          >
            <Notas data={data}></Notas>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              <Firmas></Firmas>
              <Firmas></Firmas>
              <Firmas></Firmas>
            </View>
          </View>
          <View>
            <Footer></Footer>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default Pdf;
