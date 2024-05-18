import {
  GoogleColabIcon,
  HuggingFaceIcon,
  JupyterIcon,
  KaggleIcon,
  KerasIcon,
  MlflowIcon,
  OpenCVIcon,
  PythonIcon,
  PyTorchIcon,
  RIcon,
  TensorFlowIcon,
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
  name: 'AI & ML Development',
  description:
    'Building algorithms and models for tasks that require human-like cognition and learning.',
  icon: <Sparkle className="w-6 h-6  text-gray-900" />,
  path: '/category/ai-ml-development',
  subCategories: [
    // Languages
    {
      name: 'Languages',
      path: 'languages',
      items: [
        {
          name: 'Python',
          slug: 'python',
          url: 'https://python.org/',
          lastUpdated: 'February 17, 2024',
          icon: PythonIcon,
          overview: {
            description:
              'Python is a programming language that lets you work quickly and integrate systems more effectively.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: ['Language'],
        },
        {
          name: 'R',
          slug: 'r',
          url: 'https://r-project.org/',
          lastUpdated: 'February 17, 2024',
          icon: RIcon,
          overview: {
            description:
              'R is a language and environment for statistical computing and graphics.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: ['Language'],
        },
      ],
    },
    // IDEs
    {
      name: 'IDEs',
      path: 'ides',
      items: [
        {
          name: 'Jupyter',
          slug: 'jupyter',
          url: 'https://jupyter.org/',
          lastUpdated: 'February 17, 2024',
          icon: JupyterIcon,
          overview: {
            description:
              'The Jupyter Notebook is a web-based interactive computing platform. The notebook combines live code, equations, narrative text, visualizations, interactive dashboards and other media.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
        {
          name: 'Google Colab',
          slug: 'google-colab',
          url: 'https://colab.research.google.com/',
          lastUpdated: 'February 17, 2024',
          icon: GoogleColabIcon,
          overview: {
            description:
              'Colab is a hosted Jupyter Notebook service that requires no setup to use and provides free access to computing resources, including GPUs and TPUs.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
      ],
    },
    // Platforms
    {
      name: 'Platforms',
      path: 'platforms',
      items: [
        {
          name: 'Kaggle',
          slug: 'kaggle',
          url: 'https://kaggle.com/',
          lastUpdated: 'February 17, 2024',
          icon: KaggleIcon,
          overview: {
            description:
              "Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.",
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
        {
          name: 'HuggingFace',
          slug: 'hugging-face',
          url: 'https://huggingface.co/',
          lastUpdated: 'February 17, 2024',
          icon: HuggingFaceIcon,
          overview: {
            description:
              'The platform where the machine learning community collaborates on models, datasets, and applications.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
        {
          name: 'MLflow',
          slug: 'mlflow',
          url: 'https://mlflow.org/',
          lastUpdated: 'March 20, 2024',
          icon: MlflowIcon,
          overview: {
            description:
              'Build better models and generative AI apps on a unified, end-to-end, open source MLOps platform.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
      ],
    },
    // Libraries
    {
      name: 'Libraries',
      path: 'libraries',
      items: [
        {
          name: 'OpenCV',
          slug: 'opencv',
          url: 'https://opencv.org/',
          lastUpdated: 'February 17, 2024',
          icon: OpenCVIcon,
          overview: {
            description:
              'OpenCV provides a real-time optimized Computer Vision library, tools, and hardware. It also supports model execution for Machine Learning (ML) and Artificial Intelligence (AI).',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
        {
          name: 'Keras',
          slug: 'keras',
          url: 'https://keras.io/',
          lastUpdated: 'February 17, 2024',
          icon: KerasIcon,
          overview: {
            description:
              'Keras is an open-source library that provides a Python interface for artificial neural networks.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
      ],
    },
    // Frameworks
    {
      name: 'Frameworks',
      path: 'frameworks',
      items: [
        {
          name: 'TensorFlow',
          slug: 'tensor-flow',
          url: 'https://tensorflow.org/',
          lastUpdated: 'February 17, 2024',
          icon: TensorFlowIcon,
          overview: {
            description:
              "An end-to-end open source machine learning platform for everyone. Discover TensorFlow's flexible ecosystem of tools, libraries and community resources.",
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
        {
          name: 'PyTorch',
          slug: 'pytorch',
          url: 'https://pytorch.org/',
          lastUpdated: 'February 17, 2024',
          icon: PyTorchIcon,
          overview: {
            description:
              'PyTorch is a machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing, originally developed by Meta AI and now part of the Linux Foundation umbrella.',
            features: [],
            pricing: [],
          },
          resources: {},
          tags: [],
        },
      ],
    },
  ],
};
