/**
 * General error response for nodejs
 */
export interface ResponseError extends Error {
  status: number;
}
