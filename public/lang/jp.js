export default {
    menuList: [
        {
            label: "サービス",
            path: "/services",
            subCate: [
                {
                    label: "アウトソーシング・サービス",
                    children: [
                        {
                            label: "ウェブ開発",
                            path: "/services/web-application-development",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/web-development.svg",
                        },
                        {
                            label: "モバイル開発",
                            path: "/services/mobile-application-development",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/mobile-development.svg",
                        },
                        {
                            label: "レガシーマイグレーション",
                            path: "/services/legacy-migration",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/legacy-migration.svg",
                        },
                        {
                            label: "テスティング",
                            path: "/services/testing",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/testing.svg",
                        },
                        {
                            label: "組込みシステム",
                            path: "/services/embedded-system",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/embedded.svg",
                        },
                    ],
                },
                {
                    label: "エンタープライズ・サービス",
                    children: [
                        {
                            label: "SAPサービス",
                            path: "/services/enterprise/sap",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/web-development.svg",
                        },
                        {
                            label: "Magentoサービス",
                            path: "/services/magento-development-services",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/magento.svg",
                        },
                        {
                            label: "セールスフォース",
                            path: "/services/enterprise/salesforce",
                            icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/cloud.svg",
                        },
                    ],
                },
            ],
        },
        {
            label: "次世代テクノロジー",
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
                    label: "ブロックチェーン",
                    path: "/next-gen/blockchain",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/blockchain.svg",
                },
                {
                    label: "AR/VR",
                    path: "/next-gen/ar-vr",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/ar:vr.svg",
                },
                {
                    label: "ビッグデータ",
                    path: "/next-gen/big-data",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/bigdata.svg",
                },
                {
                    label: "クラウド",
                    path: "/next-gen/cloud",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/cloud.svg",
                },
            ],
        },
        {
            label: "業界",
            path: "/industries",
            children: [
                {
                    label: "オートモーティブ",
                    path: "/industries/automotive",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/automovie.svg",
                },
                {
                    label: "メディア・エンターテイメント",
                    path: "/industries/media-entertaiment",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/media-entertaiment.svg",
                },
                {
                    label: "ヒースケア",
                    path: "/industries/healthcare",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/healthcare.svg",
                },
                {
                    label: "セキュリティ",
                    path: "/industries/security",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/security.svg",
                },
                {
                    label: "交通機関",
                    path: "/industries/transportation",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/transporation.svg",
                },
                {
                    label: "小売",
                    path: "/industries/retail",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/retail.svg",
                },
                {
                    label: "金融",
                    path: "/industries/finance",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/finance.svg",
                },
                {
                    label: "エネルギー",
                    path: "/industries/energy",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/energy.svg",
                },
            ],
        },
        {
            label: "研究・開発",
            path: "/research-development",
        },
        {
            label: "開発事例",
            path: "/case-study",
        },
        {
            label: "企業情報",
            path: "/about",
            children: [
                {
                    label: "文化",
                    path: "/about/culture",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture.svg",
                },
                {
                    label: "場所",
                    path: "/about/location",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/pin-2.svg",
                },
                {
                    label: "SETAインサイト",
                    path: "https://blog.seta-international.com",
                    icon: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/papers.svg",
                },
            ],
        },
    ],
    menuContact: {
        label: "お問い合わせ",
    },
    menuOurSourcing: {
        heading: "アウトソーシング・サービス",
        menus: [
            { label: "ウェブ開発", path: "/services/web-application-development" },
            { label: "モバイル開発", path: "/services/mobile-application-development" },
            { label: "レガシーマイグレーション", path: "/services/legacy-migration" },
            { label: "テスティング", path: "/services/testing" },
            { label: "組込みシステム", path: "/services/embedded-system" },
        ],
    },
    menuEnterprise: {
        heading: "エンタープライズ・サービス",
        menus: [
            { label: "SAPサービス", path: "/services/enterprise/sap" },
            { label: "Magentoサービス", path: "/services/magento-development-services" },
            { label: "セールスフォース", path: "/services/enterprise/salesforce" },
        ],
    },
    menuNextGen: {
        heading: "次世代テクノロジー",
        menus: [
            { label: "AI", path: "/next-gen/ai" },
            { label: "IoT", path: "/next-gen/iot" },
            { label: "ブロックチェーン", path: "/next-gen/blockchain" },
            { label: "ビッグデータ", path: "/next-gen/big-data" },
            { label: "クラウド", path: "/next-gen/cloud" },
        ],
    },
    menuIndustries: {
        heading: "業界",
        menus: [
            { label: "オートモーティブ", path: "/industries/automotive" },
            { label: "メディア・エンターテイメント", path: "/industries/media-entertaiment" },
            { label: "セキュリティ", path: "/industries/security" },
            { label: "交通機関", path: "/industries/transportation" },
            { label: "小売", path: "/industries/retail" },
            { label: "金融", path: "/industries/finance" },
        ],
    },
    menuAboutUs: {
        heading: "会社概要",
        menus: [
            {
                label: "文化",
                path: "/about/culture",
            },
            {
                label: "場所",
                path: "/about/location",
            },
            {
                label: "SETA インサイト",
                path: "https://blog.seta-international.com",
                icon: "/images/icons/papers.png",
            },
        ],
    },
    menuRD: {
        heading: "研究・開発",
        menus: [{ label: "研究・開発", path: "/research-development" }],
    },
    menuResourceCenter: {
        heading: "リソースセンター",
        menus: [{ label: "事例", path: "/case-study" }],
    },
    contact: {
        title: "お問い合わせ",
        errors: "必須",
        firstName: "名前",
        lastName: "名字",
        company: "会社名",
        jobTitle: "役職名",
        phonenumber: "電話番号 (任意)",
        email: "メールアドレス",
        questionComment: "質問・コメント",
        howDidYouLearnAboutUs: {
            name: "どのようにして弊社をお知りになりましたか? (任意)",
            options: [
                { id: 1, name: "記事・ブログ", value: "article or blog" },
                { id: 2, name: "プレスリリース", value: "press release" },
                { id: 3, name: "広告", value: "advertisement" },
                { id: 4, name: "検索", value: "search engine" },
                { id: 5, name: "ウェビナー", value: "webinar" },
                { id: 6, name: "イベント", value: "event" },
                { id: 7, name: "紹介", value: "referral" },
                { id: 8, name: "その他", value: "other" },
            ],
        },
    },
    btn: {
        letTalk: "話しましょう",
        viewMore: "もっと見る",
        viewAllCaseStudies: "全ての事例を見る",
    },
    home: {
        title: "SETA International - デジタルトランスフォーメーション",
        description:
            "デジタルトランスフォーメーションとデジタルイノベーションによって、各企業のビジネス成長を支援します。",
        banner: [
            {
                title: "2022年InfoComm Southeast AsiaにおけるSETA代表",
                time: "2022年11月2日～4日",
                location: "場所： バンコク国際見本市・展示場",
                readmore: "もっと見る",
            },
            {
                title: "2022年<br class='hidden xl:block'>世界技術革新会議(WCIT 2022)における<br class='hidden xl:block'>SETA代表.",
                time: "2022年9月13日～15日",
                location: "所在地：マレーシア・ペナン市",
                readmore: "もっと見る",
            },
            {
                title: "ワンストップ・テクノロジー <br class='hidden xl:block'>サービスプロバイダ",
                desc: "デジタルトランスフォーメーションとデジタルイノベーションによって、<br className='hidden xl:block' /> 企業のビジネス成長を支援します。",
            },
        ],
        testimonials: {
            title: "クライアントは弊社のサービスが好きになります。",
            desc: "以下のビデオをクリックすると、弊社のサービスを利用したユーザーから定期的に寄せられるレビューを聞くことができます。",
            visit: "もっと見る",
            feedbacks: [
                {
                    id: 1,
                    customerName: "Chris Bates",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/1.jpg",
                    quote: "“以前はオフショア開発をやっていなかったです。SETAさんは、ある起業家から紹介されたものです。素晴らしいプロジェクトマネージャーがおり、言葉の壁は問題ではありません。開発者は勤勉で、反応がよく、献身的で、特に危機的な状況に陥ったときでも安心です。また、私たちは人事業務に気を配る必要がありません。SETAさんではリソースを迅速に採用してくれます。COVIDパンデミックの際、私たちは突然5万人以上の追加ユーザーを提供しましたが、これはSETAさんのサポートなしでは不可能なことです。私たちはSETAさんにとても満足しています。”",
                    videoYoutube: "ZIFVM2-5PeA",
                    url: "https://teacherzone.com",
                    webiste: "Teacher Zone",
                },
                {
                    id: 2,
                    customerName: "Nico Gevers",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/5.jpg",
                    quote: "“SETAさんは、弊社のソフトウェア・エンジニアリング・グループにおいて重要な役割を担ってきましたし、今後もその役割を果たし続けます。昨年は、SETAチームが私たちの最も重要なソフトウェア機能のいくつかを提供するのを手伝ってくれました。特に、私たちのビジネスが成長するにつれ、SETAさん がどのように適応してきたかを楽しんでいます。Veritone に入社して以来、SETAさん のエンジニアと強い関係を築き、彼らは常にプロフェッショナルであると感じています。彼らと一緒に仕事ができることを嬉しく思いますし、今後も多くのプロジェクトで協力し合えることを楽しみにしています。”",
                    videoYoutube: "fg0q0PoENT4",
                    url: "https://veritone.com",
                    webiste: "Veritone",
                },
                {
                    id: 3,
                    customerName: "Katrina Von Moos",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/2.jpg",
                    quote: "“他国の超難関プログラマーと仕事をした後、SETAさんに出会いました。それはまさに幸運でした。私たちに配属されたSETAチームは、前進するために必要な存在です。彼らは私たちのソフトウェアをリニューアルしてくれました。見た目もよくなり、使い勝手もよくなりました。彼らは、私たちが常に稼働していることを確認するために、利用可能です。また、問題が発生した場合は、ダウンタイムを極めて少なくして問題を解決してくれます。SETAさんは一緒に働くには素晴らしい会社です。彼らは、あなたのビジョンがあれば、何でも思い通りに開発してくれます。”",
                    videoYoutube: "kn897wXNTuQ",
                    url: "https://restaurantsystemspro.net",
                    webiste: "Restaurant Systems Pro",
                },
                {
                    id: 4,
                    customerName: "Vijay Raghavachari",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/3.jpg",
                    quote: "“エアリスは、IoTとオートモーティブのパイオニアであり、リーダーです。それは速いペースで進むビジネスで、私たちは構築し、提供しなければならないことがたくさんありました。パートナーとして信頼できる人が必要です。SETAさんの能力、コミットメント、労働倫理に感銘を受けるのに、時間はかかりません。私たちはチームを20人のリソースに拡大しました。パートナーになるアウトソーシング企業を探している人には、ぜひ彼らを推薦したいと思います。”",
                    videoYoutube: "GcLDvwGdzys",
                    url: "https://www.aeris.com",
                    webiste: "Aeris",
                },
                {
                    id: 1,
                    customerName: "Tony Zhuang",
                    imgYoutube:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/thumbnail-youtube/4.jpg",
                    quote: "“SETAさんは、MotionGlobalが世界中でビジネスを展開するための支援を行っています。SETAさんには優秀な開発者が揃っています。レスポンスが早いです。開発者は経験豊富で才能があり、勤勉です。5年以上にわたって、SETAのチームは多くのITプロジェクトを成功に導いてくれました。納品結果はMotionGlobalの期待を上回るものでした.”",
                    videoYoutube: "KNBDu_Nxqgw",
                    url: "https://www.motionglobal.com",
                    webiste: "Motion Global",
                },
            ],
            customers: [
                {
                    id: 1,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Chris.png",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/3.svg",
                    name: "Chris Bates | 最高経営責任者",
                },
                {
                    id: 2,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/6.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/13.png",
                    name: "Nico Gevers | シニア・ディレクター",
                },
                {
                    id: 3,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Katrina.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/rspro.png",
                    name: "Katrina Von Moos |オペレーションズ・ディレクター",
                },
                {
                    id: 4,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Vijay.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/2.svg",
                    name: "Vijay Raghavachari | エンジニアリング・ディレクター",
                },
                {
                    id: 5,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/tony-zhuang.jpeg",
                    logo: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/new/motionglobal.png",
                    name: "Tony Zhuang | 最高投資責任者",
                },
            ],
        },
        clients: {
            title: "SETAのクライアント",
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
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/6.svg",
                    name: "American Airlines",
                },
                {
                    id: 7,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/7.svg",
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
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/11.svg",
                    name: "Gold Lasso",
                },
                {
                    id: 12,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/partners/12.svg",
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
            title: "SETAのポートフォリオ",
            items: [
                {
                    id: 1,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/Veritone_redact.jpeg",
                    name: "事例 - Redact",
                    desc: "AIを搭載したVeritone Redactを使用して、音声、映像、画像ベースの証拠内の機密情報の再編集を自動化することで、貴重なリソースを解放しながら時間とコストを節約します。",
                },
                {
                    id: 2,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/veritone.jpg",
                    name: "VERITONE",
                    desc: "Veritoneは、AIの民主化に注力し、すべての組織とすべての人にAIの力を提供するトップAI企業の1つです。",
                },
                {
                    id: 3,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/aeris.jpg",
                    name: "AERIS",
                    desc: "エアリスは、IoTによる企業の価値解放を支援してきた実績のあるテクノロジーパートナーです。",
                },
                {
                    id: 4,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/teacherzone.jpg",
                    name: "TEACHER ZONE",
                    desc: "Teacher Zoneは、学習者の興味を引き、管理を自動化し、ビジネスをコントロールするためのオールインワン・プラットフォームです。",
                },
                {
                    id: 5,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/restaurant.jpg",
                    name: "THE RESTAURANT EXPERT",
                    desc: "レストラン・システム・プロは、TheRestaurantExpert.comによって独立系レストランのために一から開発されたオンライン・レストラン管理ソフトウェアです。",
                },
                {
                    id: 6,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/avia.jpg",
                    name: "AVIA",
                    desc: "AVIAは、最新のテクノロジーと伝統的なブティック型顧客サービスを融合させた、世界初のリアルタイム・デジタル・チャーター・マーケットプレイスです。",
                },
                {
                    id: 7,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/motion-global.jpg",
                    name: "MOTION GLOBAL",
                    desc: "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。",
                },
                {
                    id: 8,
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/careos.png",
                    name: "CAREOS",
                    desc: "CareOSは、AIを搭載した直感的なオープンプラットフォームで、ケア、美容、健康の儀式に自然に作用します。",
                },
            ],
        },
        reason: {
            title: "SETA Internationalを選ぶ理由",
            items: [
                {
                    id: 1,
                    name: "リソースとスキル",
                    path: "/about/culture",
                    content:
                        "優れた英語力を備えて、熟練して、十分に訓練されたリソース。リソースプールが大きく、任意のサイズにスケーリングできる。",
                },
                {
                    id: 2,
                    name: "研究開発",
                    path: "/research-development",
                    content:
                        "AI、VR/AR、IoTなどの注目な技術トピックに関する強力な研究開発の専門知識。",
                },
                {
                    id: 3,
                    name: "ソリューションと専門知識",
                    path: "/industries",
                    content:
                        "小売り、教育、ゲーム、保険などの様々な業界で実績のあるソリューション。",
                },
                {
                    id: 4,
                    name: "プロセスと品質",
                    path: "/about/culture",
                    content:
                        "開発、品質保証、およびプロジェクト管理に厳格で最新のプロセスを適用する。",
                },
            ],
        },
        services: {
            title: "サービス内容",
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
                    name: "ブロックチェーン",
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
                    name: "レガシーマイグレーション",
                    path: "/services/legacy-migration",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/1.jpg",
                },
                {
                    id: 6,
                    name: "テスティング",
                    path: "/services/testing",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/2.jpg",
                },
                {
                    id: 7,
                    name: "ウェブ開発",
                    path: "/services/web-application-development",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/3.jpg",
                },
                {
                    id: 8,
                    name: "モバイル開発",
                    path: "/services/mobile-application-development",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/4.jpg",
                },
                {
                    id: 9,
                    name: "オートモーティブ",
                    path: "/industries/automotive",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/automotive.jpg",
                },
                {
                    id: 10,
                    name: "小売",
                    path: "/industries/retail",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/retail.jpg",
                },
                {
                    id: 11,
                    name: "金融",
                    path: "/industries/finance",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/finance.jpg",
                },
                {
                    id: 12,
                    name: "メディア・エンターテイメント",
                    path: "/industries/media-entertaiment",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/ME.jpg",
                },
                {
                    id: 13,
                    name: "組込みシステム",
                    path: "/services/embedded-system",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/embbed.jpg",
                },
                {
                    id: 14,
                    name: "ヒースケア",
                    path: "/industries/healthcare",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/health-care.jpg",
                },
                {
                    id: 15,
                    name: "セキュリティ",
                    path: "/industries/security",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/sercurity.jpg",
                },
                {
                    id: 16,
                    name: "交通機関",
                    path: "/industries/transportation",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/transporation.jpg",
                },
                {
                    id: 17,
                    name: "研究・開発",
                    path: "/research-development",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/research.jpg",
                },
                {
                    id: 18,
                    name: "クラウドサービス",
                    path: "/next-gen/cloud",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/cloud.jpg",
                },
            ],
        },
    },
    researchDevelopment: {
        title: "研究・開発",
        description:
            "SETAの研究開発部門は、新しい技術を追求し、より良いソリューションを開発したいという強い思いから、2019年に設立されました。優秀なエンジニアたちが、未解決の課題に取り組むために、革新的でスマートな方法を考え出しています。",
        banner: {
            title: "研究・開発",
            description:
                "SETAの製品部門は、新しい技術を追求し、より良いソリューションを開発したいという強い思いから、2019年に設立されました。優秀なエンジニアたちが、未解決の課題に取り組むために、革新的でスマートな方法を考え出しています。",
        },
        ourProduct: {
            title: "プロダクト",
            desc1: "BlueEyeは、AIモデルやアプリケーションに高品質な学習データを提供するとともに、AI開発のライフサイクルを短縮する著名なAIデータプラットフォームです。",
            desc2: "BlueEyeの目的は、スマートなツール、リアルタイムかつ斬新なコラボレーション、柔軟なプロセス、ドメインエキスパートのアノテーターを用いて高品質のトレーニングデータを提供し、AIアプリケーションの作成にかかる時間を短縮することにあります。",
        },
        labels: {
            image: "イメージ",
            video: "ビデオ",
            boundingBox: "バウンディングボックス",
            point: "ポイント",
            cuboid: "キューボイド",
            polygon: "ポリゴン",
            linesSplines: "ライン＆スプライン",
            seeMore: "その他のコンテンツへ",
        },
        slogan: "発想の転換でより良い生活を",
        articles: [
            {
                id: 1,
                title: "スポーツコンテンツハイライト",
                content:
                    "スポーツコンテンツの生成プロセスを高速化するために、メディアプロバイダーは、AIに試合の映像を分析させ、ハイライトに値する瞬間を自動的に選択させる方法を検討しています。AIコンピューティングを搭載したシステムは、ビデオを分解し、ゲームのダイナミクス、興奮レベル、イベントのコンテキストを分析して、人間の脳の知覚を模倣することができます。",
            },
            {
                id: 2,
                content:
                    "<p>すべてのファウルカテゴリ、レッドカード、スコアボード、視聴者の反応、その他のリプレイに値する状況など、画面上のすべてがシステムによって認識および分類されます。また、顔とギアの識別に基づいてチームと個人を認識し、CR7のコーナーキックやその他の高度に専門化された瞬間を蓄積するなどの可能性を開きます。</p><p>ML対応エンジンは、お客様を支援しました。</p><ul class='list-disc pl-4 mt-4'><li>サッカーやゲームの印象的な瞬間を捉えて再利用することで、コンテンツの価値を高めることができます。</li><li>既存・新規プラットフォームにおけるファンエンゲージメントの向上。</li><li>従来のコンテンツ制作を再設計し、デジタル変革のプロセスを開始します。</li></ul>",
            },
        ],
    },
    services: {
        ecommerces: {
            title: "eコマース",
            description: "ビジネスを無限かつ時代を超越したものにします。",
            article: {
                title: "企業のデジタルトランスフォーメーションを幅広く支援します。",
                content:
                    "セタ・インターナショナルは、中小企業から大企業まで、さまざまな企業と協力して、eコマースサービスを提供してきました。市場で最も実績のあるテクノロジーを活用して、ビジネスのあらゆる段階でお客様を支援します。",
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/1.jpg",
            },
            service: {
                title: "さまざまなサービスを提供しています。",
                items: [
                    {
                        id: 1,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/3.jpg",
                        name: "カスタムEコマース開発",
                    },
                    {
                        id: 2,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/4.jpg",
                        name: "サードパーティーシステムとの統合",
                    },
                    {
                        id: 3,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/5.jpg",
                        name: "テクノロジーコンサルティング",
                    },
                    {
                        id: 4,
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/6.jpg",
                        name: "専任チームとスタッフ補強",
                    },
                ],
            },
            stories: {
                title: "成功事例",
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/e-commerce/7.jpg",
                content:
                    "<p class='text-lg mt-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.</p>",
            },
        },
        embedded: {
            title: "組込みソリューション",
            description:
                "業界が変わりつつあります。企業はあらゆる分野のシステムをデジタル化、ネットワーク化し、これらのシステムを可能な限り自律化しようとしています。この変革は大きなチャンスと可能性を秘めていますが、機能安全要件の増加にもつながります。",
            offer: {
                title: "提供するもの",
                items: [
                    {
                        id: 1,
                        name: "プロダクトエンジニアリング",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/emmbed/1.jpg",
                        content:
                            "<ul><li>- ソフトウェア・ファームウェアの開発。</li><li>- プリント基板設計サービス。</li><li>- 電子機器製造サービス。品質保証サービス。</li></ul>",
                    },
                    {
                        id: 2,
                        name: "研究・開発",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/emmbed/2.jpg",
                        content: "ソリューション・リサーチ・コンサルティング。",
                    },
                    {
                        id: 3,
                        name: "トレーニング",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/emmbed/3.jpg",
                        content:
                            "お客様と一緒に、完成品、サブシステム、最終製品の特定モジュールの開発、ツールチェーンの選定および先端技術のトレーニングを行っています。",
                    },
                ],
            },
            works: {
                title: "仕事の進め方",
                items: [
                    {
                        id: 1,
                        name: "クライアントの関係",
                        content:
                            "お客様のご要望やプロセスに合わせた商品開発を行います。サービス料金は、時間単位または機能単位で計算されます。",
                    },
                    {
                        id: 2,
                        name: "ビルド＆デリバー",
                        content:
                            "インハウスプロセスで高品質のソリューションを構築し、お客様に提供します。プロジェクト全体のコストは、ビジネス提案の際に決定されます。",
                    },
                    {
                        id: 3,
                        name: "ソリューション・リサーチ・コンサルティング",
                        content:
                            "クロスコンパイラ、デバッガ、アナライザ、EDAツールなど、様々な組込みシステム製品のエキスパートとして、お客様のご要望に応じて、これらの実績ある技術を使ったコンサルティングサービスやソリューションを提供します。また、インハウスプロセスにより、費用対効果の高い研究開発を提供します。",
                    },
                    {
                        id: 4,
                        name: "トレーニング",
                        content:
                            "ARM、Intel製品に関するKick-Start Workshopsを開催します。これらのワークショップは、組込みエンジニアと管理者に最新技術や進歩した技術を紹介するために利用されます。また、当社が納入した組込み製品・技術について、お客様先で組込みツールや技術に関するトレーニングを実施します。",
                    },
                ],
            },
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に！",
                items: [
                    {
                        id: 1,
                        name: "AERIS",
                        thumbnail:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            " エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                    },
                ],
            },
        },
        testing: {
            title: "テスティングセンターオブエクセレンス",
            description:
                "SETAInternationalのテストサービスは、苦労して獲得したユーザーと利益の両方を犠牲にする結果となる可能性のある潜在的な損害を回避するのに役立つことを目的としています。",
            offer: {
                title: "提供するもの",
                items: [
                    {
                        id: 1,
                        name: "APIテスト",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-5.jpg",
                        content:
                            "弊社は、エンドツーエンドのポーティング、モダナイゼーション、リエンジニアリングなどのサービスを提供するカスタムソフトウェアモダナイゼーションを提供しています。弊社のソフトウェアモダナイゼーションの専門家は、お客様のビジネス要件に対応するために、.NET、JavaScript、Python、Golangなどの以前のバージョンの更新を使用します。",
                    },
                    {
                        id: 2,
                        name: "自動化テスト",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-6.jpg",
                        content:
                            "継続的なテストは、ほとんどのグローバルな企業が行っていることです。それを使ってお客様のビジネス活用を支援します。このサービスは、お客様のテスト作業を軽減し、テストベロシティを加速させ、デリバリーライフサイクルを短縮させます。",
                    },
                    {
                        id: 3,
                        name: "ウェブ・モバイルアプリケーションテスト",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-7.jpg",
                        content:
                            "弊社のサービスは、お客様のウェブ・モバイルアプリケーションが、あらゆるブラウザやデバイスでスムーズに動作することを確認します。私たちの経験豊富なQAとテストチームの期待される成果は、様々なブラウザに対応したエラーのない製品であり、エンドユーザーにポジティブな体験をもたらすものです。",
                    },
                    {
                        id: 4,
                        name: "手動テスト",
                        img: "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-8.jpg",
                        content:
                            "お客様の製品を滞りなく発売するために、あらゆることを考慮します。私たちの手動テストサービスは、受け入れテスト、ホワイトボックステスト、ブラックボックステスト、ユニットテスト、システムテスト、統合テストなどを含みます。",
                    },
                ],
            },
            works: {
                title: "仕事の進め方",
                items: [
                    {
                        id: 1,
                        name: "要求分析",
                        content: "テスト要件を確認し、作業範囲を定義します。",
                    },
                    {
                        id: 2,
                        name: "テスト計画",
                        content:
                            "テスト戦略を開発し、リソースを特定し、リスクを評価し、スケジュールをテストします。",
                    },
                    {
                        id: 3,
                        name: "テスト準備",
                        content:
                            "この段階では、テストケース・シナリオ、テストデータを定義し、テスト環境をセットアップします。",
                    },
                    {
                        id: 4,
                        name: "テスト実施",
                        content: "スモークテスト、テストケースを作成し、バグを検証します。",
                    },
                    {
                        id: 5,
                        name: "テストレポート",
                        content: "テスト結果を収集し、テスト評価サマリーを提供します。",
                    },
                ],
            },
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に",
                items: [
                    {
                        id: 1,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                    },
                    {
                        id: 2,
                        name: "Motion Global",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/motion-global",
                        content:
                            "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。アジア太平洋地域、ヨーロッパ、アメリカ大陸に拠点を置き、10年以上にわたって20カ国以上でマーケットリーダーとして活躍しています。",
                    },
                    {
                        id: 3,
                        name: "AERIS",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                    },
                ],
            },
        },
        legacy: {
            title: "レガシー・マイグレーション",
            description:
                "絶え間ない技術の進化は、しばしば時代遅れのシステムや低パフォーマンスにつながりますが、これらの理由によって、競合他社に対する優位性を獲得することを止めるべきではありません。セタ・インターナショナルのレガシー・アプリケーション・マイグレーション・サービスを利用すれば、低コストと低リスクという変化するビジネスニーズに適応するために、常に近代化されたシステムを利用できます。",
            offer: {
                title: "提供するもの",
                items: [
                    {
                        id: 1,
                        name: "レガシーソフトウェアのマイグレーション",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-1.jpg",
                        content:
                            "効率的で安全なフレームワークを使用して、レガシーをシームレスに移行できるようにする予定です。SETAInternationalは、RPG、Pascalから、PythonやJAVAなどの新しい安全な言語まで、幅広い言語のレガシーソフトウェア移行サービスを提供します。",
                    },
                    {
                        id: 2,
                        name: "カスタム・ソフトウェアのモダナイゼーション",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-2.jpg",
                        content:
                            "当社は、エンドツーエンドのポーティング、モダナイゼーション、リエンジニアリングなどのサービスを提供するカスタムソフトウェアモダナイゼーションを提供しています。当社のソフトウェアモダナイゼーションの専門家は、お客様のビジネス要件に対応するために、.NET、JavaScript、Python、Golangなどの以前のバージョンの更新を使用します。",
                    },
                    {
                        id: 3,
                        name: "クラウドマイグレーション",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-3.jpg",
                        content:
                            "企業のITインフラ、アプリケーション、プロセスの一部をクラウドに移行することから、すべてを提供します。SETA Internationalでは、自動化されたソリューションを用いて、お客様がコストを下げ、市場投入までの時間を短縮し、拡張性だけでなくアクセス性も向上させることができるよう支援しています。",
                    },
                    {
                        id: 4,
                        name: "UXモダナイゼーション",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/what-we-offer/what-we-offer-4.jpg",
                        content:
                            "クロスプラットフォームでウェブサイトのエンドユーザー体験を向上させるソリューションをお探しの場合も、製品に組み込まれたインターフェースをお探しの場合も、SETAインターナショナルがサポートします。",
                    },
                ],
            },
            works: {
                title: "仕事の進め方",
                items: [
                    {
                        id: 1,
                        name: "アセスメント",
                        content:
                            "セタ・インターナショナルは、お客様の現在の（AS-IS）システムのすべてを評価し、余分なコードや厄介なコードを特定し、廃止、アーカイブ、アマルガム、マイグレーションにカテゴライズします。そして、スケジュールとコストのロードマップを作成し、移行を計画します。",
                    },
                    {
                        id: 2,
                        name: "マイグレーション",
                        content:
                            "経験豊富な移行専門家が、ツールやオープンソースを駆使して、要件収集から開発、検証、テスト、移行までを行い、費用対効果の高いレガシーマイグレーションソリューションを提供します。",
                    },
                    {
                        id: 3,
                        name: "定義",
                        content:
                            "システムのアーキテクチャ、将来的な（TO-BE）インフラ、コードの移行ステップを定義します。",
                    },
                    {
                        id: 4,
                        name: "デプロイメント",
                        content:
                            "移行完了後、テストと機能検証を行い、スケーラビリティを評価します。さらにサポートが必要な場合は、SETAインターナショナルのメンテナンスチームがいつでも対応します。",
                    },
                ],
            },
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
                items: [
                    {
                        id: 1,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                    },
                    {
                        id: 2,
                        name: "THE RESTAURANT EXPERT",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/restaurant",
                        content:
                            "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社です。TheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
                    },
                ],
            },
        },
        mobile: {
            title: "モバイルアプリ開発",
            description:
                "React Native と Flutter を使用した IOS、Android、およびクロスプラットフォーム アプリをワンクリックで利用できます。",
            process: {
                title: "モバイルアプリケーション開発プロセス",
                items: [
                    {
                        id: 1,
                        name: "初期化",
                        list: ["ゴール設定", "競争監査", "ユーザーの声", "ゴールレビュー"],
                    },
                    {
                        id: 2,
                        name: "UI/UXデザイン",
                        list: [
                            "タッパブルUI/UXプロトタイプ",
                            "ワイヤーフレーム・アーキテクチャ",
                            "UI/UXデザイン",
                        ],
                    },
                    {
                        id: 3,
                        name: "モバイルアプリ開発",
                        list: [
                            "モバイルフレームワーク",
                            "クリーンでスケーラブルなコード",
                            "ストレージソリューション、データべース、API",
                            "ネットワーク・セキュリティ",
                        ],
                    },
                    {
                        id: 3,
                        name: "QA&テスト",
                        list: [
                            "ファンクショナルテスト",
                            "パフォーマンステスト",
                            "デバイス・シミュレーションテスト",
                            "コードレビュー",
                        ],
                    },
                    {
                        id: 4,
                        name: "DEPLOYMENT @ APP STORE",
                        list: [
                            "PPストアとWebサブミッション",
                            "モバイルソフトウェア更新",
                            "アプリ更新",
                        ],
                    },
                ],
            },
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
                items: [
                    {
                        id: 1,
                        name: "TollRoad",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg",
                        path: "/case-study/tollroads",
                        content:
                            "ワンタイム料金の支払い、FasTrakアカウントの新規登録、FasTrakアカウントのメンテナンス（車両変更、支払い、料金履歴、トランスポンダーのメンテナンスなど）を提供します。",
                    },
                    {
                        id: 2,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                    },
                    {
                        id: 3,
                        name: "AERIS",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            " エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                    },
                    {
                        id: 4,
                        name: "Motion Global",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/motion-global",
                        content:
                            "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。アジア太平洋地域、ヨーロッパ、アメリカ大陸に拠点を置き、10年以上にわたって20カ国以上でマーケットリーダーとして活躍しています。",
                    },
                    {
                        id: 5,
                        name: "Avia",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg",
                        path: "/case-study/avia",
                        content:
                            "AVIAは、最新のテクノロジーと伝統的なブティック型顧客サービスを融合させた、これまでにないリアルタイムのデジタル・チャーター便市場です。AVIA独自の技術は、名目上の価格、乗客ゼロの位置づけのフライトを、経済的に余裕のある乗客と結びつけることに特化しています。これらの「空の足」は、小銭で売ることができ、ビジネスクラスの商業フライトと真のプライベートチャーター体験の間のコストギャップを埋めることができます。",
                    },
                    {
                        id: 6,
                        name: "TEACHERZONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                        path: "/case-study/teacher-zone",
                        content:
                            "Teacher Zoneは、学習者の興味を引き、管理を自動化し、ビジネスをコントロールするためのオールインワン・プラットフォームです。Teacher Zone は、より組織化され体系化された練習課題を学習者に提供するためのプラットフォームを提供してくれています。チャット機能は、生徒同士の交流を促し、クラス外のコミュニティを構築する方法として、素晴らしいものです。",
                    },
                    {
                        id: 7,
                        name: "MedTalk",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg",
                        path: "/case-study/medtalk",
                        content:
                            "MedTalkは、米国の大病院向けにヘルスケア・アプリケーションを開発した先駆的なスタートアップである。2人の著名な医師によって設立されました。",
                    },
                    {
                        id: 8,
                        name: "SK Planet",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/2.jpg",
                        path: "/case-study/skplanet",
                        content:
                            "AppFactoryは、革新的なモバイルサービスのリーダーとして世界的に知られ、尊敬を集めているSK Planetが2012年に設立した新会社です。AppFactoryのミッションは、素晴らしいアイデアをグローバル市場向けの魅力的なモバイルアプリに変換することです。SK Planetは、2011年11月にSK Telecomによって、ニューメディアやデジタルコンテンツなどのグローバルビジネスにフォーカスする目的で設立されました。",
                    },
                    {
                        id: 9,
                        name: "SysPro",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg",
                        path: "/case-study/syspro",
                        content:
                            "SYSPROは、ビジネスソフトウェアソリューションとサービスを提供する、最も長い歴史を持つ独立系国際ベンダーの1つです。ERP業界で30年以上の経験を持つ当社は、豊富な知識でお客様のビジネスニーズに合わせたシステム構築をサポートします。",
                    },
                    {
                        id: 10,
                        name: "THE RESTAURANT EXPERT",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/restaurant",
                        content:
                            "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社であるTheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
                    },
                    {
                        id: 11,
                        name: "Ujazo",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg",
                        path: "/case-study/ujazo",
                        content:
                            "Ujazoは、消費者が自分の健康状態を認識し、より注意を払うべき分野を改善する方法を見出すことを第一の使命として設立されました。",
                    },
                ],
            },
        },
        web: {
            title: "ウェブアプリケーション開発",
            description:
                "ウェブ制作の専門家集団が制作した、美しく機能的なサイトで、競合他社に差をつけましす。",
            process: {
                title: "ウェブアプリケーション開発プロセス",
                items: [
                    {
                        id: 1,
                        name: "初期化",
                        list: ["要求分析", "フィージビリティ分析", "タスク分類", "コスト見積もり"],
                    },
                    {
                        id: 2,
                        name: "デザイン",
                        list: [
                            "アプリケーション・ビジュアル・ガイド",
                            "ウェブサイト・レイアウト",
                            "UI/UXデザイン",
                            "ワイヤーフレーミング",
                        ],
                    },
                    {
                        id: 3,
                        name: "アプリ開発",
                        list: ["フレームワークとCMSの実装", "データベース構造設計", "機能実装"],
                    },
                    {
                        id: 4,
                        name: "QA&テスト",
                        list: [
                            "コードレビュー",
                            "クロスブラウザ・テスト",
                            "スケーラビリティと負荷テスト",
                            "バグ修正",
                        ],
                    },
                    {
                        id: 5,
                        name: "デプロイメント",
                        list: [
                            "ウェブホスティング",
                            "RELIABLE DOMAIN信頼されるドメイン",
                            "UXテスト",
                            "ウェブアプリの公開",
                        ],
                    },
                    {
                        id: 6,
                        name: "メンテナンス",
                        list: [
                            "サードパーティAPIの更新",
                            "セキュリティ更新",
                            "監視",
                            "アプリ・スケーリング",
                        ],
                    },
                ],
            },
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
                items: [
                    {
                        id: 1,
                        name: "VERITONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        path: "/case-study/veritone",
                        content:
                            "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                    },
                    {
                        id: 2,
                        name: "AERIS",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                        path: "/case-study/aeris",
                        content:
                            "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                    },
                    {
                        id: 3,
                        name: "THE RESTAURANT EXPERT",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/restaurant",
                        content:
                            "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社であるTheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
                    },
                    {
                        id: 4,
                        name: "TEACHERZONE",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                        path: "/case-study/teacher-zone",
                        content:
                            "Teacher Zoneは、学習者の興味を引き、管理を自動化し、ビジネスをコントロールするためのオールインワン・プラットフォームです。Teacher Zone は、より組織化され体系化された練習課題を学習者に提供するためのプラットフォームを提供してくれています。チャット機能は、生徒同士の交流を促し、クラス外のコミュニティを構築する方法として、素晴らしいものです。",
                    },
                    {
                        id: 5,
                        name: "Motion Global",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                        path: "/case-study/motion-global",
                        content:
                            "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。アジア太平洋地域、ヨーロッパ、アメリカ大陸に拠点を置き、10年以上にわたって20カ国以上でマーケットリーダーとして活躍しています。",
                    },

                    {
                        id: 6,
                        name: "Avia",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg",
                        path: "/case-study/avia",
                        content:
                            "AVIAは、最新のテクノロジーと伝統的なブティック型顧客サービスを融合させた、これまでにないリアルタイムのデジタル・チャーター便市場です。AVIA独自の技術は、名目上の価格、乗客ゼロの位置づけのフライトを、経済的に余裕のある乗客と結びつけることに特化しています。これらの「空の足」は、小銭で売ることができ、ビジネスクラスの商業フライトと真のプライベートチャーター体験の間のコストギャップを埋めることができます。",
                    },
                    {
                        id: 7,
                        name: "MedTalk",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg",
                        path: "/case-study/medtalk",
                        content:
                            "MedTalkは、米国の大病院向けにヘルスケア・アプリケーションを開発した先駆的なスタートアップである。2人の著名な医師によって設立されました。",
                    },
                    {
                        id: 8,
                        name: "SysPro",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg",
                        path: "/case-study/syspro",
                        content:
                            "SYSPROは、ビジネスソフトウェアソリューションとサービスを提供する、最も長い歴史を持つ独立系国際ベンダーの1つです。ERP業界で30年以上の経験を持つ当社は、豊富な知識でお客様のビジネスニーズに合わせたシステム構築をサポートします。",
                    },

                    {
                        id: 9,
                        name: "Ujazo",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg",
                        path: "/case-study/ujazo",
                        content:
                            "Ujazoは、消費者が自分の健康状態を認識し、より注意を払うべき分野を改善する方法を見出すことを第一の使命として設立されました。",
                    },
                    {
                        id: 10,
                        name: "TrendMicro",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg",
                        path: "/case-study/trendmicro",
                        content:
                            "トレンドマイクロは、クラウドセキュリティのグローバルリーダーとして、インターネットコンテンツセキュリティと脅威管理ソリューションを開発し、企業や消費者が安全にデジタル情報を交換できる世界を実現しています。20年以上の実績を持つトレンドマイクロは、物理環境、仮想環境、クラウド環境において、脅威を迅速に阻止し、データを保護するトップクラスのクライアント、サーバ、およびクラウドベースのセキュリティソリューションを提供するサーバセキュリティのマーケットリーダーとして認知されています。",
                    },
                ],
            },
        },
        sap: {
            title: "SAPトレーニングと教育サービス",
            description:
                "プロジェクトの準備からオンラインeラーニングまで、社内ITチームの構築から新入社員のトレーニングまで、SETA Internationalの企業トレーニングおよび個人教育コンサルティングサービスは、知的企業に求められる様々なタイプのユーザートレーニングに対応します。",
            items: [
                {
                    id: 1,
                    name: "SAP導入サービス",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/1.jpg",
                    path: "/services/enterprise/sap-implement-service",
                    content:
                        "SAP ERPの本格的な導入から、特定のコンポーネントの導入、システムのアップグレードまで、多くのお客様が、深い機能的専門知識と業界固有の知識、そしてリーディングプラクティス手法を持つ当社を導入担当者として選択されています。",
                },
                {
                    id: 2,
                    name: "SAPアウトソーシング人材派遣サービス",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/2.jpg",
                    path: "/services/enterprise/sap-outsourced-staffing-service",
                    content:
                        "SETAInternationalには、最新のSAPツールとテクノロジを利用してビジネスの成長を支援できる経験豊富な専門家がいます。それとは別に、経験豊富で熟練したSAPコンサルタントとつながり、品質を犠牲にすることなく費用対効果の高い方法で彼らを採用することにより、組織が人員配置とリソースの要件を処理するのを支援します。",
                },
                {
                    id: 3,
                    name: "SAPトレーニング・教育サービス",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/2.jpg",
                    path: "/services/enterprise/sap-training",
                    content:
                        "トレーニングと教育サービスにより、組織全体で一貫性のある正確な情報を促進します。",
                },
                {
                    id: 4,
                    name: "SAPコンサルティングサービス",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/4.jpg",
                    path: "/services/enterprise/sap-consulting-service",
                    content:
                        "SETAテクノロジーの蓄積された経験と専門知識により、お客様の特定の要件を満たす、高度にカスタマイズされた堅牢なソリューションが構築されます。",
                },
            ],
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
                items: [
                    {
                        id: 1,
                        name: "Stelux",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/1.jpg",
                        path: "/case-study/stelux",
                        description:
                            "ステラックスは、香港、シンガポール、マレーシアで長年にわたり卸売業を営んでおり、産業用高級腕時計と光学機器の製造、小売、卸売のトップ企業の一つです。",
                    },
                ],
            },
        },
        sapTraining: {
            title: "トレーニング・教育サービス",
            description:
                "プロジェクトの準備からオンラインeラーニングまで、社内ITチームの構築から新入社員のトレーニングまで、SETA Internationalの企業トレーニングおよび個人教育コンサルティングサービスは、知的企業に求められる様々なタイプのユーザートレーニングに対応します。",
            items: [
                "BASISトレーニング",
                "SAP ERP・SAP S・ 4HANA システムのコントロールのトレーニングと指導",
                "ABAPトレーニング",
                "企業の需要に応じたトレーニング（基礎から応用まで）",
                "ファンクショントレーニング ・SAP ECC ・SAP S ・4HANA",
                "ビジネス要件に応じたSAP ERPトレーニングコースの設計と実施（基礎から上級レベルまで）",
                "SAP ERP ・ SAP S ・4HANA システムのトレーニングと運用",
            ],
        },
        sapStaffing: {
            title: "SAPアウトソーシング人材派遣サービス",
            description:
                "SETA Internationalには、最新のSAPツールとテクノロジを利用してビジネスの成長を支援できる経験豊富な専門家がいます。それとは別に、経験豊富で熟練したSAPコンサルタントとつながり、品質を犠牲にすることなく費用対効果の高い方法で彼らを採用することにより、組織が人員配置とリソースの要件を処理するのを支援します。",
            article:
                "SETA Internationalには、最新のSAPツールとテクノロジを利用してビジネスの成長を支援できる経験豊富な専門家がいます。それとは別に、経験豊富で熟練したSAPコンサルタントとつながり、品質を犠牲にすることなく費用対効果の高い方法で彼らを採用することにより、組織が人員配置とリソースの要件を処理するのを支援します。 <br /> <br /> SETA Internationalは、ERP全般、特にSAPに関する包括的な知識を持つ、熱心な人材を見つけることができる最高の場所です。<br /> <br /> お客様のビジネス目標や現在の人材ニーズからヒントを得て、いつでもどこでも必要なスキルセットを持つ適切な候補者を探し出し、配置するお手伝いをします。経験豊富なリクルーターが、お客様のビジネスニーズに合った有能なSAPスタッフや管理職を探し出し、雇用するお手伝いをします。柔軟なパートナーシップモデルにより、短期または季節ごとの契約要件、給与管理、正社員派遣、その他人材関連のニーズをサポートします。",
            highlight: {
                title: "他社との違いは以下の通りです。 <br /> ベトナムでオフショア人材サービスを提供",
                items: [
                    "優れた業績を上げた実績",
                    "世界中に広がる優秀な候補者の大規模なネットワーク",
                    "事前に審査された有資格者の提示",
                    "オンラインジョブポータルやディレクトリの活用",
                    "Follow the “no placement – no fee” system",
                    "競争力のある価格",
                ],
            },
            services: {
                title: "サビース",
                items: [
                    {
                        id: 1,
                        name: "人材派遣",
                        thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/7.jpg",
                        description:
                            "ベトナムの人材派遣サービスでは、派遣、契約、紹介予定派遣のいずれにおいても、オフショアの優秀な人材を確保することができます。これにより、質の高いリソースに対する不安定な需要に対応し、余剰人員や過負荷の問題を解消することができます。",
                    },
                    {
                        id: 2,
                        name: "正社員登用",
                        thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/sap/8.jpg",
                        description:
                            "コンサルティングのアプローチを採用することにより、まず相手の特定の人材ニーズに耳を傾け、その中から適切な候補者のみを紹介します。弊社のコンサルタントは、完全に検証されたテスト手順を採用して、適切な候補者を特定します。",
                    },
                ],
            },
        },
        sapImplement: {
            title: "SAP導入サビース",
            description:
                "SAP ERPの本格的な導入から、特定のコンポーネントの導入、システムのアップグレードまで、多くのお客様が、深い機能的専門知識と業界固有の知識、そしてリーディングプラクティス手法を持つ当社を導入担当者として選択されています。",
            article:
                "SAP ERPの本格的な導入から、特定のコンポーネントの導入、システムのアップグレードまで、多くのお客様が、深い機能的専門知識と業界固有の知識、そしてリーディングプラクティス手法を持つ当社を導入担当者として選択されています。 <br /> <br /> 多くの企業では、業務管理や詳細な業務計画・予算策定のために、業績ベースの情報に関心を持つようになっています。私たちのSAP導入のアプローチは、詳細な原価計算とパフォーマンスベースの測定のための基盤を可能にし、この情報を重ね合わせて使用するために必要な労力を最小限に抑えることです。このアプローチにより、外部への業績報告だけでなく、より良い業績管理のための内部結果ベースの説明責任の統合をサポートします。<br /> <br /> 当社のSAP導入サービスは、ロールベースのアクセスと使用の簡素化など、エンドツーエンドの業務プロセスを論理的に改善する当社の戦略によって定義されています。当社のアプローチは、利用可能なビジネス活動、データ統合、およびレポーティングを活用して、SAPシステムの運用および管理上の使用を強化するものです。このアプローチは、将来的に運用活動を最適化するために必要な労力を最小限に抑えながら、スタッフによる賛同と利用を最大化することが証明されています。",
            methodology: {
                title: "SETA International 実装方法論",
                description:
                    "SETA Internationalは、すべてのお客様に最高のサービスと最適な実装パッケージをお届けすることに専念しています。弊社の実装方法は、SAPによって定義されたSAP Activateのフェーズに忠実に従っており、以下の重要なステップを含んでいます。",
                steps: [
                    {
                        id: 1,
                        name: "セットアップとイネーブルメント",
                        content:
                            "このステップでは、SAPS・4HANAの実装ポータルを使用して、プロジェクトをセットアップし、主要なマイルストーンを定義し、最初のプロジェクトスコープを設定し、チームメンバーをプロジェクトに招待します。",
                    },
                    {
                        id: 2,
                        name: "フィット・トゥ・スタンダード分析",
                        content:
                            "弊社の専門家チームは、展開プロジェクトのスコープ内・外のスコープ項目を選択することにより、特定のビジネス領域および企業の詳細なスコープを設定します。次に、豊富なビジネスプロセスコンテンツを確認するための機能の説明を続けます。これには、ビジネスプロセスモデルの表示や、提供済みのビジネスプロセスのドキュメントが含まれます。デモの最後に、チームは実装ポータルの「メモ」機能を使用して要件をバックログに取り込みます。<br /> <br /> デモではこのプロセスを直線的に示していますが、実際にはプロジェクトチームはさまざまなスコープ項目を繰り返し、標準に適合するワークショップの結果に基づいてスコープを絞り込んでいきます。Fit-to-Standardワークショップを適切に実施することは、ビジネススコープの確定、構成値の定義、統合範囲の定義、出力管理および分析のニーズの定義など、プロジェクトにとって非常に重要です。 ",
                    },
                    {
                        id: 3,
                        name: "システム・プロビジョニング",
                        content:
                            "このステップでは、チームはフィット・トゥ・スタンダードワークショップの結果を受けて、プロビジョニングの範囲を設定し、勘定科目表などの主要な値を維持し、Q-systemプロビジョニングプロセスを開始します。Q-systemは、顧客固有のスコープを有効にしてプロビジョニングされ、チームは構成活動が開始できます。",
                    },
                    {
                        id: 4,
                        name: "SAP ERP ・SAP S ・4HANA システムのトレーニングと運用",
                        content:
                            "このステップでは、プロジェクトチームはバックログを取得し、反復的なアジャイルアプローチを使用してソリューションを構成します。",
                    },
                    {
                        id: 5,
                        name: "SAP ERP ・ SAP S ・ 4HANA システムのコントロールの訓練と指導",
                        content:
                            "弊社の構成専門家が、事前に納品されたテストスクリプトを適切な値で実行し、システム内の構成が希望通りに動作することを確認します。テストスクリプトは、初期設定時だけでなく、アップグレード後のリグレッションテストでも重要な役割を果たします。",
                    },
                    {
                        id: 6,
                        name: "企業の需要に応じたトレーニング（基礎から応用まで）",
                        content:
                            "この最後のステップでは、SETA Internationalのコンサルタントチームがプロジェクトチームと協力して、データを新しいシステムにロードします。データロードツールは、システムへのロードをシミュレートします。ユーザーは結果を確認し、必要に応じて調整を行ってから、ロードアクティビティを完了できます。このプロセスはQ-systemでテストされ、生産カットオーバーの前に生産環境で繰り返されます。",
                    },
                ],
            },
        },
        sapConsulting: {
            title: "SAPコンサルティングサービス",
            description:
                "SAPのコンサルティングは、専門のコンサルタントが行うため、お客様の業務や業種に特化した多種多様なサービスを提供します。",
            items: [
                "ERP導入前のビジネスレディネスの評価",
                "ERPプロジェクト予算の作成と構築",
                "ERPアプリケーションの規模を評価し、範囲を提案します。",
                "プロジェクト実施に必要な組織や準備のリソースを相談します。",
                "ERPアプリケーションシステムの要件定義書を作成します。",
                "監修コンサルティングと実施",
            ],
        },
        magento: {
            title: "Magento開発サービス",
            description: "Eコマースビジネスを成功させるために必要な唯一のチーム",
            offer: {
                title: "提供するもの",
                items: [
                    {
                        id: 1,
                        name: "Magento ウェブの開発t",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/1.jpg",
                        description:
                            "一行もコードを書くことなく、現金を生み出す準備が整った真新しいMagentoストアを作ることができるのです。初回相談は無料です。",
                    },
                    {
                        id: 2,
                        name: "Magentoカスタム開発",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/2.jpg",
                        description:
                            "お客様のビジネス要件に合わせたフルサイクルのMagento開発。当社の認定開発者が、お客様のアイデアを高品質で実現します。私たちは、優れたサービス、迅速な市場投入、最高の価格対性能比を保証します。",
                    },
                    {
                        id: 3,
                        name: "サーバー構築・移行サービス",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/3.jpg",
                        description:
                            "Magento のサーバー構成は、深い技術的知識を必要とする複雑なプロセスです。お客様のウェブサイトを迅速かつ円滑に機能させるため、専任のスペシャリストチームがサーバーの設定や新しいサーバーへの移行を行います。",
                    },
                    {
                        id: 4,
                        name: "Magentoモバイルアプリケーション開発",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/4.jpg",
                        description:
                            "お客様のご要望に応じたモバイルアプリを作成するために、私たちにご相談ください。Magento、クロスプラットフォーム、ネイティブアプリの開発経験を生かし、お客様に最適なソリューションをご提案します。",
                    },
                    {
                        id: 5,
                        name: "Magento SEOサポート",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/5.jpg",
                        description:
                            "SEOに最適化されたウェブサイトと、お店の完全な分析に基づく継続的な改善計画を入手 - Google検索結果の上位にランクされます。",
                    },
                    {
                        id: 6,
                        name: "Magentoインテグレーションサービス",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/6.jpg",
                        description:
                            "Magento 2 を CRM システム、分析ツール、決済ソリューション、Amazon、eBay、Facebook Shop などのマーケットプレイスと連携させることができます。",
                    },
                ],
            },
            success: {
                title: "弊社のマジェントビジネスの信頼できるパートナー。",
            },
            stories: {
                title: "成功事例",
            },

            MAGENTO_SUCCESS_STORIES: [
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/1.jpg",
                    name: "CASYNET",
                    desc: "二輪車・四輪車向けECシステム",
                    type: "交通機関",
                    path: "https://casynet.com",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/2.jpg",
                    name: "HAPPYNEST",
                    desc: "家具",
                    type: "建築内部",
                    path: "https://happynest.vn/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/3.jpg",
                    name: "Coach",
                    desc: "ファッション",
                    type: "ファッション",
                    path: "https://taiwan.coach.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/4.jpg",
                    name: "H&M",
                    desc: "ファッション",
                    type: "ファッション",
                    path: "https://th.hm.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/5.jpg",
                    name: "SARI",
                    desc: "不動産情報ネットワーク",
                    type: "不動産",
                    path: "https://sari.vn/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/6.jpg",
                    name: "GRAPEOFF",
                    desc: "ワイン＆シャンパーニュ",
                    type: "fb",
                    path: "https://www.grapeoff.jp/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/7.jpg",
                    name: "BISTROVINOCELLARS",
                    desc: "ワイン＆シャンパーニュ",
                    type: "fb",
                    path: "https://www.bistrovinocellars.jp/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/8.jpg",
                    name: "MASTERCELLAR",
                    desc: "ワイン＆シャンパーニュ",
                    type: "fb",
                    path: "https://www.mastercellar.jp/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/9.jpg",
                    name: "WTM360",
                    desc: "チケット予約",
                    type: "メディア・エンタテインメント",
                    path: "https://wtm360.co.uk/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/10.jpg",
                    name: "LOCALCONNEXT",
                    desc: "ジムサービスの予約",
                    type: "ヘルスビューティ",
                    path: "http://localconnext.com",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/11.jpg",
                    name: "THINLABS",
                    desc: "コンピューター機器",
                    type: "小売",
                    path: "https://thinlabs.vugiasoftware.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/12.jpg",
                    name: "ELOGEXPRESS",
                    desc: "船荷証券管理",
                    type: "交通機関",
                    path: "http://elogexpress.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/13.jpg",
                    name: "AMAZINGRAZE",
                    desc: "スナック菓子販売",
                    type: "fb",
                    path: "https://www.amazingraze.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/14.jpg",
                    name: "SHOPBIGBADWOLF",
                    desc: "ブックストア",
                    type: "小売",
                    path: "https://my.bbwbooks.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/15.jpg",
                    name: "SB & KONCEPT FURNITURE",
                    desc: "SBデザインスクエア 家具・インテリア",
                    type: "建築内部",
                    path: "https://www.sbdesignsquare.com/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/16.jpg",
                    name: "ROHTO",
                    desc: "スキンケア製品",
                    type: "ヘルスビューティ",
                    path: "https://shop.rohto.com.vn/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/18.jpg",
                    name: "PIAS",
                    desc: "ビューティ製品",
                    type: "ヘルスビューティ",
                    path: "https://standard.integration-5ojmyuq-wnyohl5wbi5xi.ap-3.magentosite.cloud/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/19.jpg",
                    name: "PARKSON",
                    desc: "レディース、メンズ、キッズの洋服、美容グッズを扱うショップ。",
                    type: "ファッション",
                    path: "https://parksononline.com.my/",
                },
                {
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/success-stories/20.jpg",
                    name: "BEST EASTERN",
                    desc: "本・おもちゃ・その他",
                    type: "小売",
                    path: "https://shopbesteastern.com/",
                },
            ],
            MAGENTO_WHAT_WE_OFFERING: [
                {
                    id: 1,
                    title: "Magento ウェブの開発",
                    desc: "一行もコードを書くことなく、現金を生み出す準備が整った真新しいMagentoストアを作ることができるのです。初回相談は無料です。",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/1.jpg",
                },
                {
                    id: 2,
                    title: "Magentoカスタム開発",
                    desc: "お客様のビジネス要件に合わせたフルサイクルのMagento開発。当社の認定開発者が、お客様のアイデアを高品質で実現します。私たちは、優れたサービス、迅速な市場投入、最高の価格対性能比を保証します。",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/2.jpg",
                },
                {
                    id: 3,
                    title: "サーバー構築・移行サービス",
                    desc: "Magento のサーバー構成は、深い技術的知識を必要とする複雑なプロセスです。お客様のウェブサイトを迅速かつ円滑に機能させるため、専任のスペシャリストチームがサーバーの設定や新しいサーバーへの移行を行います。",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/3.jpg",
                },
                {
                    id: 4,
                    title: "Magentoモバイルアプリケーション開発",
                    desc: "お客様のご要望に応じたモバイルアプリを作成するために、私たちにご相談ください。Magento、クロスプラットフォーム、ネイティブアプリの開発経験を生かし、お客様に最適なソリューションをご提案します。",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/4.jpg",
                },
                {
                    id: 5,
                    title: "Magento SEOサポート",
                    desc: "SEOに最適化されたウェブサイトと、お店の完全な分析に基づく継続的な改善計画を入手 - Google検索結果の上位にランクされます。",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/5.jpg",
                },
                {
                    id: 6,
                    title: "Magentoインテグレーションサービス",
                    desc: "Magento 2 を CRM システム、分析ツール、決済ソリューション、Amazon、eBay、Facebook Shop などのマーケットプレイスと連携させることができます。",
                    img: "https://da8pk1kbkdsqo.cloudfront.net/images/services/magento/6.jpg",
                },
            ],
            BUTTONS_ECOMMERCE: [
                {
                    id: 1,
                    name: "全て",
                    value: "all",
                },
                {
                    id: 2,
                    name: "交通機関",
                    value: "transportation",
                },
                {
                    id: 3,
                    name: "建築・インテリア",
                    value: "architectureInterior",
                },
                {
                    id: 4,
                    name: "ファッション",
                    value: "fashion",
                },
                {
                    id: 5,
                    name: "不動産",
                    value: "real-estate",
                },
                {
                    id: 6,
                    name: "F&B",
                    value: "fb",
                },
                {
                    id: 7,
                    name: "メディア・エンターテイメント",
                    value: "mediaEntertaiment",
                },
                {
                    id: 8,
                    name: "ヘルス・ビューティー",
                    value: "healthBeauty",
                },
                {
                    id: 9,
                    name: "小売",
                    value: "retail",
                },
            ],
        },
        saleforce: {
            title: "セールスフォースサービス",
            description:
                "世界中のお客様の業務改革を推進するために、最適なSalesforceソリューションと機能の組み合わせを決定するお手伝いをします。また、これらのソリューションとオンプレミスアプリケーションを連携させるためのミドルウェアやAPIの適切な組み合わせと方法を、豊富なエンジニアリング知識で開発します。",
            offer: {
                title: "提供するもの",
                items: [
                    {
                        id: 1,
                        name: "セールスフォース・コンサルティング",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/1.jpg",
                        description:
                            "セールスフォースへの投資を最大限に活用します。当社のアジャイル戦略により、お客様は現地のエキスパートと協力しながら、当社のワールドワイドなデリバリー知識を活用することができます。業種やプロジェクトの規模にかかわらず、お客様のビジネス変革の目標に適したリソースを提供します。",
                    },
                    {
                        id: 2,
                        name: "セールスフォース・カスタム開発",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/2.jpg",
                        description:
                            "高いスキルを持つ開発チームの経験により、お客様のセールスフォースプラットフォームを次のレベルへ進化させます。",
                    },
                    {
                        id: 3,
                        name: "セールスフォースとの連携",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/services/sale-force/3.jpg",
                        description:
                            "既存のインフラにセールスフォースを効率的に統合します。当社のスペシャリストは、ミドルウェアや直接接続など、お客様のサービスを最適な方法で接続する方法を知っています。お客様のビジネスの将来を見据え、適切な方法で統合プロセスを構築・実行します。",
                    },
                ],
            },
            stories: {
                title: "成功事例",
                description:
                    "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
                items: [
                    {
                        id: 1,
                        name: "Veritone",
                        path: "case-study/veritone",
                        thumbnailUrl:
                            "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                        description:
                            "管理者チームとマーケティングチームは、メディアキャンペーンのデータを管理・観察したいため、標準機能が豊富で、かつカスタマイズが容易なシステムが必要でした。VeritoneのSalesforceシステムは、標準およびカスタマイズされたオブジェクト管理機能を備えており、データ移行用にVeritone Coreシステムを統合して開発されています。 ソリューション：セールス・クラウド、サービス・クラウド、REST API。",
                    },
                ],
            },
        },
    },
    ai: {
        title: "すべての企業がAI企業になる時代へ",
        description:
            "AIは、最終製品の開発を劇的にスピードアップさせながら、人間の活動を補強し、場合によっては置き換えていきます。AIは、特定の用途においては、すでに人間と同等かそれ以上の能力を発揮しています。企業は、生産性を加速させるために、この技術を業務プロセスに組み込むことに注力すべきです。AIによるビジネス変革のあらゆるステップで、SETAにお手伝いさせてください。",
        why: {
            title: "SETA AIを選ぶ理由",
            items: [
                {
                    id: 1,
                    name: "AI開発のフルライフサイクル",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/5.svg",
                    content:
                        "弊社のグローバルな専門家チームは、カスタムソフトウェアソリューションの戦略決定から、お客様のビジネスニーズに合った最適なソリューションの確保まで、お客様の専任パートナーとなります。システムインテグレーションからテクニカルコンサルティングまで、シームレスなエクスペリエンスを約束します。",
                },
                {
                    id: 2,
                    name: "最先端のAIデータプラットフォームを所有",
                    thumbnailUrl: "https://blueeye-web.s3-us-west-2.amazonaws.com/flow.svg",
                    content:
                        "BlueEyeは、開発期間を短縮しながら、AIモデル用の高品質な学習データが手頃なコストで提供できます。こちらでもっと見ます。",
                },
                {
                    id: 3,
                    name: "最先端モデル",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/7.jpg",
                    content:
                        "世界のトップ大学を卒業した数十名のAI開発者が、トップAIカンファレンスに定期的に参加し、クライアントと共に実世界の問題を解決しているため、一流のモデルを生み出すことができるのです。",
                },
                {
                    id: 3,
                    name: " AutoMLの統合",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/8.jpg",
                    content:
                        "AI技術的な専門知識を持たないローコードやプロフェッショナルがデータセットを最大限に活用できるように、AutoML機能をソリューションに統合しています。データセントリックなAI開発により、利用可能なデータから手間をかけずにインサイトを掘り起こします。",
                },
            ],
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    id: 1,
                    name: "Veritone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    path: "/case-study/veritone",
                    content:
                        "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮します。",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                    path: "/case-study/aeris",
                    content:
                        "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応します。",
                },
            ],
        },
    },
    arvr: {
        title: "AR・VR（拡張現実・仮想現実）",
        description:
            "AR・VR（拡張現実・仮想現実）は、現実とコンピュータによる幻想の境界を曖昧にするものです。AR/VRは、私たちの遊び方、働き方、学び方、コミュニケーションの仕方を変える可能性を秘めています。VRがユーザーを3D仮想環境に完全に没入させるのに対し、ARはコンピューターで生成された画像を取得し、それをあなたの世界観に重ね合わせます。第4の変革に移行し、あなたの会社のメタバースを構築するために、SETAにお手伝いさせてください。",
        why: {
            title: "SETA AR/VRを選ぶ理由?",
            description:
                "SETAは、教育、トレーニング、ヘルスケアなど、さまざまな業界向けにコンサルティング、アプリやゲームの開発サービスを提供します。",
            items: [
                {
                    id: 1,
                    name: "高度な技術力を持つ人材",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/1.jpg",
                    content:
                        "AR/VR/MR技術や複数の事業分野に深い専門性を持ち、高いスキルと経験を持つ数十名のエンジニアを人材として抱えます。",
                },
                {
                    id: 2,
                    name: "深い技術とドメインの専門知識",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/3.jpg",
                    content:
                        "認定を受け、最先端技術であるUnity、WebVR、Spark AR、Visual Studioを使いこなすことができるようになりました。",
                },
                {
                    id: 3,
                    name: "手頃なコスト",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/2.jpg",
                    content:
                        "オンサイトとオフショアのハイブリッドな作業モデルを導入し、すでに何百ものAR/VRプロジェクトで培った経験を活かして、お客様の時間と労力の節約を実現します。",
                },
                {
                    id: 4,
                    name: "マルチプラットフォーム対応のカスタムソリューション",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/4.jpg",
                    content:
                        "SETAは、PlayStation VR（PSVR）、Oculus Rift/Quest、Google Daydream、Google Cardboardに加え、HTC Vive、Samsung Gear VRと多数のプラットフォームを扱ってきました。",
                },
            ],
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    id: 1,
                    name: "SK Planet",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg",
                    path: "/case-study/skplanet",
                    content:
                        "SK Planetは、実際の業務を行う前に、VRヘッドセットを使った従業員向けの研修プログラムを開発しました。",
                },
                {
                    id: 2,
                    name: "Motion Global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                    path: "/case-study/motion-global",
                    content:
                        "MotionGlobalは、実際の店舗に行かなくても、AR（拡張現実）を使ってメガネを試着することができます。こちらでもっと見ます。",
                },
            ],
        },
    },
    bigData: {
        title: "ビッグデータ",
        description:
            "企業規模の大小にかかわらず、すべての企業は価値あるデータとインサイトを必要としています。ビッグデータの活用は、多くのリーディングカンパニーが競合他社を凌駕するために極めて重要です。多くの業界において、新規参入企業や既存の競合企業は、データ主導の戦略を用いて競争し、獲得し、革新しています。SETAは、データを効果的に提示し、データを適切に分析し、他社に対する競争力を高めるための支援を行います。",
        why: {
            title: "SETAの ビッグデータを選ぶ理由?",
            items: [
                {
                    id: 1,
                    name: "パートナーシップ",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/2.jpg",
                    content:
                        "Amazon、Google、Microsoftなどの有力企業と強力なパートナーシップを結び、技術の進歩やビッグデータ解析の進化に対応します。",
                },
                {
                    id: 2,
                    name: "トレーニングを受けた認定開発者",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/3.jpg",
                    content:
                        "弊社の開発者は、お客様のプロジェクトに参加する前に、厳格なトレーニングを受け、国際的な組織から認定を受けます。",
                },
                {
                    id: 3,
                    name: "実証済みのソリューション",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ar-vr/2.jpg",
                    content:
                        "IoT、クリーンエネルギー、小売、ヘルスケア、製造など様々な業界のビッグデータソリューションを設計・導入します。",
                },
                {
                    id: 4,
                    name: "最先端技術の習得",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/5.jpg",
                    content:
                        "分散ストレージ（Hadoop, S3, Azure Blob）、データベース管理（mongoDB, Amazon DynamoDB, Amazon Redshift, Hive）、データフロー（Airflow）、ビッグデータ処理（Kafka, Spark, MapReduce）から機械学習までビッグデータプロジェクトの開発サイクル全体の技術習得が可能です。",
                },
            ],
        },
        services: {
            title: "サビース",
            items: [
                {
                    id: 1,
                    name: "ビッグデータコンサルティング",
                    content:
                        "ビッグデータ導入戦略、データ品質管理に関する提言、ビッグデータソリューションアーキテクチャ＋最適なテクノロジースタックの提案、POCの実施",
                },
                {
                    id: 2,
                    name: "ビッグデータの導入",
                    content:
                        "ビッグデータのニーズ分析、ビッグデータソリューション開発（データレイク、DWH、ETL/ELT構築、データ分析（SQL、NoSQL）、ビッグデータレポート、ダッシュボード作成）、ビッグデータのガバナンス構築（ビッグデータの品質、セキュリティ等）、MLモデル開発。",
                },
                {
                    id: 3,
                    name: "ビッグデータ関連サポート",
                    content:
                        "ビッグデータソリューションの管理、ビッグデータのクリーニング、ビッグデータのバックアップとリカバリ、ビッグデータソリューションのヘルスチェック、ビッグデータソリューションのパフォーマンス監視とトラブルシューティング。",
                },
                {
                    id: 4,
                    name: "ビッグデータ・マネージド・アナリティクス・サービス",
                    content:
                        "ビッグデータソリューションのインフラ構築とサポート、ビッグデータの抽出と管理、MLモデルの開発とチューニング、事前定義済みおよびアドホックレポート。",
                },
            ],
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    id: 1,
                    name: "VERITONE",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/6.svg",
                    path: "/case-study/veritone",
                    content:
                        "Veritoneは、膨大な量のデータを継続的に収集・合成し、新旧のエネルギー資源の最適な配分方法をタイムリーに判断することで、最大限の収益性と理想的なグリッド利用を実現するため、リアルタイムの気象、需要、デバイスデータを用いてエネルギー供給ミックスを予測・最適化し、次世代スマートグリッドの動力源としています。",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/bigdata/7.jpg",
                    path: "/case-study/aeris",
                    content:
                        " Aerisは200万台以上のデバイスを管理しており、コストとエネルギーを最適化するために分析が必要な膨大な量のデータを生成しています。Google Cloud、Apache Airflow、BigQueryを採用し、デバイスの使用状況や最適化のための処理とインサイトを提供します。例えば、使用していないデバイスは電源を切って、エネルギーとコストを節約します。",
                },
            ],
        },
    },
    blockchain: {
        title: "ブロックチェーン",
        description:
            "ブロックチェーンの大きな特長は、このデジタル台帳が数百、数千のコンピュータからアクセス可能で、一箇所に保管することに縛られないことです。ブロックチェーンは、高い安全性、プロセスの透明性、オーバーヘッドや仲介コストの排除、リアルタイム取引の実現などの理由により、金融サービス、ヘルスケア、政府、旅行・接客業、小売業などの複数の業界で活用することが可能です。",
        why: {
            title: "SETAのブロックチェーンを選ぶ理由?",
            items: [
                {
                    id: 1,
                    name: "ドメインの専門知識",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/1.jpg",
                    content:
                        "金融サービス、ヘルスケア、リテールといった複数の領域でブロックチェーン技術を適用してきた多大な経験を有しています。",
                },
                {
                    id: 2,
                    name: "最先端技術",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/2.jpg",
                    content:
                        "Ethereum、Hyperledger、Tendermint、Stellarなど、ブロックチェーンの主要技術を習得します。",
                },
                {
                    id: 3,
                    name: "高い技術力を持つエンジニア",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/3.jpg",
                    content:
                        "BlockChainエンジニア、フルスタックアプリ開発者、クラウドチーム、R&Dチーム、セキュリティチームなど、組織的な組み合わせで構成されます。",
                },
                {
                    id: 4,
                    name: "セキュリティ、スケーラビリティ、スピード",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-blockchain/4.jpg",
                    content:
                        "ブロックチェーン技術の採用がパフォーマンスやスケーラビリティを阻害しないよう、最適なファブリックを使用します。",
                },
            ],
        },
        services: {
            title: "サビース",
            items: [
                {
                    name: "ブロックチェーン・コンサルティング・サービス",
                    content:
                        "クライアントの既存の分散型クライアントを現実のものにするために、様々な分散型台帳やスマートコントラクトにおける包括的なブロックチェーンソリューションを提供します。",
                },
                {
                    name: "プライベートブロックチェーン開発",
                    content:
                        "Hyperledgerに強い知見を持ち、企業向けプライベートブロックチェーンアプリケーションを構築することができます。",
                },
                {
                    name: "DAPP開発",
                    content: "優秀な開発者が安全性の高い分散型アプリケーションを提供します。",
                },
                {
                    name: "暗号通貨開発",
                    content:
                        "ブロックチェーン技術を用いたエンドツーエンドの暗号通貨開発サービスを提供し、取引、投資、トークン販売などのためのユニークなデジタルコインの構築において、クライアントを支援します。",
                },
            ],
        },
    },
    cloud: {
        title: "クラウド",
        description:
            "企業は、移り変わる今日のデジタル社会と競争力を維持するために、クラウドへの移行が必要です。SETA Internationalは、企業がクラウドの旅の途中であろうと、従来のインフラを改善し、維持し、クラウドに移行する方法を確立するために、企業と協力して支援します。",
        why: {
            title: "SETAのクラウドを選ぶ理由?",
            items: [
                {
                    id: 1,
                    name: "認定された経験豊富なエンジニア",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/1.jpg",
                    content:
                        "膨大なクラウドエンジニアのプールと、経験豊富なプロフェッショナルが管理する柔軟な作業環境を提供し、お客様は本業に集中することができます。アマゾン（AWS）、マイクロソフト（Azure）、グーグル（GCP）の主要なクラウドインフラをマスターしています。",
                },
                {
                    id: 2,
                    name: "最適化コスト",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/2.jpg",
                    content:
                        "不必要な支出を最小限に抑え、どこにお金が費やされているかを理解し管理し、最も適切で適切な量のリソースを選択し、時間の経過に伴うコストを評価し、ビジネスニーズに合わせて過剰にならないように拡張するためにあらゆる努力を払います。",
                },
                {
                    id: 3,
                    name: "ドメインの専門知識",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/3.jpg",
                    content:
                        "SETA Internationalのスペシャリストが、お客様のビジネスニーズに合わせたデータファブリック戦略の策定を支援し、ハイブリッドマルチクラウドインフラにおけるイノベーションのスピードアップとビジネス成果の向上を可能にします。",
                },
                {
                    id: 4,
                    name: "サービスの専門知識",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/cloud/4.jpg",
                    content:
                        "私たちのチームは、分析から納品、継続的なメンテナンスまで、最初から最後までクライアントを支援できます。",
                },
            ],
        },
        services: {
            title: "サビース",
            items: [
                {
                    name: "クラウドコンサルティング",
                    content:
                        "このクラウドの進化の最前線に立ち続け、仮想化とコンバージドインフラストラクチャソリューションの導入を通じて、ソフトウェアデファインドインフラストラクチャパラダイムと、クラウドコンピューティングに伴うすべての利点に向けてクライアントを導きまします。",
                },
                {
                    name: "デブオプス",
                    content:
                        "弊社のサービスは、開発者の生産性を最大化し、市場投入までの時間を短縮し、顧客満足度を向上させるために、摩擦を解消します。",
                },
                {
                    name: "クラウドエンジニアリングとマイグレーション ",
                    content:
                        "リスクを低減し、ソリューションの設計、展開、移行、統合を簡素化することで、新しいテクノロジーのメリットをより迅速にビジネスにもたらします。",
                },
                {
                    name: "クラウド管理・最適化",
                    content:
                        "コンプライアンス、監視、最適化、ガバナンスの自動化により、クラウドツールおよびサービスプロバイダを管理します。ハイブリッドクラウドとオンプレミス環境におけるストレージ運用を簡素化します。",
                },
            ],
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    id: 1,
                    name: "VERITONE",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone/1.png",
                    path: "/case-study/veritone",
                    content:
                        "Veritoneは、AWSとAzureクラウド上の大規模なAIエンジンやアプリケーションを使用して、圧倒的な量のデータを継続的に収集・合成し、スマートグリッドのモデル化、最適化、コントロール、スマートな意思決定をリアルタイムで行います。",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/9.png",
                    path: "/case-study/aeris",
                    content:
                        "エアリスでは現在、1500万台以上のデバイスを管理し、1日あたり14億件のIoTメッセージを取り扱っています。そのため、エアリスではお客様に最高のサービスを提供するために、堅牢で安全、かつ信頼性の高いクラウド基盤を設計する必要がありました。旧システムはAWSで構築されていたが、AIやビッグデータ処理機能を充実させ、より柔軟に対応するためにGCPに移行します。",
                },
            ],
        },
    },
    iot: {
        title: "IoT",
        description:
            "IOTは、接続されたデバイスの巨大なネットワークです。これらのデバイスは、センサーを介して、その使用方法や操作環境に関するデータを収集し、共有します。長年の経験から、AlexaやGoogleのホームアプリケーションの開発から、クラウド、データ分析、ハードウェアを使った様々な産業向けの複雑なIoTソリューションの構築まで、幅広くサポートします。",
        why: {
            title: "SETAのIoTを選ぶ理由?",
            items: [
                {
                    id: 1,
                    name: "認定された経験豊富な開発者",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/9.jpg",
                    content:
                        "弊社の開発者は、何百ものAlexaとGoogle Homeのアプリケーションを開発してきました。",
                },
                {
                    id: 2,
                    name: "実証済みのIoTソリューション",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/2.jpg",
                    content:
                        "自動車、スマートホーム、スマートシティのIoTソリューションを顧客と共同で設計し、200万台以上のコネクテッドデバイスをサポートしまします。",
                },
                {
                    id: 3,
                    name: "データ分析能力",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/3.jpg",
                    content:
                        "新しい技術であるクラウド、ビッグデータ処理、AIを組み合わせ、企業にインサイトを提供します。",
                },
                {
                    id: 4,
                    name: "業界横断的なドメイン知識",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/next-gen-ai/4.jpg",
                    content:
                        "多くのセグメントにおいて、世界有数の技術革新企業やフォーチュン500社にプロジェクトを提供してきた実績があります。当社の専門家は、お客様の業界のニーズを理解し、お客様のビジネスを推進するためのカスタムIoTソリューションを開発します。",
                },
            ],
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    id: 1,
                    name: "THE RESTAURANT EXPERT",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg",
                    path: "/case-study/restaurant",
                    content:
                        "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社であるTheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
                },
                {
                    id: 2,
                    name: "AERIS",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris/9.png",
                    path: "/case-study/aeris",
                    content:
                        "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                },
            ],
        },
    },
    industries: {
        title: "各業界のエキスパートと出会える",
        description:
            "10年以上の歴史と500社以上のグローバルクライアントにより、SETAインターナショナルは多くの産業にわたる幅広い知識を取得します。私たちのスペシャリストに相談することで、貴社に最適な技術的ソリューションを発見してください。",
        sectionOne: {
            title: "提供する業界",
            description: "以下のような業種のお客様をサポートさせていただきます。",
            items: [
                {
                    name: "オートモーティブ",
                    path: "/industries/automotive",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/automotive.jpg",
                },
                {
                    name: "小売",
                    path: "/industries/retail",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/retail.jpg",
                },
                {
                    name: "金融",
                    path: "/industries/finance",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/finance.jpg",
                },
                {
                    name: "メディア・エンターテイメント",
                    path: "/industries/media-entertaiment",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/ME.jpg",
                },
                {
                    name: "ヘルスケア",
                    path: "/industries/healthcare",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/health-care.jpg",
                },
                {
                    name: "セキュリティー",
                    path: "/industries/security",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/sercurity.jpg",
                },
                {
                    name: "交通機関",
                    path: "/industries/transportation",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/transporation.jpg",
                },
                {
                    name: "エネルギー",
                    path: "/industries/energy",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/offerings/energy.jpg",
                },
            ],
        },
    },
    automotive: {
        title: "オートモーティブ",
        description:
            "自動車産業は、パンデミックからなんとか回復しつつも、自動車の設計、製造、販売、サービス、融資という従来のビジネスモデルを継続しながら、新しいモビリティの世界へと疾走しています。",
        section1: {
            title: "新しいモビリティの世界へ",
            content1:
                "自動車産業は、パンデミックからなんとか回復しつつも、自動車の設計、製造、販売、サービス、融資という従来のビジネスモデルを継続しながら、新しいモビリティの世界へと疾走しています。より持続可能なエネルギーへの移行と、より住みやすい都市の推進により、便利で高速、信頼性が高く、費用対効果の高い交通手段の必要性が高まっています。コネクティビティ、自動運転、電化などのメガトレンドは、顧客の好みの変化とともに、業界とモビリティの世界をリアルタイムで形作っています。<br /> <br /> 将来の「スマートシティ」には、自動車を所有することによる個人の移動を超えたモビリティコンセプトが必要です。交通の流れを最適化することから、あらゆるモビリティサービスを利用して人々を必要な場所に移動させることへとパラダイムがシフトしています。<br /> <br />電動化と代替ドライブトレインのコンセプトは、サプライチェーンとサプライヤーの役割を変えます。彼らは、市場のさまざまなモデルを混乱させる新しいブランドやプレーヤーを紹介して、保証、アフターマーケット、および再販活動の新しい課題と機会を推進します。",
            content2:
                "自律走行車は、ドライバーを運転から解放し、得られた時間を学習や遊び、コミュニケーション、消費などに幅広く活用する機会を提供します。モノやサービスを「届ける」ための自律型オプションは、混雑を緩和し、車の利用パターンを増やすのに役立ちます。自律走行車を共有することで、モビリティソリューションは自動車を所有するよりも費用対効果が高くなる。<br /><br />コネクテッド・ビークルからのデータ「排出」は、メーカーが乗客の行動や嗜好を理解し予測するのに役立ちます。これは、情報を収益化し、ドライバーの体験と交通インフラを最適化する新たな機会を意味します。さらに、電子部品の重要性とそれに伴うライフサイクルの短さが、モジュール式車両の必要性を高めます。",
        },
        section2: {
            title: "スマートモビリティとトランスフォーメーション",
            description:
                "自動車業界の新たなビジネスモデルは、車両の購入とリースに対する補完的で代替的なソリューションを提供します。これらの新しいビジネスモデルは、顧客に提供される価値に重点を置いており、自動車の購入とリース、およびその他のモビリティ関連サービスに柔軟で便利な選択肢を提供します。自動車会社は、シームレスなビジネスネットワークの一部として、サブスクリプションやその他のサービスとしての新しいモビリティモデルをサポートし、環境と持続可能性の観点からの全体的な影響を考慮できる必要があります。",
            items: [
                {
                    name: "サブスクリプション契約",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/1.png",
                },
                {
                    name: "デジタルコンテンツの消費",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/2.png",
                },
                {
                    name: "利用状況データのモニタリング",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/3.png",
                },
                {
                    name: "請求書発行",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/automotive/icons/4.png",
                },
            ],
        },
        section3: {
            title: "コネクティッドカー",
            description:
                "自動車は、よりインテリジェントでコネクティッドな存在になりつつあります。自動車は、新しいアプリケーションやサービスを提供するためのプラットフォームとして機能し、メーカーに一定のフィードバックループを提供することが多くなっています。しかし、現在の車両とその使用に関するプロセスや情報システムは、サイロ化され、切り離されています。さまざまな関係者が「要求・受信」というモデルに依存していますが、これはもはや効率的ではありません。OEM、モビリティサービス会社、自動車部品メーカー、ディーラー、サービスプロバイダー、そしてエンドユーザーとの間で、大量のデータを非同期で継続的に交換する必要があります。自動車のバリューチェーン全体で新しいビジネスプロセスを効果的に実行し、新しい収益化の流れを実現するためには、関係者が同じ、最新の、一貫性のある車両情報にアクセスする必要があります。これにより、コラボレーションとイノベーションが可能になり、デジタルサービスのビジネスポテンシャルを実現することができます。",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "AERIS",
                    content:
                        "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                    path: "/case-study/aeris",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                },
            ],
        },
    },
    energy: {
        title: "エネルギー",
        description:
            "エネルギーやサステナビリティに関するアドバイスから、資産のライフサイクル管理に至るまで、お客様のビジネスニーズに合ったサービスを提供しています。",
        section1: {
            title: "明るい未来のために、つながる力を。",
            description:
                " SETA Internationalは、カーボンニュートラルな未来への移行の一環として、旧式のネットワークを近代化し、スマートグリッドで成功を確実なものにしています。",
            items: [
                {
                    name: "スマートグリッドとは何ですか?",
                    content:
                        "スマートグリッドは、発電機から消費者に電力を運ぶだけではありません。デジタル技術を駆使して、発電事業者、消費者、その両方を含む、スマートグリッドに接続するすべてのユーザーの行動や行為に関するあらゆる種類のデータや情報を交換することができるのです。 <br /><br /> スマートグリッド技術は、電力の流れを最適化し、損失をなくし、系統拡張の必要性をなくし、風力や太陽光発電の出力など、変動する再生可能エネルギーの消費と統合を大規模に能動的に管理することを支援するものです。",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/2.jpg",
                },
                {
                    name: "スマートグリッドを選ぶ理由?",
                    content:
                        "SETA International でデジタル グリッドの可能性を解き放ち、持続可能なネットワークの効率を高めます。",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/3.jpg",
                },
                {
                    name: "グリッド効率の最大化",
                    content:
                        "新しい法律により配電会社にネットワークの効率化が求められる中、スマートグリッド機能を活用し、規制の効率基準を達成し、それを上回る革新的な方法を提供します。",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/4.jpg",
                },
                {
                    name: "停電の軽減",
                    content:
                        "停電は増加の一途をたどっており、停電による生産性や売上の損失は数百万ドルにのぼる可能性があります。そのため、停電を回避し、送電網の信頼性を高めるには、FLISR技術の向上が欠かせません。",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/energy/5.jpg",
                },
            ],
        },
        section2: {
            title: "低炭素社会の実現に貢献",
            description:
                "低炭素社会の実現に向けた規制要件を上回るためには、電力会社はスマートグリッドやマイクログリッドの機能を活用し、より環境に配慮したスマート開閉器や循環型経済戦略といった現行の戦術を採用する必要があります。",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "グリーンエネルギーマネジメントの未来に出会う",
                    path: "/case-study/veritone",
                    content:
                        "Veritone iDERMS ソリューションは、AIの力を活用し、独自のインテリジェントなリアルタイムエネルギー予測、最適化、制御を通じて、今日のエネルギーエコシステムに革命をもたらします。予期せぬ事態に直面しても、グリッドの信頼性を高めながら、DERの潜在能力を最大限に引き出します。",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/portfolio/veritone.jpg",
                },
            ],
        },
    },
    finance: {
        title: "金融ソフトウェア開発サービス",
        description:
            "Intellias でデジタル イノベーションのペースを加速し、金融ソフトウェア開発の新時代を迎えます。新しい技術ソリューションを求めます。金融分野における最新の技術革新（AI、ML、ビッグデータ）に支えられた本格的な商品開発戦略を実現し、信頼できる金融ソフトウェア開発パートナーとして、ディープドメインの専門知識を持ち込みます。",
        section1: {
            title: "金融サービスにおける最大のチャレンジは何ですか？",
            description:
                "銀行、保険、資産管理など、SETA International は、金融サービス会社がフロントオフィス、ミドルオフィス、バックオフィスにわたって結束して働き、顧客との関係を深め、顧客価値を最大化し、世界クラスの顧客サービスを提供できるよう支援します。",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            img: "https://da8pk1kbkdsqo.cloudfront.net/images/industries/finance/1.jpg",
            items: [
                {
                    id: 1,
                    name: "Avia",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/2.jpg",
                    path: "/case-study/avia",
                    content:
                        "AVIAは、最新のテクノロジーと伝統的なブティック型顧客サービスを融合させた、これまでにないリアルタイムのデジタル・チャーター便市場です。AVIA独自の技術は、名目上の価格、乗客ゼロ、ポジショニングのフライトと金銭感覚に優れた乗客との接続に特化しています。これらの「空の足」は小銭で売ることができ、ビジネスクラスの商業フライトと真のプライベートチャーター体験の間のコストギャップを埋めることができます。",
                },
                {
                    id: 2,
                    name: "SysPro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/2.jpg",
                    path: "/case-study/syspro",
                    content:
                        "シスプロは、ビジネス・ソフトウェア・ソリューションとサービスを提供する独立系国際ベンダーの中で、最も長い歴史を持つ企業の1つです。ERP業界で30年以上の経験を持つ当社は、豊富な知識でお客様のビジネスニーズに合わせたシステム構築をサポートします。",
                },
                {
                    id: 3,
                    name: "Beauty Encounter",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg",
                    path: "/case-study/beauty-encounter",
                    content:
                        "Beauty Encounter は、香水と美容製品の一流オンライン販売店で、男性用および女性用の香水、スキンケア、化粧品、ヘアケア、美容アクセサリーなど、入手困難な海外製品や専門製品を、消費者に提供しています。1,100を超えるユニークなブランドを有し、毎日新しい商品が追加されているため、お客様は優れたカスタマーサービスと安全なオンラインショッピングを利用することができます。手頃な価格で購入できる何千もの美容製品に加えて、Beauty Encounter の買い物客は、ヒント、トレンド、テクニックを紹介するユニークなセクションを見つけることができます。",
                },
            ],
        },
    },
    healthcare: {
        title: "医療用ソフトウェア開発",
        description:
            "SETA Internationalは、ヘルスケア分野の企業と提携し、技術革新を活用して社内プロセスを自動化し、顧客体験を強化し、医療情報をより効率的に管理できるよう支援しています。私たちは、患者、医師、医療保険会社、製薬会社、医療機器ベンダー間のコミュニケーションを合理化する、安全で規制に準拠したソフトウェアソリューションを構築し、弾力性のあるヘルスケアエコシステムの構築を加速させることを目指しています。",
        descriptionTwo:
            "SETA Internationalは、ヘルスケア分野の企業と提携し、技術革新を活用して社内プロセスを自動化し、顧客体験を向上させ、医療情報をより効率的に管理するための支援を行っています。",
        section1: {
            title: "SETA Internationalが提供する医療用ソフトウェア開発サービスは、以下の分野を含みます。",
            items: [
                {
                    name: "患者様との関わり",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/1.png",
                    content:
                        "ウェブ、電話、対面でのシームレスなコミュニケーションにより、パーソナライゼーションとリテンションを促進",
                },
                {
                    name: "プレシジョン・メディシン",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/2.png",
                    content:
                        "患者さん固有のゲノム特性に基づいた、治療分野横断的なデータ駆動型医療へ移行します。",
                },
                {
                    name: "モバイルヘルス",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/3.png",
                    content:
                        "消費者のニーズに合わせたmHealthソリューションとデジタル・セラピューティクス・アプリで健康管理を支援します。",
                },
                {
                    name: "テレヘルス",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/4.png",
                    content:
                        "便利な遠隔診察と安全なバーチャル・コラボレーションを可能にし、医療へのアクセスを拡大します。",
                },
                {
                    name: "医療用ウェアラブル",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/5.png",
                    content:
                        "先進のソフトウェアとインテリジェントなUXを備えた健康志向のデバイスで、予防医療への道を切り開く",
                },
                {
                    name: "オペレーション管理",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/heathcare/6.png",
                    content:
                        "スマートな自動化と医療ワークフローの可視化により、業務とプロセスを合理化します。",
                },
            ],
        },
        section2: {
            title: "データ駆動型のパーソナライズされたケアを提供するための革新的な戦略を実装する準備はできていますか?",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "MedTalk",
                    path: "/case-study/medtalk",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/2.jpg",
                    content:
                        "MedTalkは、米国のいくつかの大病院向けにヘルスケア・アプリケーションを開発したパイオニア的なスタートアップです。2人の有名な医師によって設立された。",
                },
                {
                    name: "Ujazo",
                    path: "/case-study/ujazo",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/2.jpg",
                    content:
                        "Ujazoは、消費者が自分の健康状態を認識し、より注意を払う必要がある分野を改善する方法を見出すことを第一の使命として設立されました。",
                },
            ],
        },
    },
    media: {
        title: "メディアとエンターテインメント",
        description:
            "メディア＆エンターテインメント（M&E）業界は、新旧が共存し続ける変革期を迎えています。インタラクティブ化、デジタル化、マルチプラットフォーム化、マルチデバイス化、サービスベースのグローバル化により、この10年でメディア＆エンターテインメント業界は大きく変貌を遂げました。",
        sectionOne: {
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/1.jpg",
            content:
                "メディア＆エンターテインメント（M&E）業界は、新旧が共存し続ける変革期を迎えています。インタラクティブ化、デジタル化、マルチプラットフォーム化、マルチデバイス化、サービスベースのグローバル化により、この10年でメディア＆エンターテインメント業界は大きく変貌を遂げました。<br /> <br /> メディア・エンターテインメント（M&E）産業は、映画・シネマ、テレビ、音楽、出版、ラジオ、インターネット、広告、ゲームなど、複数のセグメントが1つの垂直統合されたものです。さらに、各分野のトレンドやドライバーは、サブセグメント、地域、消費者層によって異なっています。これらのサブセグメントが競争し、補完し、組み合わさって、世界的に増え続けるエンターテインメントと情報への需要を満たすからこそ、この垂直統合がユニークなのです。",
        },
        tabOne: {
            label: "広告",
            title: "成果を上げるための実績のあるAIと広告サービス",
            content:
                "AI対応のアプリケーションと広告サービスは、キャンペーンのパフォーマンスを最適化し、ROIを促進するように設計されています。放送局は、アプリケーションを活用して、顧客にほぼリアルタイムのアトリビューションデータを提供し、VeriAdsの柔軟なライブリード広告在庫を通じて増分収益を生み出します。ブランドは、Oneの広告サービスを活用し、AIを活用したインサイトによって高いパフォーマンスを発揮するキャンペーンを実施します。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/3.jpg",
        },
        tabTwo: {
            label: "スポーツ",
            title: "ワークフローとコンテンツ活用を加速させるスポーツ向け実証済みAI",
            content:
                "一流のスポーツ組織に信頼されているSETA Internationalは、大量のメディアコンテンツを、顔、名前、ロゴなどで簡単に検索できるインテリジェントコンテンツに変えます。ビデオ、オーディオ、静止画を安全な一箇所で管理できるため、ワークフローが加速され、コンテンツの活用、ファンエンゲージメント、収益源の多様化を促進する機会を得ることができます。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/5.jpg",
        },
        tabThree: {
            label: "ラジオ",
            title: "ラジオで実績のあるAI：放送を分析し、広告効果を実証する",
            content:
                "ラジオネットワークとラジオ局のためのAI搭載のアプリケーションとサービスは、放送分析だけでなく、広告のアトリビューションとライブリードの統合を次のレベルへと導きます。マルチタッチの全国的な広告キャンペーンでアトリビューションを実行する機能により、ブランドの言及、トピック、イベント報道などをモニターできます。さらに、MicroMentions™を番組に組み込んで、柔軟なライブリード広告インベントリーを利用することで、収益を増加させることができます。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/media-entertaiment/6.jpg",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "VERITONE",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    path: "/case-study/veritone",
                    content:
                        "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                },
                {
                    name: "THE RESTAURANT EXPERT",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg",
                    path: "/case-study/restaurant",
                    content:
                        "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社であるTheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
                },
                {
                    name: "TEACHERZONE",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                    path: "/case-study/teacher-zone",
                    content:
                        "Teacher Zoneは、学習者の興味を引き、管理を自動化し、ビジネスをコントロールするためのオールインワン・プラットフォームです。Teacher Zone は、より組織化され体系化された練習課題を学習者に提供するためのプラットフォームを提供してくれています。チャット機能は、生徒同士の交流を促し、クラス外のコミュニティを構築する方法として、素晴らしいものです。",
                },
                {
                    name: "Motion Global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                    path: "/case-study/motion-global",
                    content:
                        "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。アジア太平洋地域、ヨーロッパ、アメリカ大陸に拠点を置き、10年以上にわたって20カ国以上でマーケットリーダーとして活躍しています。",
                },
                {
                    name: "SK Planet",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/2.jpg",
                    path: "/case-study/skplanet",
                    content:
                        "AppFactoryは、革新的なモバイルサービスのリーダーとして世界的に知られ、尊敬を集めているSK Planetが2012年に設立した新会社です。AppFactoryのミッションは、素晴らしいアイデアをグローバル市場向けの魅力的なモバイルアプリに変換することです。SK Planetは、2011年11月にSK Telecomによって、ニューメディアやデジタルコンテンツなどのグローバルビジネスにフォーカスする目的で設立されました。",
                },
            ],
        },
    },
    retail: {
        title: "小売業向けソフトウェア開発サービス",
        descriptionOne:
            "SETA Internationalは、小売業者が破壊的なリテール技術を使って、あらゆるチャネルで一貫した顧客中心のショッピング体験を提供できるよう支援します。お客様のビジネスが現在直面している痛点を定義し、正しい戦略を適用し、成長を促進するためのイノベーションを活用できるよう支援します。消費者行動とコンバージョンの動機付けを研究し、強力な技術的専門知識を適用することで、私たちの小売ソフトウェア開発サービスによって、あなたの小売ビジネスを次のレベルの効率に導きます。",
        descriptionTwo:
            "SETA Internationalは、小売業者が破壊的なリテール技術を使って、あらゆるチャネルで一貫した顧客中心のショッピング体験を提供できるよう支援します。私たちは、お客様のビジネスが現在直面している痛点を定義し、正しい戦略を適用し、成長を促進するためのイノベーションを活用できるよう支援します。",
        sectionOne: {
            title: "小売店向けソフトウェア開発サービスは、どのような場合に必要でしょうか？",
            items: [
                {
                    content:
                        "<li>ターゲットを理解し、進化するニーズを検証するのに苦労している場合</li><li>コンバージョンレートが低すぎて、改善策を模索している場合</li><li>コストがかさみ、ROIが改善されない場合</li><li>ビジネスの成長を加速させる必要があるが、スピードとアジリティに欠けている場合</li></ul>",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/retail/1.jpg",
                },
                {
                    content:
                        "<strong class='text-[#2C5282]'>SETA International は、これらのチャレンジへの取り組みを支援します</strong><p>小売ソフトウェアサービスで、競争市場における貴社の差別化を支援します。AIセグメンテーション、行動分析、インドアポジショニングなどの主要な成長実現技術や新しいデジタル機能に投資することで、デジタルビジネス戦略を強化します。</p>",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/industries/retail/2.jpg",
                },
            ],
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "Motion Global",
                    path: "/case-study/motion-global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                    content:
                        "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。アジア太平洋地域、ヨーロッパ、アメリカ大陸に拠点を置き、10年以上にわたって20カ国以上でマーケットリーダーとして活躍しています。",
                },
                {
                    name: "Beauty Encounter",
                    path: "/case-study/beauty-encounter",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg",
                    content:
                        "Beauty Encounter は、香水と美容製品の一流オンライン販売店で、男性用および女性用の香水、スキンケア、化粧品、ヘアケア、美容アクセサリーなど、入手困難な海外製品や専門製品を、消費者に提供しています。1,100を超えるユニークなブランドを有し、毎日新しい商品が追加されているため、お客様は優れたカスタマーサービスと安全なオンラインショッピングを利用することができます。手頃な価格で購入できる何千もの美容製品に加えて、Beauty Encounter の買い物客は、ヒント、トレンド、テクニックを紹介するユニークなセクションを見つけることができます。",
                },
            ],
        },
    },
    security: {
        title: "セキュリティ",
        description:
            "企業のビジネスがどこに行こうとも、誰と仕事をしようとも、すべてをカバーするサイバーセキュリティが必要です。",
        sectionOne: {
            title: "ビジネスのあらゆる部分をより強靭にする",
            content:
                "お客様のビジネスエコシステムとバリューチェーンの拡大に合わせて、サイバー脅威への耐性を高めるための取り組みを行います。 <br /> <br /> いつでも。いつでも、どこでも。お客様固有のビジネスニーズに合わせたサイバーセキュリティを構築します。プロアクティブで集中的な、業界に関連した脅威のインテリジェンスによってサイバー攻撃を防御し、お客様のビジネスが安全であることを確信できるようにします。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/industries/security/1.png",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "TrendMicro",
                    path: "/case-study/trendmicro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg",
                    content:
                        "トレンドマイクロは、クラウドセキュリティのグローバルリーダーとして、インターネットコンテンツセキュリティと脅威管理ソリューションを開発し、企業や消費者が安全にデジタル情報を交換できる世界を実現しています。20年以上の実績を持つトレンドマイクロは、物理環境、仮想環境、クラウド環境において、脅威を迅速に阻止し、データを保護するトップクラスのクライアント、サーバ、およびクラウドベースのセキュリティソリューションを提供するサーバセキュリティのマーケットリーダーとして認められます。",
                },
                {
                    name: "Veritone",
                    path: "/case-study/veritone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    content:
                        "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                },
            ],
        },
    },
    transportation: {
        title: "輸送・ロジスティクスソフトウェアソリューション",
        description:
            "SETA Internationalは、輸送会社、貨物輸送会社、物流会社、およびデジタルソリューションベンダーが、費用対効果の高いテクノロジーへの道を歩むのを支援します。当社の物流ソフトウェア開発サービスを利用することで、配送ルートの最適化、車両運用コストの削減、交通渋滞の最小化、顧客に対する配送体験の向上が可能になります。",
        sectionOne: {
            title: "輸送物流のためのテクノロジー・エコシステム",
            content:
                "SETA Internationalでは、運輸会社、物流サービスプロバイダー、地理空間データプロバイダーが、クロスドメインな輸送ソフトウェアソリューションを作成するお手伝いをします。物流ソフトウェア開発会社として、地図、ナビゲーション、空間データ分析、プラットフォーム統合の深い専門知識を適用し、全体的な顧客体験を向上させ、予算を賢く配分し、物流ビジネスを持続的に成長させます。私たちは、サプライチェーンをデジタル化するために、お客様の輸送・物流ソフトウェアソリューションの周辺に、技術、プロセス、アプローチの完全なエコシステムを構築します。",
            thumbnailUrl:
                "https://da8pk1kbkdsqo.cloudfront.net/images/industries/transportation/1.jpg",
        },
        stories: {
            title: "成功事例",
            description:
                "成功は簡単に達成できるものではありませんが、信頼できるパートナーと効果的なコラボレーションがあれば、厳しい試みをしなくても成功を収めることができます。私達と一緒に。",
            items: [
                {
                    name: "Avia",
                    path: "/case-study/avia",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/2.jpg",
                    content:
                        "AVIAは、最新のテクノロジーと伝統的なブティック型顧客サービスを融合させた、初のリアルタイム・デジタル・チャーター市場です。 AVIA独自のテクノロジーは、名目上の価格、乗客ゼロ、ポジショニングフライトと金銭感覚に優れた乗客の接続に特化しています。これらの「空の足」は、小銭で売ることができ、ビジネスクラスの商業フライトと真のプライベートチャーター体験の間のコストギャップを埋めることができます。",
                },
                {
                    name: "TollRoad",
                    path: "/case-study/tollroads",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/2.jpg",
                    content:
                        "ワンタイム料金の支払い、FasTrakアカウントの新規登録、FasTrakアカウントのメンテナンス（車両変更、支払い、料金履歴、トランスポンダーのメンテナンスなど）を提供します。",
                },
            ],
        },
    },
    caseStudy: {
        title: "SETAの事例紹介",
        description:
            "SETA Internationalは、デジタルプラットフォーム、AIソリューション、スマートシティ、IoT、AR/VRなどにおいて、世界トップクラスのサービスを提供しています。SETA Internationalがどのようにビジネス上の課題を克服し、有利な結果を達成するのに役立っているか、お客様の成功事例をご覧ください。",
        sectionOne: {
            title: "事例紹介",
            items: [
                {
                    name: "VERITONE",
                    path: "/case-study/veritone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/veritone.jpg",
                    content:
                        "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
                },
                {
                    name: "AERIS",
                    path: "/case-study/aeris",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/aeris.jpg",
                    content:
                        "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応しています。",
                },
                {
                    name: "THE RESTAURANT EXPERT",
                    path: "/case-study/restaurant",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/restaurant.jpg",
                    content:
                        "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社であるTheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
                },
                {
                    name: "Teacherzone",
                    path: "/case-study/teacher-zone",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone.png",
                    content:
                        "Teacher Zoneは、学習者の興味を引き、管理を自動化し、ビジネスをコントロールするためのオールインワン・プラットフォームです。Teacher Zone は、より組織化され体系化された練習課題を学習者に提供するためのプラットフォームを提供してくれています。チャット機能は、生徒同士の交流を促し、クラス外のコミュニティを構築する方法として、素晴らしいものです。",
                },
                {
                    name: "STELUX",
                    path: "/case-study/stelux",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/1.jpg",
                    content:
                        "ステラックスは、香港、シンガポール、マレーシアで長年にわたり卸売業を営んでおり、産業用高級腕時計と光学機器の製造、小売、卸売のトップ企業の一つです。",
                },
            ],
        },
        sectionTwo: {
            items: [
                {
                    name: "Beauty Encounter",
                    path: "/case-study/beauty-encounter",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/2.jpg",
                },
                {
                    name: "Med Talk",
                    path: "/case-study/medtalk",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/7.png",
                },
                {
                    name: "SK Planet",
                    path: "/case-study/skplanet",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/3.jpg",
                },
                {
                    name: "Avia",
                    path: "/case-study/avia",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/3.jpg",
                },
                {
                    name: "Motion Global",
                    path: "/case-study/motion-global",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/3.jpg",
                },
                {
                    name: "The tollroad",
                    path: "/case-study/tollroads",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/4.jpg",
                },
                {
                    name: "SysPro",
                    path: "/case-study/syspro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/3.jpg",
                },
                {
                    name: "TrendMicro",
                    path: "/case-study/trendmicro",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/trendingmicro/3.jpg",
                },
                {
                    name: "Ujazo",
                    path: "/case-study/ujazo",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/7.jpg",
                },
                {
                    name: "R1 Concept",
                    path: "/case-study/r1",
                    thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/1.jpg",
                },
                {
                    name: "EyeD Optics",
                    path: "/case-study/eyed-optics",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/optics/1.jpg",
                },
                {
                    name: "Panavision",
                    path: "/case-study/panavision",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/panavision/1.jpg",
                },
                {
                    name: "Ujazo",
                    path: "/case-study/ujazo",
                    thumbnailUrl:
                        "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ireland/1.jpg",
                },
            ],
        },
    },
    aeris: {
        title: "Aeris について",
        description:
            "エアリスは、企業がIoTを通じて価値を解放するのを支援してきた実績のあるテクノロジーパートナーです。IoTのためにゼロから構築され、世界規模でテストされたエアリスIoTサービスは、Aeris Connectivity Platform (ACP) やAeris Mobility Suite (The Suite) など、業界で最も幅広いテクノロジースタックに基づいており、接続性から動くもののための垂直ソリューションまで幅広く対応します。",
        challenge: {
            title: "チャレンジ",
            description:
                "Aerisは、南米、フィリピン、インド、ベトナムなど世界中に様々なアウトソーシングパートナーを抱えており、リソーシングと品質の面で管理が難しい状況です。IOS/Androidのネイティブ開発、Flutter、React、NodeJS、Python、Javaなど多様な技術スキルを持つ信頼できるパートナーに、すべてのアウトソーシングサービスを集約したいとエアリス社は考えます。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/2.jpg",
        },
        solution: {
            title: "Solution",
            description:
                "SETAは、自動車用コネクティビティとIoTプロジェクトに従事する20人以上の高品質なリソースを提供することができます。",
        },
        projects: [
            {
                name: "IoTコネクティビティ・マネジメント",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/IoT-Connectivity-Management.jpg",
                content:
                    "Aeris Fusion IoT Networkは、AerPortとAPIを通じて、接続されているキャリアやテクノロジーに関係なく、すべての接続デバイスを単一ペインでトップダウン表示することが可能です。Aeris IoT接続管理は、デバイスのライフサイクル全体を管理し、問題を特定し、自動的にアクションを起こすための強力なツールを提供し、デバイスの導入管理に必要な時間とリソースの量を大幅に削減します。",
            },
            {
                name: "Aeris Mobility Suite",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/Aeris-Mobility-Suite.jpg",
                content:
                    "コネクテッドワールドで勝つために必要なツールを自動車会社に提供する。エアリスは、エンドツーエンドのコネクテッドビークル技術を提供し、世界最大の自動車OEM向けに複雑でグローバルなプログラムを展開した深い経験を有しています。",
            },
        ],
        result: "Aeris Mobility Suiteの活用事例",
    },
    avia: {
        title: "Aviaについて",
        description:
            "AVIAは、最新のテクノロジーと伝統的なブティック型顧客サービスを融合させた、これまでにないリアルタイムのデジタル・チャーター便市場です。AVIA独自の技術は、名目上の価格、乗客ゼロ、位置づけのフライトと金銭感覚に優れた乗客との接続に特化しています。これらの「空の足」は小銭で売ることができ、ビジネスクラスの商業フライトと真のプライベートチャーター体験の間のコストギャップを埋めることができます。",
        challenge: {
            title: "チャレンジ",
            description:
                "​AVIAは、安全なiOSアプリケーションとプラットフォームの構築、堅牢で拡張性の高いバックエンドインフラの構築、および決済ソリューションの統合を望んでいます。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/avia/1.jpg",
        },
        solution: {
            title: "ソリューション",
            description:
                "AWS認定エンジニアを擁するSETA Internationalは、Amazon Web Servicesを活用したシステム設計を行い、可用性の高いクラウドインフラ上で最高水準のソフトウェアプラットフォームを実現しました。",
            content:
                "<ul className='text-white text-lg mt-5'> <li>- PHP Laravel（ウェブサイト開発）</li> <li>- Route53 (DNS サビース)</li> <li>- Elastic Load Balancing (パフォーマンス向上)</li> <li>- EC2 (コード)</li> </ul> <ul className='text-white text-lg mt-5'> <li>- VPC (セキュリティ)</li> <li>- Amazon S3 (保管)</li> <li>- Amazon API Gateway (APIコール)</li> <li>- Amazon Simple Email Service (メールプロバイダ)</li> </ul>",
        },
    },
    beautyEncounter: {
        title: "Beauty Encounterについて",
        description:
            "Beauty Encounter は、香水と美容製品の一流オンライン販売店で、男性用および女性用の香水、スキンケア、化粧品、ヘアケア、美容アクセサリーなど、入手困難な海外製品や専門製品を、消費者に提供しています。1,100を超えるユニークなブランドを有し、毎日新しい商品が追加されているため、お客様は優れたカスタマーサービスと安全なオンラインショッピングを利用することができます。手頃な価格で購入できる何千もの美容製品に加えて、Beauty Encounter の買い物客は、ヒント、トレンド、テクニックを紹介するユニークなセクションを見つけることができます。",
        challenge: {
            title: "チャレンジ",
            description:
                "競争の激しい市場で成功するためには、Amazonや楽天などの様々な市場で競合他社と競争するために、多くのユーティリティを開発する必要があります。",
            thumbnailUrl:
                "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/beauty-counter/1.jpg",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAはBeauty Encounterと正式契約を締結し、同社の製品開発ロードマップを支援することになりました。SETAはBeauty Encounterと3年以上にわたって協働しており、これにより同社は運営コストを最小限に抑え、製品ロードマップの拡張を支援し、開発組織内の効率を最大化することができます。",
        },
    },
    eyedOptics: {
        title: "EyeD Opticsについて",
        description:
            "EyeD Optics社は、デザイナーズ・グラス、サングラス、処方箋レンズの製造・販売会社で、SETAと契約し、同社のeコマース・サイトとバックエンド管理プラットフォームを構築しています。",
        value: {
            title: "価値",
            items: "エンドユーザーがオンラインでメガネフレームやレンズを閲覧、選択し、さまざまなスタイルを試着して購入できるEコマースサイトを開発。 <br /><br /> 様々なマーケットプレイス（Amazon、eBay、楽天、Sears、New Egg）に商品を出品するプラットフォームを構築。 <br /> <br /> Amazon、eBay、自社ECサイトなど、複数の販売チャネルから注文を集め、処理、処理、出荷できるよう、受注管理モジュールを構築。すべての販売チャンネルが同じ在庫を共有。",
        },
    },
    idaIreland: {
        title: "IDA Irelandについて",
        description:
            "IDA またはアイルランドの対内投資促進機関は、アイルランドへの外国投資の誘致と開発を担当しています。",
        value: {
            title: "価値",
            description:
                "SETAは52インチのタッチスクリーン・インタラクティブ・キオスクを2台制作し、2009年にカリフォルニア州パサデナで開催されたFortune Technology Eventで展示されました。",
        },
    },
    medtalk: {
        title: "MedTalkについて",
        description:
            "MedTalkは、米国の大病院向けにヘルスケア・アプリケーションを開発した先駆的なスタートアップです。2人の著名な医師によって設立されました。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/medtalk/1.jpg",
            description:
                "スタートアップ企業の創業者たちは、ソフトウェア開発に関する知識を持っていませんでした。彼らは、革新的なアイデアの設計と実装を手助けしてくれる信頼できるパートナーを必要としていました。",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETA は、医療業界でのメッセージングに最適なプラットフォームとして機能するエンド ツー エンドのモバイル メッセージング プラットフォームを構築するために、MedTalk によって選ばれました。 <br /><br /> このプラットフォームとソリューションは、医師とそのオンコールスタッフの間のコミュニケーションにおいて、コミュニケーションレスポンスの遅れやタイムラグといった、現在の非効率的な状況を解決するためのものです。MedTalkは、革新的なアイデアを持つ2人の医師によって設立されましたが、彼らのビジネス・ビジョンを具体的なプラットフォームへと構築・発展させるための強力な技術パートナーを必要としていました。",
        },
    },
    motionGlobal: {
        title: "Motion Globalについて",
        description:
            "Motion Global は、世界最大級のデザイナー眼鏡のeコマース企業であるSmartBuyGlasses Optical Groupを運営しています。アジア太平洋地域、ヨーロッパ、アメリカ大陸に拠点を置き、10年以上にわたって20カ国以上でマーケットリーダーとして活躍しています。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl:
                "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/motion-global/1.jpg",
            description:
                "Motion Global がグローバルにビジネスを展開し、世界中で 100 以上の eコマースサイトを技術的に維持するために、上海で十分な質の高いリソースを見つけることは困難であり、時間もかかりました。そこで、中国本土の他の都市、インド、フィリピン、ベトナムでアウトソーシングサービスを探し始めたのです。開発アウトソーシングの経験もなく、多くの業者が存在する中で、最終的な決断を下すのは容易なことではありません。",
        },
        solution: {
            title: "ソリューション",
            description:
                "幸運にも、MotionGlobalのCEOは、信頼できるパートナーからSETAを紹介されました。5年以上にわたって、SETAチームはフロントエンドとバックエンドの両方の開発でMotionGlobalを支援し、eコマース・プラットフォームのすべての技術的要素に関与しています。",
        },
    },
    panavision: {
        title: "Panavisionについて",
        description: "パナビジョンは、ハリウッドを代表する映像のブランドです。",
        value: {
            title: "Value",
            content:
                "SETAが作成したiPhoneアプリケーションは、2日目にはiTunesで最もダウンロードされたアプリケーションのトップ200に昇格しました。 <br /> <br /> SETAでは、iPhoneを体験してもらうために、ウェブサイトを作成しました。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/panavision/2.jpg",
        },
    },
    r1: {
        title: "R1 Conceptについて",
        description:
            "R1 Conceptsは、自動車用OEMおよびアフターマーケット用高性能ブレーキ部品の大手製造・販売業者です。 彼らはSETAと契約し、既存のシステムに代わる包括的なカスタムeコマースおよび在庫・注文管理ソリューションを構築しました。",
        value: {
            title: "価値",
            content:
                "SETAはiPhoneアプリケーションを制作し、2日目にはiTunesで最もダウンロードされたアプリケーションのトップ200に昇格しました。また、SETAは彼らのiPhone体験のためのウェブサイトも作成しました。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/r1/2.jpg",
        },
    },
    restaurant: {
        title: "The Restaurant Expert (TRE)について",
        description:
            "オンラインレストラン管理ソフトウェアであるRestaurantSystemsProは、レストランのトレーニングおよびコーチング会社であるTheRestaurantExpert.comによって、独立したレストラン向けにゼロから開発されました。レストランは経営が最も難しいビジネスの1つですが、適切なシステムを運用に適用すれば、やりがいがあり、収益を上げることができます。それが私たちが提供するもの、つまり適切なシステムです。",
        challenge: {
            title: "チャレンジ",
            description:
                "TRE は社内の IT チームが少なく、ソフトウェア開発のスピードアップと生産性の維持のために、外部の開発者に多くを依存する必要がありました。TREは、あるアウトソーシング・ベンダーと仕事をした際にひどい目に遭ったため、その場をしのぐために信頼できるパートナーを必死で探していました。以前のアウトソーシング・ベンダーは、コミュニケーションが難しく、納品結果は最悪で、スピードも遅く、その上コストも高かったのです。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/3.png",
        },
        solution: {
            title: "Solution",
            description:
                "TREが多くのコンサルタントと話をし、SETAのリソースを慎重にヒアリングした結果、SETAが選ばれました。 <br className='hidden md:block' /> SETAは、旧システムをAWSクラウドと.NET技術に移行しました。 <br className='hidden md:block' /> システムのパフォーマンスが向上し、何千ものレストランにサービスを提供できるようになりました。",
        },
        testimonial: {
            content:
                "他国の超難関プログラマーと仕事をした後、SETAインターナショナルに出会いました。それはまさに幸運でした。私たちに配属されたSETAチームは、前進するために必要な存在です。彼らは私たちのソフトウェアをリニューアルしてくれました。見た目もよくなり、使い勝手もよくなりました。彼らは、私たちが常に稼働していることを確認するために、利用可能です。また、問題が発生した場合は、ダウンタイムを極めて少なくして問題を解決してくれます。SETAは一緒に働くには素晴らしい会社です。彼らは、あなたのビジョンがあれば、何でも思い通りに開発してくれます。",
            avatarUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/person/new/Katrina.jpeg",
            author: "Katrina Von Moos",
            position: "Director of Operations.",
        },
    },
    skplanet: {
        title: "AppFactoryについて",
        description:
            "AppFactoryは、革新的なモバイルサービスのリーダーとして世界的に知られ、尊敬を集めているSK Planetが2012年に設立した新会社です。AppFactoryのミッションは、素晴らしいアイデアをグローバル市場向けの魅力的なモバイルアプリに変換することです。SK Planetは、2011年11月にSK Telecomによって、ニューメディアやデジタルコンテンツなどのグローバルビジネスにフォーカスする目的で設立されました。",
        challenge: {
            title: "チャレンジ",
            description:
                "AppFactoryはスタートアップ企業であり、革新的な製品とサービスによって市場投入までの時間を短縮したいと考えています。品質を犠牲にすることなく、開発サービスを強化するための信頼できるパートナーを必要としています。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/skp/1.jpg",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAは、AppFactory（SKテレコム社）と戦略的技術パートナーの1つとして正式契約を締結し、社内外のソフトウェア開発ニーズを支援しています。15名以上のソフトウェア開発者と品質保証エンジニアが、SETAの内部製品開発ロードマップを支援し、高品質なソフトウェア開発者と品質保証エンジニアの一人ひとりが、世界中の組織の効率性と生産性を最大限に高めるために、内部組織と密接に連携しています。AppFactoryは、業界をリードするSETAのハイブリッド開発モデルを迅速に統合することができ、運用コストを削減し、ROIを最大化しながら、組織全体の効率を最大化することを可能にしました。",
        },
    },
    stelux: {
        title: "Steluxについて",
        description:
            "ステラックスは、香港、シンガポール、マレーシアで長年にわたり卸売業を営んでおり、産業用高級腕時計と光学機器の製造、小売、卸売の大手企業の一つです。",
        challenge: {
            title: "Challenge",
            description:
                "お客様は、新製品開発および継続的なポートフォリオ維持のプロセスの最適化を求めていました。<br /><br /> SAP HANA・SAP Mobile Platformを導入することで、新製品の開発や技術的な製品革新のコミュニケーション・組織化など、さまざまな面で最適化が図られたほか、製品のライフサイクル全体を通じていくつかのメリットを認識することができるようになりました。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/3.jpg",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAは、開発をサポートするために3つ以上の高品質なリソースを提供することができました。t",
        },
        testimonial: {
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/stelux/4.jpg",
            content:
                "SETAは、SAP HANA、Warehouse ManagementモジュールのSAP Mobile Platformプロジェクト、Financial（FI）およびSales and Distribution（SD）モジュールの開発コンサルティングに取り組むために、3人以上の専任リソースを提供することができました。また、SETAは現地のIT部門に対して、SAP Mobile Platformプロジェクトに関するトレーニングや技術移転も行っています。",
        },
    },
    syspro: {
        title: "SysProについて",
        description:
            "シスプロは、ビジネスソフトウェアソリューションとサービスを提供する独立系国際ベンダーの中で、最も長い歴史を持つ企業の1つです。ERP業界で30年以上の経験を持つ当社は、豊富な知識でお客様のビジネスニーズに合わせたシステム構築をサポートします。",
        challenge: {
            title: "チャレンジ",
            description:
                "SysPro は新しい CRM に取り組むことを計画していましたが、ソフトウェアを設計および実装するための十分な社内人材がいませんでした。 SysPro は、高品質の開発基準を満たすことができる信頼できるパートナーを見つけるのに苦労しました。",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/syspro/1.jpg",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAは、社内外のソフトウェア開発ニーズを支援する戦略的技術パートナーの1社として、シスプロと正式契約を締結しています。10名以上のソフトウェア開発者と品質保証エンジニアが社内の製品開発ロードマップを支援し、高品質なソフトウェア開発者と品質保証エンジニアの一人ひとりが社内の組織と密接に連携して、世界中で効率と生産性を最大化させています。SysProは、業界をリードするSETAのハイブリッド開発モデルを迅速に統合することができ、運用コストを削減しROIを最大化しながら、組織全体の効率を最大化することができました。",
        },
    },
    teacherzone: {
        title: "Teacher Zoneについて",
        description:
            "Teacher Zoneは、学習者の興味を引き、管理を自動化し、ビジネスをコントロールするためのオールインワン・プラットフォームです。Teacher Zone は、より組織化され体系化された練習課題を学習者に提供するためのプラットフォームを提供してくれています。チャット機能は、生徒同士の交流を促し、クラス外のコミュニティを構築する方法として、素晴らしいものです。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/teacherzone2.jpg",
            description:
                "教師ゾーンには、IT部門も開発スキルもなかった。そこで、ソフトウェア開発のコンサルティングとプランの実行を支援してくれる、信頼できるパートナーを探したのです。しかし、世界中には数多くのコンサルティングやアウトソーシングのベンダーが存在するため、簡単なことではありませんでした。",
        },
        solution: {
            title: "ソリューション",
            description:
                "多くのソフトウェア開発会社と話をした後、経験、紹介、評判により、SETAを選択することにしました。SETAはTeacher Zoneと密接に協力して、学習管理システム（LMS）の技術的ソリューションとUI/UXを設計し、モバイルとデスクトップの両プラットフォームに実装しました。選択された技術スタックは、.NET、MS SQL Server、Twillioでした。SETAは、すべてのステップでTeacher Zoneをサポートし、5万人以上のアクティブな有料受講者を抱える収益性の高いビジネスにすることができました。現在、SETAはTeacher Zoneに24時間365日の技術サポートを提供し、学習者と教師が最高のユーザー体験を得られるよう、あらゆる生産上の問題に対処しています。こちらにチェックしてください。",
        },
    },
    tollroads: {
        title: "The TollRoadsについて",
        description:
            "ワンタイム料金の支払い、FasTrakアカウントの新規登録、FasTrakアカウントのメンテナンス（車両変更、支払い、料金履歴、トランスポンダーのメンテナンスなど）を提供します。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/1.jpg",
            description:
                "地域の人口が増加し、経済が発展するにつれ、TCAはトールロードが地元の高速道路に代わる貴重で混雑のない代替道路であり続けるよう取り組んでいます。TCAは、優れた顧客サービス、モビリティの向上、現在および将来の生活の質の維持に努めています。TCAは、高品質でリーズナブルな価格のモバイルアプリケーションを開発するための信頼できるパートナーを必要としています。",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAはTolls Roads社に選ばれ、現在有料道路を利用するすべての顧客に提供されているモバイルアプリケーションをすべて開発しました。このモバイルアプリケーション（iOSとAndroidで利用可能）は、2012年に「交通業界で最も革新的なアプリケーション」に選ばれています。",
        },
    },
    trendmicro: {
        title: "TrendMicroについて",
        description:
            "トレンドマイクロは、クラウドセキュリティのグローバルリーダーとして、インターネットコンテンツセキュリティと脅威管理ソリューションを開発し、企業や消費者が安全にデジタル情報を交換できる世界を実現しています。20年以上の実績を持つトレンドマイクロは、物理環境、仮想環境、クラウド環境において、脅威を迅速に阻止し、データを保護するトップクラスのクライアント、サーバ、およびクラウドベースのセキュリティソリューションを提供するサーバセキュリティのマーケットリーダーとして認知されています。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/tollroad/1.jpg",
            description:
                "トレンドマイクロは、社内のチームを補強するために、セキュリティに関する豊富な経験と知識を持つ強力なパートナーを必要としています。.",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAは、トレンドマイクロ社の戦略的技術パートナーの1社として、同社の社内外のソフトウェア開発ニーズを支援する正式契約を締結しています。また、SETAはトレンドマイクロ社に高品質のソフトウェア開発者と品質保証エンジニアを提供し、両者は密接に連携して世界各地の効率性と生産性を最大化します。",
        },
    },
    ujazo: {
        title: "Ujaroについて",
        description:
            "Ujazoは、消費者が自分の健康状態を認識し、より注意を払うべき分野を改善する方法を見出すことを第一の使命として設立されました。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/ujaro/1.jpg",
            description:
                "Ujazo には、社内に開発チームがなく、ソフトウェア開発に関する深い専門知識もありませんでした。そのため、豊富な経験を持つ強力なソフトウェア開発ベンダーと提携する必要があります。",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETA は、Ujazo によって SaaS ベースのプラットフォームをゼロから構築するために選ばれました。技術コンサルティング、グラフィック デザインからソフトウェア開発まで、SETA は Ujazo の市場開拓戦略を推進するための主要な技術パートナーとして選ばれました。プラットフォームが完全に開発されると、ユーザーは米国中の厳選された診療所から自分の医療記録をダウンロードし、目標を設定して、自分の病歴や日常生活に関する詳細な情報を取得できるようになります。",
        },
    },
    veritone: {
        title: "Veritoneについて",
        description:
            "Veritoneは、AIを民主化し、すべての組織とすべての人にAIの力を提供することに注力するトップAI企業の1つです。2014年に、1つの共通のソフトウェアインフラを通じて何百もの認知エンジンへの統一的なアクセスを提供するというアイデアで始まったものは、世界初のAIオペレーティングシステムであるaiWAREへと進化し、認知エンジンの多様なエコシステムを編成して、商業組織と政府組織の両方に対してインテリジェントオートメーションの力を発揮しています。",
        challenge: {
            title: "チャレンジ",
            thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/1.png",
            description:
                "Veritoneは、リソースの採用や管理の手間を軽減し、Python、Go、NodeJS、React、Angular、Flutter/React NativeによるAIモデル開発、データ収集とラベリング、テスト、アプリケーション/モバイル開発など、さまざまな技術スタックの優秀なリソースでフォローザサンモデルに基づくソフトウェア開発プロセスの加速を支援する信頼パートナーを見つける必要があります。",
        },
        solution: {
            title: "ソリューション",
            description:
                "SETAは、開発をサポートするために40以上の高品質なリソースを提供することができました。",
        },
        projects: [
            {
                name: "Aiware",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/1.jpg",
                content:
                    "人工知能向けの世界初のオペレーティング システムである Veritone aiWARE は、すぐに展開できる機械学習モデルの多様なエコシステムを調整して、オーディオ、ビデオ、テキスト、およびその他のデータ ソースを実用的なインテリジェンスに大規模に変換します。AI の専門知識は必要ありません。 aiWARE を使用すると、デジタル ワーカーを活用して手動レビューの時間を節約し、貴重なデータ インサイトを取得して、エンド ツー エンドのワークフローを認知的に強化できます。",
            },
            {
                name: "検証",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/2.jpg",
                content:
                    "AIと同時MFAを組み合わせたスマートバイオメトリクスSSOで、あらゆるアプリケーションに簡単、安全、かつプライベートなアクセスを実現します。",
            },
            {
                name: "クラリティ",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/3.jpg",
                content:
                    "AIモデルの挙動やパフォーマンスを可視化し、信頼性と説明力を高め、リスクを低減します。",
            },
            {
                name: "識別",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/4.jpg",
                content:
                    "予約データベースを活用して、容疑者の手掛かりを迅速に特定し、事件の解決率を向上させます。",
            },
            {
                name: "イルミネート",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/5.jpg",
                content:
                    "aiWARE上に構築されたVeritone Illuminateにより、音声やビデオの記録、テキストベースのドキュメントなど、大量の電子保存情報（ESI）を迅速かつコスト効率よく検索、発見、分析、抽出、調査することができます。",
            },
            {
                name: "属性",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/6.png",
                content:
                    "属性は、事前制作されたスポット、オーガニックメンテーション、ライブリードなど、あらゆる形式の放送広告のプレースメントを、ウェブサイトのインタラクションデータとほぼリアルタイムで関連付けるターンキーアトリビューションソリューションです。データ駆動型のインサイトに即座にアクセスすることで、広告最適化戦略の情報提供、顧客ROIの向上、バイサイドとの関係強化が可能になります。",
            },
            {
                name: "オートメイトスタジオ",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/7.png",
                content:
                    "インテリジェント・プロセス・オートメーションの取り組みに着手している組織は、Automate Studioを使用してAIを搭載したワークフローを迅速に構築・展開し、得られた洞察をビジネスアプリケーションやプロセスに統合しています。AI の専門知識がなくても、オーディオ、ビデオ、テキスト、データコンテンツを実用的なインテリジェンスに大規模に変換することができます。",
            },
            {
                name: "Redact",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/8.png",
                content:
                    "AIを搭載したVeritone Redactを使用して音声、ビデオ、画像ベースの証拠内の機密情報の再編集を自動化することで、貴重なリソースを解放しながら時間とコストを節約します。",
            },
            {
                name: "オプチマイザー",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/9.jpg",
                content:
                    "リアルタイムに予測される需要、供給、価格データを活用し、エネルギー供給ミックス、コスト、収益性を決定し、最適化します。",
            },
            {
                name: "エッセンシャルズ",
                thumbnailUrl:
                    "https://da8pk1kbkdsqo.cloudfront.net/images/case-study/project/new/10.jpg",
                content:
                    "4つのAI対応アプリケーションで構成されるVeritone Essentialsは、映像・音声メディアを最大限に活用することを可能にします。aiWAREを搭載したこれらのアプリケーションは、これまでにないほど瞬時に情報を検索、分析、共有することを可能にします。Essentialsを使用すると、ほぼリアルタイムで簡単に放送を検索し、コンテンツやトピックのアラートを設定し、エアチェックを自動化し、広告、スポンサー、エンドースメントなどを追跡して確認することができます。",
            },
        ],
    },
    culture: {
        title: "企業文化",
        description:
            "文化は常にSETAの成功の主要な要素です。SETAでは、職場環境が従業員を快適にし、ひいては従業員のモチベーションを高めて、クライアントのために最善の方法で仕事を遂行できるようにしています。ここでは、それを実現する方法をご紹介します。",
        banner: [
            {
                id: 1,
                background: "https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture/1.jpg",
                title: "企業文化",
                description:
                    "文化は常にSETAの成功の主要な要素です。SETAでは、職場環境が従業員を快適にし、ひいては従業員のモチベーションを高めて、クライアントのために最善の方法で仕事を遂行できるようにしています。こちらでは、実現方法をご紹介します。",
            },
            {
                id: 2,
                background: "https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture/2.jpg",
                title: "企業文化",
                description:
                    "文化は常にSETAの成功の主要な要素です。SETAでは、職場環境が従業員を快適にし、ひいては従業員のモチベーションを高めて、クライアントのために最善の方法で仕事を遂行できるようにしています。こちらでは、実現方法をご紹介します。",
            },
            {
                id: 3,
                background: "https://da8pk1kbkdsqo.cloudfront.net/images/banner/culture/3.jpg",
                title: "企業文化",
                description:
                    "文化は常にSETAの成功の主要な要素です。SETAでは、職場環境が従業員を快適にし、ひいては従業員のモチベーションを高めて、クライアントのために最善の方法で仕事を遂行できるようにしています。こちらでは、実現方法をご紹介します。",
            },
        ],
        articles: [
            {
                name: "創造性の促進",
                thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/38.jpeg",
                content:
                    "社員が最も生産的で快適だと感じる場所で働くことを可能にするために、働く場所を制限していません。私たちは、社員が勤務時間中ずっと机の前に座っているべきとは考えていません。働く環境は、楽しくてオープンであるべきです。生産性と創造性を高めるために、最も意味のあることなのです。",
            },
            {
                name: "民主主義の確保",
                thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/24.jpg",
                content:
                    "SETA のフラットな組織構造により、従業員は意見や懸念を管理レベルに直接共有することができます。レベルに関係なく、すべてのアイデアが尊重され、大切にされています。",
            },
            {
                name: "コアバリューの共有",
                thumbnailUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/25.jpg",
                content:
                    "SETAは、最高の品質でグローバルにクライアントにサービスを提供することを目的としています。最適な技術的ソリューションを提供するだけでなく、お客様のビジネスを成長させるためにできることは何でもします。すべてのソリューションデザインは、クライアントのビジネス状況を徹底的に理解した上で行われます。つまり、クライアントのビジネスが私たちのビジネスなのです。",
            },
        ],
        list: [
            {
                id: 1,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/1.svg",
                name: "競争給料",
            },
            {
                id: 2,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/7.svg",
                name: "パーソナライズド・コーチング",
            },
            {
                id: 3,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/3.svg",
                name: "職場の柔軟性",
            },
            {
                id: 4,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/4.svg",
                name: "レコグニション・プログラム",
            },
            {
                id: 5,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/5.svg",
                name: " マインドフルネス・リソース",
            },
            {
                id: 6,
                img: "https://da8pk1kbkdsqo.cloudfront.net/images/icons/culture/6.svg",
                name: "SETA コミュニティ",
            },
        ],
        employee: {
            title: "従業員への配慮",
            description:
                "社員が最大限の能力を発揮し、仕事と生活のバランスをとることができるように支援します。 <br /><br /> SETAを従業員の第二のホームにするために全力を尽くします。",
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
            title: "お客様にの共感",
            description: "お客様を第一に考え、お客様のビジネスを成功に導きます。",
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
            title: "私たちの声",
            items: [
                {
                    id: 1,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/23.jpg",
                    name: "ヴー・タイン・フン様",
                    position: "取締役",
                    desc: "SETAは刺激的でやりがいのある職場環境です。毎日、技術、プロジェクト、アイデア、顧客、同僚など、さまざまな側面で新しいことを学んでいます。もしあなたがSETAに適応し成功すれば、世界のトップ企業で働く資格があると私は信じています。",
                },
                {
                    id: 2,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/34.jpg",
                    name: "マイ・スアン・トゥー様",
                    position: "COO",
                    desc: "SETAでは、規模を拡大し、急速に成長しており、私たちの文化や専門知識も同様に成長しています。イニシアチブ、共有、野心が私たちを団結させ、このような変化を支えているのです。最近採用された多くの新しい技術スタックは、私たちが自信を持って素晴らしいことを行えるということを証明しています。スマートで優秀な社員は、より多くの知識と経験を得て、幸せなキャリアを歩んでいます。ここで唯一の限界は、あなたが決めた挑戦です。",
                },
                {
                    id: 3,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/35.jpg",
                    name: "ハリー・ヴー様",
                    position: "PMO役割",
                    desc: "「柔軟性」と「権限委譲」は、SETAについて考えるときに私が最初に思い浮かべる2つの言葉です。SETAでは、あらゆるレベルでリーダーシップを発揮するリーダー-リーダーモデルを奨励しており、人々は不安や恐怖だけでなく、革新的なアイデアや希望も自由に表現することができます。私たちはスチュワードシップ・デレゲーションを採用し、何を達成させたいかを説明し、その達成方法について柔軟に対応できるようにしています。",
                },
                {
                    id: 4,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/20.jpg",
                    name: "グエン・ティ・フオン様",
                    position: "会計主任",
                    desc: "SETA設立当初からのメンバーとして、私は10年以上にわたってSETAが浮き沈みし、困難な状況にあるのを目の当たりにしてきました。そして今、SETAは私や世界に、変革、成長、発展を示しています。持続可能な発展は、皆さん、つまり会社の人々のものであることに、心から感謝したいと思います。",
                },
                {
                    id: 5,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/21.jpg",
                    name: "マイ・ティー・ハン様",
                    position: "人事部長",
                    desc: "SETAに来る前は、観光や商業の分野で人材育成に長年携わってきました。 IT 人事に切り替えたとき、これが自分にとっての課題であることがわかりました。 IT人材市場の競争が激化すればするほど、私に課せられる課題は大きくなります。 常に自分の仕事に最善を尽くし、自分を従業員の立場に置くことは、自分の職業についての私の意見です。",
                },
                {
                    id: 6,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/22.jpg",
                    name: " トニー・ブイ様",
                    position: "取締役副社長",
                    desc: "世田谷はアウトソーシングの会社だということはよく知られていますが、自分をアウトソーシングの人間だと考えてはいけません。自分を製品開発者だと考えなければなりません。そして実際にSETAは製品を作っているのです。",
                },
                {
                    id: 7,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/26.jpg",
                    name: "ホアン・ドク・マイン様",
                    position: "プロジェクト・マネージャー",
                    desc: "働き方や考え方が快適で、自分の好きなことやこだわりができる、SETAの環境が気に入っています。仕事における主体性は非常に重要で、一人ひとりの能力を高め、促進する必要があります。",
                },
                {
                    id: 8,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/27.jpg",
                    name: "グエン・ベト・ハイ 様",
                    position: "AIリードエンジニア",
                    desc: "機会、情熱、成長は、同時に達成するのが難しいものです。しかし、私が卒業以来SETAで働き続けているのは、こうした理由からなのです。毎日、私たちはより高いレベルに到達するための新しいチャンス、チャレンジ、アイデアに恵まれており、個人として、また共に向上していくことができます。職場環境も非常に健全です。世代や考え方が異なる人たちでも、互いのアイデアを尊重し、耳を傾けることができます。",
                },
                {
                    id: 9,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/28.jpg",
                    name: "タン・グエン様",
                    position: "技術リーダー",
                    desc: "私が当初からSETAを気に入っていた理由はただ一つ、最先端の技術に満足し、顧客と直接仕事ができたからです。SETAに加入して5年以上になりますが、SETA全般、特にVeritoneでの仕事が好きで、満足しています。",
                },
                {
                    id: 10,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/29.jpg",
                    name: "ナム・レ",
                    position: "SAP技術コンサルタント",
                    desc: "“早く行きたいなら一人で行け、遠くへ行きたいならみんなで行け」 SETAでは、素晴らしい同僚とリーダーが一緒になって、どんなレベルの成功ももたらしてくれます。",
                },
                {
                    id: 11,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/30.jpg",
                    name: "カン・トラン",
                    position: "Senior Golang Developer",
                    desc: 'SETAは、私が今まで働いてきた会社の中で最も長く、5年以上、今でも親しみを感じています。"好きでやっている"、いつも居心地が良く、成長するチャンスがたくさんある場所です。新しいことをたくさん経験し、いろいろなことに挑戦できることが、私にとってのSETAでの幸せです。',
                },
                {
                    id: 12,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/31.jpg",
                    name: "ファム・ティ・フオン",
                    position: "アカウント・エグゼクティブ",
                    desc: "私は2019年から今まで瀬田に在籍しています。私にとって、会社は第二の故郷です。なぜなら、職場環境は愛想がよく、ダイナミックだからです。ここの人々は、ダイナミズム、熱意、ユーモアにあふれた若い人たちが中心です。",
                },
                {
                    id: 13,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/32.jpg",
                    name: "Mr. ナム・グエン",
                    position: "フロントエンド開発者",
                    desc: "瀬田は、お客さまと直接触れ合うことができるのが魅力です。私は、アメリカの仕事のスタイルが好きです。アイデアはいつでも変わる可能性があるので、思考は迅速で、批判的で、頭は常にアクティブでなければなりません。",
                },
                {
                    id: 14,
                    imageUrl: "https://da8pk1kbkdsqo.cloudfront.net/images/culture/33.jpg",
                    name: "ドアン・トゥー・フエン",
                    position: "QA",
                    desc: "SETAは私にインスピレーション、チャレンジ、そしてチャンスを与えてくれます。私はここで最高の喜びを感じています。特に、素晴らしい同僚たちに感謝しています。",
                },
            ],
        },
    },
    location: {
        title: "場所",
        description:
            "米国とベトナムにオフィスを構え、高品質のニアショア、オフショア、オンサイトのデリバリーモデルを最適に組み合わせて提供しています。そのため、お客様は言葉の壁、タイムゾーン、セキュリティなどの課題に対応することができます。",
        sectionOne: {
            title: "どこで見つけましゅか。",
            placeOne: {
                name: " カリフォルニア州、北アメリカ",
                description:
                    "活気に満ち、歓迎されるように設計されたセタ・インターナショナルの世界本部は、米国の新しいシリコンビーチであるカリフォルニア州オレンジ郡のアーバインにあります。多様なハイテク産業の一部として、米国に拠点を置くチームは、プロジェクト管理とカスタムソフトウェアソリューションのすべての標準が世界的に維持されることを保証しています。",
                list: ["SETA International HQ", "3943 Irvine Blvd, Suite 170", "Irvine, CA 92626."],
            },
            placeTwo: {
                name: "ハノイ、ベト ナム",
                description:
                    "ベトナムのハノイで3番目に大きな雇用主であるSETAインターナショナルのチームは、ソフトウェア製品開発、テクニカルクラウドサービス、運用分析など、あらゆる業務に取り組んでいます。このオフィスは、カスタムアプリケーション開発、品質保証テスト、スタッフ増強の最先端を担っています。",
                list: [
                    "SETA International Vietnam",
                    "Duy Tan通り82番地のH.Lビル11階",
                    "HaNoi市Cau Giay区Dich Vong Hau区",
                ],
            },
        },
    },
};
