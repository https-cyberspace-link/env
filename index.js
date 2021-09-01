const PROTOCOL = window.location.protocol, HOST = window.location.host, DOMIN = '.cyberspace.link', PORT = process.env.PORT || 8088;let env = 'prod', api_path = `${PROTOCOL}//api${DOMIN}`;
if (~HOST.indexOf('localhost')) { env = 'local'; api_path = `${PROTOCOL}//localhost:${PORT}` };
if (~HOST.indexOf('dev')) { env = 'dev'; api_path = `${PROTOCOL}//api.dev${DOMIN}` };
if (~HOST.indexOf('test')) { env = 'test'; api_path = `${PROTOCOL}//api.test${DOMIN}` };
if (~HOST.indexOf('ontest')) { env = 'ontest'; api_path = `${PROTOCOL}//api.ontest${DOMIN}` };
const TOKEN_NAME = `CJ-TOKEN-${env.toLocaleUpperCase()}`;
module.exports = { API_PATH: api_path, APP_ENV: env, COMMON_DOMIN: DOMIN, TOKEN_NAME }