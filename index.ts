import { Server } from './src/server';
import { Request, Response } from "express";

enum METHOD {
    GET = 'get',
    POST = 'post'
}

const server = new Server();

class Routes {
    @routeConfig({
        method: METHOD.GET,
        path: "/hello"
    })
    public hello(req: Request, res: Response) {
        return {
            firstName: 'John',
            lastName: 'Doe'
        };
    }
}

interface RouteConfigProps {
    method: METHOD;
    path: string;
}

function routeConfig({method, path}: RouteConfigProps): MethodDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        server.app[method](path, (req: Request, res: Response) => {
            res.status(200).json(descriptor.value(req, res));
        });
    }
}

server.start();
