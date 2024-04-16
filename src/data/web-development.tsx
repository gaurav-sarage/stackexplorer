import {
    AceternityUIIcon,
    AdonisJSIcon,
    AgilityIcon,
    AngularIcon,
    AntDesignIcon,
    AppBackendIcon,
    AppwriteIcon,
    AstroIcon,
    Auth0Icon,
    BeamAnalyticsIcon,
    BuilderioIcon,
    BulmaIcon,
    ButterCMSIcon,
    CannyIcon,
    ChakraIcon,
    ClerkIcon,
    CloudFlarePagesIcon,
    CloudinaryIcon,
    ContentfulIcon,
    ConvexIcon,
    CreateExpoStackIcon,
    CssIcon,
    CypressIcon,
    DartIcon,
    DasiyUIIcon,
    DirectusIcon,
    DjangoIcon,
    DocsifyIcon,
    DocusaurusIcon,
    DrizzleIcon,
    EdgeStoreIcon,
    ElectronIcon,
    ExpoIcon,
    FastAPIIcon,
    FirebaseIcon,
    FlaskIcon,
    FlutterIcon,
    GitBookIcon,
    GoIcon,
    GoogleAnalyticsIcon,
    HankoIcon,
    HerokuIcon,
    HtmlIcon,
    HtmxIcon,
    IonicIcon,
    JavaIcon,
    JavaScriptIcon,
    JestIcon,
    JotaiIcon,
    JqueryIcon,
    KeystaticIcon,
    KindeIcon,
    KotlinIcon,
    KoyebIcon,
    LaravelIcon,
    LemonSqueezyIcon,
    LightingCSSIcon,
    LuciaIcon,
    MantineIcon,
    MaterialUIIcon,
    MikroORMIcon,
    MintlifyIcon,
    MobXIcon,
    MODXIcon,
    MongoDBIcon,
    MuxIcon,
    NeonIcon,
    NestJsIcon,
    NetlifyIcon,
    NextJsIcon,
    NextUIIcon,
    NotionIcon,
    NuxtIcon,
    PaddleIcon,
    PayloadIcon,
    PhoenixFrameworkIcon,
    PhpIcon,
    PlanetScaleIcon,
    PlausibleIcon,
    PlaywrightIcon,
    PostHogIcon,
    PrimateJSIcon,
    PrismaIcon,
    PythonIcon,
    RadixIcon,
    RailwayIcon,
    ReactAriaIcon,
    ReactIcon,
    ReactNativeIcon,
    RecoilIcon,
    ReduxIcon,
    RedwoodJSIcon,
    RemixIcon,
    RemotionIcon,
    RemultIcon,
    RenderIcon,
    RubyIcon,
    RubyOnRailsIcon,
    SanityIcon,
    SenjaIcon,
    ShadcnIcon,
    ShoutoutIcon,
    SitecoreIcon,
    SolidJSIcon,
    SphinxIcon,
    SSTIcon,
    StarlightIcon,
    StitchesIcon,
    StoryblokIcon,
    StrapiIcon,
    StripeIcon,
    StyledComponentsIcon,
    StylexIcon,
    SupabaseIcon,
    SurrealDBIcon,
    SvelteIcon,
    SwiftIcon,
    SyntaxUIIcon,
    TailwindCSSIcon,
    TestCafeIcon,
    TestimonialIcon,
    TinybirdIcon,
    TremorIcon,
    TursoIcon,
    TypeORMIcon,
    TypeScriptIcon,
    UnityIcon,
    UnkeyIcon,
    UploadThingIcon,
    UpstashIcon,
    ValibotIcon,
    VercelIcon,
    VideoTapIcon,
    VitestIcon,
    VueIcon,
    WaspIcon,
    WatermelonDBIcon,
    WordPressIcon,
    WorkOSIcon,
    XataIcon,
    YupIcon,
    ZodIcon,
    ZustandIcon,
  } from '@/components/icons';
  import { Laptop } from 'lucide-react';
  
  export const categoryData = {
    name: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    icon: <Laptop className="w-6 h-6  text-gray-900" />,
    path: '/browse/web',
    subCategories: [
      // AUTH
      {
        name: 'Auth',
        path: 'auth',
        items: [
          {
            name: 'Clerk',
            slug: 'clerk',
            url: 'https://clerk.com/',
            lastUpdated: 'January 14, 2024',
            icon: ClerkIcon,
            overview: {
              description:
                "The easiest way to add authentication and user management to your application. Purpose-built for React, Next.js, Remix, and 'The Modern Web'.",
              features: [
                'One-click social login with Google, Facebook, Twitter, etc.',
                'Email/password and magic link authentication',
                'Multi-factor authentication (MFA) support',
                'User management dashboard for easy administration',
                'Seamless integration with React, Next.js, and Remix',
              ],
              pricing: [
                {
                  name: 'Free plan',
                  price: '$0/month',
                  features: [
                    '$0.02 per MAU after 10,000',
                    'Remove Clerk Branding',
                    'Allowlist / Blocklist',
                    'Customizable Session Duration',
                  ],
                },
                {
                  name: 'Pro plan',
                  price: '$25/month',
                  features: [
                    'No credit card required',
                    '10,000 monthly active users',
                    'Pre-built components',
                    'Custom Domain',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: 'Authentication and user management in 5 minutes',
                  link: 'https://www.youtube.com/watch?v=xazOE62k6AY',
                  youtubeId: 'xazOE62k6AY',
                },
                {
                  title: "Authentication Doesn't Get Easier Than This",
                  link: 'https://www.youtube.com/watch?v=aQN4bJ1yc-k',
                  youtubeId: 'aQN4bJ1yc-k',
                },
                {
                  title: 'Simple Next.js & React Authentication With Clerk',
                  link: 'https://www.youtube.com/watch?v=RHFmsoiVtKE',
                  youtubeId: 'RHFmsoiVtKE',
                },
              ],
            },
            tags: ['Auth'],
          },
          {
            name: 'Kinde',
            slug: 'kinde',
            url: 'https://kinde.com/',
            lastUpdated: 'January 14, 2024',
            icon: KindeIcon,
            overview: {
              description:
                'Simple, powerful authentication you can integrate with your product in minutes.',
              features: [
                'Password and Passwordless Authentication',
                'Enterprise Single Sign-On (SSO) with Azure AD support',
                'Multi-factor Authentication (MFA) for enhanced security',
                'Social and Developer Login options',
                'Comprehensive user management tools',
              ],
              pricing: [
                {
                  name: 'Free plan',
                  price: '$0/month',
                  features: [
                    '10,500 Monthly Active Users limit',
                    'No credit card required',
                    'SSO with unlimited social connections and MFA',
                    'Custom domains',
                    'Basic role and permission management',
                    'View and manage users',
                    'Unlimited team members',
                    'Up to 2,000 machine to machine (M2M) connections',
                    'Kinde branding',
                  ],
                },
                {
                  name: 'Pro plan',
                  price: '$25/month',
                  features: [
                    'Unlimited roles and permissions',
                    'Unlimited Azure Active Directory and SAML',
                    'Unlimited MAU, organizations, enterprise connections, and M2M connections as you grow',
                    'Unlimited non-production environments',
                    'Option to remove Kinde branding',
                  ],
                },
                {
                  name: 'Enterprise plan',
                  price: 'Custom',
                  features: [
                    'Advanced deployment options',
                    'Dedicated infrastructure',
                    'Volume discounts on MAU, organizations, enterprise connections, and M2M connections',
                    'Unlimited environments',
                    'Custom SLAs and enterprise support',
                    'Kinde engineers will work with you on your integration',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title:
                    'My Login Authentication & User Registration Setup for React & Next.js | Kinde Auth',
                  link: 'https://www.youtube.com/watch?v=WtHQGlKGUrU',
                  youtubeId: 'WtHQGlKGUrU',
                },
                {
                  title: 'Protect your NextJs 13 app using Kinde authentication',
                  link: 'https://www.youtube.com/watch?v=zKdoXIstNzk',
                  youtubeId: 'zKdoXIstNzk',
                },
                {
                  title:
                    'Next.js 14 Authentication (Kinde Auth, Server Actions, Roles & Permissions)',
                  link: 'https://www.youtube.com/watch?v=Z-v6MxJGPS4',
                  youtubeId: 'Z-v6MxJGPS4',
                },
              ],
            },
            tags: ['Auth'],
          },
          {
            name: 'Auth0',
            slug: 'auth0',
            url: 'https://auth0.com/',
            lastUpdated: 'January 14, 2024',
            icon: Auth0Icon,
            overview: {
              description:
                'Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.',
              features: [
                'Username/password and social account logins',
                'OAuth 2.0 support for API security',
                'Single Sign-on (SSO) capabilities',
                'Passwordless login options via email or SMS',
                'Multi-factor authentication (MFA)',
              ],
              pricing: [
                {
                  name: 'Free plan',
                  price: '$0/month',
                  features: [
                    '7,500 active users',
                    'Unlimited logins',
                    'No credit card required',
                  ],
                },
                {
                  name: 'B2C - Essentails',
                  price: '$35/month',
                  features: [
                    '1,000 M2M Tokens',
                    '1 Production Tenant',
                    'Up to 7 Account Admins',
                    'Unlimited Social Connections',
                    'SDKs, Auth0 IDP and Lock Screen',
                    'Up to 5 Actions',
                  ],
                },
                {
                  name: 'B2C - Preofessional',
                  price: '$240',
                  features: [
                    '2 Production Tenants',
                    'Includes Admin Roles',
                    'External Databases',
                    'Pro MFA, Up to 10 Actions',
                    '+ Everything in Essentials',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title:
                    'Auth0 in 100 Seconds // And beyond with a Next.js Authentication Tutorial',
                  link: 'https://www.youtube.com/watch?v=yufqeJLP1rI',
                  youtubeId: 'yufqeJLP1rI',
                },
                {
                  title: 'React.js User Login and Registration with Auth0',
                  link: 'https://www.youtube.com/watch?v=pAzqscDx580',
                  youtubeId: 'pAzqscDx580',
                },
                {
                  title:
                    'How to Integrate Auth0 & Next.js | User Authentication in Next.js with Auth0',
                  link: 'https://www.youtube.com/watch?v=16euljI71LM',
                  youtubeId: '16euljI71LM',
                },
              ],
            },
            tags: ['Auth'],
          },
          {
            name: 'WorkOS',
            slug: 'workos',
            url: 'https://workos.com/',
            lastUpdated: 'January 14, 2024',
            icon: WorkOSIcon,
            overview: {
              description:
                'Developer APIs / SDKs for enterprise-ready features like Single Sign-On (SSO/SAML), Passwordless Authentication, Directory Sync (SCIM), Audit Trail (SIEM), and more. Get started for free.',
              features: [
                'Support any SAML or OIDC identity provider with a single integration',
                'Manage users and organizations, set policies, and support all auth types',
                'Sign in to your app with Microsoft, Google, and more',
                'Flexible authentication UI powered by WorkOS and Radix',
                'Passwordless auth with a six-digit code sent via email',
                'Manage users and organizations, set policies, and support all auth types',
              ],
              pricing: [],
            },
            resources: {
              videos: [
                {
                  title: 'Introducing WorkOS AuthKit',
                  link: 'https://www.youtube.com/watch?v=EeHJUijhszw',
                  youtubeId: 'EeHJUijhszw',
                },
                {
                  title: "Using AuthKit's Headless APIs in Remix",
                  link: 'https://www.youtube.com/watch?v=1jpLKRkCegk',
                  youtubeId: '1jpLKRkCegk',
                },
  
                {
                  title: 'Add SSO to your Next.js app using WorkOS in 7 minutes',
                  link: 'https://www.youtube.com/watch?v=pGyYLoBpiJk',
                  youtubeId: 'pGyYLoBpiJk',
                },
              ],
            },
            tags: ['Auth'],
          },
          {
            name: 'Unkey',
            slug: 'unkey',
            url: 'https://unkey.dev/',
            lastUpdated: 'January 14, 2024',
            icon: UnkeyIcon,
            overview: {
              description:
                'Unkey is an open source API authentication and authorization platform for scaling user facing APIs. Create, verify, and manage low latency API keys in seconds.',
              features: [
                'Open-source API authentication and authorization platform.',
                'Enables global storage of API keys for quick access and low latency.',
                'Offers customizable rate limiting for each issued API key.',
                'Supports temporary and limited keys for controlled API access.',
                'Provides real-time analytics for every key and API.',
              ],
              pricing: [
                {
                  name: 'Free Tier',
                  price: '$0/month',
                  features: [
                    '100 Monthly Active Keys',
                    '2500 Successful Verifications per month',
                    'Unlimited APIs',
                    '7 Days Analytics Retention',
                  ],
                },
                {
                  name: 'Pro Tier',
                  price: '$25/month',
                  features: [
                    '250 Monthly Active keys included',
                    '150,000 Successful Verifications included',
                    'Unlimited APIs',
                    'Workspaces with team members',
                    '90 Days Analytics Retention',
                    '90 Days Audit Log Retention',
                    '* Additional active keys are billed at $0.10',
                    '** Additional verifications are billed at $10 per 100,000',
                  ],
                },
                {
                  name: 'Custom',
                  price: "Let's talk",
                  features: [
                    'Custom Verification Limits',
                    'Custom Active Key Limits',
                    'Pricing based on your needs',
                    'Custom Analytics Retention',
                    'Dedicated support contract',
                    'Whitelist IP per API',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: 'We fixed API key management',
                  link: 'https://www.youtube.com/watch?v=vPaCMLwCATY',
                  youtubeId: 'vPaCMLwCATY',
                },
                {
                  title: 'Using Unkey with your favorite auth provider',
                  link: 'https://www.youtube.com/watch?v=wgKRFfK_oGQ',
                  youtubeId: 'wgKRFfK_oGQ',
                },
                {
                  title: 'Unkey RAISED an INSANE amount of money',
                  link: 'https://www.youtube.com/watch?v=rcHwIR-feZQ',
                  youtubeId: 'rcHwIR-feZQ',
                },
              ],
            },
            tags: ['Auth', 'Open Source'],
          },
          {
            name: 'Hanko',
            slug: 'hanko',
            url: 'https://hanko.io/',
            lastUpdated: 'January 15, 2024',
            icon: HankoIcon,
            overview: {
              description:
                'Open source authentication APIs and UI components for modern apps. Get started in minutes and never worry about auth and weak or stolen passwords anymore.',
              features: [
                'Hanko is an open-source authentication platform for modern applications.',
                'Offers passwordless login systems using passkeys, passcodes, and FIDO security keys.',
                'Supports mobile app biometrics and OAuth login.',
                'Includes web components like Hanko Auth and Hanko Profile for authentication use cases.',
                'Allows customization and integration into any web app with ease.',
                'Aims to guide users towards secure, passwordless authentication.',
              ],
              pricing: [
                {
                  name: 'Starter',
                  price: '$0/month',
                  features: [
                    '10,000 monthly active users',
                    '2 projects (paused when inactive)',
                    'Passkey API projects',
                    'OAuth logins',
                    'Community support',
                  ],
                },
                {
                  name: 'Pro',
                  price: '$29/month + $0.02 per monthly active user',
                  features: [
                    'Unlimited users',
                    '5 projects',
                    'Passkey API projects',
                    'OAuth logins',
                    'Private Discord channel / Slack Connect',
                    'Team member invites',
                    'Admin API access',
                    'Custom SMTP',
                    'SAML Enterprise SSO (coming soon)',
                  ],
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  features: [
                    'Everything in PRO and...',
                    'Unlimted projects',
                    'Passkey transaction authorization',
                    'Ultra high availability hosting',
                    'Working hours or 24/7 priority support',
                    'Up to 99.99% SLA',
                    'Custom audit log retention',
                    'GDPR DPA',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: 'We fixed API key management',
                  link: 'https://www.youtube.com/watch?v=vPaCMLwCATY',
                  youtubeId: 'vPaCMLwCATY',
                },
                {
                  title: 'Using Unkey with your favorite auth provider',
                  link: 'https://www.youtube.com/watch?v=wgKRFfK_oGQ',
                  youtubeId: 'wgKRFfK_oGQ',
                },
                {
                  title: 'Unkey RAISED an INSANE amount of money',
                  link: 'https://www.youtube.com/watch?v=rcHwIR-feZQ',
                  youtubeId: 'rcHwIR-feZQ',
                },
              ],
            },
            tags: ['Auth', 'Open Source'],
          },
          {
            name: 'Supabase Auth',
            slug: 'supabase-auth',
            url: 'https://supabase.com/docs/guides/auth',
            lastUpdated: 'January 18, 2024',
            icon: SupabaseIcon,
            overview: {
              description:
                'Use Supabase to authenticate and authorize your users.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: ['Auth'],
          },
          {
            name: 'Firebase Authentication',
            slug: 'firebase-authentication',
            url: 'https://firebase.google.com/docs/auth',
            lastUpdated: 'January 18, 2024',
            icon: FirebaseIcon,
            overview: {
              description:
                'Firebase Authentication lets you add an end-to-end identity solution to your app for easy user authentication, sign-in, and onboarding in just a few lines of code.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: ['Auth'],
          },
          {
            name: 'Lucia',
            slug: 'lucia',
            url: 'https://lucia-auth.com/',
            lastUpdated: 'January 23, 2024',
            icon: LuciaIcon,
            overview: {
              description:
                'Lucia is a simple and flexible auth library for TypeScript.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: ['Auth'],
          },
        ],
      },
      // FRONTEND
      {
        name: 'Frontend',
        path: 'frontend',
        items: {
          Languages: [
            {
              name: 'HTML',
              slug: 'html',
              url: 'https://en.wikipedia.org/wiki/HTML',
              lastUpdated: 'January 14, 2024',
              icon: HtmlIcon,
              overview: {
                description:
                  'HTML is the standard markup language used to create web pages. It provides the basic structure of sites, which is then enhanced and modified by other technologies like CSS and JavaScript.',
                features: [
                  'HTML is the backbone of all web development.',
                  'It provides the basic structure of sites, enhanced by CSS and JavaScript.',
                  'HTML is universally supported across all web browsers.',
                  'Proper use of HTML tags can significantly impact website SEO.',
                  'Combining HTML with CSS enables responsive and accessible web designs.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: 'HTML in 100 Seconds',
                    link: 'https://www.youtube.com/watch?v=ok-plXXHlWw',
                    youtubeId: 'ok-plXXHlWw',
                  },
                  {
                    title: 'HTML Tutorial for Beginners: HTML Crash Course',
                    link: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
                    youtubeId: 'qz0aGYrrlhU',
                  },
                  {
                    title: 'HTML & CSS Full Course - Beginner to Pro',
                    link: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
                    youtubeId: 'G3e-cpL7ofc',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'CSS',
              slug: 'css',
              url: 'https://en.wikipedia.org/wiki/CSS',
              lastUpdated: 'January 14, 2024',
              icon: CssIcon,
              overview: {
                description:
                  'CSS is used for styling and laying out web pages—like colors, fonts, and spacing. It allows developers to adapt the presentation to different types of devices, such as large screens, small screens, or printers.',
                features: [
                  'CSS is used for styling and laying out web pages, controlling their appearance.',
                  'It separates content (HTML) from presentation, making maintenance easier.',
                  'CSS enables responsive design, allowing web pages to look good on all devices.',
                  'Advanced features like animations and transitions are possible with CSS.',
                  "It's a cornerstone technology of the web, alongside HTML and JavaScript.",
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: 'CSS in 100 Seconds',
                    link: 'https://www.youtube.com/watch?v=OEV8gMkCHXQ',
                    youtubeId: 'OEV8gMkCHXQ',
                  },
                  {
                    title: 'CSS Tutorial – Full Course for Beginners',
                    link: 'https://www.youtube.com/watch?v=OXGznpKZ_sA',
                    youtubeId: 'OXGznpKZ_sA',
                  },
                  {
                    title: 'HTML & CSS Full Course - Beginner to Pro',
                    link: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
                    youtubeId: 'G3e-cpL7ofc',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'JavaScript',
              slug: 'javascript',
              url: 'https://en.wikipedia.org/wiki/JavaScript',
              lastUpdated: 'January 14, 2024',
              icon: JavaScriptIcon,
              overview: {
                description:
                  "JavaScript is a programming language that enables interactive web pages and thus is an essential part of web applications. It's used to control webpage behavior.",
                features: [
                  'JavaScript is a versatile scripting language that enables interactive web pages.',
                  "It's an essential part of web development, alongside HTML and CSS.",
                  'JavaScript allows for client-side script to interact with the user and make dynamic pages.',
                  'It is used for a wide range of web applications, from simple animations to complex web apps.',
                  'Modern JavaScript frameworks and libraries have expanded its capabilities and ease of use.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '100+ JavaScript Concepts you Need to Know',
                    link: 'https://www.youtube.com/watch?v=lkIFF4maKMU',
                    youtubeId: 'lkIFF4maKMU',
                  },
                  {
                    title:
                      'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour',
                    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
                    youtubeId: 'W6NZfCO5SIk',
                  },
                  {
                    title: 'JavaScript Full Course - Beginner to Pro ',
                    link: 'https://www.youtube.com/watch?v=SBmSRK3feww',
                    youtubeId: 'SBmSRK3feww',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'TypeScript',
              slug: 'typescript',
              url: 'https://en.wikipedia.org/wiki/TypeScript',
              lastUpdated: 'January 14, 2024',
              icon: TypeScriptIcon,
              overview: {
                description:
                  "An extension of JavaScript that adds static types to the language. It's designed to develop large applications and transcompiles to JavaScript.",
                features: [
                  'TypeScript is a superset of JavaScript that adds static typing to the language.',
                  'It helps in catching errors early in the development process, enhancing code quality.',
                  "TypeScript's type system allows for better documentation, autocompletion, and tooling support.",
                  'It is highly compatible with JavaScript and compiles down to JavaScript for browser support.',
                  'TypeScript is widely adopted in large-scale applications for its robust features and maintainability.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: 'TypeScript in 100 Seconds',
                    link: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',
                    youtubeId: 'zQnBQ4tB3ZA',
                  },
                  {
                    title: 'TypeScript Tutorial for Beginners',
                    link: 'https://www.youtube.com/watch?v=d56mG7DezGs',
                    youtubeId: 'd56mG7DezGs',
                  },
                  {
                    title: 'TypeScript Full Course for Beginners',
                    link: 'https://www.youtube.com/watch?v=gieEQFIfgYc',
                    youtubeId: 'gieEQFIfgYc',
                  },
                ],
                courses: [
                  {
                    title: 'Master React with TypeScript',
                    link: 'https://codewithbeto.dev/learnReact',
                    price: '$65',
                  },
                ],
              },
              tags: ['Language'],
            },
          ],
          Libraries: [
            {
              name: 'React',
              slug: 'react',
              url: 'https://react.dev/',
              lastUpdated: 'January 14, 2024',
              icon: ReactIcon,
              overview: {
                description: 'The library for web and native user interfaces.',
                features: [
                  'Efficient DOM Management with Virtual DOM',
                  'Reusable Components for Modular Development',
                  'Strong Ecosystem and Community Support',
                  'Declarative UI for Readable and Maintainable Code',
                  'Optimized Performance for Web Applications',
                ],
                pricing: [],
              },
              resources: {
                videos: [
                  {
                    title: 'React in 100 Seconds',
                    link: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
                    youtubeId: 'Tn6-PIqc4UM',
                  },
                  {
                    title: 'Learn React With This One Project',
                    link: 'https://www.youtube.com/watch?v=Rh3tobg7hEo',
                    youtubeId: 'Rh3tobg7hEo',
                  },
                  {
                    title: 'React Tutorial for Beginners',
                    link: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
                    youtubeId: 'SqcY0GlETPk',
                  },
                ],
              },
              tags: ['Library'],
            },
            {
              name: 'SolidJS',
              slug: 'solidjs',
              url: 'https://solidjs.com/',
              lastUpdated: 'January 25, 2024',
              icon: SolidJSIcon,
              overview: {
                description:
                  "Solid is a purely reactive library. It was designed from the ground up with a reactive core. It's influenced by reactive principles developed by previous libraries.",
                features: [],
                pricing: [],
              },
              resources: {},
              tags: ['Library'],
            },
            {
              name: 'htmx',
              slug: 'htmx',
              url: 'https://htmx.org/',
              lastUpdated: 'January 14, 2024',
              icon: HtmxIcon,
              overview: {
                description:
                  'htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext.',
                features: [
                  'Simplifies AJAX, WebSockets, and Server-Sent Events',
                  'Enhances HTML with Custom Attributes for Dynamic Behavior',
                  'Minimal JavaScript Required for Interactive Applications',
                  'Easy Integration with Existing Web Technologies',
                  'Declarative Approach for Cleaner and More Readable Code',
                ],
                pricing: [],
              },
              resources: {
                videos: [
                  {
                    title: 'htmx in 100 seconds',
                    link: 'https://www.youtube.com/watch?v=r-GSGH2RxJs',
                    youtubeId: 'r-GSGH2RxJs',
                  },
                  {
                    title: 'HTMX For React Developers in 10 Minutes',
                    link: 'https://www.youtube.com/watch?v=r0XBULqzsT0',
                    youtubeId: 'r0XBULqzsT0',
                  },
                  {
                    title:
                      'HTMX Crash Course | Dynamic Pages Without Writing Any JavaScript',
                    link: 'https://www.youtube.com/watch?v=0UvA7zvwsmg',
                    youtubeId: '0UvA7zvwsmg',
                  },
                ],
              },
              tags: ['Library'],
            },
            {
              name: 'jQuery',
              slug: 'jquery',
              url: 'https://jquery.com/',
              lastUpdated: 'January 14, 2024',
              icon: JqueryIcon,
              overview: {
                description:
                  'jQuery: The Write Less, Do More, JavaScript Library.',
                features: [
                  'jQuery is a fast, small, and feature-rich JavaScript library.',
                  'It simplifies HTML document traversal, event handling, and Ajax interactions.',
                  "jQuery's syntax is designed to make it easier to navigate a document and manipulate the DOM.",
                  'It was pivotal in the early stages of web development for cross-browser compatibility.',
                  'Despite newer technologies, jQuery remains popular for its simplicity and ease of use.',
                ],
                pricing: [],
              },
              resources: {
                videos: [
                  {
                    title: 'The Legend of jQuery in 100 Seconds',
                    link: 'https://www.youtube.com/watch?v=UU-GebNqdbg',
                    youtubeId: 'UU-GebNqdbg',
                  },
                ],
              },
              tags: ['Library'],
            },
          ],
          Frameworks: [
            {
              name: 'Angular',
              slug: 'angular',
              url: 'https://angular.io/',
              lastUpdated: 'January 14, 2024',
              icon: AngularIcon,
              overview: {
                description:
                  'Angular lets you start small and supports you as your team and apps grow.',
                features: [
                  'Two-Way Data Binding for Synchronized View and Model Components',
                  'Comprehensive Framework Including a Wide Range of Features Out-of-the-Box',
                  'TypeScript-based for Improved Code Quality and Maintainability',
                  'Dependency Injection for Easier Testing and Reusability of Components',
                  'Strong Tooling and CLI for Streamlined Development Process',
                ],
  
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Svelte',
              slug: 'svelte',
              url: 'https://svelte.dev/',
              lastUpdated: 'January 14, 2024',
              icon: SvelteIcon,
              overview: {
                description: 'Cybernetically enhanced web apps.',
                features: [
                  'Compiles to Vanilla JavaScript for Optimal Performance',
                  'Reactive Programming Model for Intuitive State Management',
                  'Less Boilerplate Code Compared to Other Frameworks',
                  'Built-In State Management Without Extra Libraries',
                  'Component-Based Architecture with Readable Syntax',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'Vue',
              slug: 'vue',
              url: 'https://vuejs.org/',
              lastUpdated: 'January 14, 2024',
              icon: VueIcon,
              overview: {
                description:
                  'An approachable, performant and versatile framework for building web user interfaces.',
                features: [
                  'Reactive Data Binding for Efficient UI Updates',
                  'Component-Based Architecture for Reusable Code',
                  'Easy to Learn and Integrate with Existing Projects',
                  'Extensive and Flexible Tooling Ecosystem',
                  'Lightweight and Fast Performance',
                ],
                pricing: [],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
          ],
          UI: [
            {
              name: 'Material UI',
              slug: 'material-ui',
              url: 'https://mui.com/material-ui/',
              lastUpdated: 'March 7, 2024',
              icon: MaterialUIIcon,
              overview: {
                description:
                  'MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'Ant Design',
              slug: 'ant-design',
              url: 'https://ant.design/',
              lastUpdated: 'March 7, 2024',
              icon: AntDesignIcon,
              overview: {
                description:
                  'An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'Chakra',
              slug: 'chakra-ui',
              url: 'https://chakra-ui.com/',
              lastUpdated: 'March 7, 2024',
              icon: ChakraIcon,
              overview: {
                description:
                  'Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'Aceternity UI',
              slug: 'aceternity',
              url: 'https://ui.aceternity.com/',
              lastUpdated: 'March 7, 2024',
              icon: AceternityUIIcon,
              overview: {
                description:
                  'Copy paste the most trending components and use them in your websites without having to worry about styling and animations.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'daisyUI',
              slug: 'daisyui',
              url: 'https://daisyui.com/',
              lastUpdated: 'March 7, 2024',
              icon: DasiyUIIcon,
              overview: {
                description:
                  'Best Tailwind Components Library - Free UI components for Tailwind CSS.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'NextUI',
              slug: 'nextui',
              url: 'https://nextui.org/',
              lastUpdated: 'March 7, 2024',
              icon: NextUIIcon,
              overview: {
                description:
                  'Make beautiful websites regardless of your design experience.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'React Aria Components',
              slug: 'react-aria',
              url: 'https://react-spectrum.adobe.com/react-aria/components.html',
              lastUpdated: 'March 7, 2024',
              icon: ReactAriaIcon,
              overview: {
                description:
                  'A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'Mantine UI',
              slug: 'mantine-ui',
              url: 'https://ui.mantine.dev/',
              lastUpdated: 'March 7, 2024',
              icon: MantineIcon,
              overview: {
                description: '120+ prebuilt components with Mantine.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'tremor',
              slug: 'tremor',
              url: 'https://tremor.so/',
              lastUpdated: 'January 26, 2024',
              icon: TremorIcon,
              overview: {
                description:
                  'Modular components to build insightful dashboards in a breeze.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: ['Library'],
            },
            {
              name: 'shadcn/ui',
              slug: 'shadcn-ui',
              url: 'https://ui.shadcn.com/',
              lastUpdated: 'January 26, 2024',
              icon: ShadcnIcon,
              overview: {
                description:
                  'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: ['Library'],
            },
            {
              name: 'Radix',
              slug: 'radix',
              url: 'https://radix-ui.com/',
              lastUpdated: 'January 26, 2024',
              icon: RadixIcon,
              overview: {
                description:
                  'Components, icons, and colors for building high‑quality, accessible UI. Free and open-source.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: ['Library'],
            },
            {
              name: 'TailwindUI',
              slug: 'tailwindui',
              url: 'https://tailwindui.com/',
              lastUpdated: 'March 7, 2024',
              icon: TailwindCSSIcon,
              overview: {
                description:
                  'Beautiful UI components and templates by the creators of Tailwind CSS.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
            {
              name: 'syntaxUI',
              slug: 'syntax-ui',
              url: 'https://syntaxui.com/',
              lastUpdated: 'March 25, 2024',
              icon: SyntaxUIIcon,
              overview: {
                description:
                  'Ready-to-use UI elements designed for rapid development.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: [],
            },
          ],
          Styling: [
            {
              name: 'Tailwind CSS',
              slug: 'tailwind-css',
              url: 'https://tailwindcss.com/',
              lastUpdated: 'January 14, 2024',
              icon: TailwindCSSIcon,
              overview: {
                description:
                  'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
                features: [
                  'Utility-first approach for faster styling',
                  'Highly customizable configuration',
                  'Responsive design made easy',
                  'Built-in purge option for smaller CSS files',
                  'Rapid prototyping capabilities',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
            {
              name: 'Bulma',
              slug: 'bulma',
              url: 'https://bulma.io/',
              lastUpdated: 'January 14, 2024',
              icon: BulmaIcon,
              overview: {
                description:
                  "Bulma is a free, open source CSS framework based on Flexbox and built with Sass. It's 100% responsive, fully modular, and available for free.",
                features: [
                  'Modern and clean design with a flexbox-based grid system',
                  'Responsive and mobile-first approach',
                  'Modular and customizable components',
                  'Simple syntax, easy to learn and use',
                  'No JavaScript dependency for basic functionality',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
            {
              name: 'Lightning CSS',
              slug: 'lightning-css',
              url: 'https://lightningcss.dev/',
              lastUpdated: 'January 14, 2024',
              icon: LightingCSSIcon,
              overview: {
                description:
                  'An extremely fast CSS parser, transformer, bundler, and minifier.',
                features: [
                  'Optimized for performance with minimal overhead',
                  'Supports modern CSS features and methodologies',
                  'Highly efficient and fast processing of styles',
                  'Seamless integration with various development workflows',
                  'Focus on speed and efficiency without sacrificing flexibility',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
            {
              name: 'Stylex',
              slug: 'stylex',
              url: 'https://stylexjs.com/',
              lastUpdated: 'January 14, 2024',
              icon: StylexIcon,
              overview: {
                description: 'The styling system that powers Meta.',
                features: [
                  'Atomic CSS-in-JS approach for optimal performance',
                  'Efficient style reuse and composition',
                  'Support for dynamic styling and theming',
                  'Minimalistic and lightweight design',
                  'Seamless integration with React and other frameworks',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
            {
              name: 'Styled Components',
              slug: 'styled-components',
              url: 'https://styled-components.com/',
              lastUpdated: 'January 14, 2024',
              icon: StyledComponentsIcon,
              overview: {
                description: 'CSS for the <Component> Age',
                features: [
                  'Enhanced CSS for styling React component systems',
                  'Dynamic styling with the power of JavaScript',
                  'Automatic critical CSS and code splitting',
                  'Theming support with ThemeProvider',
                  'Ease of maintenance with encapsulated styles',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
            {
              name: 'Stitches',
              slug: 'stitches',
              url: 'https://stitches.dev/',
              lastUpdated: 'March 11, 2024',
              icon: StitchesIcon,
              overview: {
                description:
                  'CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience, by WorkOS.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {},
              tags: [],
            },
          ],
        },
      }, // BACKEND
      {
        name: 'Backend',
        path: 'backend',
        items: {
          Languages: [
            {
              name: 'Java',
              slug: 'java',
              url: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
              lastUpdated: 'January 14, 2024',
              icon: JavaIcon,
              overview: {
                description:
                  'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
                features: [
                  'Java is a programming language used for building applications like mobile apps and websites.',
                  "It's platform-independent, meaning Java programs can run on any device with Java installed.",
                  "Java uses Object-Oriented Programming, allowing you to create 'objects' that represent real-world entities.",
                  "It's a strongly typed language, ensuring clear definition of data types and enhancing program safety.",
                  'Java has a huge community, offering extensive learning resources and solutions for common issues.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'PHP',
              slug: 'php',
              url: 'https://php.net/',
              lastUpdated: 'January 14, 2024',
              icon: PhpIcon,
              overview: {
                description:
                  'A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.',
                features: [
                  'PHP is a popular scripting language primarily used for web development and creating dynamic web pages.',
                  "It runs on the server-side, meaning PHP scripts are executed on the server to generate HTML, which is then sent to the client's browser.",
                  'PHP is embedded in HTML code, making it easy to integrate with HTML to develop websites.',
                  "It's known for its ease of use and flexibility, suitable for both beginners and professional developers.",
                  'PHP has a large community and extensive documentation, providing great support and numerous resources for learning.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'Ruby',
              slug: 'ruby',
              url: 'https://ruby-lang.org/en/',
              lastUpdated: 'January 14, 2024',
              icon: RubyIcon,
              overview: {
                description:
                  'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
                features: [
                  'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity.',
                  'It has an elegant syntax that is natural to read and easy to write.',
                  'Ruby is primarily used for web development and is the language behind the Ruby on Rails web framework.',
                  'It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
                  'Ruby has a vibrant and friendly community, with a wealth of libraries and tools available.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'Go',
              slug: 'go',
              url: 'https://go.dev/',
              lastUpdated: 'January 14, 2024',
              icon: GoIcon,
              overview: {
                description:
                  'Go is an open source programming language that makes it simple to build secure, scalable systems.',
                features: [
                  'Go, also known as Golang, is a statically typed, compiled programming language designed at Google.',
                  'It is known for its simplicity, efficiency, and reliability, making it popular for backend development.',
                  'Go supports concurrency, allowing multiple processes to run simultaneously and efficiently.',
                  'Its syntax is clean and concise, which makes the code easy to read and write.',
                  'Go has a strong standard library, robust tools, and a growing community, which makes it a practical choice for many types of projects.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Language'],
            },
            {
              name: 'Python',
              slug: 'python',
              url: 'https://python.org/',
              lastUpdated: 'January 14, 2024',
              icon: PythonIcon,
              overview: {
                description:
                  'Python is a high-level, interpreted programming language known for its readability, simplicity, and wide range of applications.',
                features: [
                  'Python is a high-level, interpreted programming language known for its easy-to-read syntax.',
                  "It's widely used for web development, data analysis, artificial intelligence, and scientific computing.",
                  'Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
                  'It emphasizes code readability and has a syntax that allows programmers to express concepts in fewer lines of code.',
                  'Python has a large and active community, providing extensive libraries and frameworks for various applications.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Language'],
            },
          ],
          Frameworks: [
            {
              name: 'Laravel',
              slug: 'laravel',
              url: 'https://laravel.com/',
              lastUpdated: 'January 14, 2024',
              icon: LaravelIcon,
              overview: {
                description:
                  "Laravel is a PHP web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.",
                features: [
                  'Laravel is a free, open-source PHP web framework used for web application development.',
                  'It follows the model-view-controller (MVC) architectural pattern, providing a structured and modular way of building web apps.',
                  'Laravel is known for its elegant syntax and provides tools for tasks like routing, authentication, and caching.',
                  'It simplifies development by easing common tasks used in many web projects, such as database migrations and testing.',
                  'Laravel has a strong ecosystem with robust documentation, a supportive community, and a variety of packages and tools.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Ruby on Rails',
              slug: 'ruby-on-rails',
              url: 'https://rubyonrails.org/',
              lastUpdated: 'January 14, 2024',
              icon: RubyOnRailsIcon,
              overview: {
                description:
                  'A web-app framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.',
                features: [
                  'Ruby on Rails, often just called Rails, is a web application framework written in Ruby.',
                  'It follows the convention over configuration (CoC) principle, which means it favors conventionally structured code, reducing the need for configuration.',
                  'Rails uses the model-view-controller (MVC) architecture, making it easy to organize application programming.',
                  "It emphasizes the use of software engineering patterns like DRY (Don't Repeat Yourself) and RESTful design.",
                  'Rails has a strong focus on testing and has a large, active community, with extensive libraries and plugins.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Django',
              slug: 'django',
              url: 'https://djangoproject.com/',
              lastUpdated: 'January 14, 2024',
              icon: DjangoIcon,
              overview: {
                description:
                  'The web framework for perfectionists with deadlines.',
                features: [
                  'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
                  'It follows the model-view-template (MVT) architecture, a variation of the model-view-controller (MVC) pattern.',
                  "Django is known for its 'batteries-included' philosophy, offering a wide range of features included by default.",
                  "It emphasizes reusability and 'pluggability' of components, as well as less code, low coupling, and rapid development.",
                  'Django has a strong community, robust documentation, and is used in many high-traffic sites, providing scalability and security.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Flask',
              slug: 'flask',
              url: 'https://flask.palletsprojects.com/en/3.0.x/',
              lastUpdated: 'January 14, 2024',
              icon: FlaskIcon,
              overview: {
                description:
                  'Flask is a lightweight and flexible web application framework for Python, known for its simplicity and ease of use.',
                features: [
                  'Flask is a lightweight and flexible Python web framework for building web applications.',
                  'It is classified as a microframework because it does not require particular tools or libraries.',
                  'Flask supports extensions that can add application features as if they were implemented in Flask itself.',
                  'It is easy to get started with and is suited for small to medium-sized applications and simpler projects.',
                  'Flask is widely used due to its simplicity, flexibility, and fine-grained control, with a supportive community.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'NestJS',
              slug: 'nest-js',
              url: 'https://nestjs.com/',
              lastUpdated: 'January 14, 2024',
              icon: NestJsIcon,
              overview: {
                description:
                  'NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
                features: [
                  'Uses TypeScript by Default for Improved Code Reliability and Maintainability',
                  'Modular Structure for Organized and Scalable Code',
                  'Integrated Dependency Injection for Easier Testing and Maintenance',
                  'Built-In Application Architecture Patterns like Controllers and Services',
                  'Extensible with a Wide Range of Libraries and Integrations',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'FastAPI',
              slug: 'fast-api',
              url: 'https://fastapi.tiangolo.com/',
              lastUpdated: 'January 29, 2024',
              icon: FastAPIIcon,
              overview: {
                description:
                  'FastAPI framework, high performance, easy to learn, fast to code, ready for production',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Phoenix Framework',
              slug: 'phoenix-framework',
              url: 'https://www.phoenixframework.org/',
              lastUpdated: 'March 20, 2024',
              icon: PhoenixFrameworkIcon,
              overview: {
                description:
                  'Phoenix is a web framework for the Elixir programming language that gives you peace of mind from development to production.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
          ],
          Platforms: [
            {
              name: 'Supabase',
              slug: 'supabase',
              url: 'https://supabase.com/',
              lastUpdated: 'January 14, 2024',
              icon: SupabaseIcon,
              overview: {
                description:
                  'Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.',
                features: [
                  'Provides a scalable PostgreSQL database as a service',
                  'Realtime subscriptions for live data updates',
                  'Built-in authentication and user management',
                  'Instant APIs: RESTful and GraphQL interfaces',
                  'Extensible and integrates well with other tools and services',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['PostgreSQL', 'BaaS'],
            },
            {
              name: 'Firebase',
              slug: 'firebase',
              url: 'https://firebase.google.com/',
              lastUpdated: 'January 14, 2024',
              icon: FirebaseIcon,
              overview: {
                description:
                  'Discover Firebase, Google’s mobile and web app development platform that helps developers build apps and games that users will love.',
                features: [
                  'Comprehensive suite of tools for mobile and web app development',
                  'Realtime database and Firestore for live data syncing',
                  'Robust authentication system supporting various providers',
                  'Cloud Functions for serverless computing',
                  'Rich analytics and performance monitoring tools',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['BaaS'],
            },
  
            {
              name: 'Convex',
              slug: 'convex',
              url: 'https://convex.dev/',
              lastUpdated: 'January 12, 2024',
              icon: ConvexIcon,
              overview: {
                description:
                  'The backend application platform with everything you need to build your product.',
                features: [
                  'Real-time database for collaborative and interactive applications',
                  'Seamless integration with modern web frameworks',
                  'Automatic scaling and managed infrastructure',
                  'Built-in fine-grained access control for data security',
                  'Easy-to-use API for efficient data handling and querying',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['BaaS'],
            },
            {
              name: 'App Backend',
              slug: 'app-backend',
              url: 'https://appbackend.io/',
              lastUpdated: 'January 14, 2024',
              icon: AppBackendIcon,
              overview: {
                description:
                  'A simple backend for your static website to make dynamic.',
                features: [
                  'Powerful canvas-based data grid for handling millions of rows.',
                  'Import third party apps data and create a table. You can enable auto sync.',
                  'Use API to integrate into your project with code.',
                  'Easiest way to share the table view with link and embed into any website.',
                  'Convert tabular data into informative charts for data analysis.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
          ],
        },
      },
      // FULLSTACK
      {
        name: 'Fullstack',
        path: 'fullstack',
        items: {
          Frameworks: [
            {
              name: 'Next.js',
              slug: 'next-js',
              url: 'https://nextjs.org/',
              lastUpdated: 'January 14, 2024',
              icon: NextJsIcon,
              overview: {
                description:
                  'Next.js by Vercel is the full-stack React framework for the web.',
                features: [
                  'Server-Side Rendering (SSR) for Faster Page Loads and SEO Benefits',
                  'Static Site Generation (SSG) for High Performance',
                  'Automatic Code Splitting for Optimized Loading',
                  'Easy Deployment with Vercel and Other Hosting Solutions',
                  'Integrated TypeScript Support for Improved Code Quality',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: 'Next.js 14 Tutorial - 1 - Introduction',
                    link: 'https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI',
                    youtubeId: 'ZjAqacIC_3c',
                  },
                  {
                    title: 'The Truth About Next.js 14',
                    link: 'https://www.youtube.com/watch?v=-O8hC5Vm4DE',
                    youtubeId: '-O8hC5Vm4DE',
                  },
                  {
                    title: "Let's Learn Next.js 14",
                    link: 'https://www.youtube.com/watch?v=eZJJ189JTks&t=15948s',
                    youtubeId: 'eZJJ189JTks',
                  },
                ],
                courses: [
                  {
                    title: 'Learn Next.js',
                    link: 'https://nextjs.org/learn',
                    price: 'Free',
                  },
                  {
                    title: 'The Ultimate Next.js Series',
                    link: 'https://codewithmosh.com/p/ultimate-nextjs-series',
                    price: '$149',
                  },
                ],
                news: [
                  {
                    title: 'Next.js Blog',
                    link: 'https://nextjs.org/blog',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Astro',
              slug: 'astro',
              url: 'https://astro.build/',
              lastUpdated: 'January 14, 2024',
              icon: AstroIcon,
              overview: {
                description:
                  'An approachable, performant and versatile framework for building web user interfaces.',
                features: [
                  'Island Architecture for Optimal Performance and Partial Hydration',
                  'Static Site Generation (SSG) for Fast, Pre-rendered Pages',
                  'Supports Multiple Frontend Frameworks within the Same Project',
                  'SEO Friendly with Server-Side Rendering (SSR) Capabilities',
                  'Minimal Client-Side JavaScript for Faster Load Times',
                ],
                pricing: [],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
                courses: [
                  {
                    title: 'Build Modern Websites with Astro',
                    link: 'https://astrocourse.dev/',
                    price: '$75, $150',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'SvelteKit',
              slug: 'sveltekit',
              url: 'https://kit.svelte.dev/',
              lastUpdated: 'January 27, 2024',
              icon: SvelteIcon,
              overview: {
                description:
                  'SvelteKit is the official Svelte application framework.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
                courses: [
                  {
                    title: 'SvelteKit',
                    link: 'https://levelup.video/tutorials/sveltekit',
                    price: 'Free',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Nuxt',
              slug: 'nuxt',
              url: 'https://nuxt.com/',
              lastUpdated: 'January 14, 2024',
              icon: NuxtIcon,
              overview: {
                description:
                  'Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.',
                features: [
                  'Automatic Server-Side Rendering (SSR) for Improved Performance and SEO',
                  'Static Site Generation (SSG) for Fast, Pre-rendered Pages',
                  'Powerful Routing System with Vue-Router',
                  'Easy Integration with Vuex for State Management',
                  'Modular Architecture for Extensibility and Flexibility',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Remix',
              slug: 'remix',
              url: 'https://remix.run/',
              lastUpdated: 'January 14, 2024',
              icon: RemixIcon,
              overview: {
                description:
                  'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.',
                features: [
                  'Enhanced Data Loading Patterns for Faster Page Rendering',
                  'Nested Routing System for Organized and Scalable Code',
                  'Out-of-the-Box Support for Server-Side Rendering (SSR)',
                  'Optimized for Zero-Client-JS Experience and Minimal JavaScript Payload',
                  'Built-In Form Handling with Automatic Optimizations',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'RedwoodJS',
              slug: 'redwoodjs',
              url: 'https://redwoodjs.com/',
              lastUpdated: 'January 15, 2024',
              icon: RedwoodJSIcon,
              overview: {
                description:
                  'Redwood is the full-stack web framework designed to help you grow from side project to startup.',
                features: [
                  'RedwoodJS is a full-stack web framework integrating technologies like React, GraphQL, Prisma, Jest, Storybook, Vite, Babel, and TypeScript.',
                  'It simplifies building full-stack web applications, offering a developer-friendly setup with pre-installed packages and configurations.',
                  'RedwoodJS employs GraphQL for data fetching, integrating the front- and backend seamlessly.',
                  'The framework supports advanced features like prerendering for static content and built-in authentication mechanisms.',
                  'RedwoodJS emphasizes developer productivity with tools like cells for component-based data fetching, automatic code splitting, and comprehensive testing support.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Remult',
              slug: 'remult',
              url: 'https://remult.dev/',
              lastUpdated: 'January 14, 2024',
              icon: RemultIcon,
              overview: {
                description:
                  'Build Full-stack, End-to-end Type-safe CRUD Apps without the Boilerplate.',
                features: [
                  'Remult is a full-stack CRUD framework that simplifies the creation of data-driven applications.',
                  'It provides a simple and declarative API for defining data models, CRUD operations, and data validation.',
                  'Remult is designed to work seamlessly with both frontend and backend JavaScript/TypeScript environments.',
                  'It aims to reduce boilerplate code and speed up development by automating common tasks in web app development.',
                  'Remult focuses on type-safety and integrates easily with existing React, Angular, or Vue projects.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Wasp',
              slug: 'wasp',
              url: 'https://wasp-lang.dev/',
              lastUpdated: 'January 15, 2024',
              icon: WaspIcon,
              overview: {
                description:
                  'Rails-like framework for React, Node.js and Prisma. Build your app in a day and deploy it with a single CLI command.',
                features: [
                  'Wasp is an opinionated framework for building full-stack web applications, integrating client, server, and database.',
                  'It uses React for the frontend, Node.js for the backend, and Prisma for database interactions.',
                  "Wasp's compiler generates client and server apps, and deployment code from Wasp configurations.",
                  'Offers features like full-stack authentication, email sending, async jobs, and React Query data fetching.',
                  'Focuses on reducing code complexity and ensures adherence to security best practices.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'AdonisJS',
              slug: 'adonisjs',
              url: 'https://adonisjs.com/',
              lastUpdated: 'January 26, 2024',
              icon: AdonisJSIcon,
              overview: {
                description:
                  'AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem of official packages, and more.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
            {
              name: 'Primate',
              slug: 'primate',
              url: 'https://primatejs.com/',
              lastUpdated: 'January 29, 2024',
              icon: PrimateJSIcon,
              overview: {
                description: 'A polymorphic development platform.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Framework'],
            },
          ],
        },
      },
      // DATABASES
      {
        name: 'Database',
        path: 'database',
        items: {
          ORM: [
            {
              name: 'Drizzle ORM',
              slug: 'drizzle-orm',
              url: 'https://orm.drizzle.team/',
              lastUpdated: 'January 14, 2024',
              icon: DrizzleIcon,
              overview: {
                description:
                  'Drizzle ORM is a lightweight and performant TypeScript ORM with developer experience in mind.',
                features: [
                  'Drizzle ORM is a TypeScript-based, headless ORM, focusing on performance and flexibility.',
                  'It adopts a SQL-like approach, allowing for a seamless transition for those familiar with SQL.',
                  'Designed to be lightweight and simple, it offers a user-friendly experience without sacrificing capability.',
                  'Supports major databases like PostgreSQL, MySQL, and SQLite, ensuring broad applicability.',
                  'Optimized for serverless architectures, making it suitable for modern, cloud-based applications.',
                ],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: [],
            },
            {
              name: 'Prisma',
              slug: 'prisma',
              url: 'https://prisma.io/',
              lastUpdated: 'January 14, 2024',
              icon: PrismaIcon,
              overview: {
                description:
                  'Prisma is a next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB. It provides type-safety, automated migrations, and an intuitive data model.',
                features: [
                  'Prisma is an open-source database toolkit, including an ORM (Object-Relational Mapping), for Node.js and TypeScript.',
                  'It simplifies database access, schema migrations, and data management in your applications.',
                  'Prisma is known for its developer-friendly approach, providing a clean and intuitive syntax for model definitions and database queries.',
                  'It supports a wide range of databases, such as PostgreSQL, MySQL, SQL Server, SQLite, and MongoDB.',
                  'Prisma includes a powerful query builder that allows for easy data retrieval, and it helps in writing secure and scalable database queries.',
                ],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: [],
            },
            {
              name: 'TypeOrm',
              slug: 'typeorm',
              url: 'https://typeorm.io/',
              lastUpdated: 'January 23, 2024',
              icon: TypeORMIcon,
              overview: {
                description:
                  'TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES2021).',
                features: [],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: [],
            },
            {
              name: 'Valibot',
              slug: 'valibot',
              url: 'https://valibot.dev/',
              lastUpdated: 'January 27, 2024',
              icon: ValibotIcon,
              overview: {
                description:
                  'Validate unknown data with Valibot, the open source schema library with bundle size, type safety and developer experience in mind.',
                features: [],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: [],
            },
            {
              name: 'MikroORM',
              slug: 'mikroORM',
              url: 'https://mikro-orm.io/',
              lastUpdated: 'January 27, 2024',
              icon: MikroORMIcon,
              overview: {
                description:
                  'TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.',
                features: [],
                pricing: [],
              },
              resources: {
                videos: [],
              },
              tags: [],
            },
          ],
          Framework: [
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
          Platforms: [
            {
              name: 'Turso',
              slug: 'turso',
              url: 'https://turso.tech/',
              lastUpdated: 'January 14, 2024',
              icon: TursoIcon,
              overview: {
                description:
                  'Enjoy a legendary amount of databases, all with the developer experience of SQLite, while getting up to microsecond latency and embedding them anywhere.',
                features: [
                  'Global deployment for low latency',
                  'Built on reliable and simple SQLite',
                  'Free Starter plan and affordable Scaler plan',
                  'Cost-efficient with minimal overhead',
                  'Scalable for modern applications with growing user bases',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['SQLite'],
            },
            {
              name: 'Neon',
              slug: 'neon',
              url: 'https://neon.tech/',
              lastUpdated: 'January 14, 2024',
              icon: NeonIcon,
              overview: {
                description:
                  'Postgres made for developers. Easy to Use, Scalable, Cost efficient solution for your next project.',
                features: [
                  'Serverless PostgreSQL service offering autoscaling, branching, and bottomless storage',
                  'Branchable database, allowing for creation of database branches for different scenarios or CI/CD pipelines',
                  'On-demand scalability, with compute resources that dynamically adjust to workload',
                  'Bottomless storage with fault-tolerant scale-out system, integrating with cloud object stores like S3',
                  'High availability and incremental auto-backup functionality for data safety',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['PostgreSQL'],
            },
            {
              name: 'PlanetScale',
              slug: 'planet-scale',
              url: 'https://planetscale.com/',
              lastUpdated: 'January 14, 2024',
              icon: PlanetScaleIcon,
              overview: {
                description: 'PlanetScale is the most advanced MySQL platform.',
                features: [
                  'Global Accessibility for Low-Latency Data Retrieval',
                  'Efficient Automatic Sharding for Scalability',
                  'Built on Proven Vitess Foundation for Reliability',
                  'Automated Backup and Disaster Recovery Solutions',
                  'Version-Controlled Schema Management with Git',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['MySQL'],
            },
            {
              name: 'Astro DB',
              slug: 'astro-db',
              url: 'https://astro.build/db/',
              lastUpdated: 'March 20, 2024',
              icon: AstroIcon,
              overview: {
                description:
                  'The SQL database platform for content-driven websites.',
                features: [],
                pricing: [],
              },
              resources: {},
              tags: ['SQL'],
            },
            {
              name: 'Tinybird',
              slug: 'tinybird',
              url: 'https://tinybird.co/',
              lastUpdated: 'January 26, 2024',
              icon: TinybirdIcon,
              overview: {
                description:
                  'Tinybird helps data teams build real-time Data Products at scale through SQL-based API endpoints. It ingests millions of rows per second and serves low latency, high concurrency analytical queries over any amount of data.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['SQL'],
            },
            {
              name: 'SurrealDB',
              slug: 'surrealdb',
              url: 'https://surrealdb.com/',
              lastUpdated: 'January 27, 2024',
              icon: SurrealDBIcon,
              overview: {
                description:
                  "SurrealDB is the ultimate database for tomorrow's serverless, jamstack, single-page, and traditional applications.",
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
            {
              name: 'Railway',
              slug: 'railway',
              url: 'https://railway.app/',
              lastUpdated: 'January 14, 2024',
              icon: RailwayIcon,
              overview: {
                description:
                  'Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.',
                features: [
                  'Seamless Deployment and Hosting for Web Apps',
                  'Integration with Popular Frameworks like React, Next.js, and more',
                  'Automated CI/CD Pipelines for Efficient Development',
                  'Collaborative and Version-Controlled Environment',
                  'Scalable Infrastructure and Easy Scaling Options',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['MySQL', 'PostgreSQL', 'MongoDB'],
            },
            {
              name: 'MongoDB',
              slug: 'mongodb',
              url: 'https://mongodb.com/',
              lastUpdated: 'January 14, 2024',
              icon: MongoDBIcon,
              overview: {
                description: 'All the tech stacks you should know',
                features: [
                  'Flexible Document-Oriented Data Model',
                  'Scalable for Handling Large Volumes of Data',
                  'Rich Query Language and Indexing Capabilities',
                  'High Availability and Data Redundancy',
                  'Strong Community and Ecosystem Support',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['MQL'],
            },
            {
              name: 'Supabase',
              slug: 'supabase',
              url: 'https://supabase.com/',
              lastUpdated: 'January 14, 2024',
              icon: SupabaseIcon,
              overview: {
                description:
                  'Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.',
                features: [
                  'Provides a scalable PostgreSQL database as a service',
                  'Realtime subscriptions for live data updates',
                  'Built-in authentication and user management',
                  'Instant APIs: RESTful and GraphQL interfaces',
                  'Extensible and integrates well with other tools and services',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['PostgreSQL'],
            },
            {
              name: 'Upstash',
              slug: 'upstash',
              url: 'https://upstash.com/',
              lastUpdated: 'January 14, 2024',
              icon: UpstashIcon,
              overview: {
                description:
                  'Designed for the serverless with per-request pricing and Redis®/Kafka® API.',
                features: [
                  'Upstash is a fully managed, serverless data store service designed for modern cloud applications.',
                  'It provides low-latency and high-performance capabilities, making it suitable for microservices and serverless architectures.',
                  'Upstash is compatible with Redis, offering Redis API compatibility, which allows easy integration into existing applications.',
                  'It offers on-demand scalability, automatically adjusting resources based on application needs without requiring manual intervention.',
                  'Upstash emphasizes simplicity and ease of use, with features like instant provisioning, automatic failover, and no upfront costs.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['PostgreSQL'],
            },
            {
              name: 'appwrite',
              slug: 'appwrite',
              url: 'https://appwrite.io/',
              lastUpdated: 'January 26, 2024',
              icon: AppwriteIcon,
              overview: {
                description:
                  'Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Open Source'],
            },
            {
              name: 'Xata',
              slug: 'xata',
              url: 'https://xata.io/',
              lastUpdated: 'February 17, 2024',
              icon: XataIcon,
              overview: {
                description:
                  'Xata easily integrates into your developer workflow, providing the best data experience for GitHub, Vercel and Netlify based deployments.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {},
              tags: ['PostgreSQL'],
            },
          ],
        },
      },
      //STATE MANAGEMENT
      {
        name: 'State Management',
        path: 'state-management',
        items: [
          {
            name: 'Redux',
            slug: 'redux',
            url: 'https://redux.js.org/',
            lastUpdated: 'March 11, 2024',
            icon: ReduxIcon,
            overview: {
              description: 'A predictable state container for JavaScript apps.',
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
          {
            name: 'Jotai',
            slug: 'jotai',
            url: 'https://jotai.org/',
            lastUpdated: 'March 11, 2024',
            icon: JotaiIcon,
            overview: {
              description:
                'Jotai takes a bottom-up approach to global React state management with an atomic model inspired by Recoil. ',
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
          {
            name: 'MobX',
            slug: 'mobx',
            url: 'https://mobx.js.org/README.html',
            lastUpdated: 'March 11, 2024',
            icon: MobXIcon,
            overview: {
              description:
                'MobX is a signal based, battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming.',
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
          {
            name: 'Recoil',
            slug: 'recoil',
            url: 'https://recoiljs.org/',
            lastUpdated: 'March 11, 2024',
            icon: RecoilIcon,
            overview: {
              description: 'A state management library for React.',
              features: [],
              pricing: [],
            },
            resources: {},
            tags: [],
          },
          // {
          //   name: 'Zustand',
          //   slug: 'zustand',
          //   url: 'https://github.com/pmndrs/zustand',
          //   lastUpdated: 'March 11, 2024',
          //   icon: ZustandIcon,
          //   overview: {
          //     description:
          //       'A small, fast and scalable bearbones state-management solution using simplified flux principles. ',
          //     features: [],
          //     pricing: [],
          //   },
          //   resources: {},
          //   tags: [],
          // },
        ],
      },
      // STORAGE
      {
        name: 'Storage',
        path: 'storage',
        items: [
          {
            name: 'Cloudinary',
            slug: 'cloudinary',
            url: 'https://cloudinary.com/',
            lastUpdated: 'January 15, 2024',
            icon: CloudinaryIcon,
            overview: {
              description:
                'Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.',
              features: [
                'Cloud-based platform for managing, storing, and optimizing images and videos.',
                'Provides tools for uploading, organizing, and managing media assets.',
                'Features advanced image and video manipulation capabilities.',
                'Automatically optimizes media for different devices and network conditions.',
                'Delivers media efficiently through a global Content Delivery Network (CDN).',
                'Supports a wide range of media formats and integrates with various web and mobile application frameworks.',
              ],
              pricing: [
                {
                  name: 'Free',
                  price: '$0/month',
                  features: [
                    'Upload widget, API, and search',
                    'Remote fetch, auto-backup, and revision tracking',
                    'Image and video transformations',
                    'Video transcoding and adaptive streaming',
                    'High performance delivery through a CDN',
                    'Support — forums, tickets, and email',
                    'Access to free add-ons',
                  ],
                },
                {
                  name: 'Plus',
                  price: '$89/month',
                  features: [
                    'incl Free features',
                    'Backup to your own S3 bucket',
                    'Auto-tagging ($)',
                    'Access to free and paid add-ons',
                    'Expedited support',
                    'Allowlist/Blocklist asset access',
                    'Video Bandwidth Boost 2:1',
                    'Role-based multi-user administration',
                  ],
                },
                {
                  name: 'Advanced',
                  price: '$224/month',
                  features: [
                    'incl Plus features',
                    'Custom domain (CNAME) support',
                    'Optional HTTPS SSL Certificate',
                    'Authentication Options',
                  ],
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  features: [
                    'Security and compliance review',
                    'Multi-CDN and enterprise grade infrastructure',
                    'Enterprise SLAs and support',
                    'Designated customer success manager',
                    'Custom contracts and invoicing',
                    'User management (SSO, provisioning API)',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'UploadThing',
            slug: 'uploadthing',
            url: 'https://uploadthing.com/',
            lastUpdated: 'January 15, 2024',
            icon: UploadThingIcon,
            overview: {
              description: 'An easier way to upload files.',
              features: [
                'Uploadthing is a cloud-based file upload service, designed to simplify uploading and sharing files.',
                'Easy integration with websites and applications, allowing for seamless file uploads.',
                'Support various file formats and large file sizes, catering to diverse upload needs.',
              ],
              pricing: [
                {
                  name: '2GB App',
                  price: '$0/month',
                  features: [
                    '2GB of storage *',
                    'Unlimited uploads and downloads',
                    '(Probably) cheaper than a cup of coffee',
                  ],
                },
                {
                  name: '100GB App',
                  price: '$10/month',
                  features: [
                    '100GB of storage',
                    'Up to 10 developers',
                    'Regions (soon™)',
                    'Private Files (soon™)',
                  ],
                },
                {
                  name: 'Unlimited App(s)',
                  price: 'Custom',
                  features: [
                    'Usage based pricing',
                    'Unlimited storage & devs',
                    'Dedicated support',
                    'Theo will hit you up sometimes',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Edge Store',
            slug: 'edge-store',
            url: 'https://edgestore.dev/',
            lastUpdated: 'January 15, 2024',
            icon: EdgeStoreIcon,
            overview: {
              description:
                'The best developer experience for uploading files from your Next.js app.',
              features: [
                'Use our type-safe npm package to seamlessly integrate Edge Store into your app.',
                'Monitor, manage, and delete files with ease.',
                'All your files are served from the edge for a great performance anywhere in the world.',
                'Ensure your files are safe with custom edge validations.',
              ],
              pricing: [
                {
                  name: 'Free',
                  price: '$0/month',
                  features: [
                    '1GB storage',
                    '1 project',
                    'Discord/Github standard support',
                    'Personal use',
                  ],
                },
                {
                  name: 'Starter',
                  price: '$5/month',
                  features: [
                    'Everything in Free',
                    '50GB storage',
                    '3 team members',
                    '3 projects',
                    'Discord/Github priority support',
                    'Email support',
                    'Commercial use',
                  ],
                },
                {
                  name: 'Pro',
                  price: '$35/month',
                  features: [
                    'Everything in Free',
                    '50GB storage',
                    '3 team members',
                    '3 projects',
                    'Discord/Github priority support',
                    'Email support',
                    'Commercial use',
                  ],
                },
                {
                  name: 'Custom',
                  price: 'Contact support',
                  features: [
                    'Everything in Pro',
                    'More storage',
                    'More team members',
                    'More projects',
                    '1 hour of individual support via voice, video or email per month',
                  ],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
        ],
      },
      // CMS
      {
        name: 'CMS',
        path: 'cms',
        items: [
          {
            name: 'WordPress',
            slug: 'wordpress',
            url: 'https://wordpress.com/',
            lastUpdated: 'January 16, 2024',
            icon: WordPressIcon,
            overview: {
              description:
                'Build a site, sell online, earn with your content, and more.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Sanity',
            slug: 'sanity',
            url: 'https://sanity.io/',
            lastUpdated: 'January 16, 2024',
            icon: SanityIcon,
            overview: {
              description:
                'Sanity is the modern CMS that transforms content into a competitive advantage. Customize, collaborate, and scale your digital experiences seamlessly.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Contentful',
            slug: 'contentful',
            url: 'https://contentful.com/',
            lastUpdated: 'January 16, 2024',
            icon: ContentfulIcon,
            overview: {
              description:
                'Business moves faster when teams producing content have a platform that empowers them to collaborate, innovate, and deliver impactful experiences at scale.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'directus',
            slug: 'directus',
            url: 'https://directus.io/',
            lastUpdated: 'March 8, 2024',
            icon: DirectusIcon,
            overview: {
              description:
                'A powerful CMS, BaaS, and more. Power any project with Directus – a composable data platform to easily create and deploy data-rich apps.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Sitecore',
            slug: 'sitecore',
            url: 'https://sitecore.com/',
            lastUpdated: 'January 16, 2024',
            icon: SitecoreIcon,
            overview: {
              description:
                'Sitecore offers an industry-leading digital experience platform that allows brands to create, build, manage, and deliver standout content along every touchpoint of the customer journey.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Storyblok',
            slug: 'storyblok',
            url: 'https://storyblok.com/',
            lastUpdated: 'January 16, 2024',
            icon: StoryblokIcon,
            overview: {
              description:
                'Storyblok is the headless content management system that empowers developers and content teams to create better content experiences across any digital channel.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Prismic',
            slug: 'prismic',
            url: 'https://prismic.io/',
            lastUpdated: 'January 16, 2024',
            icon: PrismaIcon,
            overview: {
              description:
                'Prismic is the headless page builder that lets developers and marketers ship and iterate faster, and build sites that just keep getting better.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Mux',
            slug: 'mux',
            url: 'https://mux.com/',
            lastUpdated: 'January 16, 2024',
            icon: MuxIcon,
            overview: {
              description:
                'From startups to the World Cup, modern software teams use Mux products to stream billions of minutes of video every day.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Builder.io',
            slug: 'builderio',
            url: 'https://builder.io/',
            lastUpdated: 'January 16, 2024',
            icon: BuilderioIcon,
            overview: {
              description:
                'Drag and drop with your components, right within your existing site or app. Build and optimize digital experiences for any tech stack, visually.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Notion',
            slug: 'notion',
            url: 'https://notion.so/',
            lastUpdated: 'January 16, 2024',
            icon: NotionIcon,
            overview: {
              description:
                "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Agility',
            slug: 'agility',
            url: 'https://agilitycms.com/',
            lastUpdated: 'January 16, 2024',
            icon: AgilityIcon,
            overview: {
              description:
                "Unlock Your Brand's Voice and Solve Unique Challenges with White Glove Service and Revolutionary Architecture, Powered by Agility CMS. Get started now!",
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'ButterCMS',
            slug: 'buttercms',
            url: 'https://buttercms.com/',
            lastUpdated: 'January 16, 2024',
            icon: ButterCMSIcon,
            overview: {
              description:
                'Blazing fast API and marketing dashboard. Stop wasting dev time and free marketers from your legacy CMS.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Strapi',
            slug: 'strapi',
            url: 'https://strapi.io/',
            lastUpdated: 'January 16, 2024',
            icon: StrapiIcon,
            overview: {
              description:
                'Strapi is the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Keystatic',
            slug: 'keystatic',
            url: 'https://keystatic.com/',
            lastUpdated: 'January 26, 2024',
            icon: KeystaticIcon,
            overview: {
              description:
                "Keystatic is a new tool from Thinkmill Labs that opens up your code-based content (written in Markdown, JSON or YAML) to contributors who aren't technical.",
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Payload',
            slug: 'payload',
            url: 'https://payloadcms.com/',
            lastUpdated: 'January 26, 2024',
            icon: PayloadIcon,
            overview: {
              description:
                'Payload is an open source, headless CMS and application framework built with TypeScript, Node.js, and React.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'MODX',
            slug: 'modx',
            url: 'https://modx.com/',
            lastUpdated: 'January 27, 2024',
            icon: MODXIcon,
            overview: {
              description:
                'Leave behind endless compromises of legacy CMS. Rapidly develop any digital experience and power it with a tailor-made content management system.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
        ],
      },
      // PAYMENTS
      {
        name: 'Payments',
        path: 'payments',
        items: [
          {
            name: 'Stripe',
            slug: 'stripe',
            url: 'https://stripe.com/',
            lastUpdated: 'January 14, 2024',
            icon: StripeIcon,
            overview: {
              description:
                'Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes. Accept payments, send payouts, and automate financial processes with a suite of APIs and no-code tools.',
              features: [
                'Secure and Easy Online Payments Processing',
                'Support for Global Payment Methods',
                'Seamless Integration with E-commerce Platforms',
                'Robust Fraud Prevention and Detection',
                'Comprehensive Developer-Friendly APIs',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Paddle',
            slug: 'paddle',
            url: 'https://paddle.com/',
            lastUpdated: 'January 14, 2024',
            icon: PaddleIcon,
            overview: {
              description:
                'B2B and B2C software companies around the globe use Paddle to offload operational complexities so they can focus on growth.',
              features: [
                'Streamlined E-commerce Platform for Digital Products',
                'Unified Payment Processing and Subscription Management',
                'Revenue Recovery and In-Depth Analytics',
                'Global Tax and Compliance Support',
                'Developer-Friendly APIs and Integration',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Lemon Squeezy',
            slug: 'lemon-squeezy',
            url: 'https://lemonsqueezy.com/',
            lastUpdated: 'January 14, 2024',
            icon: LemonSqueezyIcon,
            overview: {
              description:
                'Sell digital products and SaaS software the easy peasy way with Lemon Squeezy. As your merchant of record, we handle the tax compliance burden so you can focus on more revenue and less headache.',
              features: [
                'Lemon Squeezy is an all-in-one platform for SaaS businesses, handling payments, subscriptions, and global tax compliance.',
                'As a merchant of record, it manages the legal aspects of payment processing, merchant fees, fraud, and taxes.',
                'The platform supports instant, borderless payments from over 135 countries and supports 20+ payment methods.',
                'Offers local currency support for 130+ countries to increase checkout conversions.',
                'Features AI-driven fraud prevention and a powerful dunning management system for failed payment recovery.',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
        ],
      },
      // HOSTING
      {
        name: 'Hosting',
        path: 'hosting',
        items: {
          Frameworks: [
            {
              name: 'SST',
              slug: 'sst',
              url: 'https://sst.dev/',
              lastUpdated: 'January 14, 2024',
              icon: SSTIcon,
              overview: {
                description:
                  'Build modern full-stack serverless applications on AWS with Next.js, SvelteKit, Remix, Astro, Solid, and more.',
                features: [
                  'SST (Serverless Stack) is an open-source framework for building serverless applications using AWS (Amazon Web Services).',
                  'It enables developers to write code using familiar development workflows and deploy it using AWS serverless services.',
                  'SST includes features like live Lambda development, which allows you to test your Lambda functions locally while connecting to live AWS services.',
                  'It supports various AWS services like Lambda, API Gateway, DynamoDB, and integrates with CDK (Cloud Development Kit) for infrastructure as code.',
                  'SST emphasizes developer productivity, offering tools for debugging, deploying, and monitoring serverless applications efficiently.',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
          ],
          Platforms: [
            {
              name: 'Vercel',
              slug: 'vercel',
              url: 'https://vercel.com/',
              lastUpdated: 'January 14, 2024',
              icon: VercelIcon,
              overview: {
                description:
                  "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.",
                features: [
                  'Effortless Deployment and Hosting for Web Projects',
                  'Automatic CI/CD Pipelines for Rapid Development',
                  'Serverless Functions for Scalable Backend Operations',
                  'Global Edge Network for Low-Latency Content Delivery',
                  'Real-time Collaboration and Continuous Deployment',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Hosting'],
            },
            {
              name: 'Heroku',
              slug: 'heroku',
              url: 'https://heroku.com/',
              lastUpdated: 'January 21, 2024',
              icon: HerokuIcon,
              overview: {
                description:
                  'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Hosting'],
            },
            {
              name: 'Netlify',
              slug: 'netlify',
              url: 'https://netlify.com/',
              lastUpdated: 'January 14, 2024',
              icon: NetlifyIcon,
              overview: {
                description:
                  'Realize the speed, agility and performance of a scalable, composable web architecture with Netlify. Explore the composable web platform now!',
                features: [
                  'Effortless Deployment and Hosting for Modern Web Apps',
                  'Continuous Integration and Continuous Deployment (CI/CD)',
                  'Serverless Functions for Dynamic Backend Operations',
                  'Global Content Delivery Network for Fast Loading Times',
                  'Easy Integration with Git Repositories and Headless CMS',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Hosting'],
            },
            {
              name: 'Koyeb',
              slug: 'koyeb',
              url: 'https://koyeb.com/',
              lastUpdated: 'January 15, 2024',
              icon: KoyebIcon,
              overview: {
                description:
                  'Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, and infrastructure management.',
                features: [
                  'Koyeb is a serverless platform that allows easy deployment from GitHub with built-in continuous deployment.',
                  'Supports Docker container deployments from any registry, globally deployable via a single API call.',
                  'Offers a serverless infrastructure, managing server provisioning, upgrades, and failures.',
                  'Natively supports HTTP/2, WebSocket, and gRPC protocols, enhancing real-time application performance.',
                  'Provides automatic security features including HTTPS, at-rest encryption, and secret management.',
                ],
                pricing: [
                  {
                    name: 'Starter',
                    price: '$0/month',
                    features: [
                      '1x free Web service',
                      '1x free Postgres database',
                      'Run web apps, APIs, and workers',
                      'Git push to deploy',
                      'SSL and 10 free custom domains',
                      '3 users included',
                    ],
                  },
                  {
                    name: 'Startup',
                    price: '$79/month',
                    features: [
                      'US, EU, and Asia locations',
                      '6 users included - more as an add-on',
                      'Up to 128GB of RAM & 40 vCPU per service',
                      '99.9% uptime SLA',
                      'Slack cross-connect',
                      'E-mail support and chat',
                    ],
                  },
                  {
                    name: 'Enterprise',
                    price: 'Custom',
                    features: [
                      'Unlimited users',
                      'Custom RAM, CPU, and GPU',
                      'SSO, RBAC, and Audit trail',
                      'ISO27001 and SOC2 Certifications',
                      'Custom locations (Equinix, AWS, GCP)',
                      '99.99% uptime SLA',
                      '24×7×365 premium support',
                    ],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Hosting'],
            },
  
            {
              name: 'Cloudflare Pages',
              slug: 'cloudflare-pages',
              url: 'https://pages.cloudflare.com/',
              lastUpdated: 'January 18, 2024',
              icon: CloudFlarePagesIcon,
              overview: {
                description: 'Build your next application with Cloudflare Pages.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['Hosting'],
            },
            {
              name: 'Railway',
              slug: 'railway',
              url: 'https://railway.app/',
              lastUpdated: 'January 14, 2024',
              icon: RailwayIcon,
              overview: {
                description:
                  'Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.',
                features: [
                  'Seamless Deployment and Hosting for Web Apps',
                  'Integration with Popular Frameworks like React, Next.js, and more',
                  'Automated CI/CD Pipelines for Efficient Development',
                  'Collaborative and Version-Controlled Environment',
                  'Scalable Infrastructure and Easy Scaling Options',
                ],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: ['MySQL', 'PostgreSQL', 'MongoDB'],
            },
            {
              name: 'Render',
              slug: 'render',
              url: 'https://render.com/',
              lastUpdated: 'January 26, 2024',
              icon: RenderIcon,
              overview: {
                description:
                  'Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git.',
                features: [],
                pricing: [
                  {
                    name: '',
                    price: '',
                    features: [''],
                  },
                ],
              },
              resources: {
                videos: [
                  {
                    title: '',
                    link: '',
                    youtubeId: '',
                  },
                ],
              },
              tags: [],
            },
          ],
        },
      },
      // TESTING
      {
        name: 'Testing',
        path: 'testing',
        items: [
          {
            name: 'Playwright',
            slug: 'playwright',
            url: 'https://playwright.dev/',
            lastUpdated: 'January 14, 2024',
            icon: PlaywrightIcon,
            overview: {
              description:
                'Cross-browser end-to-end testing for modern web apps.',
              features: [
                'Cross-Browser Automation Testing',
                'Support for Multiple Browsers (Chrome, Firefox, WebKit)',
                'Automated Testing for Web, Mobile, and Desktop Applications',
                'Robust and Reliable Testing Framework',
                'Continuous Integration and Scalability',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: ['E2E', 'JavaScript', 'TypeScript'],
          },
          {
            name: 'Cypress',
            slug: 'cypress',
            url: 'https://cypress.io/',
            lastUpdated: 'January 14, 2024',
            icon: CypressIcon,
            overview: {
              description:
                "Cypress' open-source app takes the pain out of front-end testing. Use the Cypress E2E testing framework for any application or component that runs in a browser.",
              features: [
                'Fast and Real-Time Browser Testing',
                'Automatic Waiting for UI Elements',
                'Easy Debugging with Time-Travel and Snapshot Features',
                'Built-in Cross-Browser Support',
                'Extensible with Custom Plugins and Commands',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: ['Open Source', 'E2E', 'JavaScript'],
          },
          {
            name: 'Vitest',
            slug: 'vitest',
            url: 'https://vitest.dev/',
            lastUpdated: 'January 14, 2024',
            icon: VitestIcon,
            overview: {
              description: 'Next generation testing framework powered by Vite.',
              features: [
                'Horizontal Scaling for MySQL Databases',
                'Automatic Sharding and Load Balancing',
                'Support for High Traffic and Data Volume',
                'Online Schema Migrations for Database Evolution',
                'Open-Source and Battle-Tested at YouTube',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: ['JavaScript', 'Unit Testing'],
          },
          {
            name: 'Jest',
            slug: 'jest',
            url: 'https://jestjs.io/',
            lastUpdated: 'January 14, 2024',
            icon: JestIcon,
            overview: {
              description: 'Delightful JavaScript Testing',
              features: [
                'Easy-to-Use JavaScript Testing Framework',
                'Built-in Test Runner and Assertion Library',
                'Efficient and Fast Test Execution',
                'Snapshot Testing for UI Component Verification',
                'Support for Mocking and Stubbing',
              ],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: ['JavaScript', 'Unit Testing'],
          },
          {
            name: 'TestCafe',
            slug: 'testcafe',
            url: 'https://testcafe.io/',
            lastUpdated: 'March 11, 2024',
            icon: TestCafeIcon,
            overview: {
              description:
                'TestCafe is a user-friendly end-to-end testing solution. Free and open-source test runner. Powerful desktop app.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: ['Open Source', 'E2E'],
          },
        ],
      },
      // ANALYTICS
      {
        name: 'Analytics',
        path: 'analytics',
        items: [
          {
            name: 'PostHog',
            slug: 'posthog',
            url: 'https://posthog.com/',
            lastUpdated: 'January 16, 2024',
            icon: PostHogIcon,
            overview: {
              description:
                'PostHog is the all-in-one platform for building better products - with product analytics, feature flags, session recordings, a/b testing, heatmaps, and more.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Plausible',
            slug: 'plausible',
            url: 'https://plausible.io/',
            lastUpdated: 'January 16, 2024',
            icon: PlausibleIcon,
            overview: {
              description:
                'Plausible is a lightweight and open-source Google Analytics alternative. Your website data is 100% yours and the privacy of your visitors is respected.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: ['Open Source'],
          },
          {
            name: 'Google Analytics',
            slug: 'google-analytics',
            url: 'https://analytics.withgoogle.com/',
            lastUpdated: 'January 16, 2024',
            icon: GoogleAnalyticsIcon,
            overview: {
              description:
                'Google Analytics gives you the tools you need to better understand your customer’s journey to improve your website, create tailored audience lists, personalize ads, and more.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
          {
            name: 'Beam Analytics',
            slug: 'beam-analytics',
            url: 'https://beamanalytics.io/',
            lastUpdated: 'January 16, 2024',
            icon: BeamAnalyticsIcon,
            overview: {
              description:
                'Beam is the most affordable GDPR compliant, cookie-free Google Analytics alternative on the market. And it comes with funnel analysis custom events.',
              features: [],
              pricing: [
                {
                  name: '',
                  price: '',
                  features: [''],
                },
              ],
            },
            resources: {
              videos: [
                {
                  title: '',
                  link: '',
                  youtubeId: '',
                },
              ],
            },
            tags: [],
          },
        ],
      },
      // DOCS
      {
        name: 'Docs',
        path: 'docs',
        items: [
          {
            name: 'Docusaurus',
            slug: 'docusaurus',
            url: 'https://docusaurus.io',
            lastUpdated: 'January 18, 2024',
            icon: DocusaurusIcon,
            overview: {
              description:
                'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'docsify',
            slug: 'docsify',
            url: 'https://docsify.js.org/',
            lastUpdated: 'January 18, 2024',
            icon: DocsifyIcon,
            overview: {
              description: 'A magical documentation generator.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'Sphinx',
            slug: 'sphinx',
            url: 'https://sphinx-doc.org/',
            lastUpdated: 'January 18, 2024',
            icon: SphinxIcon,
            overview: {
              description: 'Search within Sphinx documentation',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'starlight',
            slug: 'starlight',
            url: 'https://starlight.astro.build/',
            lastUpdated: 'January 18, 2024',
            icon: StarlightIcon,
            overview: {
              description:
                'Starlight helps you build beautiful, high-performance documentation websites with Astro.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'Mintlify',
            slug: 'mintlify',
            url: 'https://mintlify.com/',
            lastUpdated: 'January 18, 2024',
            icon: MintlifyIcon,
            overview: {
              description:
                'Beautiful out of the box, easy to maintain, and optimized for user engagement.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'VuePress',
            slug: 'vuepress',
            url: 'https://vuepress.vuejs.org/',
            lastUpdated: 'January 18, 2024',
            icon: VueIcon,
            overview: {
              description: 'Vue-powered Static Site Generator',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'GitBook',
            slug: 'gitbook',
            url: 'https://gitbook.com/',
            lastUpdated: 'January 20, 2024',
            icon: GitBookIcon,
            overview: {
              description:
                'GitBook is a knowledge management tool for engineering teams. It simplifies knowledge sharing, with docs-as-code support and AI-powered search & insights. Sign up for free!',
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
      // FEEDBACK
      {
        name: 'Feedback',
        path: 'feedback',
        items: [
          {
            name: 'Canny',
            slug: 'canny',
            url: 'https://canny.io/',
            lastUpdated: 'March 20, 2024',
            icon: CannyIcon,
            overview: {
              description:
                'Capture, organize, and analyze product feedback in one place to inform your product decisions.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          // {
          //   name: ' ',
          //   slug: ' ',
          //   url: ' ',
          //   lastUpdated: 'March 20, 2024',
          //   icon: TestimonialIcon,
          //   overview: {
          //     description: '',
          //     features: [],
          //     pricing: [],
          //   },
          //   resources: {
          //     videos: [],
          //   },
          //   tags: [],
          // },
        ],
      },
      // TESTIMONIALS
      {
        name: 'Testimonials',
        path: 'testimonials',
        items: [
          {
            name: 'Testimonial',
            slug: 'Testimonial',
            url: 'https://testimonial.to/',
            lastUpdated: 'March 20, 2024',
            icon: TestimonialIcon,
            overview: {
              description:
                'In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'Senja',
            slug: 'senja',
            url: 'https://senja.io/',
            lastUpdated: 'March 20, 2024',
            icon: SenjaIcon,
            overview: {
              description:
                'Senja is a free tool to automate your testimonial and case study collection, manage them all in one place and share them everywhere.',
              features: [],
              pricing: [],
            },
            resources: {
              videos: [],
            },
            tags: [],
          },
          {
            name: 'Shoutout',
            slug: 'shoutout',
            url: 'https://shoutout.io/',
            lastUpdated: 'March 20, 2024',
            icon: ShoutoutIcon,
            overview: {
              description:
                'Collect testimonials & publish them on your site the easy way.',
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
  