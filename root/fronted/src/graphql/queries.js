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
      siete
      catorce
      veintiocho
      veintiochoDos
      equipoMezclado
      resistenciaTipo
      concretera
      observaciones
      altura1
      altura2
      altura3
      altura4
      diametro1
      diametro2
      diametro3
      diametro4
      area1
      area2
      area3
      area4
      carga1
      carga2
      carga3
      carga4
      resistenciaComprension1
      resistenciaComprension2
      resistenciaComprension3
      resistenciaComprension4
      porcentajeResistenciaComprension1
      porcentajeResistenciaComprension2
      porcentajeResistenciaComprension3
      porcentajeResistenciaComprension4
      tipoFalla
      laboratorista
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBitacoraDePruebasComprensions = /* GraphQL */ `
  query ListBitacoraDePruebasComprensions(
    $filter: ModelBitacoraDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBitacoraDePruebasComprensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        siete
        catorce
        veintiocho
        veintiochoDos
        equipoMezclado
        resistenciaTipo
        concretera
        observaciones
        altura1
        altura2
        altura3
        altura4
        diametro1
        diametro2
        diametro3
        diametro4
        area1
        area2
        area3
        area4
        carga1
        carga2
        carga3
        carga4
        resistenciaComprension1
        resistenciaComprension2
        resistenciaComprension3
        resistenciaComprension4
        porcentajeResistenciaComprension1
        porcentajeResistenciaComprension2
        porcentajeResistenciaComprension3
        porcentajeResistenciaComprension4
        tipoFalla
        laboratorista
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBitacoraDePruebasComprensions = /* GraphQL */ `
  query SyncBitacoraDePruebasComprensions(
    $filter: ModelBitacoraDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBitacoraDePruebasComprensions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        siete
        catorce
        veintiocho
        veintiochoDos
        equipoMezclado
        resistenciaTipo
        concretera
        observaciones
        altura1
        altura2
        altura3
        altura4
        diametro1
        diametro2
        diametro3
        diametro4
        area1
        area2
        area3
        area4
        carga1
        carga2
        carga3
        carga4
        resistenciaComprension1
        resistenciaComprension2
        resistenciaComprension3
        resistenciaComprension4
        porcentajeResistenciaComprension1
        porcentajeResistenciaComprension2
        porcentajeResistenciaComprension3
        porcentajeResistenciaComprension4
        tipoFalla
        laboratorista
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listDetailsBitacoraDePruebasComprensions = /* GraphQL */ `
  query ListBitacoraDePruebasComprensions(
    $filter: ModelBitacoraDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBitacoraDePruebasComprensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        siete
        catorce
        veintiocho
        veintiochoDos
        equipoMezclado
        resistenciaTipo
        concretera
        observaciones
        altura1
        altura2
        altura3
        altura4
        diametro1
        diametro2
        diametro3
        diametro4
        area1
        area2
        area3
        area4
        carga1
        carga2
        carga3
        carga4
        resistenciaComprension1
        resistenciaComprension2
        resistenciaComprension3
        resistenciaComprension4
        porcentajeResistenciaComprension1
        porcentajeResistenciaComprension2
        porcentajeResistenciaComprension3
        porcentajeResistenciaComprension4
        tipoFalla
        laboratorista
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listBitacoraDePruebasComprensionsByNumMuestra = /* GraphQL */ `
  query ListBitacoraDePruebasComprensions(
    $filter: ModelBitacoraDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBitacoraDePruebasComprensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numMuestra
        numObra
        nombreObra
        ubicacion
        solicitadoPor
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDiarioDePruebasComprension = /* GraphQL */ `
  query GetDiarioDePruebasComprension($id: ID!) {
    getDiarioDePruebasComprension(id: $id) {
      id
      equipoEL
      fecha
      ensayeNum
      muestraNum
      resistenciaProyecto
      altura1
      altura2
      promedioAltura
      diametro1
      diametro2
      promedioRadio
      area
      planicidad
      perpendicularidad
      cargaMaxima
      resistenciaComprension
      porcentajeResistenciaComprension
      tipoFalla
      horaEnsaye
      observaciones
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDiarioDePruebasComprensions = /* GraphQL */ `
  query ListDiarioDePruebasComprensions(
    $filter: ModelDiarioDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiarioDePruebasComprensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        equipoEL
        fecha
        ensayeNum
        muestraNum
        resistenciaProyecto
        altura1
        altura2
        promedioAltura
        diametro1
        diametro2
        promedioRadio
        area
        planicidad
        perpendicularidad
        cargaMaxima
        resistenciaComprension
        porcentajeResistenciaComprension
        tipoFalla
        horaEnsaye
        observaciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDiarioDePruebasComprensions = /* GraphQL */ `
  query SyncDiarioDePruebasComprensions(
    $filter: ModelDiarioDePruebasComprensionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiarioDePruebasComprensions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        equipoEL
        fecha
        ensayeNum
        muestraNum
        resistenciaProyecto
        altura1
        altura2
        promedioAltura
        diametro1
        diametro2
        promedioRadio
        area
        planicidad
        perpendicularidad
        cargaMaxima
        resistenciaComprension
        porcentajeResistenciaComprension
        tipoFalla
        horaEnsaye
        observaciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDocumentoBitacora = /* GraphQL */ `
  query GetDocumentoBitacora($id: ID!) {
    getDocumentoBitacora(id: $id) {
      id
      numEnsaye
      numMuestra
      nombreObra
      documentKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDocumentoBitacoras = /* GraphQL */ `
  query ListDocumentoBitacoras(
    $filter: ModelDocumentoBitacoraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentoBitacoras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numEnsaye
        numMuestra
        nombreObra
        documentKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDocumentoBitacoras = /* GraphQL */ `
  query SyncDocumentoBitacoras(
    $filter: ModelDocumentoBitacoraFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocumentoBitacoras(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        numEnsaye
        numMuestra
        nombreObra
        documentKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getImagenReportColado = /* GraphQL */ `
  query GetImagenReportColado($id: ID!) {
    getImagenReportColado(id: $id) {
      id
      numEnsaye
      numMuestra
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listImagenReportColados = /* GraphQL */ `
  query ListImagenReportColados(
    $filter: ModelImagenReportColadoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagenReportColados(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numEnsaye
        numMuestra
        imageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncImagenReportColados = /* GraphQL */ `
  query SyncImagenReportColados(
    $filter: ModelImagenReportColadoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImagenReportColados(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        numEnsaye
        numMuestra
        imageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
