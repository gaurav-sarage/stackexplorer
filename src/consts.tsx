import {
    Gamepad2,
    Laptop,
    Monitor,
    MonitorSmartphone,
    Smartphone,
    Sparkle
} from "lucide-react";

export const TAGS = [
    { tag: 'Auth', color: 'bg-orange-100 text-orange-600' },
    { tag: 'Language', color: 'bg-zinc-100 text-zinc-600' },
    { tag: 'Library', color: 'bg-blue-100 text-blue-600' },
    { tag: 'Framework', color: 'bg-purple-100 text-purple-600' },
    { tag: 'PostgreSQL', color: 'bg-sky-100 text-sky-600' },
    { tag: 'MySQL', color: 'bg-zinc-100 text-zinc-700' },
    { tag: 'SQLite', color: 'bg-emerald-100 text-emerald-600' },
    { tag: 'SQL', color: 'bg-gray-100 text-gray-600' },
    { tag: 'BaaS', color: 'bg-violet-100 text-violet-600' },
    { tag: 'DaaS', color: 'bg-amber-100 text-amber-600' },
    { tag: 'CLI', color: 'bg-lime-100 text-lime-600' },
    { tag: 'MongoDB', color: 'bg-green-100 text-green-600' },
    { tag: 'MQL', color: 'bg-green-100 text-green-600' },
    { tag: 'Hosting', color: 'bg-violet-100 text-violet-600' },
    { tag: 'E2E', color: 'bg-teal-100 text-teal-600' },
    { tag: 'JavaScript', color: 'bg-orange-100 text-orange-600' },
    { tag: 'TypeScript', color: 'bg-indigo-100 text-indigo-600' },
    { tag: 'Unit Testing', color: 'bg-rose-100 text-rose-600' },
    { tag: 'Open Source', color: 'bg-fuchsia-100 text-fuchsia-600' },
    { tag: 'IOS', color: 'bg-fuchsia-100 text-fuchsia-600' },
    { tag: 'Android', color: 'bg-emerald-100 text-emerald-600' },
];

export const ITEMS: {
    title: string;
    href: string;
    description: string;
    icon: React.ReactElement;
}[] = [
    {
        title: "Web Development",
        href: "/browse/web",
        icon: <Laptop className="w-6 h-6 mb-4 text-black" />,
        description: "Building and maintaining websites and web applications.",
    },
    {
        title: "Mobile Development",
        href: "/browse/mobile",
        icon: <Smartphone className="w-6 h-6 mb-4 text-black" />,
        description: "Creating apps for mobile devices like smartphones and tablets.",
    },
    {
        title: 'Cross Platform Development',
        href: '/browse/cross-platform',
        icon: <MonitorSmartphone className="w-6 h-6 mb-4 text-black" />,
        description: 'Developing applications that work across multiple platforms with one codebase.',
    },
    {
        title: 'Desktop Development',
        href: '/browse/desktop-development',
        icon: <Monitor className="w-6 h-6 mb-4 text-black" />,
        description: 'Designing and implementing software that runs natively on desktop operating systems.',
    },
    {
        title: 'Game Development',
        href: '/browse/game-development',
        icon: <Gamepad2 className="w-6 h-6 mb-4 text-black" />,
        description: 'Crafting interactive games for various platforms, including consoles, PCs, and mobile.',
    },
    {
        title: 'AI and ML Development',
        href: '/browse/ai-ml-development',
        icon: <Sparkle className="w-6 h-6 mb-4 text-black" />,
        description: 'Building algorithms and models for tasks that require human-like cognition and learning.',
    },
];