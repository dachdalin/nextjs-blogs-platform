'use client';

export default function Button({children, onClick, variant}: {children: React.ReactNode, onClick: () => void, variant: string}) {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-lg ${variant}`}>
            {children}
        </button>
    )
}