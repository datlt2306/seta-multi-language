export const MAIN_MENU_LIST = [
    {
        label: "Services",
        path: "/services",
        subCate: [
            {
                label: "Outsourcing Services",
                children: [
                    {
                        label: "Web Development",
                        path: "/services/web-application-development",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/web-development.svg",
                    },
                    {
                        label: "Mobile Development",
                        path: "/services/mobile-application-development",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/mobile-development.svg",
                    },
                    {
                        label: "Legacy Migration",
                        path: "/services/legacy-migration",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/legacy-migration.svg",
                    },
                    {
                        label: "Testing",
                        path: "/services/testing",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/testing.svg",
                    },
                    {
                        label: "Embedded System",
                        path: "/services/embedded-system",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/embedded.svg",
                    },
                ],
            },
            {
                label: "Enterprise Services",
                children: [
                    {
                        label: "SAP Services",
                        path: "/services/enterprise/sap",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/web-development.svg",
                    },
                    {
                        label: "Magento Services",
                        path: "/services/magento-development-services",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/magento.svg",
                    },
                    {
                        label: "Salesforce",
                        path: "/services/enterprise/salesforce",
                        icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/cloud.svg",
                    },
                ],
            },
        ],
    },
    {
        label: "Next-Gen Tech",
        path: "/next-gen",
        children: [
            {
                label: "AI",
                path: "/next-gen/ai",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/ai.svg",
            },
            {
                label: "IoT",
                path: "/next-gen/iot",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/iot.svg",
            },
            {
                label: "Blockchain",
                path: "/next-gen/blockchain",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/blockchain.svg",
            },
            {
                label: "AR/VR",
                path: "/next-gen/ar-vr",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/ar:vr.svg",
            },
            {
                label: "Big Data",
                path: "/next-gen/big-data",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/bigdata.svg",
            },
            {
                label: "Cloud",
                path: "/next-gen/cloud",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/cloud.svg",
            },
        ],
    },
    {
        label: "Industries",
        path: "/industries",
        children: [
            {
                label: "Automotive",
                path: "/industries/automotive",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/automovie.svg",
            },
            {
                label: " Media & Entertainment",
                path: "/industries/media-entertaiment",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/media-entertaiment.svg",
            },
            {
                label: "Heathcare",
                path: "/industries/healthcare",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/healthcare.svg",
            },
            {
                label: "Security",
                path: "/industries/security",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/security.svg",
            },
            {
                label: "Transportation",
                path: "/industries/transportation",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/transporation.svg",
            },
            {
                label: "Retail",
                path: "/industries/retail",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/retail.svg",
            },
            {
                label: "Finance",
                path: "/industries/finance",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/finance.svg",
            },
            {
                label: "Energy",
                path: "/industries/energy",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/energy.svg",
            },
        ],
    },
    {
        label: "R & D",
        path: "/research-development",
    },
    {
        label: "Case Studies",
        path: "/case-study",
    },
    {
        label: "About Us",
        path: "/about",
        children: [
            {
                label: "Culture",
                path: "/about/culture",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture.svg",
            },
            {
                label: "Location",
                path: "/about/location",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/pin-2.svg",
            },
            {
                label: "Seta Insight",
                path: "https://blog.seta-international.com",
                icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/papers.svg",
            },
        ],
    },
];

export const MenuOurSourcing = {
    heading: "Outsourcing Services",
    menus: [
        { label: "Web Development", path: "/services/web-application-development" },
        { label: "Mobile Development", path: "/services/mobile-application-development" },
        { label: "Legacy Migration", path: "/services/legacy-migration" },
        { label: "Testing", path: "/services/testing" },
        { label: "Embedded System", path: "/services/embedded-system" },
    ],
};
export const MenuEnterprise = {
    heading: "Enterprise Services",
    menus: [
        { label: "SAP Services", path: "/services/enterprise/sap" },
        { label: "Magento Services", path: "/services/magento-development-services" },
        { label: "Salesforce", path: "/services/enterprise/salesforce" },
    ],
};
export const MenuNextGen = {
    heading: "Next-Gen Technologies",
    menus: [
        { label: "AI", path: "/next-gen/ai" },
        { label: "IoT", path: "/next-gen/iot" },
        { label: "Blockchain", path: "/next-gen/blockchain" },
        { label: "Big Data", path: "/next-gen/big-data" },
        { label: "Cloud", path: "/next-gen/cloud" },
    ],
};
export const MenuIndustries = {
    heading: "Industries",
    menus: [
        { label: "Automotive", path: "/industries/automotive" },
        { label: "Media & Entertainment", path: "/industries/media-entertaiment" },
        { label: "Security", path: "/industries/security" },
        { label: "Transportation", path: "/industries/transportation" },
        { label: "Retail", path: "/industries/retail" },
        { label: "Finance", path: "/industries/finance" },
    ],
};

export const WEB_APP_DEVELOPMENT_PROCESS = [
    {
        name: "INITIALISATION",
        items: [
            "REQUIREMENT ANALYSIS",
            "FEASIBILITY ANALYSIS",
            "TASK CLASSIFICATION",
            "COST ESTIMATION",
        ],
    },
    {
        name: "DESIGN",
        items: ["APPLICATION VISUAL GUIDE", "WEBSITE LAYOUTS", "UI/UX DESIGN", "WIREFRAMING"],
    },
    {
        name: "APP DEVELOPMENT",
        items: [
            "FRAMEWORK & CMS IMPLEMENTATION",
            "DATABASE STRUCTURE DESIGN",
            "FUNCTIONALITIES IMPLEMENTATION",
        ],
    },
    {
        name: "QA & TESTING",
        items: ["CODE REVIEW", "CROSS-BROWSER TESTING", "SCALABILITY & LOAD TESTING", "BUG FIXING"],
    },
    {
        name: "DEPLOYMENT",
        items: ["WEB HOSTING", "RELIABLE DOMAIN", "UX TESTING", "WEB APP LAUNCH"],
    },
    {
        name: "MAINTENANCE",
        items: ["THIRD-PARTY API UPDATES", "SECURITY UPDATES", "MONITORING", "APP SCALING"],
    },
];

export const CUSTOMERS_LOVING_SERVICES = [
    {
        id: 1,
        customerName: "Chris Bates",
        imgYoutube: "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/1.jpg",
        quote: "“I did not do offshore development before. SETA was referred by an entrepreneur. They have a wonderful project manager and language barrier is not a problem. The devs are hard-working, highly responsive, and dedicated, especially in crisis. Also, we do not have to care about HR tasks. SETA recruits resource speedily. During COVID pandemic, we suddenly served more than additional 50,000 users, which is impossible without SETA support. We are so pleased with SETA.”",
        videoYoutube: "ZIFVM2-5PeA",
        url: "https://teacherzone.com",
        webiste: "Teacher Zone",
    },
    {
        id: 2,
        customerName: "Nico Gevers",
        imgYoutube: "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/5.jpg",
        quote: "“SETA has, and continues to play an important role in our software engineering group. Over the last year, the SETA team have helped us deliver some of our most important software features. I have especially enjoyed how SETA has adapted as our business has grown. Since I joined Veritone, I have built strong relationships with the SETA engineers, and have found them to always be professional. I'm glad to be working with them, and look forward to collaborating with them on many more projects in the future.”",
        videoYoutube: "fg0q0PoENT4",
        url: "https://veritone.com",
        webiste: "Veritone",
    },
    {
        id: 3,
        customerName: "Katrina Von Moos",
        imgYoutube: "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/2.jpg",
        quote: "“After working with exceedingly difficult programmers in another country, we came across SETA International. It was just our luck. The SETA team assigned to us are what is needed to move forward. They did relaunch our software. It gave a better look and was user friendly. They are available to make sure we're always up and running. And if issues come up, they resolve them with extraordinarily little down time. SETA is a great company to work with. They can develop anything you have a vision just the way you want it”",
        videoYoutube: "kn897wXNTuQ",
        url: "https://restaurantsystemspro.net",
        webiste: "Restaurant Systems Pro",
    },
    {
        id: 4,
        customerName: "Vijay Raghavachari",
        imgYoutube: "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/3.jpg",
        quote: "“Aeris is a pioneer and leader in IOT and Automotive. It's fast-paced business and we had so much to build and deliver. We need someone reliable to partner with. It does not take long for us to get impressed with their competence, commitment, and work ethics. We expanded the team to 20 resources. We would definitely recommend them to anyone who is looking for an outsourcing company to partner with.”",
        videoYoutube: "GcLDvwGdzys",
        url: "https://www.aeris.com",
        webiste: "Aeris",
    },
    {
        id: 1,
        customerName: "Tony Zhuang",
        imgYoutube: "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/4.jpg",
        quote: "“SETA helps MotionGlobal to expand business all over the world. SETA has a good pool of talented developers. Responsiveness is fast. Developers are experienced, talented, and hard-working; Over 5 years, the team has helped us successfully complete a lot of IT projects. Delivery's result is beyond MotionGlobal's expectation...”",
        videoYoutube: "KNBDu_Nxqgw",
        url: "https://www.motionglobal.com",
        webiste: "Motion Global",
    },
];

export const MAGENTO_SUCCESS_STORIES = [
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/1.jpg",
        name: "CASYNET",
        desc: "E-commerce system for motorbikes and cars",
        type: "transportation",
        path: "https://casynet.com",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/2.jpg",
        name: "HAPPYNEST",
        desc: "Furniture",
        type: "architectureinterior",
        path: "https://happynest.vn/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/3.jpg",
        name: "COACH",
        desc: "Fashion",
        type: "fashion",
        path: "https://taiwan.coach.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/4.jpg",
        name: "H&M",
        desc: "Fashion",
        type: "fashion",
        path: "https://th.hm.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/5.jpg",
        name: "SARI",
        desc: "Real estate information network",
        type: "real-eastate",
        path: "https://sari.vn/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/6.jpg",
        name: "GRAPEOFF",
        desc: "Wine & Champagne",
        type: "fb",
        path: "https://www.grapeoff.jp/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/7.jpg",
        name: "BISTROVINOCELLARS",
        desc: "Wine & Champagne",
        type: "fb",
        path: "https://www.bistrovinocellars.jp/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/8.jpg",
        name: "MASTERCELLAR",
        desc: "Wine & Champagne",
        type: "fb",
        path: "https://www.mastercellar.jp/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/9.jpg",
        name: "WTM360",
        desc: "Booking tickets",
        type: "mediaEntertaiment",
        path: "https://wtm360.co.uk/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/10.jpg",
        name: "LOCALCONNEXT",
        desc: "Booking gym service",
        type: "heathBeauty",
        path: "http://localconnext.com",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/11.jpg",
        name: "THINLABS",
        desc: "Computer equipment",
        type: "retail",
        path: "https://thinlabs.vugiasoftware.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/12.jpg",
        name: "ELOGEXPRESS",
        desc: "Bill of lading management",
        type: "transportation",
        path: "http://elogexpress.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/13.jpg",
        name: "AMAZINGRAZE",
        desc: "Selling Snacks",
        type: "fb",
        path: "https://www.amazingraze.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/14.jpg",
        name: "SHOPBIGBADWOLF",
        desc: "Book Store",
        type: "retail",
        path: "https://my.bbwbooks.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/15.jpg",
        name: "SB & KONCEPT FURNITURE",
        desc: "SB Design Square furniture and home decoration",
        type: "architectureInterior",
        path: "https://www.sbdesignsquare.com/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/16.jpg",
        name: "ROHTO",
        desc: "Skincare product",
        type: "healthBeauty",
        path: "https://shop.rohto.com.vn/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/18.jpg",
        name: "PIAS",
        desc: "Beauty products",
        type: "healthBeauty",
        path: "https://standard.integration-5ojmyuq-wnyohl5wbi5xi.ap-3.magentosite.cloud/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/19.jpg",
        name: "PARKSON",
        desc: "Shop For Womens, Mens & Kids Clothes, Beauty",
        type: "fashion",
        path: "https://parksononline.com.my/",
    },
    {
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/20.jpg",
        name: "BEST EASTERN",
        desc: "Books, Toys, and More",
        type: "retail",
        path: "https://shopbesteastern.com/",
    },
];

export const BUTTONS_ECOMMERCE = [
    {
        id: 1,
        name: "All",
        value: "all",
    },
    {
        id: 2,
        name: "Transportation",
        value: "transportation",
    },
    {
        id: 3,
        name: "Architecture & Interior",
        value: "architectureInterior",
    },
    {
        id: 4,
        name: "Fashion",
        value: "fashion",
    },
    {
        id: 5,
        name: "Real Estate",
        value: "real-eastate",
    },
    {
        id: 6,
        name: "F & B",
        value: "fb",
    },
    {
        id: 7,
        name: "Media & Entertainment",
        value: "mediaEntertaiment",
    },
    {
        id: 8,
        name: "Health & Beauty",
        value: "healthBeauty",
    },
    {
        id: 9,
        name: "Retail",
        value: "retail",
    },
];

export const OUR_SERVICES_OFFERINGS = [
    {
        id: 1,
        name: "AI",
        path: "/next-gen/ai",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/9.jpg",
    },
    {
        id: 2,
        name: "IoT",
        path: "/next-gen/iot",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/10.jpg",
    },
    {
        id: 3,
        name: "Blockchain",
        path: "/next-gen/blockchain",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/11.jpg",
    },
    {
        id: 4,
        name: "AR/VR",
        path: "/next-gen/ar-vr",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/12.jpg",
    },
    {
        id: 5,
        name: "Legacy Migration",
        path: "/services/legacy-migration",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/1.jpg",
    },
    {
        id: 6,
        name: "Testing",
        path: "/services/testing",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/2.jpg",
    },
    {
        id: 7,
        name: "Web Development",
        path: "/services/web-application-development",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/3.jpg",
    },
    {
        id: 8,
        name: "Mobile App Development",
        path: "/services/mobile-application-development",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/4.jpg",
    },
    {
        id: 9,
        name: "Automotive",
        path: "/industries/automotive",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/automotive.jpg",
    },
    {
        id: 10,
        name: "Retail",
        path: "/industries/retail",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/retail.jpg",
    },
    {
        id: 11,
        name: "Finance",
        path: "/industries/finance",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/finance.jpg",
    },
    {
        id: 12,
        name: "Media & Entertainment",
        path: "/industries/media-entertaiment",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/ME.jpg",
    },
    {
        id: 13,
        name: "Embedded System",
        path: "/services/embedded-system",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/embbed.jpg",
    },
    {
        id: 14,
        name: "Health Care",
        path: "/industries/healthcare",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/health-care.jpg",
    },
    {
        id: 15,
        name: "Security",
        path: "/industries/security",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/sercurity.jpg",
    },
    {
        id: 16,
        name: "Transporation",
        path: "/industries/transportation",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/transporation.jpg",
    },
    {
        id: 17,
        name: "Research & Development",
        path: "/research-development",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/research.jpg",
    },
    {
        id: 18,
        name: "Cloud Services",
        path: "/next-gen/cloud",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/cloud.jpg",
    },
];

export const MAGENTO_WHAT_WE_OFFERING = [
    {
        id: 1,
        title: "Magento Website Development",
        desc: "Without writing a single line of code, you can create a brand-new Magento store that is ready to produce cash. The initial consultation is FREE.",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/1.jpg",
    },
    {
        id: 2,
        title: "Magento Custom Development",
        desc: "Full-cycle Magento development tailored to your specific business requirements. Let our certified developers implement your ideas in a high-quality manner. We guarantee excellent service, a quick time to market, and the best price-to-performance ratio.",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/2.jpg",
    },
    {
        id: 3,
        title: "Server Configuration and Migration Service",
        desc: "Magento server configuration is a complex process that requires deep technical knowledge. To ensure your website functions quickly and smoothly, the dedicated team of specialists will configure your server or migrate it to a new server.",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/3.jpg",
    },
    {
        id: 4,
        title: "Magento Mobile Application Development",
        desc: "Contact us to create a mobile app that meets your requirements. Using our experience in Magento, cross-platform, and native app development, we will discover the perfect solution for you.",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/4.jpg",
    },
    {
        id: 5,
        title: "Magento SEO Support",
        desc: "Get an SEO-optimized website and a plan for ongoing improvement based on a complete analysis of your store - rank at the top of Google search results.",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/5.jpg",
    },
    {
        id: 6,
        title: "Magento Integration Service",
        desc: "Integrate Magento 2 with CRM systems, analytics tools, payment solutions, and marketplaces such as Amazon, eBay, and Facebook Shop.",
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/6.jpg",
    },
];

export const OUR_PORTFOLIO = [
    {
        id: 1,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/veritone.jpg",
        name: "VERITONE",
        desc: "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI.",
    },
    {
        id: 2,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/aeris.jpg",
        name: "AERIS",
        desc: "Aeris is a technology partner with a proven history of helping companies unlock value through IoT.",
    },
    {
        id: 3,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/teacherzone.jpg",
        name: "TEACHER ZONE",
        desc: "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business.",
    },
    {
        id: 4,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/restaurant.jpg",
        name: "THE RESTAURANT EXPERT",
        desc: "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com",
    },
    {
        id: 5,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/avia.jpg",
        name: "AVIA",
        desc: "AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service.",
    },
    {
        id: 6,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/motion-global.jpg",
        name: "MOTION GLOBAL",
        desc: "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies.",
    },
    {
        id: 7,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/careos.png",
        name: "CAREOS",
        desc: "CareOS is an AI-powered, intuitive open platform that works naturally into your care, beauty, and health rituals.",
    },
];
