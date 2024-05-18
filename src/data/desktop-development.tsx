import {
  CSharpIcon,
  ElectronIcon,
  FlutterIcon,
  MicrosoftIcon,
  TauriIcon,
} from '@/components/icons';
import {
  Cpu,
  Gamepad2,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Smartphone,
  Sparkle,
} from 'lucide-react';

export const categoryData = {
  name: 'Desktop Development',
  description:
    'Designing and implementing software that runs natively on desktop operating systems.',
  icon: <Monitor className="w-6 h-6  text-gray-900" />,
  path: '/category/desktop-development',
  subCategories: [
    {
      name: 'Languages',
      path: 'languages',
      items: [
        {
          name: 'C#',
          slug: 'csharp',
          url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
          lastUpdated: 'March 7, 2024',
          icon: CSharpIcon,
          overview: {
            description:
              'C# is a versatile, object-oriented programming language developed by Microsoft, used for developing a wide range of applications including web, mobile, and desktop applications.',
            features: [],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: [],
        },
      ],
    },
    {
      name: 'Frameworks',
      path: 'frameworks',
      items: [
        {
          name: 'Tauri',
          slug: 'rauri',
          url: 'https://tauri.app/',
          lastUpdated: 'March 7, 2024',
          icon: TauriIcon,
          overview: {
            description:
              'Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface.',
            features: [],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: [],
        },
        {
          name: 'Electron',
          slug: 'electron',
          url: 'https://electronjs.org/',
          lastUpdated: 'March 7, 2024',
          icon: ElectronIcon,
          overview: {
            description:
              'Build cross-platform desktop apps with JavaScript, HTML, and CSS.',
            features: [
              'Electron is an open-source framework that allows developers to build cross-platform desktop applications using JavaScript, HTML, and CSS.',
              'It combines the Chromium rendering engine and the Node.js runtime, enabling the development of desktop applications using web technologies.',
              'Electron apps are cross-platform, meaning they can run seamlessly on Windows, Mac, and Linux operating systems.',
              "It's widely used for building a wide range of desktop applications, especially those that require a rich user interface and access to the native system resources.",
              'Electron has a strong community and ecosystem, with many popular applications like Slack, Visual Studio Code, and Discord being built on it.',
            ],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: [],
        },
        {
          name: 'Flutter',
          slug: 'flutter',
          url: 'https://flutter.dev/',
          lastUpdated: 'March 7, 2024',
          icon: FlutterIcon,
          overview: {
            description:
              'Flutter transforms the entire app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.',
            features: [
              'Flutter is an open-source UI software development kit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
              'It uses the Dart programming language and offers a rich set of pre-designed widgets to create custom, aesthetically pleasing UIs.',
              'Flutter compiles to native code, which helps achieve high performance for app start-up times and functioning on both iOS and Android platforms.',
              'Supports hot reload, allowing developers to see the changes in code instantly in the app, enhancing productivity.',
              'Flutter has a growing community and a strong ecosystem with a wide range of plugins and packages that extend its capabilities.',
            ],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: [],
        },
        {
          name: '.NET MAUI',
          slug: 'net-maui',
          url: 'https://dotnet.microsoft.com/en-us/apps/maui',
          lastUpdated: 'March 7, 2024',
          icon: MicrosoftIcon,
          overview: {
            description:
              '.NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, games, IoT, cloud, and microservices.',
            features: [],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: [],
        },
      ],
    },
  ],
};
