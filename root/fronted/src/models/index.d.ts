import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BitacoraDePruebasComprensionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DiarioDePruebasComprensionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentoBitacoraMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagenReportColadoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type countItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BitacoraDePruebasComprension {
  readonly id: string;
  readonly numMuestra: string;
  readonly numObra: string;
  readonly nombreObra: string;
  readonly ubicacion: string;
  readonly solicitadoPor: string;
  readonly elementoColado: string;
  readonly resistenciaComprensionProyecto: string;
  readonly revenimientoProyecto: string;
  readonly revenimientoObtenido: string;
  readonly fechaColado: string;
  readonly siete: string;
  readonly catorce: string;
  readonly veintiocho: string;
  readonly veintiochoDos: string;
  readonly equipoMezclado: string;
  readonly resistenciaTipo: string;
  readonly concretera: string;
  readonly observaciones?: string;
  readonly altura1: number;
  readonly altura2: number;
  readonly altura3: number;
  readonly altura4: number;
  readonly diametro1: number;
  readonly diametro2: number;
  readonly diametro3: number;
  readonly diametro4: number;
  readonly area1: number;
  readonly area2: number;
  readonly area3: number;
  readonly area4: number;
  readonly carga1: number;
  readonly carga2: number;
  readonly carga3: number;
  readonly carga4: number;
  readonly resistenciaComprension1: number;
  readonly resistenciaComprension2: number;
  readonly resistenciaComprension3: number;
  readonly resistenciaComprension4: number;
  readonly porcentajeResistenciaComprension1: string;
  readonly porcentajeResistenciaComprension2: string;
  readonly porcentajeResistenciaComprension3: string;
  readonly porcentajeResistenciaComprension4: string;
  readonly tipoFalla?: string;
  readonly laboratorista: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BitacoraDePruebasComprension, BitacoraDePruebasComprensionMetaData>);
  static copyOf(source: BitacoraDePruebasComprension, mutator: (draft: MutableModel<BitacoraDePruebasComprension, BitacoraDePruebasComprensionMetaData>) => MutableModel<BitacoraDePruebasComprension, BitacoraDePruebasComprensionMetaData> | void): BitacoraDePruebasComprension;
}

export declare class DiarioDePruebasComprension {
  readonly id: string;
  readonly equipoEL: string;
  readonly fecha: string;
  readonly ensayeNum: string;
  readonly muestraNum: string;
  readonly resistenciaProyecto: number;
  readonly altura1: number;
  readonly altura2: number;
  readonly promedioAltura: number;
  readonly diametro1: number;
  readonly diametro2: number;
  readonly promedioRadio: number;
  readonly area: number;
  readonly planicidad?: string;
  readonly perpendicularidad?: string;
  readonly cargaMaxima?: number;
  readonly resistenciaComprension?: number;
  readonly porcentajeResistenciaComprension?: string;
  readonly tipoFalla?: string;
  readonly horaEnsaye?: string;
  readonly observaciones?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DiarioDePruebasComprension, DiarioDePruebasComprensionMetaData>);
  static copyOf(source: DiarioDePruebasComprension, mutator: (draft: MutableModel<DiarioDePruebasComprension, DiarioDePruebasComprensionMetaData>) => MutableModel<DiarioDePruebasComprension, DiarioDePruebasComprensionMetaData> | void): DiarioDePruebasComprension;
}

export declare class DocumentoBitacora {
  readonly id: string;
  readonly title: string;
  readonly documentKey: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DocumentoBitacora, DocumentoBitacoraMetaData>);
  static copyOf(source: DocumentoBitacora, mutator: (draft: MutableModel<DocumentoBitacora, DocumentoBitacoraMetaData>) => MutableModel<DocumentoBitacora, DocumentoBitacoraMetaData> | void): DocumentoBitacora;
}

export declare class ImagenReportColado {
  readonly id: string;
  readonly title: string;
  readonly imageKey: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImagenReportColado, ImagenReportColadoMetaData>);
  static copyOf(source: ImagenReportColado, mutator: (draft: MutableModel<ImagenReportColado, ImagenReportColadoMetaData>) => MutableModel<ImagenReportColado, ImagenReportColadoMetaData> | void): ImagenReportColado;
}

export declare class countItems {
  readonly id: string;
  readonly imagen?: number;
  readonly documento?: number;
  readonly diarioPruebas?: number;
  readonly bitacora?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<countItems, countItemsMetaData>);
  static copyOf(source: countItems, mutator: (draft: MutableModel<countItems, countItemsMetaData>) => MutableModel<countItems, countItemsMetaData> | void): countItems;
}