import * as http from 'http';
import 'reflect-metadata';
import { app } from './app';

const port = process.env.PORT || 3000;

const server = http.createServer(app.enableLogging().build());

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
