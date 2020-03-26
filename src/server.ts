import * as http from 'http';
import 'reflect-metadata';
import { app, Application } from './app';

const port: number | undefined =
  (process.env.PORT as number | undefined) || 3000;
const application: Application = app.enableLogging().registerRoutes();
const routes = application.getRoutes();
const server: http.Server = http.createServer(application.build());

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
