// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BitacoraDePruebasComprension, DiarioDePruebasComprension, DocumentoBitacora, ImagenReportColado, countItems } = initSchema(schema);

export {
  BitacoraDePruebasComprension,
  DiarioDePruebasComprension,
  DocumentoBitacora,
  ImagenReportColado,
  countItems
};