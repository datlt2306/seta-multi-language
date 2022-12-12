export default {
    menuList: [
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
                            icon: "/images/icons/web-development.png",
                        },
                        {
                            label: "Mobile Development",
                            path: "/services/mobile-application-development",
                            icon: "/images/icons/mobile-development.png",
                        },
                        {
                            label: "Legacy Migration",
                            path: "/services/legacy-migration",
                            icon: "/images/icons/legacy-migration.png",
                        },
                        {
                            label: "Testing",
                            path: "/services/testing",
                            icon: "/images/icons/testing.png",
                        },
                        {
                            label: "Embedded System",
                            path: "/services/embedded-system",
                            icon: "/images/icons/embedded.png",
                        },
                    ],
                },
                {
                    label: "Enterprise Services",
                    children: [
                        {
                            label: "SAP Services",
                            path: "/services/enterprise/sap",
                            icon: "/images/icons/web-development.png",
                        },
                        {
                            label: "Magento Services",
                            path: "/services/magento-development-services",
                            icon: "/images/icons/magento.png",
                        },
                        {
                            label: "Salesforce",
                            path: "/services/enterprise/salesforce",
                            icon: "/images/icons/cloud.png",
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
                    icon: "/images/icons/ai.png",
                },
                {
                    label: "IoT",
                    path: "/next-gen/iot",
                    icon: "/images/icons/iot.png",
                },
                {
                    label: "Blockchain",
                    path: "/next-gen/blockchain",
                    icon: "/images/icons/blockchain.png",
                },
                {
                    label: "AR/VR",
                    path: "/next-gen/ar-vr",
                    icon: "/images/icons/ar_vr.png",
                },
                {
                    label: "Big Data",
                    path: "/next-gen/big-data",
                    icon: "/images/icons/bigdata.png",
                },
                {
                    label: "Cloud",
                    path: "/next-gen/cloud",
                    icon: "/images/icons/cloud.png",
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
                    icon: "/images/icons/automovie.png",
                },
                {
                    label: " Media & Entertainment",
                    path: "/industries/media-entertaiment",
                    icon: "/images/icons/media-entertaiment.png",
                },
                {
                    label: "Heathcare",
                    path: "/industries/healthcare",
                    icon: "/images/icons/healthcare.png",
                },
                {
                    label: "Security",
                    path: "/industries/security",
                    icon: "/images/icons/security.png",
                },
                {
                    label: "Transportation",
                    path: "/industries/transportation",
                    icon: "/images/icons/transporation.png",
                },
                {
                    label: "Retail",
                    path: "/industries/retail",
                    icon: "/images/icons/retail.png",
                },
                {
                    label: "Finance",
                    path: "/industries/finance",
                    icon: "/images/icons/finance.png",
                },
                {
                    label: "Energy",
                    path: "/industries/energy",
                    icon: "/images/icons/energy.png",
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
                    icon: "/images/icons/culture.png",
                },
                {
                    label: "Location",
                    path: "/about/location",
                    icon: "/images/icons/pin-2.png",
                },
                {
                    label: "SETA Insight",
                    path: "https://blog.seta-international.com",
                    icon: "/images/icons/papers.png",
                },
            ],
        },
    ],
    menuContact: {
        label: "Contact",
    },
    menuOurSourcing: {
        heading: "Outsourcing Services",
        menus: [
            { label: "Web Development", path: "/services/web-application-development" },
            { label: "Mobile Development", path: "/services/mobile-application-development" },
            { label: "Legacy Migration", path: "/services/legacy-migration" },
            { label: "Testing", path: "/services/testing" },
            { label: "Embedded System", path: "/services/embedded-system" },
        ],
    },
    menuEnterprise: {
        heading: "Enterprise Services",
        menus: [
            { label: "SAP Services", path: "/services/enterprise/sap" },
            { label: "Magento Services", path: "/services/magento-development-services" },
            { label: "Salesforce", path: "/services/enterprise/salesforce" },
        ],
    },
    menuNextGen: {
        heading: "Next-Gen Technologies",
        menus: [
            { label: "AI", path: "/next-gen/ai" },
            { label: "IoT", path: "/next-gen/iot" },
            { label: "Blockchain", path: "/next-gen/blockchain" },
            { label: "AR/VR", path: "/next-gen/ar-vr" },
            { label: "Big Data", path: "/next-gen/big-data" },
            { label: "Cloud", path: "/next-gen/cloud" },
        ],
    },
    menuIndustries: {
        heading: "Industries",
        menus: [
            { label: "Automotive", path: "/industries/automotive" },
            { label: "Media & Entertainment", path: "/industries/media-entertaiment" },
            { label: "Security", path: "/industries/security" },
            { label: "Transportation", path: "/industries/transportation" },
            { label: "Retail", path: "/industries/retail" },
            { label: "Finance", path: "/industries/finance" },
            { label: "Energy", path: "/industries/energy" },
        ],
    },
    menuAboutUs: {
        heading: "About Us",
        menus: [
            {
                label: "Culture",
                path: "/about/culture",
            },
            {
                label: "Location",
                path: "/about/location",
            },
            {
                label: "SETA Insight",
                path: "https://blog.seta-international.com",
                icon: "/images/icons/papers.png",
            },
        ],
    },
    menuRD: {
        heading: "R&D",
        menus: [{ label: "Research & Development", path: "/research-development" }],
    },
    menuResourceCenter: {
        heading: "Resource Center",
        menus: [{ label: "Case Studies", path: "/case-study" }],
    },
    contact: {
        title: "Contact Us",
        errors: "This field is required",
        firstName: "First Name",
        lastName: "Last Name",
        company: "Company",
        jobTitle: "Job Title",
        phonenumber: "Phone Number (optional)",
        email: "Email",
        questionComment: "Question/Comment",
        howDidYouLearnAboutUs: {
            name: "How did you learn about us? (optional)",
            options: [
                { id: 1, name: "Article or Blog", value: "article or blog" },
                { id: 2, name: "Press Release", value: "press release" },
                { id: 3, name: "Advertisement", value: "advertisement" },
                { id: 4, name: "Search", value: "search engine" },
                { id: 5, name: "Webinar", value: "webinar" },
                { id: 6, name: "Event", value: "event" },
                { id: 7, name: "Referral", value: "referral" },
                { id: 8, name: "Other", value: "other" },
            ],
        },
    },
    btn: {
        letTalk: "Let's Talk",
        viewMore: "View more",
        viewAllCaseStudies: "View All Case Studies",
    },
    home: {
        title: "SETA International - Digital Transformation",
        description:
            "We help companies grow business via digital transformations and digital innovations",
        banner: [
            {
                title: "SETA Representative at <br />InfoComm Southeast Asia 2022",
                time: "2-4 November 2022",
                location: "Location: Bangkok International Trade and Exhibition Centre",
                readmore: "Read More",
            },
            {
                title: "SETA representative<br class='hidden xl:block'>at World Congress on <br class='hidden xl:block'>Innovation & Technology 2022 (WCIT 2022).",
                time: "13 - 15 September 2022",
                location: "Location : Penang, Malaysia",
                readmore: "Read More",
            },
            {
                title: "ONE-STOP TECHNOLOGY <br class='hidden xl:block'>SERVICE PROVIDER",
                desc: "We help companies grow business via digital <br className='hidden xl:block' /> transformations and digital innovations",
            },
        ],
        testimonials: {
            title: "Customers are loving our services",
            desc: "Click the videos below to hear the reviews that we regularly receive from users of our services.",
            visit: "Visit",
            feedbacks: [
                {
                    id: 1,
                    customerName: "Chris Bates",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/1.jpg",
                    quote: "“I did not do offshore development before. SETA was referred by an entrepreneur. They have a wonderful project manager and language barrier is not a problem. The devs are hard-working, highly responsive, and dedicated, especially in crisis. Also, we do not have to care about HR tasks. SETA recruits resource speedily. During COVID pandemic, we suddenly served more than additional 50,000 users, which is impossible without SETA support. We are so pleased with SETA.”",
                    videoYoutube: "ZIFVM2-5PeA",
                    url: "https://teacherzone.com",
                    webiste: "Teacher Zone",
                },
                {
                    id: 2,
                    customerName: "Nico Gevers",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/5.jpg",
                    quote: "“SETA has, and continues to play an important role in our software engineering group. Over the last year, the SETA team have helped us deliver some of our most important software features. I have especially enjoyed how SETA has adapted as our business has grown. Since I joined Veritone, I have built strong relationships with the SETA engineers, and have found them to always be professional. I'm glad to be working with them, and look forward to collaborating with them on many more projects in the future.”",
                    videoYoutube: "fg0q0PoENT4",
                    url: "https://veritone.com",
                    webiste: "Veritone",
                },
                {
                    id: 3,
                    customerName: "Katrina Von Moos",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/2.jpg",
                    quote: "“After working with exceedingly difficult programmers in another country, we came across SETA International. It was just our luck. The SETA team assigned to us are what is needed to move forward. They did relaunch our software. It gave a better look and was user friendly. They are available to make sure we're always up and running. And if issues come up, they resolve them with extraordinarily little down time. SETA is a great company to work with. They can develop anything you have a vision just the way you want it”",
                    videoYoutube: "kn897wXNTuQ",
                    url: "https://restaurantsystemspro.net",
                    webiste: "Restaurant Systems Pro",
                },
                {
                    id: 4,
                    customerName: "Vijay Raghavachari",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/3.jpg",
                    quote: "“Aeris is a pioneer and leader in IOT and Automotive. It's fast-paced business and we had so much to build and deliver. We need someone reliable to partner with. It does not take long for us to get impressed with their competence, commitment, and work ethics. We expanded the team to 20 resources. We would definitely recommend them to anyone who is looking for an outsourcing company to partner with.”",
                    videoYoutube: "GcLDvwGdzys",
                    url: "https://www.aeris.com",
                    webiste: "Aeris",
                },
                {
                    id: 1,
                    customerName: "Tony Zhuang",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/4.jpg",
                    quote: "“SETA helps MotionGlobal to expand business all over the world. SETA has a good pool of talented developers. Responsiveness is fast. Developers are experienced, talented, and hard-working; Over 5 years, the team has helped us successfully complete a lot of IT projects. Delivery's result is beyond MotionGlobal's expectation...”",
                    videoYoutube: "KNBDu_Nxqgw",
                    url: "https://www.motionglobal.com",
                    webiste: "Motion Global",
                },
            ],
            customers: [
                {
                    id: 1,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Chris.png",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/teacherzone-logo.webp",
                    name: "Chris Bates | CEO",
                },
                {
                    id: 2,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/6.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/13.png",
                    name: "Nico Gevers | Senior Director",
                },
                {
                    id: 3,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Katrina.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/rspro.png",
                    name: "Katrina Von Moos | Director of Operations",
                },
                {
                    id: 4,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Vijay.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/aeris-logo.webp",
                    name: "Vijay Raghavachari | Director of Engineering",
                },
                {
                    id: 5,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/tony-zhuang.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/motionglobal.png",
                    name: "Tony Zhuang | CIO",
                },
            ],
        },
        clients: {
            title: "Some Of Our Clients",
            items: [
                {
                    id: 1,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/beauty-encounter.png",
                    name: "Beauty Encounter",
                },
                {
                    id: 2,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/care_os.jpeg",
                    name: "Care OS",
                },
                {
                    id: 3,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/gulliver.png",
                    name: "Gulliver",
                },
                {
                    id: 4,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/Pepperdine-University.png",
                    name: "Pepperdine University",
                },
                {
                    id: 5,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/pfizer_logo.png",
                    name: "Pfizer",
                },
                {
                    id: 6,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/american-airlines-logo.webp",
                    name: "American Airlines",
                },
                {
                    id: 7,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/amazon.webp",
                    name: "Amazon",
                },
                {
                    id: 8,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/r1-concept.png",
                    name: "R1 Concept",
                },
                {
                    id: 9,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/thetallroad.png",
                    name: "The Tall Road",
                },
                {
                    id: 10,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/stelux.png",
                    name: "Stelux",
                },
                {
                    id: 11,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/gold-lasso-logo.webp",
                    name: "Gold Lasso",
                },
                {
                    id: 12,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/trend-micro-logo.webp",
                    name: "Trend Micro",
                },
                {
                    id: 13,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/renogy.png",
                    name: "Renogy",
                },
                {
                    id: 14,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/sk-telecom.png",
                    name: "SK Telecom",
                },
                {
                    id: 15,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/syspro.png",
                    name: "Syspro",
                },
                {
                    id: 16,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/singerlewak.jpeg",
                    name: "SingerLewak",
                },
                {
                    id: 17,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/somo.png",
                    name: "Somo",
                },
                {
                    id: 18,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/techspace.png",
                    name: "Techspace",
                },
            ],
        },
        portfolio: {
            title: "Our Portfolio",
            items: [
                {
                    id: 1,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/Veritone_redact.jpeg",
                    name: "Case Study - Redact",
                    desc: "Save time and costs while freeing up valuable resources by using the AI-powered Veritone Redact to automate the redaction of sensitive information within audio, video and image-based evidence.",
                },
                {
                    id: 2,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/veritone.jpg",
                    name: "Case Study - VERITONE",
                    desc: "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI.",
                },
                {
                    id: 3,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/aeris.jpg",
                    name: "Case Study - Aeris",
                    desc: "Aeris is a technology partner with a proven history of helping companies unlock value through IoT.",
                },
                {
                    id: 4,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/teacherzone.jpg",
                    name: "Case Study - TEACHER ZONE",
                    desc: "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business.",
                },
                {
                    id: 5,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/restaurant.jpg",
                    name: "Case Study - THE RESTAURANT EXPERT",
                    desc: "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com",
                },
                {
                    id: 6,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/avia.jpg",
                    name: "Case Study - AVIA",
                    desc: "AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service.",
                },
                {
                    id: 7,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/motion-global.jpg",
                    name: "Case Study - MOTION GLOBAL",
                    desc: "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies.",
                },
                {
                    id: 8,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/careos.png",
                    name: "Case Study - CAREOS",
                    desc: "CareOS is an AI-powered, intuitive open platform that works naturally into your care, beauty, and health rituals.",
                },
            ],
        },
        reason: {
            title: "Why SETA International?",
            items: [
                {
                    id: 1,
                    name: "Resource & Skill",
                    path: "/about/culture",
                    content:
                        "Skilled and well trained resources with good/advanced English proficiency. Large resource pool and able to scale to any size",
                },
                {
                    id: 2,
                    name: " R & D",
                    path: "/research-development",
                    content: "Strong R&D expertise in hot tech topics AI, VR/AR, and IOT.",
                },
                {
                    id: 3,
                    name: "Solution & Expertise",
                    path: "/industries",
                    content:
                        "Proven solutions in various industries retail, education, games, insurance, etc",
                },
                {
                    id: 4,
                    name: "PROCESS & QUALITY",
                    path: "",
                    content:
                        "Apply rigorous and modern process in development, quality assurance, and project management.",
                },
            ],
        },
        services: {
            title: "Our Service Offerings",
            items: [
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
            ],
        },
    },
    researchDevelopment: {
        title: "Research & Development",
        description:
            "The R&D Department of SETA was established in 2019 with a strong desire to pursue new technologies and develop better solutions. Our brilliant engineers are coming up with innovative and smarter ways to tackle unsolved challenges.",
        banner: {
            title: "Research & Development",
            description:
                "The R&D Department of SETA was established in 2019 with a strong desire to pursue new technologies and develop better solutions. Our brilliant engineers are coming up with innovative and smarter ways to tackle unsolved challenges.",
        },
        ourProduct: {
            title: "Our Products",
            desc1: "BlueEye is a prominent AI data platform that provides high-quality training data for AI models and applications while also shortening the AI development lifecycle.",
            desc2: "BlueEye's objective is to reduce the time it takes to create AI applications by offering high-quality training data using smart tools, real-time and novel collaboration, flexible processes, and domain expert annotators.",
        },
        labels: {
            image: "Image",
            video: "Videos",
            boundingBox: "Bounding Box",
            point: "Point",
            cuboid: "Cuboid",
            polygon: "Polygon",
            linesSplines: "Lines & Splines",
            seeMore: "See more content at",
        },
        slogan: "TRANSFORMING IDEAS FOR BETTER LIFE",
        articles: [
            {
                id: 1,
                title: "Sport Content Highlights",
                content:
                    "To speed up the process of sports content generation, media providers are looking into ways to have AI analyze the game footage and pick out the highlight-worthy moments automatically. A system powered by AI computing can decompose the video and analyze the game dynamics, excitement levels, and the context of the event, imitating the human brain’s perception.",
            },
            {
                id: 2,
                content:
                    "<p>Everything on the screen is recognized and classified by the system, including all foul categories, red cards, scoreboards, audience responses, and other replay-worthy situations. It also recognizes teams and individuals based on face and gear identification, opening up possibilities such as accumulating CR7's corner kicks and other hyper-specialized moments.</p><p>The ML-enabled engine has assisted the customer in:</p><ul class='list-disc pl-4 mt-4'><li>Increase the value of content by capturing and reusing memorable soccer and gaming moments</li><li>Improve fan engagement on existing and new platforms</li><li>Begin the digital transformation process by redesigning traditional content creation</li></ul>",
            },
        ],
    },
    services: {
        ecommerces: {
            title: "E-COMMERCE",
            description: "Make business boundless and timeless.",
            article: {
                title: "We help range of company in digital transformation",
                content:
                    "SETA International has worked with a variety of companies, ranging from small businesses to large corporations, to provide them with E-commerce services. We will assist you at every stage of your business by utilizing the most proven technology on the market.",
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/1.jpg",
            },
            service: {
                title: "We provide a range of services",
                items: [
                    {
                        id: 1,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/3.jpg",
                        name: "Custom Ecommerce Development",
                    },
                    {
                        id: 2,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/4.jpg",
                        name: "Integration with third-party systems",
                    },
                    {
                        id: 3,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/5.jpg",
                        name: "Technology Consulting",
                    },
                    {
                        id: 4,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/6.jpg",
                        name: "Dedicated Team & Staff Augmentation",
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/7.jpg",
                content:
                    "<p class='text-lg mt-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.</p>",
            },
        },
        embedded: {
            title: "Embedded Solution",
            metaTitle: "Embeded Solution Service",
            description:
                "Industry is changing. Businesses are digitizing and networking systems across all sectors – and making these systems as autonomous as possible. While the opportunities and potential of this transformation are great, it also leads to ever-increasing functional safety requirements.",
            offer: {
                title: "What We Offer?",
                items: [
                    {
                        id: 1,
                        name: "Product Engineering",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/emmbed/1.jpg",
                        content:
                            "<ul><li>- Software and Firmware development.</li><li>- PCB design services.</li><li>- Electronic Manufacturing services. Quality assurance services.</li></ul>",
                    },
                    {
                        id: 2,
                        name: "Research & Development",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/emmbed/2.jpg",
                        content: "Solution Research Consultancy.",
                    },
                    {
                        id: 3,
                        name: "Training",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/emmbed/3.jpg",
                        content:
                            "We work with our clients to develop complete products, sub-systems or specific modules of the end products, tool-chain selection and training on advanced technologies.",
                    },
                ],
            },
            works: {
                title: "How We Work?",
                items: [
                    {
                        id: 1,
                        name: "Client association",
                        content:
                            "We develop products as per client requirements and client process. Service charges will be calculated per hour basis or per feature basis.",
                    },
                    {
                        id: 2,
                        name: "Build & Deliver",
                        content:
                            "We use our in house process to build quality solutions and deliver to customers. The entire project cost will be decided at the time of business proposal.",
                    },
                    {
                        id: 3,
                        name: "Solution Research Consultancy",
                        content:
                            "Being experts in various embedded systems products such as cross-compilers, debuggers, analyzers, EDA tools - we can offer consultancy services and provide solutions using these proven and established technologies based on your requirements. We use our in-house process to provide cost effective R&D.",
                    },
                    {
                        id: 4,
                        name: "Training",
                        content:
                            "We conduct Kick-Start Workshops on ARM, Intel product lines. These workshops are used to introduce the latest technology and advances in technology to the Embedded Engineers and Managers. We also provide training on embedded tools and technologies at our customers locations on the embedded products and technologies we supplied.",
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                description:
                    "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "AERIS",
                        thumbnail:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            " Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                    },
                ],
            },
        },
        testing: {
            title: "Testing Center of Excellence",
            metaTitle: "Testing Service",
            description:
                "SETA International’s testing services aim to help you avoid any potential damages that can result in a fallout costing you both hard-won users and profits.",
            offer: {
                title: "What We Offer?",
                items: [
                    {
                        id: 1,
                        name: "API Testing",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-5.jpg",
                        content:
                            " We provide Custom Software Modernization with services such as end-to-end porting, modernization, and re-engineering. Our software modernization experts use update earlier versions of .NET, JavaScript, Python, Golang etc. to cater to your business requirements",
                    },
                    {
                        id: 2,
                        name: "Automation Testing",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-6.jpg",
                        content:
                            " Continuous testing is the practice that most global pioneering companies do, and we help you leverage your business with that. This service will reduce your testing efforts, accelerate your test velocity, and shorten the delivery lifecycle.",
                    },
                    {
                        id: 3,
                        name: "Web/Mobile Application Testing",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-7.jpg",
                        content:
                            "Our service makes sure your web/mobiles applications perform smoothly across all browsers and devices. The expected output of our experienced QA and testing team is an error-free product that is compatible with a variety of browsers and bringing positive experiences for your end-users",
                    },
                    {
                        id: 4,
                        name: "Manual Testing",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-8.jpg",
                        content:
                            " We take everything into consideration to get your product launched without a hitch. Our Manual Testing service include Acceptance Testing, White Box Testing, Black Box Testing, Unit Testing, System Testing & Integration Testing",
                    },
                ],
            },
            works: {
                title: "How We Work?",
                items: [
                    {
                        id: 1,
                        name: "Requirement Analysis",
                        content: "We identify the test requirement and define the scope of work",
                    },
                    {
                        id: 2,
                        name: "Test Plan",
                        content:
                            "We develop test strategy, identify resources, assess risks and test schedule",
                    },
                    {
                        id: 3,
                        name: "Test Preparation",
                        content:
                            "In this stage, we define the test cases/scenarios, test data and set up testing environment",
                    },
                    {
                        id: 4,
                        name: "Test Execution",
                        content:
                            "We perform smoke test, test case and verify bugsWe perform smoke test, test case and verify bugs",
                    },
                    {
                        id: 5,
                        name: "Test Report",
                        content: "We collect test result and provide a testing evaluation summary",
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                description:
                    "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                    },
                    {
                        id: 2,
                        name: "Motion Global",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/motion-global",
                        content:
                            "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
                    },
                    {
                        id: 3,
                        name: "AERIS",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            "Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                    },
                ],
            },
        },
        legacy: {
            title: "Legacy Migration",
            metaTitle: "Legacy Migration Service",
            description:
                "Constant technology evolutions often lead to outdated systems and low performance, but these reasons should not stop you from gaining an edge over the competition. With SETA International’s legacy application migration services, you are constantly modernized to adapt to the changing business needs of lower costs and fewer risks.",
            offer: {
                title: "What We Offer?",
                items: [
                    {
                        id: 1,
                        name: "Legacy Software Migration",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-1.jpg",
                        content:
                            " We plan to get you the seamless transition of the legacy with efficient and secure frameworks. SETA International provides Legacy Software Migration Services for a wide range of languages, from RPG, Pascal to new and secure ones such as Python or JAVA.",
                    },
                    {
                        id: 2,
                        name: "Custom Software Modernization",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-2.jpg",
                        content:
                            "We provide Custom Software Modernization with services such as end-to-end porting, modernization, and re-engineering. Our software modernization experts use update earlier versions of .NET, JavaScript, Python, Golang etc. to cater to your business requirements",
                    },
                    {
                        id: 3,
                        name: "Cloud Migration",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-3.jpg",
                        content:
                            "We offer everything, from moving a company’s parts of IT infrastructure, applications or processes to the cloud. At SETA International, we use automated solutions to help our clients lower the costs, reduce their time-to-market, and improve scalability as well as accessibility.",
                    },
                    {
                        id: 4,
                        name: "UX Modernization",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-4.jpg",
                        content:
                            " Whether you are seeking a solution to enhance the end-user experience on your website in cross-platforms or an embedded interface inside a product, SETA International get you covered",
                    },
                ],
            },
            works: {
                title: "How We Work?",
                items: [
                    {
                        id: 1,
                        name: "Assessment",
                        content:
                            " SETA International evaluates everything on your current (AS-IS) system to identify redundant and troublesome codes, then categorize them as obsolete, archival, amalgamation or migration. We plan your migration with a roadmap of timelines and costs.",
                    },
                    {
                        id: 2,
                        name: "Migration",
                        content:
                            "Our seasoned migration experts use tools and open sources to do everything, from requirements gathering, development, verification, testing and migration to deliver cost effective legacy migration solutions.",
                    },
                    {
                        id: 3,
                        name: "Definition",
                        content:
                            "We define the system’s architecture, the future (TO-BE) infrastructure as well as the code migration steps.",
                    },
                    {
                        id: 4,
                        name: "Deployment",
                        content:
                            "After finishing the migration, we test and validate the functionality to evaluate the scalability. For further support, SETA International&apos;s maintenance team is always at your service.",
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                description:
                    " Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                    },
                    {
                        id: 2,
                        name: "THE RESTAURANT EXPERT",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/restaurant",
                        content:
                            "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
                    },
                ],
            },
        },
        mobile: {
            title: "Mobile App Development",
            description:
                "IOS, Android, and cross-platform apps with React Native and Flutter are just one click away",
            process: {
                title: "Mobile Application Development Process",
                items: [
                    {
                        id: 1,
                        name: "INITIALISATION",
                        list: [
                            "GOAL DEFINITION",
                            "COMPETITIVE AUDIT",
                            "USER FEEDBACK",
                            "GOAL REVIEW",
                        ],
                    },
                    {
                        id: 2,
                        name: "UI/UX DESIGN",
                        list: [
                            "TAPPABLE UI/UX PROTOTYPE",
                            "WIREFRAMES & ARCHITECTURE",
                            "UI/UX DESIGN",
                        ],
                    },
                    {
                        id: 3,
                        name: "MOBILE APP DEVELOPMENT",
                        list: [
                            "MOBILE FRAMEWORK",
                            "CLEAN & SCALABLE CODE",
                            "STORAGE SOLUTIONS, DATABASES & APIs",
                            "NETWORK & SECURITY",
                        ],
                    },
                    {
                        id: 3,
                        name: "QA & TESTING",
                        list: [
                            "FUNCTIONAL TESTING",
                            "PERFORMANCE TESTING",
                            "DEVICE/SIMULATION TESTING",
                            "CODE REVIEW",
                        ],
                    },
                    {
                        id: 4,
                        name: "DEPLOYMENT @ APP STORE",
                        list: [
                            "APP STORES & WEB SUBMISSION",
                            "MOBILE SOFTWARE UPDATES",
                            "APP UPGRADES",
                        ],
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                description:
                    "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "TollRoad",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg",
                        path: "/case-study/tollroads",
                        content:
                            "Offers One-Time-Toll payments, new FasTrak account enrollment and full FasTrak account maintenance, including vehicle changes, payments, toll history and transponder maintenance.",
                    },
                    {
                        id: 2,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                    },
                    {
                        id: 3,
                        name: "AERIS",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            " Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                    },
                    {
                        id: 4,
                        name: "Motion Global",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/motion-global",
                        content:
                            "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
                    },
                    {
                        id: 5,
                        name: "Avia",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg",
                        path: "/case-study/avia",
                        content:
                            "AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service.​AVIA proprietary technology specializes in connecting nominally priced, zero passenger, positioning flights with financially savvy passengers. These 'empty legs' can be sold at pennies on the dollar and finally bridge the cost gap between a business class commercial flight and a true private charter experience",
                    },
                    {
                        id: 6,
                        name: "TEACHERZONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                        path: "/case-study/teacher-zone",
                        content:
                            "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business. Teacher Zone has provided a platform for me to offer more organized and structured practice assignments to students. The chat feature has been amazing as a way to encourage students to interact with each other and build community outside of class.",
                    },
                    {
                        id: 7,
                        name: "MedTalk",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg",
                        path: "/case-study/medtalk",
                        content:
                            "MedTalk was a pioneer startup in developing healthcare applications for some big hospitals in the US. It was founded by two well-known doctors.",
                    },
                    {
                        id: 8,
                        name: "SK Planet",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/2.jpg",
                        path: "/case-study/skplanet",
                        content:
                            "AppFactory, is a new company established by SK Planet in 2012, a globally recognized and respected leader in innovative mobile services. AppFactory’s mission is to transform great ideas into compelling mobile apps for the global market. SK Planet was created by SK Telecom in November 2011 with the purpose of focusing on global businesses, including new media and digital content.",
                    },
                    {
                        id: 9,
                        name: "SysPro",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg",
                        path: "/case-study/syspro",
                        content:
                            "SYSPRO is one of the longest standing independent, international vendors of business software solutions and services. With over 30 years' experience in the ERP industry, we have a wealth of knowledge to assist you in configuring a system tailored specifically to your business needs.",
                    },
                    {
                        id: 10,
                        name: "THE RESTAURANT EXPERT",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/restaurant",
                        content:
                            "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
                    },
                    {
                        id: 11,
                        name: "Ujazo",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg",
                        path: "/case-study/ujazo",
                        content:
                            "Ujazo was established with one primary mission – Help consumers be aware of their health status and lean how to improve the areas that needs more attention",
                    },
                ],
            },
        },
        web: {
            title: "Web Application Development",
            description:
                "Give your business a leg up over the competition with a beautifully designed and fully functional site created by a team of expert outsourced web development specialists",
            process: {
                title: "Web Application Development Process",
                items: [
                    {
                        id: 1,
                        name: "INITIALISATION",
                        list: [
                            "REQUIREMENT ANALYSIS",
                            "FEASIBILITY ANALYSIS",
                            "TASK CLASSIFICATION",
                            "COST ESTIMATION",
                        ],
                    },
                    {
                        id: 2,
                        name: "DESIGN",
                        list: [
                            "APPLICATION VISUAL GUIDE",
                            "WEBSITE LAYOUTS",
                            "UI/UX DESIGN",
                            "WIREFRAMING",
                        ],
                    },
                    {
                        id: 3,
                        name: "APP DEVELOPMENT",
                        list: [
                            "FRAMEWORK & CMS IMPLEMENTATION",
                            "DATABASE STRUCTURE DESIGN",
                            "FUNCTIONALITIES IMPLEMENTATION",
                        ],
                    },
                    {
                        id: 4,
                        name: "QA & TESTING",
                        list: [
                            "CODE REVIEW",
                            "CROSS-BROWSER TESTING",
                            "SCALABILITY & LOAD TESTING",
                            "BUG FIXING",
                        ],
                    },
                    {
                        id: 5,
                        name: "DEPLOYMENT",
                        list: ["WEB HOSTING", "RELIABLE DOMAIN", "UX TESTING", "WEB APP LAUNCH"],
                    },
                    {
                        id: 6,
                        name: "MAINTENANCE",
                        list: [
                            "THIRD-PARTY API UPDATES",
                            "SECURITY UPDATES",
                            "MONITORING",
                            "APP SCALING",
                        ],
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                description:
                    "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                    },
                    {
                        id: 2,
                        name: "AERIS",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            " Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                    },
                    {
                        id: 3,
                        name: "THE RESTAURANT EXPERT",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/restaurant",
                        content:
                            "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
                    },
                    {
                        id: 4,
                        name: "TEACHERZONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                        path: "/case-study/teacher-zone",
                        content:
                            "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business. Teacher Zone has provided a platform for me to offer more organized and structured practice assignments to students. The chat feature has been amazing as a way to encourage students to interact with each other and build community outside of class.",
                    },
                    {
                        id: 5,
                        name: "Motion Global",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/motion-global",
                        content:
                            "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
                    },

                    {
                        id: 6,
                        name: "Avia",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg",
                        path: "/case-study/avia",
                        content:
                            "AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service.​AVIA proprietary technology specializes in connecting nominally priced, zero passenger, positioning flights with financially savvy passengers. These 'empty legs' can be sold at pennies on the dollar and finally bridge the cost gap between a business class commercial flight and a true private charter experience",
                    },
                    {
                        id: 7,
                        name: "MedTalk",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg",
                        path: "/case-study/medtalk",
                        content:
                            "MedTalk was a pioneer startup in developing healthcare applications for some big hospitals in the US. It was founded by two well-known doctors.",
                    },
                    {
                        id: 8,
                        name: "SysPro",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg",
                        path: "/case-study/syspro",
                        content:
                            "SYSPRO is one of the longest standing independent, international vendors of business software solutions and services. With over 30 years' experience in the ERP industry, we have a wealth of knowledge to assist you in configuring a system tailored specifically to your business needs.",
                    },

                    {
                        id: 9,
                        name: "Ujazo",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg",
                        path: "/case-study/ujazo",
                        content:
                            "Ujazo was established with one primary mission – Help consumers be aware of their health status and lean how to improve the areas that needs more attention",
                    },
                    {
                        id: 10,
                        name: "TrendMicro",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg",
                        path: "/case-study/trendmicro",
                        content:
                            "As a global leader in cloud security, Trend Micro develops Internet content security and threat management solutions that make the world safe for businesses and consumers to exchange digital information. With more than 20 years of experience, Trend Micro is recognized as the market leader in server security for delivering top-ranked client, server, and cloud-based security solutions that stop threats faster and protect data in physical, virtualized, and cloud environments.",
                    },
                ],
            },
        },
        sap: {
            title: "SAP Training & Educational Services",
            description:
                "From project preparation to online e-learning, from building internal IT team to new employee training, SETA International corporate training and personal educational consulting services can meet different types of user training required for the intelligent enterprise.",
            items: [
                {
                    id: 1,
                    name: "SAP Implementation Service",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/1.jpg",
                    path: "/services/enterprise/sap-implement-service",
                    content:
                        "Whether it's a full-scale SAP ERP Implementation enabling a specific component, or performing a system upgrade, many of our clients select us as their implementer for our deep functional expertise, industry-specific knowledge, and our Leading Practices methodology.",
                },
                {
                    id: 2,
                    name: "SAP Outsourced Staffing Service",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/2.jpg",
                    path: "/services/enterprise/sap-outsourced-staffing-service",
                    content:
                        "SETA International has a pool of seasoned professionals who can help your business to grow with the help of latest SAP tools and technologies. Apart from that, we also assist organizations in handling their staffing and resourcing requirements by connecting them with the experienced and skilled SAP Consultants and on boarding them in a cost effective manner without comprising on quality",
                },
                {
                    id: 3,
                    name: "SAP Training & Educational Service",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/2.jpg",
                    path: "/services/enterprise/sap-training",
                    content:
                        "Drive consistent and accurate information across your organization with Training & Educational Service",
                },
                {
                    id: 4,
                    name: "SAP Consulting Service",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/4.jpg",
                    path: "/services/enterprise/sap-consulting-service",
                    content:
                        "The accumulated experience and expertise from SETA technology results in a highly custom and robust solutions being built satisfying your company’s particular requirements.",
                },
            ],
            stories: {
                title: "Our Success Stories",
                description:
                    "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "Stelux",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/1.jpg",
                        path: "/case-study/stelux",
                        description:
                            "Stelux is one of the leading manufacturers, retail and wholesale in the industrial luxury watch and optical with a long established wholesale business presence in Hong Kong, Singapore and Malaysia",
                    },
                ],
            },
        },
        sapTraining: {
            title: "Training & Educational Services",
            metaTitle: "SAP Training & Educational Services",
            description:
                "From project preparation to online e-learning, from building internal IT team to new employee training, SETA International corporate training and personal educational consulting services can meet different types of user training required for the intelligent enterprise.",
            items: [
                "BASIS training",
                "Train and guide the control of SAP ERP / SAP S / 4HANA systems",
                "ABAP training",
                "Training on demand of businesses (from basic to advanced)",
                "Functional Training / SAP ECC / SAP S / 4HANA",
                "Design and implementation of SAP ERP training courses according to business requirements (from basic to advanced levels)",
                "Training and operating SAP ERP / SAP S / 4HANA systems",
            ],
        },
        sapStaffing: {
            title: "SAP Outsourced Staffing Service",
            description:
                "SETA International has a pool of seasoned professionals who can help your business to grow with the help of latest SAP tools and technologies. Apart from that, we also assist organizations in handling their staffing and resourcing requirements by connecting them with the experienced and skilled SAP Consultants and on boarding them in a cost effective manner without comprising on quality",
            article:
                "SETA International has a pool of seasoned professionals who can help your business to grow with the help of latest SAP tools and technologies. Apart from that, we also assist organizations in handling their staffing and resourcing requirements by connecting them with the experienced and skilled SAP Consultants and on boarding them in a cost effective manner without comprising on quality <br /> <br /> SETA International is a best place where you can find dedicated people with comprehensive knowledge about ERP in general and SAP in particular.<br /> <br /> Taking a cue from your business objectives and current staffing needs, we help you find and place the right candidates with the desired skill-sets whenever and wherever you require them. Our team of experienced recruiters helps in painlessly locating and hiring qualified SAP personnel and management staff for your evolving business needs. Through our flexible partnership model, we support short-term or seasonal contract requirements, payroll management, permanent staffing and other human resource related needs.",
            highlight: {
                title: "Here’s what sets us apart from other companies <br /> offering offshore staffing services in Vietnam",
                items: [
                    "Track record of delivering excellent results",
                    "Large network of skilled candidates worldwide",
                    "Present pre-screened and qualified professional",
                    "Leverage online job portals and directories",
                    "Follow the “no placement – no fee” system",
                    "Competitive pricing",
                ],
            },
            services: {
                title: "Services",
                items: [
                    {
                        id: 1,
                        name: "Temporary Staffing",
                        thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/7.jpg",
                        description:
                            "Our temporary staffing services in Vietnam ensure that you will find out dedicated offshore talent to fill in on temporary, contractual or temp-to-hire basis. This helps in meeting unstable demands for high quality resources and eliminating the problem of redundant employees as well as overloading workload.",
                    },
                    {
                        id: 2,
                        name: "Permanent Placements",
                        thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/8.jpg",
                        description:
                            "By adopting a consultative approach, we first listen to your specific staffing needs and present you with only well deserving candidates to choose from. Our consultants employ fully validated testing procedures to identify the right candidates for you.",
                    },
                ],
            },
        },
        sapImplement: {
            title: "SAP Implementation Service",
            description:
                "Whether it’s a full-scale SAP ERP Implementation enabling a specific component, or performing a system upgrade, many of our clients select us as their implementer for our deep functional expertise, industry-specific knowledge, and our Leading Practices methodology.",
            article:
                "Whether it’s a full-scale SAP ERP Implementation enabling a specific component, or performing a system upgrade, many of our clients select us as their implementer for our deep functional expertise, industry-specific knowledge, and our Leading Practices methodology. <br /> <br /> An increasing number of organizations are interested in performance-based information to manage operations and create detailed operational plans and budgets. Our approach to implementing SAP is to enable the foundation for detailed costing andperformance-based measurement, minimizing the effort required to layer in and use this information over time. This approach provides support for the integration of external performance reporting, as well as internal results-based accountability for better performance management. <br /> <br /> Our SAP implementation services are defined by our strategy to make logical improvements to end-to-end operational processes, including simplified role-based access and use. Our approach leverages available business activities, data integration, and reporting to enhance operational and managerial use of the SAP system. This approach has been proven to maximize buy-in and use by staff, while minimizing the effort required to optimize additional operational activities in the future",
            methodology: {
                title: "SETA International Implementation Methodology",
                description:
                    "At SETA International – we dedicate to deliver the best services and most-suited implementation package for every customers. Our implementation methodology follows closely the phases of SAP Activate defined by SAP, which includes following key steps:",
                steps: [
                    {
                        id: 1,
                        name: "Setup and Enablement",
                        content:
                            "In this steps, our project will set up the project, define key milestones, set the initial project scope and invite the team members into the project using Implementation Portal for SAP S/4HANA.",
                    },
                    {
                        id: 2,
                        name: "Fit-to-Standard Analysis",
                        content:
                            "Our expert team will set the detailed scope for specific business area and company by selecting scope items to be in/out of scope for the deployment project. We then continues with the explanation of capabilities for reviewing the rich business process content, including displaying the business process models and documentation of the pre-delivered business processes. At the end of the demo, our team captures a requirement into the backlog using the “notes” functionality in the Implementation Portal. <br /> <br /> While the demo shows this process in a straight sequence, in reality the project teams will iterate on various scope items and will refine the scope based on the results of the fit-to-standard workshop. Proper execution of fit-to-standard workshops is critical for projects to finalize the business scope, define the configuration values, define the scope of integrations, define output management and analytics needs and more. ",
                    },
                    {
                        id: 3,
                        name: "System Provisioning",
                        content:
                            "In this step, the team takes the results of the fit-to-standard workshops to set the scope for provisioning, maintain key values like chart of accounts and then trigged the Q-system provisioning process. The Q-system is provisioned with customer specific scope activated and the team can start configuration activities.",
                    },
                    {
                        id: 4,
                        name: "Training and operating SAP ERP / SAP S / 4HANA systems",
                        content:
                            "In this step, the project team takes the backlog and uses iterative agile approach to configure the solution.",
                    },
                    {
                        id: 5,
                        name: "Train and guide the control of SAP ERP / SAP S / 4HANA systems",
                        content:
                            "Our configuration expert runs the pre-delivered test script with appropriate values to confirm that the configuration in the system works as desired. The pre-delivered test scripts are useful not only during the initial configuration, but also and more importantly play critical role during the regression testing after each release upgrade.",
                    },
                    {
                        id: 6,
                        name: "Training on demand of businesses (from basic to advanced)",
                        content:
                            "In this last step, SETA International’s consultant team will cooperate with the project team to load data into the new system. The data load tool simulates the load into the system, user can check the results, make adjustments if needed, and then complete the load activities. This process is tested in Q-system and then repeated in the production environment prior to the production cutover.",
                    },
                ],
            },
        },
        sapConsulting: {
            title: "SAP Consulting Service",
            description:
                "Our numerous and diverse SAP consulting services are specially tailored to the client’s business operations and field of industry because they are provided by specialized consultants.",
            items: [
                "Evaluate business readiness before implementing ERP.",
                "Prepare and build ERP project budget.",
                "Assess the scale and propose scope of ERP application.",
                "Consult project organization and preparation resources for project implementation.",
                "Build requirements documents for the ERP application system.",
                "Supervision consultancy and implementation.",
            ],
        },
        magento: {
            title: "Magento Development Services",
            description: "The only team you'll ever need to help your e-commerce business succeed",
            offer: {
                title: "What We Offer?",
                items: [
                    {
                        id: 1,
                        name: "Magento Website Development",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/1.jpg",
                        description:
                            "Without writing a single line of code, you can create a brand-new Magento store that is ready to produce cash. The initial consultation is FREE.",
                    },
                    {
                        id: 2,
                        name: "Magento Custom Development",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/2.jpg",
                        description:
                            "Full-cycle Magento development tailored to your specific business requirements. Let our certified developers implement your ideas in a high-quality manner. We guarantee excellent service, a quick time to market, and the best price-to-performance ratio.",
                    },
                    {
                        id: 3,
                        name: "Server Configuration and Migration Service",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/3.jpg",
                        description:
                            "Magento server configuration is a complex process that requires deep technical knowledge. To ensure your website functions quickly and smoothly, the dedicated team of specialists will configure your server or migrate it to a new server.",
                    },
                    {
                        id: 4,
                        name: "Magento Mobile Application Development",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/4.jpg",
                        description:
                            "Contact us to create a mobile app that meets your requirements. Using our experience in Magento, cross-platform, and native app development, we will discover the perfect solution for you.",
                    },
                    {
                        id: 5,
                        name: "Magento SEO Support",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/5.jpg",
                        description:
                            "Get an SEO-optimized website and a plan for ongoing improvement based on a complete analysis of your store - rank at the top of Google search results.",
                    },
                    {
                        id: 6,
                        name: "Magento Integration Service",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/6.jpg",
                        description:
                            "Integrate Magento 2 with CRM systems, analytics tools, payment solutions, and marketplaces such as Amazon, eBay, and Facebook Shop.",
                    },
                ],
            },
            success: {
                title: "A TRUSTWORTHY PARTNER FOR YOUR MAGENTO-POWERED BUSINESS ",
            },
            stories: {
                title: "Our Success Stories",
            },

            MAGENTO_SUCCESS_STORIES: [
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
            ],
            MAGENTO_WHAT_WE_OFFERING: [
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
            ],
            BUTTONS_ECOMMERCE: [
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
            ],
        },
        saleforce: {
            title: "Salesforce Service",
            description:
                "We assist customers from all around the world in determining the fittest Salesforce solutions and feature combination for driving business transformation. We develop the proper method and combination of middleware and APIs to integrate these solutions with on-premises applications using our extensive engineering knowledge.",
            offer: {
                title: "What We Offer?",
                items: [
                    {
                        id: 1,
                        name: "Salesforce Consulting",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/1.jpg",
                        description:
                            "Get the most out of your Salesforce investment. Our agile strategy allows you to work with local experts and benefit from our worldwide delivery knowledge. We can provide the right resources for your business transformation goals, regardless of your sector or project size.",
                    },
                    {
                        id: 2,
                        name: "Salesforce Custom Development",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/2.jpg",
                        description:
                            "With our highly skilled development team&apos;s experience, we can take your Salesforce platform to the next level.",
                    },
                    {
                        id: 3,
                        name: "Salesforce Integration",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/3.jpg",
                        description:
                            "Integrate Salesforce to your existing infrastructure in a more efficient manner. Our specialists know how to connect your services the best manner possible, whether it&apos;s through middleware or direct connections. To future-proof your business, build and execute integration processes the proper way.",
                    },
                ],
            },
            stories: {
                title: "Our Success Stories",
                description:
                    "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
                items: [
                    {
                        id: 1,
                        name: "Veritone",
                        path: "case-study/veritone",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        description:
                            "The Admin and Marketing teams want to manage and observe the Media Campaign data, so a system with tons of standard functions and also easy to customize is needed. Veritone's Salesforce system is developed with standard and customized objects management functions and intergrates Veritone Core system for data migration. Solutions: Sales Cloud, Service Cloud, REST API.",
                    },
                ],
            },
        },
    },
    ai: {
        title: "Every company will become an AI company",
        metaTitle: "Next-Gen Technology - Every Company Will Become An AI Company",
        description:
            "AI is augmenting and possibly replacing human activities while dramatically speeding up development of the final product. AI is already as good as or better than humans at certain applications. Businesses should focus on incorporating the technology into work processes to accelerate productivity. Let SETA help you at every step of business transformation with AI.",
        why: {
            title: "Why SETA AI?",
            items: [
                {
                    id: 1,
                    name: "Full life cycle of AI development",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/5.svg",
                    content:
                        "Our global team of experts become your dedicated partners from determining custom software solutions strategies to ensuring the best solutions to suit your business needs. From systems integrations to technical consulting, we will ensure a seamless experience.",
                },
                {
                    id: 2,
                    name: "Own a leading AI data platform",
                    thumbnailUrl: "https://blueeye-web.s3-us-west-2.amazonaws.com/flow.svg",
                    content:
                        "BlueEye can provide high quality training data for AI models with affordable cost while shortening development time. See more details at",
                },
                {
                    id: 3,
                    name: "State-of-the-art models",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/7.jpg",
                    content:
                        "With dozens of AI developers graduating from top universities in the world, joining top AI conferences regularly, and solving real-world problems with our clients, we are able to produce top-notch models.",
                },
                {
                    id: 3,
                    name: " AutoML integration",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/8.jpg",
                    content:
                        "To enable low code and professionals without AI technical expertise to make the most from datasets, we integrate AutoML capabilities into our solutions. Data-centric AI development will uncover insights from available data without much hassle.",
                },
            ],
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    id: 1,
                    name: "Veritone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    path: "/case-study/veritone",
                    content:
                        "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                    path: "/case-study/aeris",
                    content:
                        "Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                },
            ],
        },
    },
    arvr: {
        title: "AR/VR (Augmented Reality/Virtual Reality)",
        metaTitle: "Next-Gen Technology - AR/VR (Augmented Reality/Virtual Reality)",
        description:
            "AR/VR (Augmented Reality/Virtual Reality) are blurring lines between which is real and which is a computer-generated illusion. AR/VR has potentially transformed how we play, work, learn, and communicate. While VR fully immerses users into 3D virtual environments, AR gets computer-generated images and overlays them on your view of the world. Let SETA help you to move into the fourth transformation and build a metaverse for your company.",
        why: {
            title: "Why SETA AR/VR?",
            description:
                "SETA provides consultation, app and games development services for various industries including education, training, healthcare, and beyond",
            items: [
                {
                    id: 1,
                    name: "Highly skilled resources",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/1.jpg",
                    content:
                        " We have a talent pool of dozens of highly skilled and experienced engineers, with deep expertise in AR/VR/MR technologies and in multiple business fields.",
                },
                {
                    id: 2,
                    name: "In-depth technology and domain expertise",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/3.jpg",
                    content:
                        "We are certified and are able to master state-of-the-art technologies Unity, WebVR, Spark AR, and Visual Studio.",
                },
                {
                    id: 3,
                    name: "Affordable cost",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/2.jpg",
                    content:
                        "We implement an onsite – offshore hybrid working model and leverage experience we already have in hundreds of AR/VR projects to save time and efforts for our clients.",
                },
                {
                    id: 4,
                    name: "Custom solutions for multiple platforms",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/4.jpg",
                    content:
                        "SETA have worked with numerous platforms PlayStation VR (PSVR), Oculus Rift/Quest, Google Daydream, and Google Cardboard plus HTC Vive and Samsung Gear VR.",
                },
            ],
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    id: 1,
                    name: "SK Planet",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg",
                    path: "/case-study/skplanet",
                    content:
                        "SK Planet developed a training programme for their employees using VR headsets before they did their real work.",
                },
                {
                    id: 2,
                    name: "Motion Global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                    path: "/case-study/motion-global",
                    content:
                        "MotionGlobal allows users to try on glasses via augmented reality, without having to go to real stores. See more details at",
                },
            ],
        },
    },
    bigData: {
        title: "BIG DATA",
        metaTitle: "Next-Gen Technology - Big Data",
        description:
            "Every company, no matter big or small, needs valuable data and insights. Using Big Data has been crucial for many leading companies to outperform the competition. In many industries, new entrants and established competitors use data-driven strategies to compete, capture and innovate. SETA will help you to present data effectively, properly analyze data, and give you competitive edges over other companies.",
        why: {
            title: "Why SETA Big Data?",
            items: [
                {
                    id: 1,
                    name: "Partnerships",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/2.jpg",
                    content:
                        "We hold strong partnerships with Amazon, Google, Microsoft, and other other leaders to keep pace with the technological advancements and the evolution of the big data analytics landscape.",
                },
                {
                    id: 2,
                    name: "Certified trained developers",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/3.jpg",
                    content:
                        "Our developers are rigorously trained and certified by international organizations before joining client projects.",
                },
                {
                    id: 3,
                    name: "Proven solutions",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/2.jpg",
                    content:
                        "We designed and implemented big data solutions for various industries IOT, clean energy, retail, healthcare, and manufacturing.",
                },
                {
                    id: 4,
                    name: "Master state-of-the-art technologies",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/5.jpg",
                    content:
                        "We are able to master technologies of the whole development cycle of a Big Data project from distributed storage (Hadoop, S3, Azure Blob), database management (mongoDB, Amazon DynamoDB, Amazon Redshift, Hive), data flow (Airflow), big data processing (Kafka, Spark, MapReduce), to machine learning (Keras, PyTorch, Caffe, TesorFlow)",
                },
            ],
        },
        services: {
            title: "Our Services",
            items: [
                {
                    id: 1,
                    name: "Big Data Consulting",
                    content:
                        "Big data implementation strategies, recommendations on data quality management, big data solution architecture + a suggestion of an optimal technology stack, and POC",
                },
                {
                    id: 2,
                    name: "Big Data Implementation",
                    content:
                        "Big data needs analysis, Big data solution development (a data lake, DWH, ETL/ELT setup, data analysis (SQL and NoSQL), big data reporting and dashboarding), Setup of big data governance procedures (big data quality, security, etc.), and ML models development",
                },
                {
                    id: 3,
                    name: "Big Data Support",
                    content:
                        "Big data solution administration, Big data cleaning, Big data backup and recovery, Big data solution health checks, Big data solution performance monitoring and troubleshooting",
                },
                {
                    id: 4,
                    name: "Big Data Managed Analytics Services",
                    content:
                        "Big data solution infrastructure setup and support, Big data extraction and management, ML model development and tuning, and Predefined and ad hoc reports",
                },
            ],
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    id: 1,
                    name: "VERITONE",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/6.svg",
                    path: "/case-study/veritone",
                    content:
                        "Veritone uses massive real-time weather, demand, and device data to predict and optimize energy supply mix for maximum profitability and ideal grid utilization, which power next generation smart grids by continuously collecting and synthesizing overwhelming amounts of data to make timely decisions on how best to allocate new and old energy resources.",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/7.jpg",
                    path: "/case-study/aeris",
                    content:
                        " Aeris manages more than two millions of devices, which generate huge amounts of data that need to be analyzed to optimize cost and energy. Google Cloud, Apache Airflow and BigQuery are employed to process and provide insights for device usage and optimization. For example, unused devices will be turned off to save energy and cost.",
                },
            ],
        },
    },
    blockchain: {
        title: "BLOCKCHAIN",
        metaTitle: "Next-Gen Technology - Blockchain",
        description:
            "One of the key features of Blockchain is that this digital ledger is accessible across several hundreds and thousands of computers and is not bound to be kept in a single place. Blockchain can be utilized in multiple industries including Financial Services, Healthcare, Government, Travel and Hospitality, and Retail due to being highly secure, more transparent processes, eliminating the overheads and intermediary costs, and making real-time transactions possible.",
        why: {
            title: "Why SETA Blockchain?",
            items: [
                {
                    id: 1,
                    name: "Domain Expertise",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/1.jpg",
                    content:
                        "We have tremendous experience in applying blockchain technology in several domains: financial services, healthcare, and retail.",
                },
                {
                    id: 2,
                    name: "State-of-the-art Technology",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/2.jpg",
                    content:
                        "We master the key technologies of Blockchain including Ethereum, Hyperledger, Tendermint, Stellar",
                },
                {
                    id: 3,
                    name: "Highly Skilled Engineers",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/3.jpg",
                    content:
                        "We have a well organized combination of BlockChain engineers, full-stack app developers, Cloud team, R&D team, and security team",
                },
                {
                    id: 4,
                    name: "Security, Scalability & Speed",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/4.jpg",
                    content:
                        " We use the best-fitted fabrics to ensure that the adoption of blockchain technology does not impede performance or scalability.",
                },
            ],
        },
        services: {
            title: "Our Services",
            items: [
                {
                    name: "Blockchain consulting service",
                    content:
                        "We provide comprehensive Blockchain solutions in various distributed ledger and smart contract to turn client’s existing distributed clients to reality",
                },
                {
                    name: "Private Blockchain development",
                    content:
                        "With strong knowledge in Hyperledger, we are able to build private blockchain applications for enterprises",
                },
                {
                    name: "DAPP Development",
                    content:
                        "Our talented developers provide highly secured Decentralised applications",
                },
                {
                    name: "Cryptocurrency Development",
                    content:
                        "We offer end to end Cryptocurrency Development Services using blockchain technology to help the client in building a unique digital coin for transactions, investment, token sales and much more.",
                },
            ],
        },
    },
    cloud: {
        title: "CLOUD",
        metaTitle: "Next-Gen Technology - Cloud",
        description:
            "Businesses must transition to the cloud to stay relevant in today's shifting digital world and competitiveness. SETA International collaborates with companies to help them establish ways to improve conventional infrastructure, maintain it, and migrate to the cloud, no matter where they are on their cloud journey.",
        why: {
            title: "Why SETA Cloud?",
            items: [
                {
                    id: 1,
                    name: "Certified Experienced Engineers",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/1.jpg",
                    content:
                        " We provide a huge cloud engineer pool, as well as a flexible working environment managed by seasoned professionals, allowing clients to concentrate on their main business. We master popular cloud infrastructures of Amazon (AWS), Microsoft (Azure), and Google (GCP).",
                },
                {
                    id: 2,
                    name: " Optimized Cost",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/2.jpg",
                    content:
                        "We make every effort to minimize needless expenditures, to understand and manage where money is spent, to choose the most suitable and appropriate quantity of resources, to assess cost over time, and to scale to meet business needs without excess.",
                },
                {
                    id: 3,
                    name: "Domain Expertise",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/3.jpg",
                    content:
                        "SETA International’s specialists can assist you in developing a data fabric strategy that is tailored to your business needs, allowing you to speed up innovation and increase business outcomes across your hybrid multi cloud infrastructure.",
                },
                {
                    id: 4,
                    name: "Service Expertise",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/4.jpg",
                    content:
                        "Our team can assist clients from start to finish, from analysis through delivery and ongoing maintenance.",
                },
            ],
        },
        services: {
            title: "Our Services",
            items: [
                {
                    name: "Cloud Consulting ",
                    content:
                        "We've kept at the forefront of this cloud evolution, guiding our clients through adoption of virtualization and converged infrastructure solutions toward the software-defined infrastructure paradigm and all the benefits that come with cloud computing.",
                },
                {
                    name: "DevOps",
                    content:
                        "Our service removes friction to help maximize developer productivity, reduce time to market, and improve customer satisfaction.",
                },
                {
                    name: "Cloud Engineering & Migration ",
                    content:
                        "Reduce risk and simplify solution design, deployment, migration, and integration—on premises and in the cloud—to bring the benefits of new technology to your business faster.",
                },
                {
                    name: "Cloud Management & Optimization",
                    content:
                        "Manage cloud tools and service providers with automated compliance, monitoring, optimization and governance. Simplify storage operations across your hybrid-cloud and on-premises environments.",
                },
            ],
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    id: 1,
                    name: "VERITONE",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone/1.png",
                    path: "/case-study/veritone",
                    content:
                        "Veritone uses massive AI engines, applications on AWS and Azure cloud which continuously collect and synthesize overwhelming amounts of data to model, optimize, control smart grids and make smart decisions in real time.",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/9.png",
                    path: "/case-study/aeris",
                    content:
                        "Aeris currently manages over 15 million devices and deals with 1.4 billion IOT messages per day. As such, Aeris needs to design a robust, secure, and highly reliable cloud infrastructure to offer best services for clients. Old system was built on AWS and was migrated to GCP for greater flexibility with more AI and big data processing capabilities.",
                },
            ],
        },
    },
    iot: {
        title: "IoT",
        metaTitle: "Next-Gen Technology - Iot",
        description:
            "IOT is a giant network of connected devices. These devices collect and share data about how they are used and the environments in which they are operated via sensors. With years of experience, we can help you from developing Alexa and Google home applications to building complex IOT solutions for various industries using Cloud, data analytics, and hardware.",
        why: {
            title: "Why SETA IoT?",
            items: [
                {
                    id: 1,
                    name: "Certified experienced developers",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/9.jpg",
                    content:
                        "Our devs have developed hundreds of Alexa and Google Home applications.",
                },
                {
                    id: 2,
                    name: "Proven IOT solutions",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/2.jpg",
                    content:
                        "We worked with clients to design IOT solutions for automotive, smart home, and smart city, supporting over 2 million connected devices.",
                },
                {
                    id: 3,
                    name: "Data Analytics Capabilities",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/3.jpg",
                    content:
                        "We combine new technologies Cloud, Big Data processing, and AI to provide insights for businesses",
                },
                {
                    id: 4,
                    name: "Cross-industry domain knowledge",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/4.jpg",
                    content:
                        "We have a proven record of delivering projects to the world’s leading tech innovators and Fortune 500 companies across many segments. Our experts understand the needs of your industry and will develop custom IoT solutions to drive your business forward.",
                },
            ],
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    id: 1,
                    name: "THE RESTAURANT EXPERT",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg",
                    path: "/case-study/restaurant",
                    content:
                        " Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/9.png",
                    path: "/case-study/aeris",
                    content:
                        "Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                },
            ],
        },
    },
    industries: {
        title: "Meet The Expert In Your Industries",
        description:
            "With over ten years and 500+ global clients, SETA International has gained extensive knowledge across many industries. Discover the best technological solution for your company by talking with our specialists.",
        sectionOne: {
            title: "Industries we serve",
            description: " We are proud to assist clients in the following business categories.",
            items: [
                {
                    name: "AUTOMOTIVE",
                    path: "/industries/automotive",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/automotive.jpg",
                },
                {
                    name: "Retail",
                    path: "/industries/retail",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/retail.jpg",
                },
                {
                    name: "Finance",
                    path: "/industries/finance",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/finance.jpg",
                },
                {
                    name: "Media & Entertainment",
                    path: "/industries/media-entertaiment",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/ME.jpg",
                },
                {
                    name: "HEALTH CARE",
                    path: "/industries/healthcare",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/health-care.jpg",
                },
                {
                    name: "SECURITY",
                    path: "/industries/security",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/sercurity.jpg",
                },
                {
                    name: "TRANSPORTATION",
                    path: "/industries/transportation",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/transporation.jpg",
                },
                {
                    name: "Energy",
                    path: "/industries/energy",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/energy.jpg",
                },
            ],
        },
    },
    automotive: {
        title: "Automotive Industry",
        description:
            "The automotive industry is racing into a new world of mobility, even as it manages to recover from the pandemic and continues with the traditional business model of designing, manufacturing, selling, servicing, and financing cars.",
        section1: {
            title: "The Road to a New World of Mobility",
            content1:
                "The automotive industry is racing into a new world of mobility, even as it manages to recover from the pandemic and continues with the traditional business model of designing, manufacturing, selling, servicing, and financing cars. The shift to more sustainable energy and the drive for more livable cities are increasing the need for convenient, fast, reliable, and cost-effective transportation. Megatrends such as connectivity, autonomous driving, and electrification, along with changing customer preferences, are shaping the industry and the world of mobility in real time. <br /> <br /> Future “smart cities” need mobility concepts beyond individual transportation based on owning a vehicle. The paradigm is shifting from optimizing traffic flows toward bringing people to where they want or need to be, using all possible mobility service options. <br /> <br />Electrification and alternative drivetrain concepts change supply chains and the role of suppliers. They are introducing new brands and players that disrupt the variety of models in the market –driving new challenges and opportunities for warranty, aftermarket, and resale activities.",
            content2:
                "Autonomous cars free the driver from just driving and open up a wide range of opportunities to use the gained time for learning, fun, communication, and consumption. Autonomous options for “delivering” goods and services can help reduce congestion and increase utilization patterns of vehicles. With shared autonomous vehicles, mobility solutions become more cost-effective than owning a car.<br /><br />Data “emissions” from connected vehicles help manufacturers understand and predict the behavior and preferences of their passengers. This means new opportunities to monetize information and optimize the driver experience and traffic infrastructure. In addition, the importance of electronic components with their correspondingly shorter lifecycle is driving the need for modular vehicles.",
        },
        section2: {
            title: "Smart Mobility and Transformation",
            description:
                "Emerging business models in the automotive industry provide complementary and alternative solutions to vehicle purchasing and leasing. These new business models focus on value delivered to the customers and provide flexible and convenient choices for buying and leasing automobiles, along with other mobility-related services. Automotive companies need to be able to support subscription or other new mobility-as-a-service models as part of a seamless business network and take into accountthe total impact from environmental and sustainability perspectives.",
            items: [
                {
                    name: "Subscription Contracts",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/1.png",
                },
                {
                    name: "Consuming Digital Offerings",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/2.png",
                },
                {
                    name: "Monitoring Usage Data",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/3.png",
                },
                {
                    name: "Invoicing",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/4.png",
                },
            ],
        },
        section3: {
            title: "Connected Cars",
            description:
                "Vehicles are becoming more intelligent and connected. Increasingly, they act as a platform for delivering new applications and services and provide a constant feedback loop to the manufacturer. However, current processes and information systems around the vehicle and its usage are siloed and disconnected. The different stakeholders have relied on the model of &quot;request/receive,&quot; which is no longer efficient. Large amounts of data need to be continuously exchanged asynchronously with OEMs, mobility service companies, automotive suppliers, dealers, service providers, and end customers.To effectively implement new business processes and realize new monetization streams across the automotive value chain, stakeholders need access to the same, up-to-date, consistent vehicle information. This enables collaboration and innovation –so that the business potential for digital services can be realized",
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "AERIS",
                    content:
                        "Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                    path: "/case-study/aeris",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                },
            ],
        },
    },
    energy: {
        title: "Energy Industry",
        description:
            "We have services to match your business needs, from energy and sustainability advice to managing the lifecycle of your assets",
        section1: {
            title: "Empowering a bright, connected future",
            description:
                " SETA International is modernizing the outdated network and assuring success with Smart Grid as part of their transition to a carbon-neutral FUTURE.",
            items: [
                {
                    name: "What is a Smart Grid?",
                    content:
                        "A smart grid does more than carry power from generators to consumers. It makes use of digital technology to exchange all types of data and information on the behavior and actions of all users connected to it, including generators, consumers, and those who do both. <br /><br /> Smart Grid technologies help to optimize power flow, eliminate losses and the need for grid expansions, and actively manage consumption and integration of variable renewable energy, such as wind and solar power output, on a large scale into the national grid.",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/2.jpg",
                },
                {
                    name: "Why is Smart Grid?",
                    content:
                        "Unlock the potential of the digital grid with SETA International to increase your grid&lsquo;s efficiency for sustainable networks",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/3.jpg",
                },
                {
                    name: "Maximize Grid Efficiency",
                    content:
                        "As new laws compel electrical distribution companies to improve network efficiency, we provide innovative ways for utilizing smart grid capabilities to achieve and surpass regulatory efficiency standards.",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/4.jpg",
                },
                {
                    name: "Mitigate Power Outage",
                    content:
                        "Power outages are on the rise, and they may cost businesses millions of dollars in missed productivity and sales. As a result, improved FLISR techniques are vital in averting outages and boosting grid dependability.",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/5.jpg",
                },
            ],
        },
        section2: {
            title: "Contribute to a low-carbon future",
            description:
                "To achieve and surpass regulatory requirements for a low-carbon future, electricity firms must employ current tactics for utilizing smart grid and microgrid capabilities, as well as more environmentally friendly, smart switchgear and a circular economy strategy.",
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "Meet the Future of Green Energy Management",
                    path: "/case-study/veritone",
                    content:
                        "Veritone iDERMS solution harnesses the power of AI to revolutionize today’s energy ecosystems through proprietary, intelligent, real-time energy forecasting, optimization, and control. Unlock the full potential of your DERs while enhancing your grid reliability in the face of the unexpected.",
                    thumbnailUrl: "veritone.jpg",
                },
            ],
        },
    },
    finance: {
        title: "Financial Software Development Services",
        description:
            "Accelerate the pace of digital innovation and welcome a new era of finance software development with Intellias. You ask for a new tech solution. We deliver a full-scale product development strategy, underpinned by the latest tech innovations in the financial sector (AI, ML, big data), and bring in our deep domain expertise as a trusted financial software development partner.",
        section1: {
            title: "What are your biggest financial <br className='hidden lg:block' /> services challenges?",
            description:
                "From banking to wealth management and capital markets to insurance, SETA International enables financial services firms to work cohesively across the front-office, middle-office, and back-office to develop deeper client relationships, maximise client value and deliver world-class customer service.",
        },
        stories: {
            title: "Our Success Stories",
            description:
                " Success is no easy accomplishment, but with a trusted partner and an effective collaboration,success comes to you without harsh tries. With us!",
            img: "https://da8pk1kbkdsqo.cloudfront.net/images/industries/finance/1.jpg",
            items: [
                {
                    id: 1,
                    name: "Avia",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/2.jpg",
                    path: "/case-study/avia",
                    content:
                        "AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service.​AVIA proprietary technology specializes in connecting nominally priced, zero passenger, positioning flights with financially savvy passengers. These &quot;empty legs&quot; can be sold at pennies on the dollar and finally bridge the cost gap between a business class commercial flight and a true private charter experience",
                },
                {
                    id: 2,
                    name: "SysPro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg",
                    path: "/case-study/syspro",
                    content:
                        "SYSPRO is one of the longest standing independent, international vendors of business software solutions and services. With over 30 years&apos; experience in the ERP industry, we have a wealth of knowledge to assist you in configuring a system tailored specifically to your business needs.",
                },
                {
                    id: 3,
                    name: "Beauty Encounter",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg",
                    path: "/case-study/beauty-encounter",
                    content:
                        "Beauty Encounter is a premier online source for fragrances and beauty products that offers consumers an exceptional range of hard-to-find, international and specialty products including men and women’s fragrances, skincare, cosmetics, hair care, and beauty accessories. With more than 1,100 unique brands and new products added daily, customers have access to exceptional customer service and secure online shopping. In addition to thousands of beauty products that can be purchased at affordable prices, Beauty Encounter shoppers find unique sections with tips, trends and techniques.",
                },
            ],
        },
    },
    healthcare: {
        title: "Healthcare Software Development",
        description:
            "SETA International has been partnering with companies in the healthcare sector, helping them leverage technological innovation to automate internal processes, enhance the customer experience, and manage medical information more efficiently. We build secure and regulatory compliant software solutions that streamline communication between patients, doctors, health insurance companies, pharmaceutical suppliers, and medical device vendors to accelerate the creation of a resilient healthcare ecosystem.",
        descriptionTwo:
            "SETA International has been partnering with companies in the healthcare sector, helping them leverage technological innovation to automate internal processes, enhance the customer experience, and manage medical information more efficiently.",
        section1: {
            title: "SETA International healthcare software <br className='hidden lg:block' /> development services cover the following areas",
            items: [
                {
                    name: "Patient engagement",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/1.png",
                    content:
                        "Boost personalization and retention through seamless communication across web, phone, and in-person services",
                },
                {
                    name: "Precision medicine",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/2.png",
                    content:
                        " Move towards data-driven care across therapeutic areas based on patients’ unique genomic characteristics",
                },
                {
                    name: "Mobile health",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/3.png",
                    content:
                        "Help consumers manage their health needs with tailored mHealth solutions and digital therapeutics apps",
                },
                {
                    name: "Telehealth",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/4.png",
                    content:
                        " Expand access to care by enabling convenient remote consultations and secure virtual collaboration",
                },
                {
                    name: "Medical wearables",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/5.png",
                    content:
                        "Pave the way to preventive treatment with health-focused devices powered by an advanced software and an intelligent UX",
                },
                {
                    name: "Operations management",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/6.png",
                    content:
                        "Streamline operations and processes via smart automation and instant visibility into medical workflows",
                },
            ],
        },
        section2: {
            title: "Ready to implement innovative <br className='lg:block' /> strategies to deliver data-driven, <br className='lg:block' /> personalized care?",
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "MedTalk",
                    path: "/case-study/medtalk",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg",
                    content:
                        "MedTalk was a pioneer startup in developing healthcare applications for some big hospitals in the US. It was founded by two well-known doctors.",
                },
                {
                    name: "Ujazo",
                    path: "/case-study/ujazo",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg",
                    content:
                        "Ujazo was established with one primary mission – Help consumers be aware of their health status and lean how to improve the areas that needs more attention",
                },
            ],
        },
    },
    media: {
        title: "Media & Entertainment Industry",
        description:
            "Media & Entertainment (M&E) industry is in a transformation phase as both old and new continues to coexist. Interactivity, digitization, multiple-platforms, multiple-devices and globalization of services based landscape has remodeled the media and entertainment vertical over the last decade.",
        sectionOne: {
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/1.jpg",
            content:
                "Media & Entertainment (M&E) industry is in a transformation phase as both old and new continues to coexist. Interactivity, digitization, multiple-platforms, multiple-devices and globalization of services based landscape has remodeled the media and entertainment vertical over the last decade. <br /> <br />  The Media and Entertainment (M&E) industry has multiple segments that combine into one vertical; Movies/Cinema, Television, Music, Publishing, Radio, Internet, Advertising and Gaming. Moreover, trends and drivers for each of the segments vary across sub-segments, geographies and consumer segments. This makes the vertical unique, since these sub-verticals compete, compliment and combine to fulfil the ever-increasing demand for entertainment and information globally.",
        },
        tabOne: {
            label: "Advertising",
            title: "PROVEN AI AND ADVERTISING SERVICES TO DRIVE RESULTS",
            content:
                "AI-enabled applications and advertising services are designed to optimize campaign performance and drive ROI. Broadcasters leverage applications to provide their customers with near real-time attribution data and generate incremental revenue through VeriAds’ flexible live-read ad inventory. Brands leverage One’s advertising services to run high performing campaigns driven by AI-powered insights.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/3.jpg",
        },
        tabTwo: {
            label: "Sports",
            title: "PROVEN AI FOR SPORTS TO ACCELERATE WORKFLOWS & CONTENT UTILIZATION",
            content:
                "Trusted by premier sports organizations, SETA International turns large amounts of media content into intelligent content that can easily be searched by faces, names, logos, and more. Video, audio, and still images can be managed in one secure location enabling accelerated workflows to drive content utilization, fan engagement, and open opportunities to diversify revenue streams.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/5.jpg",
        },
        tabThree: {
            label: "Radio",
            title: "PROVEN AI FOR RADIO: ANALYZE BROADCASTS AND DEMONSTRATE AD PERFORMANCE",
            content:
                "AI-powered applications and services for radio networks and stations take your broadcast analytics as well as advertising attribution and live read integrations to the next level. Monitor brand mentions, topics, event coverage, and more with the ability to perform attribution on multi-touch, national ad campaigns. Additionally, boost your revenue by incorporating MicroMentions™ into your programs with a flexible live-read ad inventory at your fingertips.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/6.jpg",
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "VERITONE",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    path: "/case-study/veritone",
                    content:
                        "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                },
                {
                    name: "THE RESTAURANT EXPERT",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg",
                    path: "/case-study/restaurant",
                    content:
                        "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
                },
                {
                    name: "TEACHERZONE",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                    path: "/case-study/teacher-zone",
                    content:
                        "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business. Teacher Zone has provided a platform for me to offer more organized and structured practice assignments to students. The chat feature has been amazing as a way to encourage students to interact with each other and build community outside of class.",
                },
                {
                    name: "Motion Global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                    path: "/case-study/motion-global",
                    content:
                        "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
                },
                {
                    name: "SK Planet",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/2.jpg",
                    path: "/case-study/skplanet",
                    content:
                        "AppFactory, is a new company established by SK Planet in 2012, a globally recognized and respected leader in innovative mobile services. AppFactory’s mission is to transform great ideas into compelling mobile apps for the global market. SK Planet was created by SK Telecom in November 2011 with the purpose of focusing on global businesses, including new media and digital content.",
                },
            ],
        },
    },
    retail: {
        title: "Retail Software Development Services",
        descriptionOne:
            "SETA International helps retailers provide consistent and customer-centric shopping experiences across all channels with disruptive retail technologies. We do that by defining the pain points your business faces today and helping you apply the right strategies and tap on innovation to drive growth. By researching what motivates consumer behavior and conversions and applying our strong technical expertise, we’ll bring your retail business to the next level of efficiency with our retail software development services.",
        descriptionTwo:
            "SETA International helps retailers provide consistent and customer-centric shopping experiences across all channels with disruptive retail technologies. We do that by defining the pain points your business faces today and helping you apply the right strategies and tap on innovation to drive growth...",
        sectionOne: {
            title: "When may you need retail software <br className='hidden lg:block' /> development services?",
            items: [
                {
                    content:
                        "<li>If you’re struggling to understand your target audience and validate their evolving needs</li><li>If your conversion rate is too low and you’re searching for ways to improve it</li><li>If your costs are running high and you can’t improve your ROI</li><li>If you need to accelerate business growth but lack speed and agility</li></ul>",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/retail/1.jpg",
                },
                {
                    content:
                        "<strong class='text-[#2C5282]'>SETA International is here to help you tackle these challenges</strong><p>We’ll help you differentiate your company in the competitive market with our retail software services. Boost your digital business strategy by investing in key growth enabling technologies and new digital capabilities like AI segmentation, behavioral analytics, and indoor positioning.</p>",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/retail/2.jpg",
                },
            ],
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "Motion Global",
                    path: "/case-study/motion-global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                    content:
                        "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
                },
                {
                    name: "Beauty Encounter",
                    path: "/case-study/beauty-encounter",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg",
                    content:
                        "Beauty Encounter is a premier online source for fragrances and beauty products that offers consumers an exceptional range of hard-to-find, international and specialty products including men and women’s fragrances, skincare, cosmetics, hair care, and beauty accessories. With more than 1,100 unique brands and new products added daily, customers have access to exceptional customer service and secure online shopping. In addition to thousands of beauty products that can be purchased at affordable prices, Beauty Encounter shoppers find unique sections with tips, trends and techniques.",
                },
            ],
        },
    },
    security: {
        title: "Security",
        description:
            "Wherever your business goes, whoever it works with, you need cybersecurity that covers it all",
        sectionOne: {
            title: "Make every part of your business more resilient",
            content:
                "As your business ecosystem and value chain expand, we work to increase your resilience against cyber threats. <br /> <br /> Anytime. Anywhere. We create cybersecurity tailored to your specific business needs. We defend against cyberattacks with proactive, focused, industry-relevant threat intelligence to give you the confidence that comes from knowing your business is secure.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/industries/security/1.png",
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "TrendMicro",
                    path: "/case-study/trendmicro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg",
                    content:
                        "As a global leader in cloud security, Trend Micro develops Internet content security and threat management solutions that make the world safe for businesses and consumers to exchange digital information. With more than 20 years of experience, Trend Micro is recognized as the market leader in server security for delivering top-ranked client, server, and cloud-based security solutions that stop threats faster and protect data in physical, virtualized, and cloud environments.",
                },
                {
                    name: "Veritone",
                    path: "/case-study/veritone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    content:
                        "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                },
            ],
        },
    },
    transportation: {
        title: "Transportation and Logistics Software Solutions",
        description:
            "SETA International helps carriers, freight forwarders, and logistics companies as well as digital solutions vendors navigate the road to cost-efficient technologies. Relying on our logistics software development services, you can optimize delivery routes, cut fleet operational costs, minimize traffic congestion, and refine the shipping experience for customers.",
        sectionOne: {
            title: "Technology ecosystem for transport logistics",
            content:
                "At SETA International, we help transportation companies, logistics service providers, and geospatial data providers create cross-domain transportation software solutions. As a logistics software development company, we apply our deep expertise in maps, navigation, spatial data analytics, and platform integration to improve the overall customer experience, wisely allocate budgets, and sustainably grow your logistics business. We build a complete ecosystem of technologies, processes, and approaches around your transport and logistics software solutions to digitalize supply chains.",
            thumbnailUrl:
                "https://da8pk1kbkdsqo.cloudfront.net/images/industries/transportation/1.jpg",
        },
        stories: {
            title: "Our Success Stories",
            description:
                "Success is no easy accomplishment, but with a trusted partner and an effective collaboration, success comes to you without harsh tries. With us!",
            items: [
                {
                    name: "Avia",
                    path: "/case-study/avia",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/2.jpg",
                    content:
                        " AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service.​AVIA proprietary technology specializes in connecting nominally priced, zero passenger, positioning flights with financially savvy passengers. These &quot;empty legs&quot; can be sold at pennies on the dollar and finally bridge the cost gap between a business class commercial flight and a true private charter experience",
                },
                {
                    name: "TollRoad",
                    path: "/case-study/tollroads",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg",
                    content:
                        "Offers One-Time-Toll payments, new FasTrak account enrollment and full FasTrak account maintenance, including vehicle changes, payments, toll history and transponder maintenance.",
                },
            ],
        },
    },
    caseStudy: {
        title: "The SETA Case Studies",
        description:
            "SETA International delivers world-class services in Digital Platform, AI Solution, Smart City, IoT, AR/VR and more. Check out our customer success stories to see how SETA International helps them surmount business challenges and achieve favorable outcomes.",
        sectionOne: {
            title: "Our Case Studies",
            items: [
                {
                    name: "Case Study - Veritone",
                    path: "/case-study/veritone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    content:
                        "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
                },
                {
                    name: "Case Study - AERIS",
                    path: "/case-study/aeris",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                    content:
                        "Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
                },
                {
                    name: "Case Study - The Restaurant Expert (TRE)",
                    path: "/case-study/restaurant",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg",
                    content:
                        "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
                },
                {
                    name: "Case Study - Teacherzone",
                    path: "/case-study/teacher-zone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                    content:
                        "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business. Teacher Zone has provided a platform for me to offer more organized and structured practice assignments to students. The chat feature has been amazing as a way to encourage students to interact with each other and build community outside of class.",
                },
                {
                    name: "Case Study - STELUX",
                    path: "/case-study/stelux",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/1.jpg",
                    content:
                        "Stelux is one of the leading manufacturers, retail and wholesale in the industrial luxury watch and optical with a long established wholesale business presence in Hong Kong, Singapore and Malaysia",
                },
            ],
        },
        sectionTwo: {
            items: [
                {
                    name: "Case Study - Beauty Encounter",
                    path: "/case-study/beauty-encounter",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg",
                },
                {
                    name: "Case Study - Med Talk",
                    path: "/case-study/medtalk",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/7.png",
                },
                {
                    name: "Case Study - App Factory",
                    path: "/case-study/skplanet",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg",
                },
                {
                    name: "Case Study - Avia",
                    path: "/case-study/avia",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg",
                },
                {
                    name: "Case Study - Motion Global",
                    path: "/case-study/motion-global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                },
                {
                    name: "Case Study - The Toll Roads",
                    path: "/case-study/tollroads",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/4.jpg",
                },
                {
                    name: "Case Study - SysPro",
                    path: "/case-study/syspro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/3.jpg",
                },
                {
                    name: "Case Study - TrendMicro",
                    path: "/case-study/trendmicro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg",
                },
                {
                    name: "Case Study - Ujazo",
                    path: "/case-study/ujazo",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/7.jpg",
                },
                {
                    name: "Case Study - R1 Concept",
                    path: "/case-study/r1",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/1.jpg",
                },
                {
                    name: "Case Study - EyeD Optics",
                    path: "/case-study/eyed-optics",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/optics/1.jpg",
                },
                {
                    name: "Case Study - Panavision",
                    path: "/case-study/panavision",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/panavision/1.jpg",
                },
                {
                    name: "Case Study - Ujazo",
                    path: "/case-study/ujazo",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/1.jpg",
                },
            ],
        },
    },
    aeris: {
        title: "About Aeris",
        description:
            "Aeris is a technology partner with a proven history of helping companies unlock value through IoT. Built from the ground up for IoT and globally tested at scale, Aeris IoT services are based on the broadest technology stack in the industry, including the Aeris Connectivity Platform (ACP) and the Aeris Mobility Suite (The Suite), spanning connectivity up to vertical solutions for things that move.",
        challenge: {
            title: "The Challenge",
            description:
                "Aeris has various outsourcing partners all over the world in South America, Philippines, India, and Vietnam, which is hard to manage in terms of resourcing and quality. Aeris wants to consolidate all outsourcing services into one trust partner with diverse technology skill sets including native IOS/Android development, Flutter, React, NodeJS, Python, and Java.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/2.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was able to provide 20+ high-quality resources to work on automotive connectivity and IOT projects",
        },
        projects: [
            {
                name: "IoT Connectivity Management",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/IoT-Connectivity-Management.jpg",
                content:
                    "The Aeris Fusion IoT Network, through AerPort and APIs, provides a single-pane, top-down view of all your connected devices―regardless of the carriers or technologies to which they are connected. Aeris IoT connectivity management provides powerful tools to administer devices throughout their lifecycle, identify problems, and take actions automatically―vastly reducing the amount of time and resources needed to manage your device deployment.",
            },
            {
                name: "Aeris Mobility Suite",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/Aeris-Mobility-Suite.jpg",
                content:
                    "Giving car companies the tools needed to win in a connected world. Aeris provides end-to-end connected vehicle technology and has deep experience deploying complex, global programs for the world’s largest automotive OEMs.",
            },
        ],
        result: "Aeris Mobility Suite in Action",
    },
    avia: {
        title: "About Avia",
        description:
            "AVIA is a first of its kind, real time, digital charter marketplace, marrying the latest in technology with traditional boutique customer service. ​AVIA proprietary technology specializes in connecting nominally priced, zero passenger, positioning flights with financially savvy passengers. These 'empty legs' can be sold at pennies on the dollar and finally bridge the cost gap between a business class commercial flight and a true private charter experience",
        challenge: {
            title: "The Challenge",
            description:
                "​AVIA wants to build a secured iOS application and platform, architect a robust, scalable back-end infrastructure, and integrate a payment solution.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/1.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "With AWS certified engineers, SETA International made the system design to leverage Amazon Web Services apply best of breed software platform on highly available cloud infrastructure:",
            content:
                "<ul className='text-white text-lg mt-5'> <li>- PHP Laravel (Website development)</li> <li>- Route53 (DNS service)</li> <li>- Elastic Load Balancing (Performance boosting)</li> <li>- EC2 (Code)</li> </ul> <ul className='text-white text-lg mt-5'> <li>- VPC (Security)</li> <li>- Amazon S3 (Storage)</li> <li>- Amazon API Gateway (API call)</li> <li>- Amazon Simple Email Service (email provider)</li> </ul>",
        },
    },
    beautyEncounter: {
        title: "About Beauty Encounter",
        description:
            "Beauty Encounter is a premier online source for fragrances and beauty products that offers consumers an exceptional range of hard-to-find, international and specialty products including men and women’s fragrances, skincare, cosmetics, hair care, and beauty accessories. With more than 1,100 unique brands and new products added daily, customers have access to exceptional customer service and secure online shopping. In addition to thousands of beauty products that can be purchased at affordable prices, Beauty Encounter shoppers find unique sections with tips, trends and techniques.",
        challenge: {
            title: "The Challenge",
            description:
                "To be successful in a highly competitive market, Beauty Encounter needs to develop a lot utilities to compete with other competitors in various marketplaces including Amazon, Rakuten, etc.",
            thumbnailUrl:
                "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/1.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "SETA has entered into a formal agreement with Beauty Encounter to assist with their product development roadmap. SETA has been working with Beauty Encounter for over 3+ years which enabled the company to minimize operational costs, help scale their product roadmap, and maximize efficiency within their development organization.",
        },
    },
    eyedOptics: {
        title: "About EyeD Optics",
        description:
            "EyeD Optics is a manufacturer and retailer of designer glasses, sunglasses, and prescription lenses and contracted with SETA to build their e-commerce site and back-end management platform.",
        value: {
            title: "Value",
            items: "Developed an e-commerce website that allows end-users to browse, select glasses frames and lenses, and virtually try on various styles online before purchasing. <br /><br /> Built a platform for posting items onto various marketplaces (Amazon, eBay, Rakuten, Sears, New Egg) <br /> <br /> Built Order Management module to allow the client to gather orders from multiple sales channels including Amazon, eBay, and their own e-commerce website to process, fulfill, and ship. All sales channels shared the same inventory.",
        },
    },
    idaIreland: {
        title: "About IDA Ireland",
        description:
            "The IDA or Ireland's inward investment promotion agency is responsible for attracting and developing foreign investment into Ireland.",
        value: {
            title: "Value",
            description:
                "SETA created two 52-inch touch screen interactive kiosks which were showcased at the Fortune Technology Event in Pasadena, California in 2009",
        },
    },
    medtalk: {
        title: "About MedTalk",
        description:
            "MedTalk was a pioneer startup in developing healthcare applications for some big hospitals in the US. It was founded by two well-known doctors.",
        challenge: {
            title: "Challenge",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/1.jpg",
            description:
                "The start-up founders did not have knowledge about software development. They need a trust partner that can help them in designing and implementing their innovative ideas.",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was selected by MedTalk to build an end-to-end mobile messaging platform that will serve as the platform of choice <br className='hidden md:block' /> for messaging in the medical industry. <br /><br /> This platform and solution will address the present inefficient communication amongst doctors and their on-call staff with regards to delay and lag time in the communication response times. MedTalk was established by two doctors who had an innovative idea but needed a strong technical partner to help architect and develop their business vision into a tangible platform.",
        },
    },
    motionGlobal: {
        title: "About Motion Global",
        description:
            "Motion Global operates the SmartBuyGlasses Optical Group, one of the world’s largest designer eyewear e-commerce companies. With a presence across Asia Pacific, Europe and the Americas, we have been market leaders in over 20 countries for more than 10 years.",
        challenge: {
            title: "Challenge",
            thumbnailUrl:
                "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/1.jpg",
            description:
                "t’s hard and slow for MotionGlobal to find enough high-quality resources in Shanghai to expand their business globally and technically maintain more than one hundred ecommerce sites all over the world. They started looking for outsourcing services in other cities in mainland China, India, Philippines, and Vietnam. It’s not easy to make a final decision since there are many vendors out there and they have no experience of development outsourcing before.",
        },
        solution: {
            title: "Solution",
            description:
                "Fortunately, the CEO of MotionGlobal was referred to SETA by a trusted partner. Over 5 years, SETA team helps MotionGlobal with both front-end and back-end development and is involved in all technical components of the ecommerce platform.",
        },
    },
    panavision: {
        title: "About Panavision",
        description:
            "The Panavision brand has been one of Hollywood's signature brands when it to film image acquisition.",
        value: {
            title: "Value",
            content:
                "SETA created their iPhone application that on day 2, was promoted to the top 200 most downloaded applications on iTunes. <br /> <br /> SETA also created their website for their iPhone experience.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/panavision/2.jpg",
        },
    },
    r1: {
        title: "About R1 Concept",
        description:
            "R1 Concepts is a leading manufacturer and retailer of automotive OEM and aftermarket high-performance brake parts.  They engaged with SETA to build a comprehensive, custom e-commerce and inventory and order management solution to replace their existing system.",
        value: {
            title: "Value",
            content:
                "SETA created their iPhone application that on day 2, was promoted to the top 200 most downloaded applications on iTunes. SETA also created their website for their iPhone experience.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/2.jpg",
        },
    },
    restaurant: {
        title: "About The Restaurant Expert (TRE)",
        description:
            "Restaurant Systems Pro, an online restaurant management software, was developed from the ground up for independent restaurants by TheRestaurantExpert.com, a restaurant training and coaching company. A restaurant is one of the most difficult businesses to run, but it can be rewarding and profitable if you apply the right systems in your operations. That is what we provide you – the right systems.",
        challenge: {
            title: "Challenge",
            description:
                "TRE has a small in-house IT team and they need to rely much on external developers to speed up the software development and keep the production up and running. After a bad experience of working with an outsourcing vendor, TRE was desperate to look for a trustworthy and reliable partner to save the day. Their previous outsourcing vendor was difficult to communicate with, delivery results were awful, speed was slow, while the cost was still high.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/3.png",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was selected after TRE talked with many consultants and carefully interviewed SETA resources. <br className='hidden md:block' /> SETA migrated the old system to AWS cloud and .NET technology. <br className='hidden md:block' /> The system is now performant and is able to serve thousands of restaurants.",
        },
        testimonial: {
            content:
                "After working with exceedingly difficult programmers in another country, we came across SETA International. It was just our luck. The SETA team assigned to us are what is needed to move forward. They did relaunch our software. It gave a better look and was user friendly. They are available to make sure we&apos;re always up and running. And if issues come up, they resolve them with extraordinarily little down time. SETA is a great company to work with. They can develop anything you have a vision just the way you want it",
            avatarUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Katrina.jpeg",
            author: "Katrina Von Moos",
            position: "Director of Operations.",
        },
    },
    skplanet: {
        title: "About AppFactory",
        description:
            "AppFactory, is a new company established by SK Planet in 2012, a globally recognized and respected leader in innovative mobile services. AppFactory’s mission is to transform great ideas into compelling mobile apps for the global market. SK Planet was created by SK Telecom in November 2011 with the purpose of focusing on global businesses, including new media and digital content.",
        challenge: {
            title: "Challenge",
            description:
                "AppFactory is a startup company and wants to shorten the time-to-market with innovative products and services. They need a trust partner for augmenting development services, while not sacrificing quality.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/1.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "SETA has entered into a formal agreement with AppFactory (a SK Telecom company) as one of their strategic technology partners to assist with their internal and external software development needs. With over 15+ software developers and quality assurance engineers assisting with their internal product development roadmap, each and every one of their high quality software developers and quality assurance engineers works closely with their internal organization to maximize their efficiency and productivity across the globe. AppFactory were able to quickly integrate SETA&apos;s industry leading hybrid development model which allowed them to maximize efficiency across their organization while reducing operational cost and maximizing ROI.",
        },
    },
    stelux: {
        title: "About Stelux",
        description:
            "Stelux is one of the leading manufacturers, retail and wholesale in the industrial luxury watch and optical with a long established wholesale business presence in Hong Kong, Singapore and Malaysia",
        challenge: {
            title: "Challenge",
            description:
                "Our client sought optimization of its new product development and ongoing portfolio maintenance processes. <br /><br /> Implementing SAP HANA/SAP Mobile Platform, the company has optimized several aspects of new product development and communication/organization of technological product innovation, in addition to recognizing several benefits throughout the product life cycle.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/3.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was able to provide 3+ high-quality resources to support the development",
        },
        testimonial: {
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/4.jpg",
            content:
                "SETA was able to provide 3+ dedicated resources to work on SAP HANA, SAP Mobile Platform project for Warehouse Management module, and development consulting for Financial (FI) and Sales and Distribution (SD) modules. SETA also provides training and technology transfer for the local IT department on SAP Mobile Platform project.",
        },
    },
    syspro: {
        title: "About SysPro",
        description:
            "SYSPRO is one of the longest standing independent, international vendors of business software solutions and services. With over 30 years&apos; experience in the ERP industry, we have a wealth of knowledge to assist you in configuring a system tailored specifically to your business needs.",
        challenge: {
            title: "Challenge",
            description:
                "SysPro planned to work on a new CRM, but did not have enough internal talents to design and implement the software. SysPro struggled to find a trust partner that could meet high-quality development standards.",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/1.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "SETA has entered into a formal agreement with SysPro as one of their strategic technology partners to assist with their internal and external software development needs. With over 10+ software developers and quality assurance engineers assisting with their internal product development roadmap, each and every one of their high quality software developers and quality assurance engineers works closely with their internal organization to maximize their efficiency and productivity across the globe. SysPro were able to quickly integrate SETA's industry leading hybrid development model which allowed them to maximize efficiency across their organization while reducing operational cost and maximizing ROI.",
        },
    },
    teacherzone: {
        title: "About Teacher Zone",
        description:
            "Teacher Zone is an all-in-one platform to engage your students, automate your admin, and take control of your business. Teacher Zone has provided a platform for me to offer more organized and structured practice assignments to students. The chat feature has been amazing as a way to encourage students to interact with each other and build community outside of class.",
        challenge: {
            title: "Challenge",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone2.jpg",
            description:
                "Teacher Zone did not have an IT department and development skills. They looked for a trust partner, who could help with software development consultation and plan execution. It was not an easy task since there were tons of consultation/outsourcing vendors around the globe.",
        },
        solution: {
            title: "Solution",
            description:
                "After talking with a lot of software development companies, they decided to select SETA due to experience, referrals, and reputation. SETA worked closely with Teacher Zone to design technical solutions and UI/UX for the Learning Management System (LMS), and then implemented in both platforms mobile and desktop. The chosen technology stack was .NET, MS SQL Server, and Twillio. SETA was able to support Teacher Zone at all steps and made it a profitable business with more than 50,000 active paid students. As of now, SETA is providing 24/7 technical support for Teacher Zone to handle all production issues to make sure students and teachers have the best user experience. Check out the LMS at",
        },
    },
    tollroads: {
        title: "About The TollRoads",
        description:
            "Offers One-Time-Toll payments, new FasTrak account enrollment and full FasTrak account maintenance, including vehicle changes, payments, toll history and transponder maintenance.",
        challenge: {
            title: "Challenge",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/1.jpg",
            description:
                "As the region's population increases and the economy grows, TCA works toward ensuring that The Toll Roads remain valuable, congestion-free alternatives to local freeways. TCA is committed to excellent customer service, improving mobility and preserving our quality of life now and in the future. The Toll Roads needs a trust partner to develop mobile applications with high quality with a reasonable price.",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was selected by the Tolls Roads to develop all of their mobile applications that are currently being offered to all of their customers using their toll roads. The mobile application (available on iOS and Android) was selected as the &quot;most innovative application in the transportation industry&quot; in 2012.",
        },
    },
    trendmicro: {
        title: "About TrendMicro",
        description:
            "As a global leader in cloud security, Trend Micro develops Internet content security and threat management solutions that make the world safe for businesses and consumers to exchange digital information. With more than 20 years of experience, Trend Micro is recognized as the market leader in server security for delivering top-ranked client, server, and cloud-based security solutions that stop threats faster and protect data in physical, virtualized, and cloud environments.",
        challenge: {
            title: "Challenge",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/1.jpg",
            description:
                "TrendMicro needs a strong partner with extensive experience and knowledge in security to augment their internal teams.",
        },
        solution: {
            title: "Solution",
            description:
                "SETA has entered into a formal agreement with Trend Micro Corporate as one of their strategic technology partners to assist with their internal and external software development needs. In addition, SETA provides high quality software developers and quality assurance engineers to Trend Micro who work closely together to maximize their efficiency and productivity across the globe.",
        },
    },
    ujazo: {
        title: "About Ujaro",
        description:
            "Ujazo was established with one primary mission – Help consumers be aware of their health status and lean how to improve the areas that needs more attention",
        challenge: {
            title: "Challenge",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/1.jpg",
            description:
                "Ujazo did not have an internal development team and deep expertise in software development. So they need to partner with a strong software development vendor with extensive experience.",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was selected by Ujazo to build their SaaS based platform from the ground up. From technical consulting, graphical design to software development, SETA was chosen as the primary technology partner to help drive the go-to-market strategy for Ujazo. Once the platform is fully developed, it will allow users to download their medical records from select clinics throughout the US and allow them to set goals and obtain detailed information about their health history and daily regime.",
        },
    },
    veritone: {
        title: "About Veritone",
        description:
            "Veritone is one of top AI companies focusing on democratizing AI and enabling every organization and every person with the power of AI. What started in 2014 with the idea of providing unified access to hundreds of cognitive engines through one common software infrastructure, evolved to the world’s first AI operating system, aiWARE, which orchestrates a diverse ecosystem of cognitive engines to power intelligent automation for both commercial and government organizations.",
        challenge: {
            title: "Challenge",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/1.png",
            description:
                "Veritone needs to find a trust partner to help accelerate software development process based on follow-the-sun model with various talented resources in different technology stacks including AI model developments, data collection and labelling, testing, and application/mobile developments in Python, Go, NodeJS, React, Angular, and Flutter/React Native, while reducing the hassle of resource recruitment and management.",
        },
        solution: {
            title: "Solution",
            description:
                "SETA was able to provide 40+ high-quality resources to support the development",
        },
        projects: [
            {
                name: "Aiware",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/1.jpg",
                content:
                    "The world’s first operating system for artificial intelligence, Veritone aiWARE, orchestrates a diverse ecosystem of ready-to-deploy machine learning models to transform audio, video, text, and other data sources into actionable intelligence, at scale, with no AI expertise. With aiWARE, leverage digital workers to save manual review time, gain valuable data insights, and cognitively enrich end-to-end workflows.",
            },
            {
                name: "Verify",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/2.jpg",
                content:
                    "Smart biometric SSO combining AI and simultaneous MFA for easy, secure and private access to any application",
            },
            {
                name: "Clarity",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/3.jpg",
                content:
                    "Gain visibility into the behavior and performance of AI models, building trust and explainability and reducing risk.",
            },
            {
                name: "Identify",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/4.jpg",
                content:
                    "Harness the power of your booking database to identify suspect leads faster and increase case clearance rates.",
            },
            {
                name: "Illuminate",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/5.jpg",
                content:
                    "With Veritone Illuminate built on aiWARE, you can quickly and cost-effectively search, discover, analyze, cull and explore large amounts of Electronically Stored Information (ESI), including audio and video recordings, and text-based documents.",
            },
            {
                name: "Attribute",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/6.png",
                content:
                    "Attribute is a turnkey attribution solution that correlates broadcast ad placements of all formats, including pre-produced spots, organic mentions and live reads, with website interaction data in near real-time. Gain instant access to data-driven insights to inform ad optimization strategies, increase customer ROI, and strengthen buy-side relationships.",
            },
            {
                name: "Automate Studio",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/7.png",
                content:
                    "Organizations embarking on intelligent process automation initiatives use Automate Studio to rapidly build and deploy AI-powered workflows and integrate resulting insights into business applications and processes. Transform audio, video, text and data content into actionable intelligence, at scale, with no AI expertise.",
            },
            {
                name: "Redact",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/8.png",
                content:
                    "Save time and costs while freeing up valuable resources by using the AI-powered Veritone Redact to automate the redaction of sensitive information within audio, video and image-based evidence.",
            },
            {
                name: "Optimizer",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/9.jpg",
                content:
                    "Determine and optimize energy supply mix, cost and profitability utilizing real-time forecasted demand, supply and price data.",
            },
            {
                name: "Essentials",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/10.jpg",
                content:
                    "Consisting of four AI-enabled applications, Veritone Essentials allows you to get the most value out of your visual and audio media. These applications, powered by aiWARE, allow you to instantly search, analyze, and share information like never before. With Essentials, you can easily search a broadcast in near real-time, set up alerts for content and topics, automate air-checks, and track and verify ads, sponsorships, endorsements, and more",
            },
        ],
    },
    culture: {
        title: "Our working culture",
        metaTitle: "SETA's working culture",
        description:
            "Culture is always a major component of the SETA's success. At SETA, our working environment makes the employees comfortable, and in turn motivates them to carry out tasks in the best ways possible for our clients. Here is how we make it happen.",
        banner: [
            {
                id: 1,
                background: "https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture/1.jpg",
                title: "Our working culture",
                description:
                    "Culture is always a major component of the SETA's success. At SETA, our working environment makes the employees comfortable, and in turn motivates them to carry out tasks in the best ways possible for our clients. Here is how we make it happen.",
            },
            {
                id: 2,
                background: "https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture/2.jpg",
                title: "Our working culture",
                description:
                    "Culture is always a major component of the SETA's success. At SETA, our working environment makes the employees comfortable, and in turn motivates them to carry out tasks in the best ways possible for our clients. Here is how we make it happen.",
            },
            {
                id: 3,
                background: "https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture/3.jpg",
                title: "Our working culture",
                description:
                    "Culture is always a major component of the SETA's success. At SETA, our working environment makes the employees comfortable, and in turn motivates them to carry out tasks in the best ways possible for our clients. Here is how we make it happen.",
            },
        ],
        articles: [
            {
                name: "Promote creativity",
                thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/38.jpeg",
                content:
                    "We have no restrictions on where employees must work, allowing them to work where they feel most productive and comfortable. We do not think employees should sit in front of a desk all through the working hours. The working environment should be fun and open. What makes the most sense is productivity and creativity.",
            },
            {
                name: "ENSURE DEMOCRACY                ",
                thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/24.jpg",
                content:
                    "SETA’s flat organizational structure allows employees to share opinions and concerns to managerial level directly. All ideas are respected and treasured no matter the level in our organization.",
            },
            {
                name: "Share core values",
                thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/25.jpg",
                content:
                    "SETA is designed to serve clients globally at the highest quality. We do everything we can to grow the client&apos;s business in addition to providing optimal technical solutions. All our solution designs come after thoroughly understanding the business situations of clients. In short, the client&apos;s business is our business.",
            },
        ],
        list: [
            {
                id: 1,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/1.png",
                name: "COMPETITIVE SALARY",
            },
            {
                id: 2,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/7.png",
                name: "Personalized Coaching",
            },
            {
                id: 3,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/3.png",
                name: "Flexible at work",
            },
            {
                id: 4,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/4.png",
                name: "RECOGNITION PROGRAMS",
            },
            {
                id: 5,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/5.png",
                name: " MINDFULNESS RESOURCES",
            },
            {
                id: 6,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/6.png",
                name: "SETA COMMUNITIES",
            },
        ],
        employee: {
            title: "WE CARE ABOUT OUR EMPLOYEES",
            description:
                "We help our employees to reach their greatest potential and balance work & life. <br /><br /> We do our best to turn SETA into the second home of our employees.",
            items: [
                {
                    id: 1,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/36.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/36.jpg",
                },
                {
                    id: 2,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/37.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/37.jpg",
                },
                {
                    id: 3,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/1.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/2.jpg",
                },
                {
                    id: 4,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/2.jpeg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/3.jpg",
                },
                {
                    id: 5,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/3.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/4.jpg",
                },
                {
                    id: 6,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/4.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/8.jpg",
                },
                {
                    id: 7,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/5.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/9.jpg",
                },
                {
                    id: 8,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/6.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/10.jpg",
                },
                {
                    id: 9,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/7.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/11.jpg",
                },
                {
                    id: 11,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/8.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/12.jpg",
                },
                {
                    id: 12,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/9.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/13.jpg",
                },
            ],
        },
        customer: {
            title: "WE EMPATHIZE <br className='block md:hidden' /> OUR CUSTOMERS",
            description: "We put our customers first and make them successful in their business",
            items: [
                {
                    id: 3,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/10.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/5.jpg",
                },
                {
                    id: 4,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/11.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/6.jpg",
                },
                {
                    id: 5,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/12.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/7.jpg",
                },
                {
                    id: 6,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/13.jpeg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/13.jpeg",
                },
                {
                    id: 7,
                    imgLarge: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/14.jpg",
                    imgThumb: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/large/14.jpg",
                },
            ],
        },
        peoplevoices: {
            title: "OUR PEOPLE VOICES",
            items: [
                {
                    id: 1,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/23.jpg",
                    name: "Mr. Vu Thanh Hung",
                    position: "Director",
                    desc: "SETA is an exciting and challenging work environment. Every day I learn new things in many aspects such as technology, projects, ideas, customers and colleagues. If you adapt and succeed at SETA I believe you are qualified to work for the top companies in the world.",
                },
                {
                    id: 2,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/34.jpg",
                    name: "Mr. Mai Xuan Thu",
                    position: "COO",
                    desc: "At SETA, we&apos;re scaling, growing rapidly and so do our culture, our expertises. Initiative , sharing and ambition united us together and supports those changes. A lot of new tech stacks being adopted recently are proving that we can do great thing confidently. Smart and excellent employees are fueled with more knowledge and experience to be happy and successful in their careers. The only limitation in here is the challenge you decide to take.",
                },
                {
                    id: 3,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/35.jpg",
                    name: "Mr. Harry Vu",
                    position: "PMO Head",
                    desc: "Flexibility and empowerment are two first words I have in my mind when thinking about SETA. In SETA we encourage Leader-Leader model that leadership at every level, people freely express their uncertainties and fears as well as their innovative ideas and hopes. We employ stewardship delegation, explaining what we want accomplished and allow flexibility in how it is accomplished.",
                },
                {
                    id: 4,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/20.jpg",
                    name: "Mrs. Nguyen Thi Huong",
                    position: "Chief Accountant",
                    desc: "As a member from the very beginning of SETA, I witness SETA through ups and downs and difficulties over 10 year. And now, SETA shows me and the world the transformation, growth and development. I would like to sincerely thank the sustainable development that belongs to all of you - the people of the company",
                },
                {
                    id: 5,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/21.jpg",
                    name: "Mrs. Mai Thi Hang",
                    position: "Head of Human Resources Department",
                    desc: "Before coming to SETA, I have many years of experience in human resources in the field of tourism and commerce. When I switched to IT Human Resource, I found this to be a challenge for myself. The more competitive the IT Human resource market becomes, the higher the challenge posed to me. “Always giving my best for my work and putting myself in the position of employees is my opinion about my profession”.",
                },
                {
                    id: 6,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/22.jpg",
                    name: " Mr. Tony Bui",
                    position: "Deputy Director",
                    desc: "People are familiar that SETA is an outsourcing company, but you should never consider yourself an outsourcing person. You must think of yourself as a product developer. And actually SETA we are making products.",
                },
                {
                    id: 7,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/26.jpg",
                    name: "Mr. Hoang Duc Manh",
                    position: "Project Manager",
                    desc: "I like the environment of SETA, comfortable in the way of working and thinking, being able to do what I like and stick with. The initiative in work is very important and needs to be enhanced and promoted in each individual.",
                },
                {
                    id: 8,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/27.jpg",
                    name: "Mr. Nguyen Viet Hai",
                    position: "AI Lead Engineer",
                    desc: "Opportunities, passion, and growth are the hard things to be achieved at the same time. But those are the reasons that keep me working at SETA since I graduated. Every day we are fortunate with new chances, challenges, and ideas to reach a higher level, improve ourselves individually and together. The working environment is super healthy as well. People, even with different generations and mindsets, respect and listen to each other&apos;s ideas, since we all understand that we’re having the same goal: satisfied customers and successful products.",
                },
                {
                    id: 9,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/28.jpg",
                    name: "Mr. Thang Nguyen",
                    position: "Technical Leader",
                    desc: "I liked SETA from the very beginning for one simple reason: Being satisfied with the cutting edge technology and working directly with customers. So far, more than 5 years of being of SETA member, I still love and satisfy my job at SETA in general and Veritone in particular.",
                },
                {
                    id: 10,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/29.jpg",
                    name: "Mr. Nam Le",
                    position: "SAP Technical Consultant",
                    desc: "“If you want to go fast, go alone If you want to go far, go together” In SETA, we have fabulous colleagues and leaders together to bring us to any level of success",
                },
                {
                    id: 11,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/30.jpg",
                    name: "Mr. Can Tran",
                    position: "Senior Golang Developer",
                    desc: "SETA is the longest company that I have worked for, more than 5 years for now, still feeling familiar with me. “I like it, I do it”, a place where I always feel comfortable, with a lot of opportunities to growth. Being able to experience many new things and try different things is a happiness for me at SETA",
                },
                {
                    id: 12,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/31.jpg",
                    name: " Ms. Pham Thi Huong",
                    position: "Accountant Executive",
                    desc: "I have been with SETA since 2019 until now. For me, the company is my second home because the working environment is amiable and dynamic. People here are mainly young people full of dynamism, enthusiasm, and humor.",
                },
                {
                    id: 13,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/32.jpg",
                    name: "Mr. Nam Nguyen",
                    position: "Front-End Developer",
                    desc: "SETA appeals to us since we have chance to interact directly with customers. I like the American style of work. Your thinking must be fast, critical, your mind must be always active, because ideas can change at any time.",
                },
                {
                    id: 14,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/33.jpg",
                    name: "Ms. Doan Thu Huyen",
                    position: "Quality Assurance",
                    desc: "SETA brings me inspiration, challenges, and opportunity. I find the greatest pleasure here. Specically, I appreciate all my fabulous colleagues!",
                },
            ],
        },
    },
    location: {
        title: "Location",
        metaTitle: "SETA International's Location",
        description:
            "With offices in US and Vietnam, we offer optimally a combination of high quality near shore, offshore and onsite delivery models. As such, our clients are able to handle challenges of language barriers, time zones, and security.",
        sectionOne: {
            title: "Where to find us?",
            placeOne: {
                name: " CALIFORNIA, NORTH AMERICA",
                description:
                    "Designed to be energizing and welcoming, SETA International’s worldwide headquarters are based in Irvine, Orange County, California, which is a new Silicon Beach in the US. As part of the diverse high tech industry the US based team ensures that all standards are maintained for project management and custom software solutions globally.",
                list: ["SETA International HQ", "3943 Irvine Blvd, Suite 170", "Irvine, CA 92626."],
            },
            placeTwo: {
                name: "HANOI, VIETNAM",
                description:
                    "As the third largest employer in Hanoi, Vietnam, SETA International's team is dedicated to a full range of Software Product Development, technical cloud services, and operational analysis. The office is on the cutting-edge of custom application development, quality assurance testing, and staff augmentation.",
                list: [
                    "SETA International Vietnam",
                    "Floor 11th, H.L Building, 82 Lane, Duy Tan street",
                    "Dich Vong Hau Ward, Cau Giay District, HaNoi",
                ],
            },
        },
    },
};
