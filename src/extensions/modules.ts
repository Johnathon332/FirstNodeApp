import * as express from 'express';

/**
 * General error response for nodejs
 */
export interface ResponseError extends Error {
  status: number;
}

/**
 * Defines the routes for
 */
export interface Route {
  route: string;
  router: express.Router;
}

export interface CustomRequest<T> extends Express.Request {
  body: T;
}
