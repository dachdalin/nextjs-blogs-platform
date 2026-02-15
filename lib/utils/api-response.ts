import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { ApiError } from "@/lib/errors/api-errors";

/**
 * Standard success response structure
 */
export interface SuccessResponse<T = unknown> {
  success: true;
  data?: T;
  message?: string;
}

/**
 * Standard error response structure
 */
export interface ErrorResponse {
  success: false;
  error: string;
  code?: string;
  details?: Record<string, unknown> | Array<unknown>;
}

/**
 * Create a standardized success response
 */
export function successResponse<T>(
  data?: T,
  message?: string,
  status: number = 200
): NextResponse<SuccessResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      ...(data && { data }),
      ...(message && { message }),
    },
    { status }
  );
}

/**
 * Create a standardized error response
 */
export function errorResponse(
  message: string,
  status: number = 500,
  code?: string,
  details?: Record<string, unknown> | Array<unknown>
): NextResponse<ErrorResponse> {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...(code && { code }),
      ...(details !== undefined && { details }),
    },
    { status }
  );
}

/**
 * Handle Zod validation errors
 */
export function handleZodError(error: ZodError): NextResponse<ErrorResponse> {
  const formattedErrors = error.issues.map((issue) => ({
    field: issue.path.join("."),
    message: issue.message,
  }));

  return errorResponse(
    "Validation failed",
    400,
    "VALIDATION_ERROR",
    formattedErrors
  );
}

/**
 * Handle API errors with proper status codes
 */
export function handleApiError(error: unknown): NextResponse<ErrorResponse> {
  // Handle known API errors
  if (error instanceof ApiError) {
    return errorResponse(error.message, error.statusCode, error.code);
  }

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    return handleZodError(error);
  }

  // Handle unknown errors
  console.error("Unhandled error:", error);
  return errorResponse(
    "An unexpected error occurred. Please try again later.",
    500,
    "INTERNAL_SERVER_ERROR"
  );
}
