import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BitacoraDePruebasComprensionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentoBitacoraMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagenReportColadoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type numEnsayeCountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BitacoraDePruebasComprension {
  readonly id: string;
  readonly numMuestra?: string;
  readonly numObra?: string;
  readonly nombreObra?: string;
  readonly ubicacion?: string;
  readonly solicitadoPor?: string;
  readonly elementoColado?: string;
  readonly resistenciaComprensionProyecto?: string;
  readonly revenimientoProyecto?: string;
  readonly revenimientoObtenido?: string;
  readonly fechaColado?: string;
  readonly siete?: string;
  readonly catorce?: string;
  readonly veintiocho?: string;
  readonly veintiochoDos?: string;
  readonly equipoMezclado?: string;
  readonly resistenciaTipo?: string;
  readonly concretera?: string;
  readonly observaciones?: string;
  readonly altura1?: number;
  readonly altura2?: number;
  readonly altura3?: number;
  readonly altura4?: number;
  readonly diametro1?: number;
  readonly diametro2?: number;
  readonly diametro3?: number;
  readonly diametro4?: number;
  readonly area1?: number;
  readonly area2?: number;
  readonly area3?: number;
  readonly area4?: number;
  readonly carga1?: number;
  readonly carga2?: number;
  readonly carga3?: number;
  readonly carga4?: number;
  readonly resistenciaComprension1?: string;
  readonly resistenciaComprension2?: string;
  readonly resistenciaComprension3?: string;
  readonly resistenciaComprension4?: string;
  readonly porcentajeResistenciaComprension1?: string;
  readonly porcentajeResistenciaComprension2?: string;
  readonly porcentajeResistenciaComprension3?: string;
  readonly porcentajeResistenciaComprension4?: string;
  readonly tipoFalla?: string;
  readonly laboratorista?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BitacoraDePruebasComprension, BitacoraDePruebasComprensionMetaData>);
  static copyOf(source: BitacoraDePruebasComprension, mutator: (draft: MutableModel<BitacoraDePruebasComprension, BitacoraDePruebasComprensionMetaData>) => MutableModel<BitacoraDePruebasComprension, BitacoraDePruebasComprensionMetaData> | void): BitacoraDePruebasComprension;
}

export declare class DocumentoBitacora {
  readonly id: string;
  readonly numEnsaye: string;
  readonly numMuestra: string;
  readonly nombreObra: string;
  readonly documentKey: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DocumentoBitacora, DocumentoBitacoraMetaData>);
  static copyOf(source: DocumentoBitacora, mutator: (draft: MutableModel<DocumentoBitacora, DocumentoBitacoraMetaData>) => MutableModel<DocumentoBitacora, DocumentoBitacoraMetaData> | void): DocumentoBitacora;
}

export declare class ImagenReportColado {
  readonly id: string;
  readonly numEnsaye: string;
  readonly numMuestra: string;
  readonly imageKey: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImagenReportColado, ImagenReportColadoMetaData>);
  static copyOf(source: ImagenReportColado, mutator: (draft: MutableModel<ImagenReportColado, ImagenReportColadoMetaData>) => MutableModel<ImagenReportColado, ImagenReportColadoMetaData> | void): ImagenReportColado;
}

export declare class numEnsayeCount {
  readonly id: string;
  readonly count: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<numEnsayeCount, numEnsayeCountMetaData>);
  static copyOf(source: numEnsayeCount, mutator: (draft: MutableModel<numEnsayeCount, numEnsayeCountMetaData>) => MutableModel<numEnsayeCount, numEnsayeCountMetaData> | void): numEnsayeCount;
}