interface ResolveInterface {
    token_type: string;
    access_token: string;
    expires_in: string;
}
export default function (authorizationHeader: string): Promise<ResolveInterface>;
export {};
//# sourceMappingURL=authentication.d.ts.map