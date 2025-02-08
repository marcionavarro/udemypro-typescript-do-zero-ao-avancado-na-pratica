// Buscar o meu arquivo que conecta com o banco de dados

import { connection, statusConnection } from './database/connection';
import { resetarBanco, getStatusApp } from './database/aplicativo';

function acessarSistema() {
    connection({ ip: "192.168.54.10", name: "MySQL" });
}

/* acessarSistema();

statusConnection(); */

getStatusApp();
resetarBanco();