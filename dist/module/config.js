"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
exports.ERROR_AGE_NOT_VALID = exports.ERROR_ALREADY_EXISTS_ACCOUNT_CIP = exports.ERROR_DATE_NOT_VALID = exports.ERROR_ALREADY_EXISTS_ACCOUNT = exports.ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL = exports.ERROR_ALREADY_EXISTS_ACCOUNT_CPF = exports.ERROR_ALREADY_EXISTS_PREFRENCE = exports.ERROR_NOT_FOUND_PREFERENCE = exports.ERROR_NOT_CREATED = exports.SUCCESS_UPDATED_ITEM = exports.SUCCESS_DELETED_ITEM = exports.SUCCESS_CREATED_ITEM = exports.ERROR_INTERNAL_SERVER = exports.ERROR_CONTENT_TYPE = exports.ERROR_INTERNAL_SERVER_DB = exports.ERROR_NOT_FOUND = exports.ERROR_REQUIRED_FIELDS = exports.ERROR_INVALID_ID = void 0;
=======
exports.ERROR_ALREADY_EXISTS_PROFESSIONAL_AVAILBILITY = exports.ERROR_NOT_FOUND_AVAILBILITY = exports.ERROR_NOT_FOUND_PROFESSIONAL = exports.ERROR_INVALID_DATE = exports.ERROR_ALREADY_EXISTS_ACCOUNT = exports.ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL = exports.ERROR_ALREADY_EXISTS_ACCOUNT_CPF = exports.ERROR_ALREADY_EXISTS_PREFRENCE = exports.ERROR_NOT_FOUND_PREFERENCE = exports.ERROR_NOT_CREATED = exports.SUCCESS_UPDATED_ITEM = exports.SUCCESS_DELETED_ITEM = exports.SUCCESS_CREATED_ITEM = exports.ERROR_INTERNAL_SERVER = exports.ERROR_CONTENT_TYPE = exports.ERROR_INTERNAL_SERVER_DB = exports.ERROR_NOT_FOUND = exports.ERROR_REQUIRED_FIELDS = exports.ERROR_INVALID_ID = void 0;
>>>>>>> dedd331cbf047fa77453c633633747edae77227a
=======
exports.ERROR_ALREADY_EXISTS_PROFESSIONAL_AVAILBILITY = exports.ERROR_NOT_FOUND_AVAILBILITY = exports.ERROR_NOT_FOUND_PROFESSIONAL = exports.ERROR_INVALID_DATE = exports.ERROR_ALREADY_EXISTS_ACCOUNT = exports.ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL = exports.ERROR_ALREADY_EXISTS_ACCOUNT_CPF = exports.ERROR_ALREADY_EXISTS_PREFRENCE = exports.ERROR_NOT_FOUND_PREFERENCE = exports.ERROR_NOT_CREATED = exports.SUCCESS_UPDATED_ITEM = exports.SUCCESS_DELETED_ITEM = exports.SUCCESS_CREATED_ITEM = exports.ERROR_INTERNAL_SERVER = exports.ERROR_CONTENT_TYPE = exports.ERROR_INTERNAL_SERVER_DB = exports.ERROR_NOT_FOUND = exports.ERROR_REQUIRED_FIELDS = exports.ERROR_INVALID_ID = void 0;
>>>>>>> dedd331cbf047fa77453c633633747edae77227a
/*************** Mensagens de Erro ***************/
const ERROR_INVALID_ID = { status: false, status_code: 400, message: 'O ID encaminhado na requisição não é válido!!' };
exports.ERROR_INVALID_ID = ERROR_INVALID_ID;
const ERROR_REQUIRED_FIELDS = { status: false, status_code: 400, message: 'Existem campos requeridos que não foram preenchidos, ou não atendem aos critérios de digitação!!' };
exports.ERROR_REQUIRED_FIELDS = ERROR_REQUIRED_FIELDS;
const ERROR_NOT_FOUND = { status: false, status_code: 404, message: 'Não foram encontrados itens na requisição!!' };
exports.ERROR_NOT_FOUND = ERROR_NOT_FOUND;
const ERROR_NOT_FOUND_PROFESSIONAL = { status: false, status_code: 404, message: 'Não foram encontrados psicólogos na requisição!!' };
exports.ERROR_NOT_FOUND_PROFESSIONAL = ERROR_NOT_FOUND_PROFESSIONAL;
const ERROR_NOT_FOUND_PREFERENCE = { status: false, status_code: 404, message: 'Não foram encontradas preferências na requisição!!' };
exports.ERROR_NOT_FOUND_PREFERENCE = ERROR_NOT_FOUND_PREFERENCE;
const ERROR_NOT_FOUND_AVAILBILITY = { status: false, status_code: 404, message: 'Não foram encontradas disponibilidades na requisição!!' };
exports.ERROR_NOT_FOUND_AVAILBILITY = ERROR_NOT_FOUND_AVAILBILITY;
const ERROR_ALREADY_EXISTS_PREFRENCE = { status: false, status_code: 404, message: 'As preferências da requisição já estão escolhidas!!' };
exports.ERROR_ALREADY_EXISTS_PREFRENCE = ERROR_ALREADY_EXISTS_PREFRENCE;
const ERROR_INTERNAL_SERVER_DB = { status: false, status_code: 500, message: 'Não foi possível processar a requisição devido à um problema na comunicação com o Banco de Dados. Contate o Administrador da API!!' };
exports.ERROR_INTERNAL_SERVER_DB = ERROR_INTERNAL_SERVER_DB;
const ERROR_CONTENT_TYPE = { status: false, status_code: 415, message: 'O content-type encaminhado na requisição não é permitido pelo servidor da API. Deve-se utilizar somente application/json!!!' };
exports.ERROR_CONTENT_TYPE = ERROR_CONTENT_TYPE;
const ERROR_INTERNAL_SERVER = { status: false, status_code: 500, message: 'Não foi possível processar a requisição devido à um problema na camada de negócio/controle do projeto. Contate o administrador da API!!' };
exports.ERROR_INTERNAL_SERVER = ERROR_INTERNAL_SERVER;
const ERROR_NOT_CREATED = { status: false, status_code: 500, message: 'Não foi possível processar a requisição devido à algum problema com os dados recebidos!!' };
exports.ERROR_NOT_CREATED = ERROR_NOT_CREATED;
const ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL = { status: false, status_code: 400, message: 'Já existe uma conta cadastrada com esse email, faça login ou use outro email' };
exports.ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL = ERROR_ALREADY_EXISTS_ACCOUNT_EMAIL;
const ERROR_ALREADY_EXISTS_ACCOUNT_CPF = { status: false, status_code: 400, message: 'Já existe uma conta cadastrada com esse cpf, faça login ou use outro cpf' };
exports.ERROR_ALREADY_EXISTS_ACCOUNT_CPF = ERROR_ALREADY_EXISTS_ACCOUNT_CPF;
const ERROR_ALREADY_EXISTS_ACCOUNT_CIP = { status: false, status_code: 400, message: 'Já existe uma conta cadastrada com esse cip, faça login ou use outro cip' };
exports.ERROR_ALREADY_EXISTS_ACCOUNT_CIP = ERROR_ALREADY_EXISTS_ACCOUNT_CIP;
const ERROR_ALREADY_EXISTS_ACCOUNT = { status: false, status_code: 400, message: 'Já existe uma conta cadastrada com os dados cadastrados, faça login ou use outros dados' };
exports.ERROR_ALREADY_EXISTS_ACCOUNT = ERROR_ALREADY_EXISTS_ACCOUNT;
<<<<<<< HEAD
<<<<<<< HEAD
const ERROR_DATE_NOT_VALID = { status: false, status_code: 400, message: 'A data informada não é válida!!' };
exports.ERROR_DATE_NOT_VALID = ERROR_DATE_NOT_VALID;
const ERROR_AGE_NOT_VALID = { status: false, status_code: 400, message: 'Essa ação não é permitida para menores de idade!!' };
exports.ERROR_AGE_NOT_VALID = ERROR_AGE_NOT_VALID;
=======
=======
>>>>>>> dedd331cbf047fa77453c633633747edae77227a
const ERROR_ALREADY_EXISTS_PROFESSIONAL_AVAILBILITY = { status: false, status_code: 400, message: 'Essa disponibilidade já está ocupada' };
exports.ERROR_ALREADY_EXISTS_PROFESSIONAL_AVAILBILITY = ERROR_ALREADY_EXISTS_PROFESSIONAL_AVAILBILITY;
const ERROR_INVALID_DATE = { status: false, status_code: 400, message: 'A data encaminhada é inválida!!' };
exports.ERROR_INVALID_DATE = ERROR_INVALID_DATE;
<<<<<<< HEAD
>>>>>>> dedd331cbf047fa77453c633633747edae77227a
=======
>>>>>>> dedd331cbf047fa77453c633633747edae77227a
/****************** Mensagens de Sucesso *********/
const SUCCESS_CREATED_ITEM = { status: true, status_code: 201, message: 'Item criado com sucesso!!' };
exports.SUCCESS_CREATED_ITEM = SUCCESS_CREATED_ITEM;
const SUCCESS_DELETED_ITEM = { status: true, status_code: 200, message: 'Item deletado com sucesso!!' };
exports.SUCCESS_DELETED_ITEM = SUCCESS_DELETED_ITEM;
const SUCCESS_UPDATED_ITEM = { status: true, status_code: 200, message: 'Item atualizado com sucesso!!' };
exports.SUCCESS_UPDATED_ITEM = SUCCESS_UPDATED_ITEM;
