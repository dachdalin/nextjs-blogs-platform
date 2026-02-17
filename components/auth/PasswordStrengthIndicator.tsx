"use client";

import { calculatePasswordStrength } from "@/lib/auth/validation";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export default function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  const strength = calculatePasswordStrength(password);

  if (!password) return null;

  const getColor = () => {
    switch (strength.label) {
      case "weak":
        return "bg-red-500";
      case "fair":
        return "bg-orange-500";
      case "good":
        return "bg-yellow-500";
      case "strong":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const getTextColor = () => {
    switch (strength.label) {
      case "weak":
        return "text-red-600 dark:text-red-400";
      case "fair":
        return "text-orange-600 dark:text-orange-400";
      case "good":
        return "text-yellow-600 dark:text-yellow-400";
      case "strong":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-gray-600";
    }
  };

  const widthPercentage = ((strength.score + 1) / 5) * 100;

  return (
    <div className="space-y-2 animate-fade-in">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Password strength:
        </span>
        <span className={`text-sm font-semibold capitalize ${getTextColor()}`}>
          {strength.label}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full transition-all duration-300 ${getColor()}`}
          style={{ width: `${widthPercentage}%` }}
        />
      </div>
      {strength.feedback.length > 0 && (
        <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
          {strength.feedback.map((tip, index) => (
            <li key={index} className="flex items-start gap-1">
              <span className="mt-0.5">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
