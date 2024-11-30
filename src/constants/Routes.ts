const IP = '192.168.56.1';

export enum PATHS {
    SHOW_ACTIVITIES = 'atividade/mostrar',
    SHOW_STATS = 'usuario/mostrar-estatisticas',
    SHOW_PREFERENCES = 'usuario/mostrar-preferencias',
    REGISTER_USER = 'usuario/cadastrar',
    REGISTER_ACTIVITY = 'atividade/cadastrar',
    SHOW_ITEMS = 'item/mostrar-todos',
    SHOW_ITEMS_USER = 'item/mostrar',
    SHOW_USER = 'usuario/mostrar',
    UPDATE_USER = 'usuario/atualizar',
    UPDATE_PREFERENCES = 'usuario/atualizar-preferencias',
    AUTHENTICATE = 'usuario/autenticar',
    REAUTHENTICATE = 'usuario/reautenticar',
    AUTHENTICATE_JWT = 'usuario/autenticar-jwt',
    BUY_ITEM = 'item/comprar',
}

export const ROUTES = (route: PATHS) => {
    return `http://${IP}:3000/${route}`;
};