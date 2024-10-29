import { IPS } from "./Ips";

export enum Paths {
    SHOW_ACTIVITIES = 'atividade/mostrar',
    SHOW_STATS = 'usuario/mostrar-estatisticas'
}

export const ROUTES = (route: Paths) => {
    return `http://${IPS.CASA}:3000/${route}`;
};