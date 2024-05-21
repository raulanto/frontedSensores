import {defineStore} from 'pinia';
import type {DatosLectura} from "../types/Lectura";
import Lectura from "../service/LecturaSensores";


export const useLecturaStore = defineStore({
    id: 'lectura',
    state: () => ({
        isLoading: false,
        datosLectura: [] as DatosLectura[],
    }),
    actions: {
        async fetchDatosLectura(fk:number) {
            try {
                const lecturaService = new Lectura();
                const responseData = await lecturaService.getLectura(fk);
                if (responseData && responseData.length > 0) {
                    this.datosLectura = responseData;
                    this.isLoading = true;
                    // console.log(this.datosLectura)
                } else {
                    console.error('Datos no Obtenidos');
                    this.datosLectura = [];
                }
            } catch (error) {
                console.error(error);
                this.datosLectura = [];
            } finally {
                this.isLoading = false;
            }
        },
    },
});
