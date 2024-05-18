import {
  CreateExpoStackIcon,
  ElectronIcon,
  ExpoIcon,
  FlutterIcon,
  IonicIcon,
  ReactNativeIcon,
  ReactNativeReanimatedIcon,
  WatermelonDBIcon,
} from '@/components/icons';
import { MonitorSmartphone } from 'lucide-react';

export const categoryData = {
  name: 'Cross Platform Development',
  description:
    'Developing applications that work across multiple platforms with one codebase.',
  icon: <MonitorSmartphone className="w-6 h-6  text-gray-900" />,
  path: '/category/cross-platform',
  subCategories: [
    // FRONTEND
    {
      name: 'Frontend',
      path: 'frontend',
      items: {
        Frameworks: [
          {
            name: 'React Native',
            slug: 'react-native',
            url: 'https://reactnative.dev/',
            lastUpdated: 'January 15, 2024',
            icon: ReactNativeIcon,
            overview: {
              description: 'A framework for building native apps using React.',
              features: [
                'React Native is a popular framework for building mobile applications using JavaScript and React.',
                'It enables developers to create cross-platform apps for iOS and Android with a single codebase.',
                'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.',
                'It offers fast refresh, allowing developers to see the result of the latest change to their code within seconds.',
                'React Native has a large community, providing a wealth of libraries, tools, and third-party plugins.',
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
            lastUpdated: 'January 15, 2024',
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
            name: 'Electron',
            slug: 'electron',
            url: 'https://electronjs.org/',
            lastUpdated: 'January 15, 2024',
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
            name: 'Ionic',
            slug: 'ionic',
            url: 'https://ionicframework.com/',
            lastUpdated: 'January 15, 2024',
            icon: IonicIcon,
            overview: {
              description:
                'Ionic empowers web developers to build leading cross-platform mobile apps and Progressive Web Apps (PWAs).',
              features: [
                'Ionic is an open-source UI toolkit for building high-quality, cross-platform native and web apps using web technologies like HTML, CSS, and JavaScript.',
                "It's primarily focused on the look and feel, and UI interaction of apps, with a rich set of front-end components and gestures.",
                'Ionic apps can be built and deployed across multiple platforms, including iOS, Android, and the web, from a single codebase.',
                'It integrates seamlessly with frameworks like Angular, React, and Vue, as well as libraries like Cordova and Capacitor for native device features.',
                'Ionic emphasizes ease of development, offering tools and services for rapid prototyping, app building, and performance testing.',
              ],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
        ],
        Libraries: [
          {
            name: 'React Native Reanimated',
            slug: 'react-native-reanimated',
            url: 'https://docs.swmansion.com/react-native-reanimated/',
            lastUpdated: 'March 11, 2024',
            icon: ReactNativeReanimatedIcon,
            overview: {
              description:
                'React Native Reanimated is a powerful animation library built by Software Mansion.',
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
    },
    // TOOLING
    {
      name: 'Tooling',
      path: 'tooling',
      items: [
        {
          name: 'Expo',
          slug: 'expo',
          url: 'https://expo.dev/',
          lastUpdated: 'January 15, 2024',
          icon: ExpoIcon,
          overview: {
            description:
              'Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.',
            features: [
              'Expo is an open-source framework and platform for building universal React applications for iOS, Android, and the web with JavaScript and React.',
              'It simplifies the development process by providing a set of tools and services to build, deploy, and quickly iterate on native Android, iOS, and web apps from the same codebase.',
              'Expo offers a rich library of pre-made components and APIs, enabling rapid development without dealing with native code.',
              'It includes a managed workflow with built-in configurations and updates, as well as a bare workflow giving full control over native modules.',
              'Expo has a strong community and ecosystem, supporting a wide range of libraries and tools for enhanced development experience.',
            ],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: [],
        },

        {
          name: 'Create Expo Stack',
          slug: 'create-expo-stack',
          url: 'https://createexpostack.com/',
          lastUpdated: 'January 18, 2024',
          icon: CreateExpoStackIcon,
          overview: {
            description: 'The most configurable way to create an Expo app.',
            features: [
              'Create Expo Stack (CES) is a Command Line Interface (CLI) tool designed to streamline the initiation of typesafe projects for rapid prototyping, specifically focusing on React Native and Expo.',
              'It differentiates itself from other starter templates by offering less opinionated project initiation, except for a few key principles.',
              'CES provides options to configure a typesafe project with preferences in navigation, styling, and authentication, and also serves as a gateway to select opinionated starter templates​',
            ],
            pricing: [],
          },
          resources: {
            videos: [],
          },
          tags: ['CLI'],
        },
      ],
    },
    // DATABASES
    {
      name: 'Databases',
      path: 'databases',
      items: {
        Frameworks: [
          {
            name: 'WatermelonDB',
            slug: 'watermelondb',
            url: 'https://watermelondb.dev/docs',
            lastUpdated: 'March 11, 2024',
            icon: WatermelonDBIcon,
            overview: {
              description: 'A reactive database framework.',
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
    },
  ],
};
