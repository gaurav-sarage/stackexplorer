import {
    AppleIcon,
    DartIcon,
    KotlinIcon,
    RevenueCatIcon,
    SwiftIcon,
  } from '@/components/icons';
  import { Smartphone } from 'lucide-react';
  
  export const categoryData = {
    name: 'Mobile Development',
    description: 'Creating apps for mobile devices like smartphones and tablets.',
    icon: <Smartphone className="w-6 h-6  text-gray-900" />,
    path: '/browse/mobile',
    subCategories: [
      //FRONTEND
      {
        name: 'Frontend',
        path: 'frontend',
        items: {
          Languages: [
            {
              name: 'Swift',
              slug: 'swift',
              url: 'https://developer.apple.com/swift/',
              lastUpdated: 'January 15, 2024',
              icon: SwiftIcon,
              overview: {
                description:
                  'Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love.',
                features: [
                  'Swift is a powerful and intuitive programming language created by Apple for iOS, macOS, watchOS, and tvOS development.',
                  "It's designed for safety, with features that help prevent common programming errors like null pointers.",
                  'Swift offers modern language features like closures, generics, and type inference, making code more concise and expressive.',
                  'It enables interactive programming with Swift Playgrounds, making it easier to experiment with code on the fly.',
                  'Swift supports high-performance applications and is continually evolving with open-source community contributions.',
                ],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: ['Language', 'IOS'],
            },
            // {
            //   name: 'Objective-C',
            //   slug: 'objective-c',
            //   url: 'https://en.wikipedia.org/wiki/Objective-C',
            //   lastUpdated: 'February 3, 2024',
            //   icon: SwiftIcon,
            //   overview: {
            //     description: ' ',
            //     features: [],
            //     pricing: [],
            //   },
            //   resources: {
            //     videos: [],
            //   },
            //   tags: ['Language'],
            // },
  
            {
              name: 'Kotlin',
              slug: 'kotlin',
              url: 'https://kotlinlang.org/',
              lastUpdated: 'January 15, 2024',
              icon: KotlinIcon,
              overview: {
                description:
                  'Kotlin is a programming language that makes coding concise, cross-platform, and fun. It is Google’s preferred language for Android app development.',
                features: [
                  'Kotlin is a modern, statically typed programming language used for Android app development and more.',
                  'It emphasizes conciseness, safety (like null safety), and interoperability with Java and other languages.',
                  'Kotlin supports object-oriented and functional programming, offering flexibility and expressive coding.',
                  "It's officially supported by Google for Android development and runs on the Java Virtual Machine (JVM).",
                  'Kotlin has a strong community and is known for its clean syntax, making code more readable and maintainable.',
                ],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: ['Language', 'Android'],
            },
            // {
            //   name: 'Java',
            //   slug: 'java',
            //   url: ' ',
            //   lastUpdated: 'February 3, 2024',
            //   icon: KotlinIcon,
            //   overview: {
            //     description: '',
            //     features: [],
            //     pricing: [],
            //   },
            //   resources: {
            //     videos: [],
            //   },
            //   tags: ['Language'],
            // },
            {
              name: 'Dart',
              slug: 'dart',
              url: 'https://dart.dev/',
              lastUpdated: 'January 21, 2024',
              icon: DartIcon,
              overview: {
                description:
                  'Dart is an approachable, portable, and productive language for high-quality apps on any platform.',
                features: [],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: ['Language', 'IOS', 'Android'],
            },
          ],
          Frameworks: [
            {
              name: 'UIKit',
              slug: 'uikit',
              url: 'https://developer.apple.com/documentation/uikit',
              lastUpdated: 'February 3, 2024',
              icon: AppleIcon,
              overview: {
                description:
                  'Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.',
                features: [],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: ['Framework', 'IOS'],
            },
            {
              name: 'SwiftUI',
              slug: 'swiftui',
              url: 'https://developer.apple.com/documentation/swiftui',
              lastUpdated: 'February 3, 2024',
              icon: AppleIcon,
              overview: {
                description:
                  'Declare the user interface and behavior for your app on every platform.',
                features: [],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: ['Framework', 'IOS'],
            },
          ],
        },
      },
      // PAYMENTS
      {
        name: 'Payments',
        path: 'payments',
        items: [
          {
            name: 'RevenueCat',
            slug: 'revenuecat',
            url: 'https://revenuecat.com/',
            lastUpdated: 'February 2, 2024',
            icon: RevenueCatIcon,
            overview: {
              description:
                'RevenueCat makes it easy to build, analyze, and grow in-app purchases and subscriptions on iOS, Android, and the web – no server code required. Get started for free.',
              features: [],
            },
            resources: {},
            tags: [],
          },
        ],
      },
    ],
  };
  