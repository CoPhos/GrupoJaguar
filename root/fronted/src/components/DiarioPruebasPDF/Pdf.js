import React from 'react';
import { Page, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Firma from './Firma';

import Header from './Header';
import Column from './Column';

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
    fontSize: 9,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    lineHeight: 1,
    flexDirection: 'column',
    boxSizing: 'border-box',
    position: 'relative',
    color: '#008433',
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

function Pdf(props) {
  function formatData() {
    const data = [...props.data];
    let emptyObject = {};
    if (data.length < 20) {
      const limit = 20 - data.length;
      console.log(limit);
      for (let i = 0; i < limit; i++) {
        data.push(emptyObject);
      }
      console.log(data);
      return data;
    } else {
      return data;
    }
  }

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <Header fecha={props.fecha}></Header>

        <Column data={formatData()}></Column>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <Firma></Firma>
            <Firma></Firma>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default Pdf;
