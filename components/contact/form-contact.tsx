'use client'

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

export default function FormContact() {
    return (
        <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                </div>
                <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="EMAIL_ADDRESS" />
                </div>
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="123-456-7890" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." />
                </div>
                <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" />
                </div>
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>
            <Button type="submit">Send Message</Button>
        </form>
    )
}