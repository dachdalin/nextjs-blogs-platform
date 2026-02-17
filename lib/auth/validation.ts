/**
 * Authentication form validation utilities
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: "weak" | "fair" | "good" | "strong";
  feedback: string[];
}

/**
 * Validates email format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  return { isValid: true };
}

/**
 * Validates password strength and requirements
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, error: "Password is required" };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      error: "Password must be at least 8 characters long",
    };
  }

  return { isValid: true };
}

/**
 * Validates name field
 */
export function validateName(name: string, fieldName = "Name"): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (name.trim().length < 2) {
    return {
      isValid: false,
      error: `${fieldName} must be at least 2 characters long`,
    };
  }

  return { isValid: true };
}

/**
 * Validates password confirmation matches
 */
export function validatePasswordMatch(
  password: string,
  confirmPassword: string,
): ValidationResult {
  if (!confirmPassword) {
    return { isValid: false, error: "Please confirm your password" };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: "Passwords do not match" };
  }

  return { isValid: true };
}

/**
 * Calculates password strength
 */
export function calculatePasswordStrength(password: string): PasswordStrength {
  let score = 0;
  const feedback: string[] = [];

  if (!password) {
    return { score: 0, label: "weak", feedback: ["Enter a password"] };
  }

  // Length check
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  else if (password.length < 8) {
    feedback.push("Use at least 8 characters");
  }

  // Character variety checks
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push("Mix uppercase and lowercase letters");
  }

  if (/\d/.test(password)) {
    score++;
  } else {
    feedback.push("Include numbers");
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  } else {
    feedback.push("Add special characters (!@#$%^&*)");
  }

  // Determine label based on score
  let label: "weak" | "fair" | "good" | "strong";
  if (score <= 1) {
    label = "weak";
  } else if (score === 2) {
    label = "fair";
  } else if (score === 3 || score === 4) {
    label = "good";
  } else {
    label = "strong";
  }

  // Normalize score to 0-4 range
  const normalizedScore = Math.min(score, 4);

  return { score: normalizedScore, label, feedback };
}
