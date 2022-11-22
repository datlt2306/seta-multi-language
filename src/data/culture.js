const banner = [
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
];

const our_people = [
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
        desc: "I have been with Seta since 2019 until now. For me, the company is my second home because the working environment is amiable and dynamic. People here are mainly young people full of dynamism, enthusiasm, and humor.",
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
];

const customers = [
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
];

const employees = [
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
];

const cultures = [
    {
        id: 1,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/1.svg",
        name: "COMPETITIVE SALARY",
    },
    {
        id: 2,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/7.svg",
        name: "Personalized Coaching",
    },
    {
        id: 3,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/3.svg",
        name: "Flexible at work",
    },
    {
        id: 4,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/4.svg",
        name: "RECOGNITION PROGRAMS",
    },
    {
        id: 5,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/5.svg",
        name: " MINDFULNESS RESOURCES",
    },
    {
        id: 6,
        img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/6.svg",
        name: "SETA COMMUNITIES",
    },
];
export { banner, our_people, customers, employees, cultures };
