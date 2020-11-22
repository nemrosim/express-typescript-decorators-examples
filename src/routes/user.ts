import { METHOD, routeConfig } from "../../decorators/config";
import { Request, Response } from "express";
import { delay } from "../../utils";
import { db } from "../../fake-db";

export class UserRoutes {
    @routeConfig({path: "/user", method: METHOD.POST})
    public async addNewUser(req: Request, res: Response) {
        await delay(1000);

        const {body} = req;
        const {id, firstName, lastName} = body;

        try {
            db.getData(`/users/${id}`);
        } catch (e) {
            res.status(409).json({
                error: `User with id ${id} already exist in the database`,
            });
        }

        db.push("/users", {
            id,
            firstName,
            lastName,
        }, true);
    }
}
