"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInserirUsuario = setInserirUsuario;
exports.getListarSexo = getListarSexo;
exports.getBuscarSexo = getBuscarSexo;
exports.getLogarCliente = getLogarCliente;
exports.getBuscarCliente = getBuscarCliente;
exports.getBuscarClientePreferencias = getBuscarClientePreferencias;
exports.getListarClientes = getListarClientes;
exports.setAtualizarCliente = setAtualizarCliente;
const config_1 = require("../../../module/config");
const usuario_1 = require("../../model/DAO/cliente/usuario");
const sexo_1 = require("../../model/DAO/cliente/sexo");
const client_data_validation_1 = require("../../infra/client-data-validation");
const middlewareJWT_1 = require("../../../middleware/middlewareJWT");
const zod_validations_1 = require("../../infra/zod-validations");
function setInserirUsuario(user, contentType) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (String(contentType).toLowerCase() !== 'application/json' || contentType === undefined) {
                return config_1.ERROR_CONTENT_TYPE;
            }
            function validarData(data) {
                if (data.length !== 10)
                    return false;
                const partes = data.split("-");
                const ano = parseInt(partes[0], 10);
                const mes = parseInt(partes[1], 10);
                const dia = parseInt(partes[2], 10);
                if (mes < 1 || mes > 12)
                    return false;
                const dataTestada = new Date(ano, mes - 1, dia);
                return dataTestada.getFullYear() === ano && dataTestada.getMonth() === mes - 1 && dataTestada.getDate() === dia;
            }
            function transformarData(data) {
                if (!validarData(data)) {
                    throw new Error("Formato de data inválido");
                }
                return new Date(data);
            }
            if (!user.nome || !(0, zod_validations_1.isValidName)(user.nome) ||
                !user.cpf || user.cpf.length !== 11 || !(yield client_data_validation_1.verificacao.verificarCpf(user.cpf)) ||
                !user.data_nascimento || !validarData(user.data_nascimento.toString()) || !transformarData(user.data_nascimento.toString()) ||
                !user.email || !(0, zod_validations_1.isValidEmail)(user.email) || !(yield client_data_validation_1.verificacao.verificarEmail(user.email)) ||
                !user.senha || !(0, zod_validations_1.isValidPassword)(user.senha) ||
                !user.telefone || user.telefone.length !== 11 || typeof user.telefone !== 'string' ||
                !user.id_sexo || !(0, zod_validations_1.isValidId)(user.id_sexo)) {
                if (!(yield client_data_validation_1.verificacao.verificarEmail(user.email))) {
                    return config_1.ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL;
                }
                if (!(yield client_data_validation_1.verificacao.verificarCpf(user.cpf))) {
                    return config_1.ERROR_ALREADY_EXISTS_ACCOUNT_CPF;
                }
                if (!validarData(user.data_nascimento.toString()) || !transformarData(user.data_nascimento.toString())) {
                    return config_1.ERROR_DATE_NOT_VALID;
                }
                if (!validarData(user.data_nascimento.toString())) {
                    return config_1.ERROR_DATE_NOT_VALID;
                }
                return config_1.ERROR_REQUIRED_FIELDS;
            }
            else {
                // Preparar os dados do usuário
                const userData = {
                    nome: user.nome,
                    email: user.email,
                    senha: user.senha,
                    telefone: user.telefone,
                    cpf: user.cpf,
                    data_nascimento: transformarData(user.data_nascimento.toString()),
                    id_sexo: user.id_sexo,
                };
                // Inserir novo cliente
                const newClient = yield (0, usuario_1.criarNovoCliente)(userData);
                if (newClient) {
                    return {
                        user: newClient,
                        status_code: config_1.SUCCESS_CREATED_ITEM.status_code,
                        message: config_1.SUCCESS_CREATED_ITEM.message,
                    };
                }
                else {
                    return config_1.ERROR_INTERNAL_SERVER_DB;
                }
            }
        }
        catch (error) {
            console.error('Erro ao tentar inserir um novo usuário:', error);
            return config_1.ERROR_INTERNAL_SERVER;
        }
    });
}
function getListarSexo() {
    return __awaiter(this, void 0, void 0, function* () {
        let genderData = yield (0, sexo_1.getAllSexos)();
        if (genderData) {
            return {
                data: genderData,
                status_code: 200,
                quantidade: genderData.length
            };
        }
        else {
            return config_1.ERROR_NOT_FOUND;
        }
    });
}
function getBuscarSexo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, zod_validations_1.isValidId)(id)) {
            return config_1.ERROR_REQUIRED_FIELDS;
        }
        let sexData = yield (0, sexo_1.getSexoById)(id);
        if (sexData) {
            return {
                data: sexData,
                status_code: 200
            };
        }
        else {
            return config_1.ERROR_NOT_FOUND;
        }
    });
}
function getLogarCliente(email, senha) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!email || !(0, zod_validations_1.isValidEmail)(email) ||
                !senha || !(0, zod_validations_1.isValidPassword)(senha)) {
                return config_1.ERROR_REQUIRED_FIELDS;
            }
            let clientData = yield (0, usuario_1.logarCliente)(email, senha);
            if (clientData.status == 200) {
                let clientToken = yield (0, middlewareJWT_1.createJWT)({ id: clientData.id, role: 'client' });
                return {
                    cliente: clientData,
                    token: clientToken,
                    status_code: clientData.status
                };
            }
            else {
                return config_1.ERROR_NOT_FOUND;
            }
        }
        catch (error) {
            console.error('Erro ao tentar logar usuário:', error);
            return config_1.ERROR_INTERNAL_SERVER;
        }
    });
}
function getBuscarCliente(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, zod_validations_1.isValidId)(id)) {
            return config_1.ERROR_REQUIRED_FIELDS;
        }
        else {
            let clientData = yield (0, usuario_1.buscarCliente)(id);
            if (clientData) {
                return {
                    data: clientData,
                    status_code: 200
                };
            }
            return {
                data: config_1.ERROR_NOT_FOUND.message,
                status_code: 404
            };
        }
    });
}
function getBuscarClientePreferencias(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, zod_validations_1.isValidId)(id)) {
            return config_1.ERROR_REQUIRED_FIELDS;
        }
        let clientData = yield (0, usuario_1.obterUsuarioComPreferencias)(id);
        if (!clientData) {
            return {
                data: config_1.ERROR_NOT_FOUND.message,
                status_code: 404
            };
        }
        return {
            data: clientData,
            status_code: 200
        };
    });
}
function getListarClientes() {
    return __awaiter(this, void 0, void 0, function* () {
        let clientData = yield (0, usuario_1.listarUsuarios)();
        if (!clientData) {
            return {
                data: config_1.ERROR_NOT_FOUND.message,
                status_code: 404
            };
        }
        return {
            data: clientData,
            status_code: 200
        };
    });
}
function setAtualizarCliente(id, data, contentType) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            if (String(contentType).toLowerCase() !== 'application/json') {
                return config_1.ERROR_CONTENT_TYPE;
            }
            function validarData(data) {
                if (data.length !== 10)
                    return false;
                const partes = data.split("-");
                const ano = parseInt(partes[0], 10);
                const mes = parseInt(partes[1], 10);
                const dia = parseInt(partes[2], 10);
                if (mes < 1 || mes > 12)
                    return false;
                const dataTestada = new Date(ano, mes - 1, dia);
                return dataTestada.getFullYear() === ano && dataTestada.getMonth() === mes - 1 && dataTestada.getDate() === dia;
            }
            function transformarData(data) {
                if (!validarData(data)) {
                    throw new Error("Formato de data inválido");
                }
                return new Date(data);
            }
            if (!id || !(0, zod_validations_1.isValidId)(id) ||
                !data.nome || !(0, zod_validations_1.isValidName)(data.nome) ||
                !data.data_nascimento || !validarData(data.data_nascimento.toString()) || !transformarData(data.data_nascimento.toString()) ||
                !data.id_sexo || !(0, zod_validations_1.isValidId)(data.id_sexo)) {
                return config_1.ERROR_REQUIRED_FIELDS;
            }
            if (data.foto_perfil) {
                if (((_a = data.foto_perfil) === null || _a === void 0 ? void 0 : _a.length) > 300) {
                    return config_1.ERROR_REQUIRED_FIELDS;
                }
                const inputData = {
                    foto_perfil: data.foto_perfil,
                    nome: data.nome,
                    data_nascimento: transformarData(data.data_nascimento.toString()),
                    id_sexo: data.id_sexo,
                    cpf: data.cpf,
                    email: data.email,
                    telefone: data.telefone,
                    senha: data.senha
                };
                let validateClient = yield (0, usuario_1.validateCLiente)(inputData);
                if (!validateClient) {
                    config_1.ERROR_NOT_FOUND_CLIENT;
                }
                let updateClient = yield (0, usuario_1.updateUsuario)(id, inputData);
                if (updateClient) {
                    return {
                        data: updateClient,
                        status_code: 200
                    };
                }
                else {
                    return config_1.ERROR_NOT_UPDATED;
                }
            }
            const inputData = {
                foto_perfil: null,
                nome: data.nome,
                data_nascimento: transformarData(data.data_nascimento.toString()),
                id_sexo: data.id_sexo,
                cpf: data.cpf,
                email: data.email,
                telefone: data.telefone,
                senha: data.senha
            };
            let validateClient = yield (0, usuario_1.validateCLiente)(inputData);
            if (!validateClient) {
                config_1.ERROR_NOT_FOUND_CLIENT;
            }
            let updateClient = yield (0, usuario_1.updateUsuario)(id, inputData);
            if (updateClient) {
                return {
                    data: updateClient,
                    status_code: 200
                };
            }
            else {
                return config_1.ERROR_NOT_UPDATED;
            }
        }
        catch (error) {
            console.error('Erro ao tentar atualizar os dados do usuário:', error);
            return config_1.ERROR_INTERNAL_SERVER;
        }
    });
}
