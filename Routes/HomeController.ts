import { Request, Response } from 'express';

export class HomeController {
    public getIndex(req: Request, res: Response): void {
        res.send('<h1>Hello from the TypeScript world using classes!</h1>');
    }
}