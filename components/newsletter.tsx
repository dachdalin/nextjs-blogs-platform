'use client';

export default function Newsletter() {
    return (
        <form className="flex">
            <input
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            />
            <button
                type="submit"
                className="rounded-r-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                Subscribe
            </button>
        </form>
    );
}