export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    items?: Link[];
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Contact = {
    title?: string;
    text?: string;
    email?: string;
    phone?: string;
    location?: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    contact?: Contact;
    postsPerPage?: number;
    projectsPerPage?: number;
    challengesPerPage?: number;
    navigation?: Array<{
        label: string;
        href: string;
    }>;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'I\'m Nirmal, designing and building ideas into reality.',
    subtitle: 'Product Designer',
    description: 'A collection of Product Design Case Studies, Personal Projects and Design Challenges',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Nirmal -- Freelance Product Designer Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        // {
        //     text: 'Challenges',
        //     href: '/challenges'
        // },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        text: "I'm **Nirmal Rohit**, a Freelance Product Designer, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        actions: []
    },
    contact: {
        title: "Let's Work Together",
        text: "Ready to bring your ideas to life? I'm always excited to collaborate on new projects and explore creative solutions.",
        email: "hello@nirmalrohit.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA"
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    challengesPerPage: 8,
    navigation: [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Blog',
            href: '/blog'
        },
        {
            label: 'Challenges',
            href: '/challenges'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ]
};

export default siteConfig;
