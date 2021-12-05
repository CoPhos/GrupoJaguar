const calcularResistenciaComprension = (valorArea, valorCarga) => {
  const area = parseFloat(valorArea);
  const carga = parseFloat(valorCarga);
  return [
    String(carga / area),
    String((carga / area / this.state.form.valorResistenciaCompresion) * 1000)
  ];
};

const calcularArea = (valorDiametro, valorAltura) => {
  const radio = parseFloat(valorDiametro / 2);
  const altura = parseFloat(valorAltura);
  const area = 2 * Math.PI * radio * (radio + altura);

  return String(area);
};
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.notes, loading: false };
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] };
    case 'RESET_FORM':
      return { ...state, form: state.form };
    case 'SET_INPUT':
      return { ...state, form: {} };
    case 'ERROR':
      return { ...state, loading: false, error: true };
    case 'INPUT_CHANGE':
      return {
        ...state,
        form: { ...this.state.form, [action.payload.name]: action.payload.value }
      };
    case 'AREA_CALC':
      return {
        ...state,
        form: {
          ...this.state.form,
          area1: calcularArea(this.state.form.diametro1, this.state.form.altura1)
        }
      };
    case 'AUTO_CALC':
      let [resisitencia1, porcentaje1] = calcularResistenciaComprension(
          this.state.form.area1,
          this.state.form.carga1
        ),
        [resisitencia2, porcentaje2] = calcularResistenciaComprension(
          this.state.form.area2,
          this.state.form.carga2
        ),
        [resisitencia3, porcentaje3] = calcularResistenciaComprension(
          this.state.form.area3,
          this.state.form.carga3
        ),
        [resisitencia4, porcentaje4] = calcularResistenciaComprension(
          this.state.form.area4,
          this.state.form.carga4
        );
      return {
        ...state,
        form: {
          ...this.state.form,
          resistenciaComprension1: resisitencia1,
          resistenciaComprension2: resisitencia2,
          resistenciaComprension3: resisitencia3,
          resistenciaComprension4: resisitencia4,
          porcentajeResistenciaComprension1: porcentaje1,
          porcentajeResistenciaComprension2: porcentaje2,
          porcentajeResistenciaComprension3: porcentaje3,
          porcentajeResistenciaComprension4: porcentaje4
        }
      };
    case 'DATES':
      if (!action.payload) {
        action.payload = new Date();
      }
      return {
        ...state,
        form: {
          ...this.state.form,
          fechaColado: action.payload,
          siete: action.payload.addDays(7),
          catorce: action.payload.addDays(14),
          veintiocho: action.payload.addDays(28),
          veintiochoDos: action.payload.addDays(28)
        }
      };
    default:
      return state;
  }
}
