"use client";
import Link from "next/link";
export default function MobileNav() {
    return (
       <ul className="space-y-1 space-x-5 pb-4 lg:hidden">
            <li>
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mt-3 border-t border-gray-200 pt-3">
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            </li>
          </ul> 
    );
}