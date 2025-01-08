<script setup lang="ts">
const personalInfo = {
    name: 'Mehmet YAZ',
    title: 'Full Stack Developer',
    email: 'mehmedyaz@gmail.com',
    shortBio: 'Building digital experiences with modern technologies.',
    socialLinks: {
        linkedin: 'https://www.linkedin.com/in/mehmetyaz/',
        github: 'https://github.com/Mehmetyaz',
        x: 'https://x.com/smehmetyaz'
    }
}

const techStack = {
    frontend: {
        title: 'Frontend Development',
        description: 'Building cross-platform and web applications with modern frameworks',
        technologies: [
            {
                name: 'Flutter',
                icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg`,
                experience: 'Advanced',
                points: [
                    {
                        title: 'Core Strengths',
                        items: [
                            {
                                desc: 'Complex Layouts & Animations & Painting',
                                tag: 'Passionate'
                            },
                            {
                                desc: 'Package Development',
                                tag: '250+ Likes, 1.3k+ Downloads'
                            },
                            {
                                desc: 'Deep Dart Knowledge'
                            }
                        ]
                    },
                    {
                        title: 'Architecture',
                        items: [
                            {
                                desc: 'Custom State Solutions',
                                subdesc: 'Mastering built-in tools for project-specific architectures',

                            },
                            {
                                desc: 'API Integration (REST, GraphQL, WS)'
                            },
                            {
                                desc: 'Backend-Driven UI Systems',

                            }
                        ]
                    },
                    {
                        title: 'Enterprise Experience',
                        items: [
                            {
                                desc: 'Multi-Brand App Development',
                                subdesc: 'One codebase, multiple branded versions'
                            },
                            {
                                desc: 'Package-Based Architecture',
                            },
                            {
                                desc: 'Version Control & Publishing'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Vue.js & Nuxt',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
                experience: 'Advanced',
                points: [
                    {
                        title: 'Core Skills',
                        items: [
                            {
                                desc: 'Complex UI & Animations',
                            },
                            {
                                desc: 'State Management',
                                subdesc: 'Pinia'
                            },
                            {
                                desc: 'Routing & Middleware',
                                subdesc: 'Advanced navigation patterns'
                            }
                        ]
                    },
                    {
                        title: 'Frontend Stack',
                        items: [
                            {
                                desc: 'Modern UI Development',
                                subdesc: 'TailwindCSS'
                            },
                            {
                                desc: 'API Integration',
                                subdesc: 'REST, GraphQL, WS'
                            },
                            {
                                desc: 'Performance Optimization'
                            }
                        ]
                    },
                    {
                        title: 'Development Approach',
                        items: [
                            {
                                desc: 'Component-First Design'
                            },
                            {
                                desc: 'TypeScript Integration'
                            },
                            {
                                desc: 'Clean Architecture'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    backend: {
        title: 'Backend Development',
        description: 'Building robust server applications with modern technologies',
        technologies: [
            {
                name: 'Node.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                experience: 'Advanced',
                points: [
                    {
                        title: 'Core Strengths',
                        items: [
                            {
                                desc: 'Express.js'
                            },
                            {
                                desc: 'API Development',
                                subdesc: 'REST & GraphQL'
                            },
                            {
                                desc: 'TypeScript Integration',
                            }
                        ]
                    },
                    {
                        title: 'Features',
                        items: [
                            {
                                desc: 'File Operations',
                            },
                            {
                                desc: 'Middleware Design',
                            },
                            {
                                desc: "Authentication",
                                subdesc: "with using JWT, OAuth, RBAC"
                            },
                            {
                                desc: 'Security Implementation'
                            }
                        ]
                    },
                    {
                        title: 'Best Practices',
                        items: [
                            {
                                desc: 'Clean Architecture'
                            },
                            {
                                desc: 'Error Handling & Standardization',
                            },
                            {
                                desc: 'Performance Optimization'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'GraphQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
                experience: 'Advanced',
                points: [
                    {
                        title: 'Core Strengths',
                        items: [
                            {
                                desc: 'Schema-First Design',
                            },
                            {
                                desc: 'Apollo Server',
                            },
                            {
                                desc: 'Real-time Features',
                                subdesc: 'Subscriptions'
                            }
                        ]
                    },
                    {
                        title: 'Advanced Features',
                        items: [
                            {
                                desc: 'Custom Directives & Scalars',
                                subdesc: 'and automation'

                            },
                            {
                                desc: 'Complex Resolvers'
                            },
                            {
                                desc: 'Performance Optimization'
                            }
                        ]
                    },

                ]
            },
            {
                name: 'Rust',
                icon: `M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.55-2.098-2.208-2.605-2.612-3.28-2.607-.44.002-.995.152-1.235.332-.24.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.86-.46.086-1.343-.407-3.463-1.929-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.41-3.603-1.41-.274 0-.792.293-1.15.652-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.49-3.94.44-5.452-.086-5.761.382-3.51 5.3.718 1.56 1.305 2.98 1.305 3.15 0 .898-.717 1.224-3.794 1.727-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.75-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48 3.57 2.18 3.57 2.246.067 5.56C-.078 76.48.038 77 5.013 78.877c4.347 1.64 4.353 1.66 1.702 5.394-1.502 2.117-1.981 3-1.981 3.653 0 1.223.637 1.535 4.44 2.174 3.206.54 3.92.857 3.92 1.741 0 .182-.588 1.612-1.307 3.177-2.236 4.87-1.981 5.275 3.31 5.275 4.93 0 4.799-.15 3.737 4.294-.8 3.35-.813 3.992-.088 4.715.554.556 1.6.494 4.87-.289 2.499-.596 2.937-.637 3.516-.328l.66.354-.177 3.594c-.178 3.593-.177 3.595.475 4.248.358.36.884.652 1.165.652.282 0 1.903-.63 3.604-1.404 4.22-1.916 4.194-1.932 4.973 2.75.617 3.711.977 4.4 2.294 4.4.327 0 1.83-.88 3.34-1.958 2.654-1.893 3.342-2.19 4.049-1.74.182.115.89 1.67 1.572 3.455 1.003 2.625 1.37 3.31 1.929 3.576 1.062.51 1.72.1 4.218-2.62 3.016-3.286 3.14-3.27 5.602.72 2.72 4.406 3.424 4.396 6.212-.089 2.402-3.864 2.374-3.862 5.621-.47 2.157 2.25 2.616 2.61 3.343 2.61.464 0 1.019-.175 1.23-.388.214-.213.92-1.786 1.568-3.496.649-1.71 1.321-3.2 1.495-3.31.687-.436 1.398-.13 4.048 1.752 1.56 1.108 3.028 1.96 3.377 1.96 1.296 0 1.764-.92 2.302-4.535.46-3.082.554-3.378 1.16-3.685.596-.302.954-.2 3.75 1.07 1.701.77 3.323 1.402 3.604 1.402.282 0 .816-.302 1.184-.672l.672-.67-.184-3.448c-.177-3.29-.16-3.468.364-3.943.54-.488.596-.486 3.615.204 3.656.835 4.338.857 5.025.17.671-.67.664-.818-.254-4.69-1.03-4.346-1.168-4.19 3.78-4.19 3.374 0 3.75-.049 4.18-.523.718-.793.547-1.702-.896-4.779-.729-1.55-1.32-2.96-1.315-3.135.024-.914.743-1.227 4.065-1.767 2.033-.329 3.553-.71 3.829-.96.923-.833.584-1.918-1.523-4.873-2.642-3.703-2.63-3.738 1.599-5.297 5.064-1.866 5.209-2.488 1.419-6.09-3.51-3.335-3.512-3.317.333-5.677 4.648-2.853 4.655-3.496.082-6.335-3.933-2.44-3.93-2.406-.405-5.753 3.78-3.593 3.678-4.063-1.295-5.965-4.388-1.679-4.402-1.72-1.735-5.38 1.588-2.18 1.982-2.903 1.982-3.65 0-1.306-.586-1.598-4.436-2.22-3.216-.52-3.924-.835-3.924-1.75 0-.174.588-1.574 1.307-3.113 1.406-3.013 1.604-4.22.808-4.94-.428-.387-1-.443-4.067-.392-3.208.054-3.618.008-4.063-.439-.486-.488-.48-.557.278-3.725.931-3.88.935-3.975.17-4.694-.777-.73-1.262-.718-4.826.121-2.597.612-3.027.653-3.617.337l-.67-.36.185-3.582.186-3.58-.67-.67c-.369-.37-.891-.67-1.163-.67-.27 0-1.884.64-3.583 1.421-2.838 1.306-3.143 1.393-3.757 1.072-.612-.32-.714-.637-1.237-3.829-.603-3.693-.977-4.412-2.288-4.412-.311 0-1.853.925-3.426 2.055-2.584 1.856-2.93 2.032-3.574 1.807-.533-.186-.843-.59-1.221-1.599-.28-.742-.817-2.172-1.194-3.177-.762-2.028-1.187-2.482-2.328-2.482-.637 0-1.213.458-3.28 2.604-3.25 3.375-3.261 3.374-5.65-.545C66.073 1.78 65.075.382 64.81.24c-.597-.32-1.3-.32-1.85.002m2.96 11.798c2.83 2.014 1.326 6.75-2.144 6.75-3.368 0-5.064-4.057-2.66-6.36 1.358-1.3 3.304-1.459 4.805-.39m-3.558 12.507c1.855.705 2.616.282 6.852-3.8l3.182-3.07 1.347.18c4.225.56 12.627 4.25 17.455 7.666 4.436 3.14 10.332 9.534 12.845 13.93l.537.942-2.38 5.364c-1.31 2.95-2.382 5.673-2.382 6.053 0 .878.576 2.267 1.13 2.726.234.195 2.457 1.265 4.939 2.378l4.51 2.025.178 1.148c.23 1.495.26 5.167.052 6.21l-.163.816h-2.575c-2.987 0-2.756-.267-2.918 3.396-.118 2.656-.76 4.124-2.22 5.075-2.377 1.551-6.304 1.27-7.97-.57-.255-.284-.752-1.705-1.105-3.16-1.03-4.254-2.413-6.64-5.193-8.965-.878-.733-1.595-1.418-1.595-1.522 0-.102.965-.915 2.145-1.803 4.298-3.24 6.77-7.012 7.04-10.747.519-7.126-5.158-13.767-13.602-15.92-2.002-.51-2.857-.526-27.624-.526-14.057 0-25.56-.092-25.56-.204 0-.263 3.125-3.295 4.965-4.816 5.054-4.178 11.618-7.465 18.417-9.22l2.35-.61 3.34 3.387c1.839 1.863 3.64 3.5 4.003 3.637M20.3 46.34c1.539 1.008 2.17 3.54 1.26 5.062-1.405 2.356-4.966 2.455-6.373.178-2.046-3.309 1.895-7.349 5.113-5.24m90.672.13c4.026 2.454.906 8.493-3.404 6.586-2.877-1.273-2.97-5.206-.155-6.64 1.174-.6 2.523-.579 3.56.053M32.163 61.5v15.02h-13.28l-.526-2.285c-1.036-4.5-1.472-9.156-1.211-12.969l.182-2.679 4.565-2.047c2.864-1.283 4.706-2.262 4.943-2.625 1.038-1.584.94-2.715-.518-5.933l-.68-1.502h6.523V61.5M70.39 47.132c2.843.74 4.345 2.245 4.349 4.355.002 1.55-.765 2.52-2.67 3.38-1.348.61-1.562.625-10.063.708l-8.686.084v-8.92h7.782c6.078 0 8.112.086 9.288.393m-2.934 21.554c1.41.392 3.076 1.616 3.93 2.888.898 1.337 1.423 3.076 2.667 8.836 1.05 4.87 1.727 6.46 3.62 8.532 2.345 2.566 1.8 2.466 13.514 2.466 5.61 0 10.198.09 10.198.2 0 .197-3.863 4.764-4.03 4.764-.048 0-2.066-.422-4.484-.939-6.829-1.458-7.075-1.287-8.642 6.032l-1.008 4.702-.91.448c-1.518.75-6.453 2.292-9.01 2.82-4.228.87-8.828 1.162-12.871.821-6.893-.585-16.02-3.259-16.377-4.8-.075-.327-.535-2.443-1.018-4.704-.485-2.26-1.074-4.404-1.31-4.764-1.13-1.724-2.318-1.83-7.547-.674-1.98.44-3.708.796-3.84.796-.248 0-3.923-4.249-3.923-4.535 0-.09 8.728-.194 19.396-.23l19.395-.066.07-6.89c.05-4.865-.018-6.997-.23-7.25-.234-.284-1.485-.358-6.011-.358H53.32v-8.36l6.597.001c3.626.002 7.02.12 7.539.264M37.57 100.02c3.084 1.88 1.605 6.804-2.043 6.8-3.74 0-5.127-4.88-1.94-6.826 1.055-.643 2.908-.63 3.983.026m56.48.206c1.512 1.108 2.015 3.413 1.079 4.95-2.46 4.034-8.612.827-6.557-3.419 1.01-2.085 3.695-2.837 5.478-1.53`,
                experience: 'Beginner',
                tag: 'Learning',
                note: 'Excited to master it!',
                points: [
                    {
                        title: "What I Can Do",
                        items: [
                            {
                                desc: "Basic Microservices",
                            },
                            {
                                desc: "Performance Optimization",
                            },
                            {
                                desc: "Tokio Runtime",
                            }
                        ]
                    },
                    {
                        title: 'Learning',
                        items: [
                            {
                                desc: 'Ownership',
                                subdesc: "🤯"
                            },
                            {
                                desc: "API Development"
                            },
                            {
                                desc: "Custom Protocols"
                            }

                        ]
                    }
                ]
            }
        ]
    },
    database: {
        title: 'Database & Caching',
        description: 'Managing data with various database systems and custom solutions',
        technologies: [
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
                experience: 'Advanced',
                points: [
                    {
                        title: 'Core Strengths',
                        items: [
                            'Document Design',
                            'Indexing Strategies',
                            'Aggregation Pipeline',
                            'Complex Queries'
                        ]
                    },


                ]
            },
            {
                name: 'PostgreSQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
                experience: 'Intermediate',
                tag: 'Learning',
                note: 'Still diving deeper into this ocean of features!',
                points: [
                    {
                        title: 'Core Strengths',
                        items: [
                            'Relational Design',
                            'Query Optimization',
                            'Concurrency & Transactions',
                            'Procedural Logic'
                        ]
                    },


                ]
            },
            {
                name: 'Redis',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
                experience: 'Advanced',
                points: [
                    {
                        title: 'Core Strengths',
                        items: [
                            'Caching Automation',
                            'Pub/Sub Pattern',
                            'Data Structures',
                        ]
                    }


                ]
            }
        ]
    },
    infrastructure: {
        title: 'Infrastructure & DevOps',
        description: 'Deploying and managing cloud-native applications',
        technologies: [
            {
                name: 'Kubernetes',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
                experience: 'Intermediate',
                points: [

                    {
                        title: 'I Can Use',
                        items: [
                            "Google Cloud",
                            "AWS",
                            "Azure",
                            'MicroK8s on Custom Machines'
                        ]
                    },
                    {
                        title: 'I Can Manage',
                        items: [
                            "Deployments & Services",
                            "Networking",
                            "Storage",
                            "Security",
                            "CI/CD",
                            "Backup & Recovery",
                        ]
                    },
                    {
                        title: "Deployment",
                        items: [
                            "Cloud Build",
                            "Terraform",
                            "Kustomize",
                            "Kubernetes Operator"
                        ]
                    }
                ]
            },
            {
                name: 'Docker',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
                experience: 'Intermediate',
                points: [
                    {
                        title: 'I Can Do/Use',
                        items: [
                            'Container Design',
                            'Multi-stage Builds',
                            'Network Management',
                            "Docker Compose",
                            "Docker Registry"
                        ]
                    }
                ]
            },
            {
                name: 'Serverless Architecture',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/serverless/serverless-plain.svg',
                experience: 'Intermediate',
                points: [
                    {
                        title: 'Cloud Services',
                        items: [
                            {
                                desc: 'Firebase',
                                subdesc: 'Storage, Firestore, Auth, Functions & Hosting'
                            },
                            {
                                desc: 'Cloud Run',
                                subdesc: 'Google Cloud Platform'
                            }
                        ]
                    },
                    {
                        title: 'Custom Serverless Solutions',
                        items: [
                            {
                                desc: 'Untrusted Code Execution',
                                subdesc: 'Dockerized serverless runtime',
                            },
                            {
                                desc: 'Security Isolation'
                            },
                            {
                                desc: 'Resource Management',
                            },
                            {
                                desc: 'Cold Start Optimization'
                            },
                            {
                                desc: 'Cost-Effective Scaling'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    cloud: {
        title: 'Cloud Services',
        description: 'Experience with various cloud providers and their services',
        technologies: [
            {
                name: 'Google Cloud',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
                experience: 'Hands-on',
                points: [
                    {
                        title: "Experienced",
                        items: [
                            {
                                desc: 'IAM & Service Accounts'
                            },
                            {
                                desc: 'Artifact Registry'
                            },
                            {
                                desc: 'Google Kubernetes Engine'
                            },
                            {
                                desc: 'Load Balancing'
                            },
                            {
                                desc: 'Cloud Run'
                            },
                            {
                                desc: 'Cloud Functions'
                            },
                            {
                                desc: 'Cloud Storage'
                            },
                            {
                                desc: 'Cloud Build'
                            },
                            {
                                desc: 'Cloud Logging'
                            },
                            {
                                desc: "Cloud Messaging"
                            }
                        ]
                    },
                    {
                        title: 'Hands-on',
                        items: [
                            {
                                desc: "AI Services"
                            },
                            {
                                desc: "Firebase Remote Config"
                            }
                        ]
                    }
                ]
            },
            {
                name: 'AWS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
                experience: 'Hands-on',
                points: [
                    {
                        title: 'Hands-on',
                        items: [
                            {
                                desc: 'IAM'
                            },
                            {
                                desc: 'S3'
                            },
                            {
                                desc: 'EKS'
                            },
                            {
                                desc: 'ECR'
                            },
                            {
                                desc: 'Load Balancing'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Azure',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
                experience: 'Hands-on',
                points: [
                    {
                        title: 'Hands-on',
                        items: [
                            {
                                desc: 'Storage'
                            },
                            {
                                desc: 'AI Services',
                                subdesc: "Currently I'm trying TTS with SSML. It's wonderful!"
                            },
                            {
                                desc: 'Container Registry'
                            },
                            {
                                desc: 'Kubernetes'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    tools: {
        title: 'Development Tools',
        description: 'Modern development tools and AI assistants enhancing productivity',
        technologies: [
            {
                name: 'CursorAI',
                icon: 'https://www.cursor.com/assets/images/logo.svg',
                experience: 'Advanced',
                tag: 'Favorite',
                note: 'This site? Yeah, it did that',
                points: [
                    {
                        title: 'Using For',
                        items: [
                            {
                                desc: 'AI-Powered Development',
                            },
                            {
                                desc: 'Context-Aware Assistance',
                            },
                            {
                                desc: "Multi-Agent Infrastructure",
                                subdesc: "I'm developing a template for this, will be published soon"
                            }
                        ]
                    },

                    {
                        title: 'Why I Love It',
                        items: [
                            {
                                desc: 'Productivity Boost',
                                subdesc: 'Up to 10x!'
                            },
                            {
                                desc: 'Learning Assistant',
                                subdesc: 'Always teaching new tricks'
                            }
                        ]
                    }
                ]
            },

            {
                name: 'JetBrains Suite',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg',
                experience: 'Advanced',
                tag: 'Ex-Favorite',
                note: 'Fan since forever... until CursorAI',
                points: [
                    {
                        title: 'Products',
                        items: [
                            {
                                desc: "Intellij IDEA"
                            },
                            {
                                desc: "WebStorm"
                            },
                            {
                                desc: "DataGrip"
                            },
                            {
                                desc: "RustRover"
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Version Control',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
                experience: 'Advanced',
                points: [
                    {
                        title: "Experienced",
                        items: [
                            {
                                desc: "Git"
                            },
                            {
                                desc: "GitHub"
                            },
                            {
                                desc: "GitHub Actions"
                            },


                        ]
                    }
                ]
            }
        ]
    }
}

const currentWork = {
    title: 'Current Focus',
    projects: [
        {
            name: 'PrompAI',
            description: `
PrompAI is a marketplace for AI-powered SaaSs. With PrompAI, developers can easily develop (like developing a serverless function) their own SaaSs and deploy them to the PrompAI cloud, end-users can use these SaaSs in the PrompAI UI.

PrompAI manages the entire lifecycle of the SaaSs, from development to deployment to billing.

In this project, I'm developing the entire backend, including serverless functions, database, authentication, billing, etc.
            `
        },
        {
            name: 'Agent on Broca',
            description: `
Imagine a completely generic Dualingo! An AI Agent that generates quizzes, exercises, and engaging dialogues for the user, customized to his/her learning.

In this project, I'm developing the entire backend with node.js, graphql, and frontend with flutter. For this application, which works integrated with Claude and ChatGPT, I also use Azure's text to speech (with ssml) and pronunciation assessment services.

Broca is the name of a brain part that is responsible for language processing.

This project name is temporary, will be changed soon.

`
        }
    ]
}

const interests = [
    {
        name: "Family",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        description: "As a father of twin boys (2) and husband to a passionate teacher, my family is my cornerstone. Beyond career achievements, my greatest fulfillment comes from quality time and shared moments with them."
    },
    {
        name: 'AI',
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        description: 'Fascinated by the transformative potential of artificial intelligence, particularly its role in shaping our future and revolutionizing how we work and create.'
    },
    {
        name: 'PC Games',
        icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
        description: 'An enthusiastic gamer with a particular fondness for strategy and city-building genres, finding both entertainment and creative inspiration in virtual worlds.'
    },
    {
        name: "Nature",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        description: "Living in the heart of a forest, my connection with nature extends beyond appreciation - crafting and building with natural materials brings a unique sense of fulfillment. ❤️"
    },
    {
        name: "Popular Science",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        description: "Deeply curious about human knowledge, from anthropology to physics. The interconnections between different scientific fields never cease to amaze me."
    }
]

// Scroll to bottom fonksiyonu
const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
}

// Intersection Observer için ref'ler
const sectionRefs = ref([])

// Aktif section'ı takip etmek için
const activeSection = ref('frontend')

definePageMeta({
    layout: 'default',
    title: 'Mehmet YAZ | Full Stack Developer',
    description: 'Mehmet YAZ | Full Stack Developer',
    keywords: 'Mehmet YAZ, Full Stack Developer, Software Engineer, AI, Cloud, DevOps, Node.js, Vue.js, Nuxt.js, Flutter, Docker, Kubernetes, CI/CD, AWS, Azure, GCP'
});


onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.dataset.section
            }
        })
    }, {
        threshold: 0.5
    })

    // Her section için observer ekle
    sectionRefs.value.forEach(section => {
        if (section) observer.observe(section)
    })
})
</script>

<template>
    <main class="min-h-screen bg-[#0A0F16] text-gray-100">
        <!-- Background Gradient Effect -->
        <div class="fixed inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-[#0A2A2F] via-[#0A0F16] to-[#0A0F16]"></div>
            <div class="absolute inset-0 bg-[#00FF95]/[0.02]"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10">
            <!-- Hero Section -->
            <section class="pt-32 pb-20">
                <div class="container mx-auto px-6">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-16 space-y-4">
                            <img src="/avatar.jpg" alt="Profile"
                                class="w-24 h-24 rounded-full mx-auto mb-8 object-cover border-2 border-[#00FF95]/20 ring-4 ring-[#00FF95]/10">
                            <h1
                                class="text-6xl font-light tracking-tight mb-6 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
                                {{ personalInfo.name }}
                            </h1>
                            <p class="text-2xl text-[#00FF95] font-light mb-8">{{ personalInfo.title }}</p>
                            <p class="text-4xl font-extralight text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Crafting sustainable solutions with passion and precision.
                            </p>
                        </div>

                        <!-- About Me -->
                        <div class="prose prose-lg prose-invert mx-auto text-gray-400 font-light">
                            <p class="mb-4 text-xl leading-relaxed">
                                I maintain a delicate balance between process and results-oriented approaches. I'm
                                process-oriented enough to create sustainable products, yet results-driven enough to
                                deliver on time. My passion for modern technologies and eagerness to learn new skills
                                drives my continuous growth in the field.
                            </p>
                            <p class="text-xl leading-relaxed">
                                What sets me apart is my problem-solving ability and dedication to tackling challenging
                                tasks. The sacrifices I make to accomplish difficult missions bring me joy, as they
                                contribute to creating meaningful solutions that make a real impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tech Stack Section -->
            <section class="py-32 relative">
                <div class="container mx-auto px-6">
                    <h2
                        class="text-4xl font-light text-center mb-20 bg-gradient-to-r from-[#00FF95] to-[#4F46E5] text-transparent bg-clip-text">
                        Tech Stack
                    </h2>

                    <!-- Stack Categories -->
                    <div class="space-y-32">
                        <!-- Her kategori için ayrı section -->
                        <div v-for="(category, key) in techStack" :key="key"
                            :ref="el => { if (el) sectionRefs[key] = el }" :data-section="key" class="relative">

                            <!-- Sticky Header -->
                            <div class="sticky top-0 z-20 py-6 px-4 md:px-6">
                                <div class="max-w-4xl mx-auto">
                                    <div
                                        class="bg-[#0A1A1F]/80 backdrop-blur-xl p-4 md:p-8 rounded-xl border border-gray-800/50 hover:border-[#00FF95]/50 transition-all duration-500">
                                        <h3 class="text-xl md:text-2xl font-light mb-1 md:mb-2 text-white">{{
                                            category.title }}</h3>
                                        <p class="text-sm md:text-base text-gray-400 font-light">{{ category.description
                                            }}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Technologies -->
                            <div class="mt-8 md:mt-12 max-w-4xl mx-auto px-4 md:px-0">
                                <div class="grid grid-cols-1  gap-x-16">
                                    <TechnologyCard v-for="(tech, index) in category.technologies" :key="tech.name"
                                        :tech="tech" :is-right="index % 2 === 1" class="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Current Work Section -->
            <section class="py-32">
                <div class="container mx-auto px-6">
                    <div class="max-w-4xl mx-auto">
                        <h2
                            class="text-4xl font-light mb-16 bg-gradient-to-r from-[#00FF95] to-[#4F46E5] text-transparent bg-clip-text text-center">
                            What I'm Working On
                        </h2>
                        <div class="space-y-8">
                            <div v-for="project in currentWork.projects" :key="project.name"
                                class="bg-[#0A1A1F]/30 backdrop-blur-xl p-8 rounded-xl border border-gray-800/50 hover:border-[#00FF95]/50 transition-all duration-500">
                                <h3 class="text-2xl font-light mb-4 text-white">{{ project.name }}</h3>
                                <p class="text-gray-400 font-light leading-relaxed">{{ project.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Interests Section -->
            <section class="py-32 bg-[#0A1A1F]/50 backdrop-blur-xl">
                <div class="container mx-auto px-6">
                    <div class="max-w-4xl mx-auto">
                        <h2
                            class="text-4xl font-light mb-16 bg-gradient-to-r from-[#00FF95] to-[#4F46E5] text-transparent bg-clip-text text-center">
                            Interests & Hobbies
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div v-for="interest in interests" :key="interest.name"
                                class="bg-[#0A1A1F]/30 backdrop-blur-xl p-8 rounded-xl border border-gray-800/50 hover:border-[#00FF95]/50 transition-all duration-500 group">
                                <div class="flex items-center gap-4 mb-4">
                                    <div
                                        class="w-8 h-8 flex items-center justify-center text-[#00FF95] opacity-75 group-hover:opacity-100 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                :d="interest.icon" />
                                        </svg>
                                    </div>
                                    <h3
                                        class="text-2xl font-light text-white group-hover:text-[#00FF95] transition-colors">
                                        {{ interest.name }}
                                    </h3>
                                </div>
                                <p class="text-gray-400 font-light leading-relaxed">
                                    {{ interest.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Scroll Button -->
            <button @click="scrollToBottom"
                class="fixed bottom-8 right-8 bg-[#00FF95]/10 hover:bg-[#00FF95]/20 text-[#00FF95] w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-500 flex items-center justify-center group border border-[#00FF95]/20">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transform group-hover:translate-y-1 transition-transform duration-300" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>

            <!-- Footer -->
            <footer class="py-20 bg-[#0A1A1F]/50 backdrop-blur-xl border-t border-gray-800/50">
                <div class="container mx-auto px-6">
                    <div class="max-w-4xl mx-auto">
                        <h2
                            class="text-4xl font-light text-center mb-12 bg-gradient-to-r from-[#00FF95] to-[#4F46E5] text-transparent bg-clip-text">
                            Get in Touch
                        </h2>
                        <div class="flex flex-col items-center space-y-6">
                            <!-- CV Section -->
                            <div class="w-full max-w-2xl">
                                <div
                                    class="bg-[#0A1A1F]/80 backdrop-blur-xl p-8 rounded-xl border border-gray-800/50 hover:border-[#00FF95]/50 transition-all duration-500">
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="p-3 bg-[#00FF95]/10 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00FF95]"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="text-xl text-white font-light">CV</h3>
                                            <p class="text-gray-400 text-sm">Download or view my CV in your preferred
                                                format</p>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <!-- Download Options -->
                                        <div class="space-y-3">
                                            <h4 class="text-sm uppercase tracking-wider text-gray-400 mb-4">Download as
                                            </h4>
                                            <a href="/Mehmet-Yaz-CV.pdf" download
                                                class="w-full px-4 py-3 bg-[#00FF95]/10 hover:bg-[#00FF95]/20 text-[#00FF95] rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-3 border border-[#00FF95]/20">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                PDF Format
                                            </a>
                                            <a href="/Mehmet-Yaz-CV.docx" download
                                                class="w-full px-4 py-3 bg-[#00FF95]/10 hover:bg-[#00FF95]/20 text-[#00FF95] rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-3 border border-[#00FF95]/20">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                DOCX Format
                                            </a>
                                        </div>

                                        <!-- Preview Option -->
                                        <div class="space-y-3">
                                            <h4 class="text-sm uppercase tracking-wider text-gray-400 mb-4">Preview</h4>
                                            <a href="/Mehmet-Yaz-CV.pdf" target="_blank"
                                                class="w-full px-4 py-3 bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-3 border border-gray-700/30">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                View Online
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="mailto:{{ personalInfo.email }}"
                                class="text-gray-400 hover:text-[#00FF95] flex items-center gap-2 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {{ personalInfo.email }}
                            </a>
                            <div class="flex items-center gap-8 mt-6">
                                <a href="#" class="text-gray-400 hover:text-[#00FF95] transition-colors">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-[#00FF95] transition-colors">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-[#00FF95] transition-colors">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="text-center text-sm text-gray-500 pt-12 border-t border-gray-800/50 mt-12">
                            <p>© {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </main>
</template>

<style scoped>
.container {
    max-width: 1200px;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Modern scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #0A0F16;
}

::-webkit-scrollbar-thumb {
    background: #00FF95;
    border-radius: 3px;
    opacity: 0.5;
}

::-webkit-scrollbar-thumb:hover {
    background: #00FF95;
    opacity: 0.8;
}

/* Gradient text support for Safari */
@supports (-webkit-background-clip: text) {
    .bg-gradient-to-r {
        -webkit-background-clip: text;
    }
}
</style>
