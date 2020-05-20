interface Options {
    authorizationHeader: string;
    to: string;
    from: string;
    senderName?: string;
    message: string;
}
export declare function sendSMS(options: Options): Promise<unknown>;
export {};
//# sourceMappingURL=index.d.ts.map