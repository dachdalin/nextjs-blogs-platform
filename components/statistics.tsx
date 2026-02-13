'use client';

import { stats } from "@/data/posts";

export default function StatisticsSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="space-y-2">
                            <p className={`text-3xl font-extrabold ${s.color}`}>
                                {s.value}
                            </p>
                            <p className="text-sm text-gray-500">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}