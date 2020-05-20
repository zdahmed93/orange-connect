"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const https = __importStar(require("https"));
function default_1(authorizationHeader) {
    return new Promise((resolve, reject) => {
        const postData = "grant_type=client_credentials";
        const options = {
            host: 'api.orange.com',
            path: '/oauth/v2/token',
            method: 'POST',
            headers: {
                'Authorization': authorizationHeader,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        const req = https.request(options, (response) => {
            response.setEncoding('utf8');
            let responseData;
            response.on('data', (data) => { responseData = data; });
            response.on('end', () => {
                responseData = JSON.parse(responseData);
                if (responseData.access_token) {
                    resolve(responseData);
                }
                if (responseData.error) {
                    reject(responseData);
                }
            });
        }).on('error', (e) => { reject(e); });
        req.write(postData);
        req.end();
    });
}
exports.default = default_1;
//# sourceMappingURL=authentication.js.map