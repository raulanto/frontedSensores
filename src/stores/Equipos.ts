import { defineStore } from 'pinia';
import Equipos from '@/service/EquipoServicio';
import type { DatosLectura } from '@/types/EquipoModelo';

export const useEquipoStore = defineStore({
    id: 'equipo',
    state: () => ({
        isLoading: false,
        datosEquipos: [] as DatosLectura[],
    }),
    actions: {
        async fetchDatosEquipos() {
            try {
                const equiposService = new Equipos();
                const responseData = await equiposService.getEquipo();
                if (responseData && responseData.length > 0) {
                    this.datosEquipos = responseData;
                    this.isLoading = true;
                } else {
                    console.error('DAtos no Obtenidos');
                    this.datosEquipos = [];
                }
            } catch (error) {
                console.error(error);
                this.datosEquipos = [];
            } finally {
                this.isLoading = false;
            }
        },
    },
});
