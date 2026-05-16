import { ZodError } from "zod";

export class ServerError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export interface MailerType {
  sendVerificationMail(email: string, code: number): Promise<void>;
}

export type safeParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: ZodError };
