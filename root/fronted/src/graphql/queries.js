/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBitacoraDePruebasComprension = /* GraphQL */ `
  query GetBitacoraDePruebasComprension($id: ID!) {
    getBitacoraDePruebasComprension(id: $id) {
      id
      numMuestra
      numObra
      nombreObra
      ubicacion
      solicitadoPor
      elementoColado
      resistenciaComprensionProyecto
      revenimientoProyecto
      revenimientoObtenido
      fechaColado
      edadDias
      fechaEnsaye
      equipoMezclado
      resistenciaTipo
      concretera
      observaciones
      altura
      diametro
      area
      carga
      resistenciaComprension
      porcentajeResistenciaComprension
      tipoFalla
      laboratorista
      createdAt
      updatedAt
    }
  }
`;
export const listBitacoraDePruebasComprensions = /* GraphQL */ `
  query ListBitacoraDePruebasComprensions(
    $filter: ModelBitacoraDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBitacoraDePruebasComprensions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        numMuestra
        numObra
        nombreObra
        ubicacion
        solicitadoPor
        elementoColado
        resistenciaComprensionProyecto
        revenimientoProyecto
        revenimientoObtenido
        fechaColado
        edadDias
        fechaEnsaye
        equipoMezclado
        resistenciaTipo
        concretera
        observaciones
        altura
        diametro
        area
        carga
        resistenciaComprension
        porcentajeResistenciaComprension
        tipoFalla
        laboratorista
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
