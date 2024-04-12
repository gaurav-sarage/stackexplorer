export type IconProps = {
    size: number;
};

type Video = {
    title: string;
    link: string;
    youtubeId: string;
};

type News = {
    title: string;
    link: string;
};

type Article = {
    title: string;
    link: string;
};

type Course = {
    title: string;
    link: string;
    price: string;
};

type PricingTier = {
    name: string;
    price: string;
    features: string[];
};

type Overview = {
    description: string;
    features: string[];
    pricing: PricingTier[];
};

type Resources = {
    videos?: Video[];
    articles?: Article[];
    news?: News[];
    courses?: Course[];
};

export type DataItem = {
    name: string;
    slug: string;
    url: string;
    lastUpdated: string;
    icon: React.FC<IconProps>;
    overview: Overview;
    resources: Resources;
    tags: string[];
};

export type ToolingItem =
    | FrontendItem
    | BackendItem
    | FullstackItem
    | MobileItem
    | HostingItem
    | MartketingItem
    | DatabaseItem;

export type FrontendItem = {
    [key: string]: DataItem[];
    Languages: DataItem[];
    Libraries: DataItem[];
    Frameworks: DataItem[];
    Styling: DataItem[];
    UI: DataItem[];
};

export type BackendItem = {
    [key: string]: DataItem[];
    Languages: DataItem[];
    Frameworks: DataItem[];
    Platforms: DataItem[];
};

export type FullstackItem = {
    [key: string]: DataItem[];
    Frameworks: DataItem[];
};

export type MobileItem = {
    [key: string]: DataItem[];
    Language: DataItem[];
    CrossPlatform: DataItem[];
    Tools: DataItem[];
};

export type DatabaseItem = {
    [key: string]: DataItem[];
    ORM: DataItem[];
    Platforms: DataItem[];
};

export type HostingItem = {
    [key: string]: DataItem[];
    Frameworks: DataItem[];
    Platforms: DataItem[];
};

export type MartketingItem = {
    [key: string]: DataItem[];
    Video: DataItem[];
    Testimonials: DataItem[];
};

export type DataStructure = {
    Auth: DataItem[];
    Frontend: FrontendItem;
    Backend: BackendItem;
    Fullstack: FullstackItem;
    Mobile: MobileItem;
    Validations: DataItem[];
    Databases: DatabaseItem;
    CMS: DataItem[];
    Storage: DataItem[];
    Payments: DataItem[];
    Hosting: HostingItem;
    Testing: DataItem[];
    Analytics: DataItem[];
    Docs: DataItem[];
    Marketing: MartketingItem;
};

export type NavItemProps = {
    item: {
        name: string;
        isNew: boolean;
    };
};

export type Item = {
    name: string;
    slug: string;
    url: string;
    lastUpdated: string;
    icon: React.FC<IconProps>;
    overview: {
        description: string;
        features: string[];
        pricing?: {
            name: string;
            price: string;
            features: string[];
        }[];
    };
    resources: {
        videos?: {
            title: string;
            link: string;
            youtubeId: string;
        }[];
    };
    tags: string[];
    fullPath: string;
};

export type SubCategory = {
    name: string;
    path: string;
    items: Item[];
};

export type Category = {
    name: string;
    description: string;
    icon: React.ReactElement;
    path: string;
    subCategories: SubCategory[];
};
