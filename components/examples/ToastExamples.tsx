"use client";

import { toast } from "sonner";
import { useState } from "react";

/**
 * Example component demonstrating Sonner toast usage
 * You can use these patterns in your forms, API calls, etc.
 */
export default function ToastExamples() {
  const [isLoading, setIsLoading] = useState(false);

  // Example: Form submission with toast
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Submitting form...");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Dismiss loading and show success
      toast.dismiss(loadingToast);
      toast.success("Form submitted successfully!", {
        description: "Your data has been saved.",
      });
    } catch (error) {
      // Dismiss loading and show error
      toast.dismiss(loadingToast);
      toast.error("Failed to submit form", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
    }
  };

  // Example: Using toast.promise for automatic state handling
  const handlePromiseExample = () => {
    const myPromise = fetch("/api/data").then((res) => res.json());

    toast.promise(myPromise, {
      loading: "Loading data...",
      success: (data) => `Successfully loaded ${data.length} items`,
      error: "Failed to load data",
    });
  };

  // Example: Toast with action button
  const handleActionToast = () => {
    toast("File deleted", {
      action: {
        label: "Undo",
        onClick: () => toast.success("File restored!"),
      },
    });
  };

  return (
    <div className="space-y-4 p-8">
      <h2 className="text-2xl font-bold">Sonner Toast Examples</h2>

      <div className="grid gap-3">
        {/* Basic toasts */}
        <button
          onClick={() => toast("This is a basic toast")}
          className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          Basic Toast
        </button>

        <button
          onClick={() => toast.success("Operation completed successfully!")}
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Success Toast
        </button>

        <button
          onClick={() => toast.error("Something went wrong!")}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Error Toast
        </button>

        <button
          onClick={() => toast.warning("Please review your changes")}
          className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
        >
          Warning Toast
        </button>

        <button
          onClick={() => toast.info("New updates available")}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Info Toast
        </button>

        {/* Advanced toasts */}
        <button
          onClick={() =>
            toast("Event Created", {
              description: "Your event has been scheduled for tomorrow at 3 PM",
              duration: 5000,
            })
          }
          className="rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        >
          Toast with Description
        </button>

        <button
          onClick={handleActionToast}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
        >
          Toast with Action
        </button>

        <button
          onClick={() => {
            const id = toast.loading("Processing...");
            setTimeout(() => {
              toast.success("Done!", { id });
            }, 2000);
          }}
          className="rounded-lg bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
        >
          Loading Toast
        </button>
      </div>
    </div>
  );
}
