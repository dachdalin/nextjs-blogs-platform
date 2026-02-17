/**
 * Sonner Toast Usage Examples
 * 
 * Import toast in your component:
 * import { toast } from "sonner"
 * 
 * Then use these examples:
 */

// Basic toast
// toast("Event has been created")

// Success toast
// toast.success("Profile updated successfully")

// Error toast
// toast.error("Something went wrong")

// Warning toast
// toast.warning("Please review your changes")

// Info toast
// toast.info("New updates available")

// Loading toast
// toast.loading("Uploading...")

// Promise toast (auto-updates based on promise state)
// toast.promise(
//   fetch("/api/data"),
//   {
//     loading: "Loading...",
//     success: "Data loaded successfully",
//     error: "Failed to load data",
//   }
// )

// Toast with description
// toast("Event Created", {
//   description: "Your event has been scheduled for tomorrow",
// })

// Toast with action button
// toast("Event Created", {
//   action: {
//     label: "Undo",
//     onClick: () => console.log("Undo"),
//   },
// })

// Toast with custom duration (in milliseconds)
// toast("This will disappear in 10 seconds", {
//   duration: 10000,
// })

// Dismissible toast
// const toastId = toast("You can dismiss this")
// Later: toast.dismiss(toastId)

// Rich content toast
// toast(
//   <div>
//     <h3 className="font-bold">Custom Content</h3>
//     <p>You can add any JSX here</p>
//   </div>
// )

// Position (default is bottom-right)
// Available positions: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
// Set in Toaster component: <Toaster position="top-center" />
