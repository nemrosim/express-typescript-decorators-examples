import { Request, Response } from "express";

export function routesAuth(key: string): MethodDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {

            const request = args[0] as Request;
            const response = args[1] as Response;

            const headers = request.headers;

            if (headers.authorization === `Bearer ${key}`) {
                return original.apply(this, args);
            }
            response.status(403).json({error: "Not Authorized"});
        }
    }
}
