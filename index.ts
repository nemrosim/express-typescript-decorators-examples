import { server } from './src/server';
import { Request, Response } from "express";
import { routeLog } from "./decorators/log";
import { METHOD, routeConfig } from "./decorators/config";
import { routesAuth } from "./decorators/auth";
import { db } from './fake-db';
import { delay } from "./utils";

import './src/routes'

server.start();
