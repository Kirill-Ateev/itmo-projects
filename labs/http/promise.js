const http = require('http');

httpGet = async (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
                resolve(response);
        });
    });
}

(async () => {
    const data = await httpGet('http://kodaktor.ru')
    console.log(data)
})()
