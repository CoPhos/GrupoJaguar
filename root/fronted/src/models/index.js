// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BitacoraDePruebasComprension, DocumentoBitacora, ImagenReportColado, numEnsayeCount } = initSchema(schema);

export {
  BitacoraDePruebasComprension,
  DocumentoBitacora,
  ImagenReportColado,
  numEnsayeCount
};