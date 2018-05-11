const config = {
    API_URL: 'http://localhost:9999/api/s'
};

if (window.location.toString().indexOf('rudaks.pe.kr') > -1)
    config.API_URL = 'http://rudaks.pe.kr/api/s';

export default config;