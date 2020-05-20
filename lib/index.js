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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = __importDefault(require("./helpers/authentication"));
const axios_1 = __importDefault(require("axios"));
function sendSMS(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorizationHeader, from, to, message, senderName } = options;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { access_token } = yield authentication_1.default(authorizationHeader);
                const { data } = yield axios_1.default.post(`https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B${from.replace('+', '')}/requests`, {
                    outboundSMSMessageRequest: {
                        address: `tel:${to}`,
                        senderAddress: `tel:${from}`,
                        senderName,
                        outboundSMSTextMessage: {
                            message
                        }
                    }
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${access_token}`
                    }
                });
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.sendSMS = sendSMS;
//# sourceMappingURL=index.js.map