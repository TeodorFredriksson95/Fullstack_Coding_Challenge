import express, {NextFunction, Request, response, Response} from "express";
import bodyParser from 'body-parser';
import api_endpoints  from '../api';
var cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/', does_method_exist, api_endpoints);

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 Not Found');
});


function does_method_exist(req: Request, res: Response, next: NextFunction) {
  next();
}


export default app;
