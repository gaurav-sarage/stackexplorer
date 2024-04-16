import {
    CSharpIcon,
    FmodIcon,
    GodotIcon,
    MicrosoftIcon,
    PhotonEngineIcon,
    PhysxIcon,
    UnityIcon,
    UnrealEngineIcon,
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
    name: 'Game Development',
    description:
      'Crafting interactive games for various platforms, including consoles, PCs, and mobile.',
    icon: <Gamepad2 className="w-6 h-6  text-gray-900" />,
    path: '/browse/game-development',
    subCategories: [
      // LANGUAGES
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
      // ENGINES
      {
        name: 'Engines',
        path: 'engines',
        items: [
          {
            name: 'Unity',
            slug: 'unity',
            url: 'https://unity.com/',
            lastUpdated: 'March 7, 2024',
            icon: UnityIcon,
            overview: {
              description:
                'Create and grow real-time 3D games, apps, and experiences for entertainment, film, automotive, architecture, and more. Get started with Unity today.',
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
          {
            name: 'Unreal Engine',
            slug: 'unreal-engine',
            url: 'https://unrealengine.com/',
            lastUpdated: 'March 7, 2024',
            icon: UnrealEngineIcon,
            overview: {
              description:
                "Unreal Engine is the world's most open and advanced real-time 3D creation tool for photoreal visuals and immersive experiences.",
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
          {
            name: 'Godot',
            slug: 'godot',
            url: 'https://godotengine.org/',
            lastUpdated: 'March 7, 2024',
            icon: GodotIcon,
            overview: {
              description:
                'Godot provides a huge set of common tools, so you can just focus on making your game without reinventing the wheel.',
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
        ],
      },
      // MIDDLEWARE
  
      {
        name: 'Middleware',
        path: 'middleware',
        items: {
          Audio: [
            {
              name: 'FMOD',
              slug: 'fmod',
              url: 'https://fmod.com/',
              lastUpdated: 'March 7, 2024',
              icon: FmodIcon,
              overview: {
                description:
                  'Made for games - FMOD is the solution for adaptive audio.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
          ],
          Physics: [
            {
              name: 'PhysX',
              slug: 'physx',
              url: 'https://developer.nvidia.com/physx-sdk#:~:text=NVIDIA%20PhysX%C2%AE%20is%20an,end%20multicore%20CPUs%20and%20GPUs.',
              lastUpdated: 'March 7, 2024',
              icon: PhysxIcon,
              overview: {
                description:
                  'NVIDIA PhysX is an open source, scalable, multi-platform physics simulation solution supporting a wide range of devices, from smartphones to high-end multicore CPUs and GPUs.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
          ],
          Networking: [
            {
              name: 'photon',
              slug: 'photon',
              url: 'https://photonengine.com/',
              lastUpdated: 'March 8, 2024',
              icon: PhotonEngineIcon,
              overview: {
                description:
                  'Global cross platform multiplayer game backend as a service (SaaS, Cloud) for Android, iOS, .NET, Mac OS, Unity 3D, Windows, Unreal Engine & HTML5.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'Azure PlayFab',
              slug: 'playfab',
              url: 'https://playfab.com/',
              lastUpdated: 'March 8, 2024',
              icon: MicrosoftIcon,
              overview: {
                description:
                  'PlayFab is a suite of products that complement your existing backend infrastructure. Mix and match to meet your needs, or adopt the entire platform as a powerful base for current and future games.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
          ],
          // Graphics: [
          //   {
          //     name: 'speedtree',
          //     slug: 'speedtree',
          //     url: 'https://store.speedtree.com/',
          //     lastUpdated: 'March 8, 2024',
          //     icon: MicrosoftIcon,
          //     overview: {
          //       description:
          //         'The standard for vegetation modeling and middleware.',
          //       features: [],
          //       pricing: [],
          //     },
          //     resources: {},
          //     tags: [],
          //   },
          // ],
        },
      },
    ],
  };
  