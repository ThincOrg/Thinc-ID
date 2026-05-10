import type { Response, Request, NextFunction } from "express";
import { ErrorRequestHandler } from "express";

import { ServerError } from "../global/types.ts";
import logger from "./logger.ts";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next): Response => {
  if (err instanceof ServerError) {
    const statusCode: number = err.statusCode;
    const message: string = err.message;

    logger.error(`[${err.statusCode}] ${err.message}`);

    return res.status(statusCode).json({
      status: statusCode,
      message: message,
    });
  }

  if (err instanceof Error) {
    const message: string = err.message;

    logger.error(err.message);

    return res.status(500).json({
      status: 500,
      message: message,
    });
  }

  logger.error("An error occured");

  return res.status(500).json({
    status: 500,
    message: "An error occured",
  });
};

export default errorHandler;
