type translataionContainer ={
    [key: string]: {
        [key:string]: string;
    };
};
const indexTrans: translataionContainer = {
    // localization button in login page
    langs: {
        en: 'ع',
        ar: 'E'
    },
    //////////////< Titles >////////////////////
    CASCOTitle:{
        en:'CASCO',
        ar:'كاسكو'
    },
    /////////////////////////////< NavBar >/////////////////////////////////////////////
    HomeNav:{
        en:"Home",
        ar:"الرئيسية"
    },
    AboutCascoNav:{
        en:"About CASCO",
        ar:"عن المركز"
    },
    AboutUsNav:{
        en:'About Us',
        ar:'من نحن'
    },
    BoardOfDirectorsNav:{
        en:'Our Team',
        ar:'فريقنا'
    },
    DirectorMangerNav:{
        en:'Director General',
        ar:'المدير العام'
    },
    OurValuesNav:{
        en:'Our Values',
        ar:'قيمنا'
    },
    CASCOEstablishmentAgreementNav:{
        en:'CASCO Establishment Agreement',
        ar:'اتفاقية انشاء المركز'    
    },
    CASCORightsAndDutiesNav:{
        en:'CASCO’s Rights And Duties',
        ar:'الحقوق و الواجبات'
    },
    StakeholdersAdvisoryCommitteeNav:{
        en:'Stakeholders Advisory Committee',
        ar:'اللجنة الاستشارية للجهات ذات العلاقة'
    },
    AccreditedBodiesNav:{
        en:'Our Clients',
        ar:'عملائنا',
    },
    ServicesNav:{
        en:'Services',
        ar:'خدماتنا'
    },
    CoursesNav:{
        en:'Courses',
        ar:'الكورسات'
    },
    DocumentsNav:{
        en:'Documents',
        ar:'وثائق المركز'
    },
    ContactUsNav:{
        en:'Contact Us',
        ar:'تواصل معنا '
    },
    MediaCenterNav:{
        en:'Media Center',
        ar:'المركز الاعلامي'
    },
    NewsNav:{
        en:'News',
        ar:'الاخبار'
    },
    GalleryNav:{
        en:'Gallery',
        ar:'معرض الصور'
    },
    EducationalBookletsNav:{
        en:'Educational Booklets',
        ar:'منشورات توعوية'
    },
    VisualPresentationsNav:{
        en:'Visual Presentations',
        ar:'عروض مرئية'
    },
    EventsNav:{
        en:'Events',
        ar:'الفعاليات'
    },
    /////////////////////////////< NavBar >/////////////////////////////////////////////

// hero section in home page
    CompanyName:{
        en:'Welcome to CASCO',
        ar:'مرحبا في كاسكو'
    },
    CompanyNamesubtitle:{
        en:'For Accreditation Certificates',
        ar: 'للاستشارات والتدريب'
    },
        /////////////////////////////< About Section Home Page >/////////////////////////////////////////////
    WhoWeAreAbout:{
        en:'Who We Are',
        ar:'من نحن'
    },
    AboutCASCOAbout:{
        en:'About CASCO',
        ar:'عن كاسكو'
    },
    AboutCascoText:{
        en:'CASCO For Assessment Services Co. helps certification bodies adopt and adhere to international standards through streamlined processes and expert training. CASCO provides independent technical assessments to ensure compliance with product standards and simplify the implementation and maintenance of these standards.',
        ar:'تساعد شركة كاسو لخدمات التقييم الجهات المانحة في تبني المعايير الدولية والالتزام بها من خلال عمليات مبسطة وتدريب الخبراء. تقدم كاسكو تقييمات فنية مستقلة لضمان الامتثال لمعايير المنتج وتبسيط تنفيذ وصيانة هذه المعايير.'
    },
    LearnMoreAbout:{
        en:'Learn More',
        ar:'اعرف المزيد'
    },
    /////////////////////////////////// services sectio//////////////////////////////////////////////////
    servicesTitle:{
        en:'OUR SERVICES',
        ar:'خدماتنا'
    },
    servicesSubTitle:{
        en:'Professionalism in providing technical consulting services for obtaining accreditations and upgrading quality infrastructure to comply with legislative, mandatory, and technical regulations is crucial.',
        ar:'الاحترافية في تقديم خدمات الاستشارات الفنية للحصول على الاعتمادات ورفع البنية التحتية للجودة والتطابق مع المتطلبات التشريعية والالزامية واللوائح الفنية المُصدرة .'
    },
    servicesbrief:{
        en:'Our services aim to enhance mutual trust between conformity assessment providers and consumers, as well as raise awareness of the importance of accreditation in strengthening the quality infrastructure worldwide.',
        ar:'تعمل الخدمات التي نقدمها على تعزيز الثقة المتبادلة بين مقدمي خدمات التحقق من المطابقة والمستهلكين وكذلك رفع الوعي بأهمية الاعتماد تعزيزا للبنية التحتية للجودة فى جميع أنحاء العالم.'
    },
    Services1:{
        en:'Laboratory Testing Consultation',
        ar:'استشارة مختبرات الاختبار'
    },
    ServicesBrief1:{
        en:'At CASCO, we provide consultation services in the field of testing laboratories, in accordance with the international standard ISO/IEC 17025:2017.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال مختبرات الفحص، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17025:2017.'
    },
    Services2:{
        en:'Calibration Laboratory Consultation',
        ar:'استشارة مختبرات المعايرة'
    },
    ServicesBrief2:{
        en:'At CASCO, we provide consultation services in the field of calibration laboratories, in accordance with the international standard ISO/IEC 17025:2017.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال مختبرات المعايرة، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17025:2017.'
    },
    Services3:{
        en:'Inspection Certification Body Consultation',
        ar:'استشارة جهات التفتيش'
    },
    ServicesBrief3:{
        en:'At CASCO, we provide consultation services in the field of inspection body accreditation, in accordance with the international standard ISO/IEC 17020:2012.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال اعتماد جهات التفتيش، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17020:2012.'
    },
    Services4:{
        en:'Product Certification Body Consultation',
        ar:'استشارة جهات منح الشهادات للمنتجات'
    },
    ServicesBrief4:{
        en:'At CASCO, we provide consultation services in the field of product certification body accreditation, in accordance with the international standard ISO/IEC 17065:2012.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح الشهادات للمنتجات، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17065:2012.'
    },
    Services5:{
        en:'Management System Certification Body Consultation',
        ar:'استشارة الجهات المانحة لشهادات النظم الإدارية'
    },
    ServicesBrief5:{
        en:'At CASCO, we provide consultation services in the field of management system certification body accreditation, in accordance with the international standard ISO/IEC 17021-1:2015.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح شهادات النظم الإدارية، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17021-1:2015.'
    },
    Services6:{
        en:'Medical Laboratory Consultation',
        ar:'استشارة المختبرات الطبية'
    },
    ServicesBrief6:{
        en:'At CASCO, we provide consultation services in the field of medical laboratories, in accordance with the international standard ISO 15189:2012.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال المختبرات الطبية، وذلك وفقًا للمواصفة القياسية الدولية ISO 15189:2012.'
    },
    Services7:{
        en:'Halal Certification Consultation',
        ar:'استشارة الجهات المانحة لشهادات الحلال'
    },
    ServicesBrief7:{
        en:'At CASCO, we provide consultation services in the field of halal certification, in accordance with the international standard GSO 2055-2:2021.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح شهادات الحلال، وذلك وفقًا للمواصفة القياسية الدولية GSO 2055-2:2021.'
    },
    Services8:{
        en:'Personal Certification Consultation',
        ar:'استشارة جهات منح الشهادات للأفراد'
    },
    ServicesBrief8:{
        en:'At CASCO, we provide consultation services in the field of Personal certification, in accordance with the international standard ISO/IEC 17024:2012.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح الشهادات للأفراد، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17024:2012.'
    },
    Services9:{
        en:'Consultation for Proficiency Testing Providers',
        ar:'استشارة الجهات المزودة لاختبارات الكفاءة'
    },
    ServicesBrief9:{
        en:'At CASCO, we provide consulting services in the field of proficiency testing providers in accordance with the international standard ISO/IEC 17043:2010.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال الجهات المزودة لاختبارات الكفاءة، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17043:2010.'
    },
    Services10:{
        en:'Technical Consultation for Notification Purposes',
        ar:'استشارة فنية لأغراض التعيين'
    },
    ServicesBrief10:{
        en:`At CASCO, we offer technical consulting services for evaluation processes aimed at qualifying for notification by certifying authorities for products conformity certificates listed in the Gulf technical regulations GCC Standardization Organization "GSO", such as the regulations for children's toys (BD-131704-01) , low voltage electrical devices (BD-142004-01) , and more.`,
        ar:'نقدم في شركة كاسكو خدمات استشارية في عمليات التقييم الفني بغرض التأهيل للحصول على التعيين للجهات المانحة لشهادات مطابقة المنتجات الواردة في اللوائح الفنية الخليجية وذلك وفقا للائحة لعب الاطفال و لائحة الأجهزة الكهربائية منخفضة الجهد وغيرها.'
    },
    Services11:{
        en:'Consultation for Obtaining BRCGS Certification ',
        ar:'استشارة الحصول على شهادة تجار التجزئة بالمملكة المتحدة British Retail Consortium  -BRCGS '
    },
    ServicesBrief11:{
        en:'At CASCO, we provide consultation services for qualification processes to obtain BRCGS Food Safety and BRCGS Packaging Material certifications.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في عمليات التأهيل للحصول على شهادة BRCGS Food Safety وBRCGS Packaging Material  '
    },
    Services12:{
        en:'Consultation for Obtaining Forest Stewardship Council (FSC) Certification ',
        ar:'استشارة الحصول على اعتماد إدارة الغابات FSC - Forest Stewardship Council'
    },
    ServicesBrief12:{
        en:'At CASCO, we offer consulting services in the field of responsible forest management to ensure that wood products originating from forests are managed in a responsible and sustainable manner, in accordance with the international standard of the Forest Stewardship Council (FSC), Programme for the Endorsement of Forest Certification (PEFC), Keurhout, and the European Union Timber Regulation (EU TR).',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال إدارة الغابات الطمأنينة للعامة بأن منتجات الأخشاب الناشئة من الغابات تدار بطريقة مسؤولة ومستدامة ، وذلك وفقًا للمواصفة القياسية الدولية لمجلس الإشراف على الغابات (FSC) ومجلس PEFC (برنامج للتصديق على أنظمة اعتماد الغابات) و Keurhout ولائحة الأخشاب في الاتحاد الأوروبي (EU TR).'
    },
    Services13:{
        en:'Consultation for Obtaining FSSC 22000 Scheme Certification',
        ar:'استشارة الحصول على شهادة FSSC 22000 Scheme'
    },
    ServicesBrief13:{
        en:'At CASCO, we provide consulting services in the field of FSSC 22000 - Food and Feed Safety Management System and Quality Management System accreditation, in compliance with ISO 22000/9001 requirements, the Basic Requirements for Sector Program, and additional program requirements as applicable, according to the FSSC 22000 Version 6.0 international standard for obtaining GFSI (Global Food Safety Initiative) accreditation.',
        ar:'نقدم في شركة كاسكو خدمات استشارية في مجال FSSC 22000 - اعتماد نظام سلامة الأغذية والأعلاف وأنظمة إدارة الجودة بما يتوافق مع متطلبات ISO22000 / 9001 ومتطلبات برنامج المتطلبات الأساسية للقطاع ومتطلبات البرنامج الإضافية تبعا ، وذلك وفقًا للمواصفة القياسية الدولية  FSSC 22000 Version 6.0 للحصول على مصادقة GFSI.'
    },
    Services14:{
        en:'ESG Report Service',
        ar:'خدمة تقارير ESG'
    },
    ServicesBrief14:{
        en:'CASCO offers a low-cost and credible ESG report service for businesses in the Gulf region, leveraging our team of highly experienced advisors with in-depth knowledge of ESG standards, regulations, and best practices across all major jurisdictions.',
        ar:'تقدم شركة كاسكو خدمة تقارير ESG بتكلفة منخفضة وموثوقة للشركات في منطقة الخليج، باستخدام فريق مستشارين ذوي خبرة عالية يتمتعون بمعرفة عميقة بمعايير ESG واللوائح وأفضل الممارسات في جميع الولايات الرئيسية'
    },

    // footer 
    aboutCascoFooter:{
        en:'Trust in the Conformity Assessment Bodies',
        ar:'الثقة في جهات التحقق من المطابقة'
    },
    supportFooter:{
        en:'Support',
        ar:'الدعم'
    },
    ContactUsFooter:{
        en:'Contact Us',
        ar:'تواصل معنا'
    },
    LinksFooter:{
        en:'Links',
        ar:'روابط'
    },
    ServicesFooter:{
        en:'Services',
        ar:'خدماتنا'
    },
    AccreditedBodiesFooter:{
        en:'Our Clients',
        ar:'عملائنا'
    },
    CoursesFooter:{
        en:'Courses',
        ar:'الكورسات'
    },
    DocumentsFooter:{
        en:'Documents',
        ar:'وثائق المركز'
    },
    NewsletterSubscriptionFooter:{
        en:'Newsletter Subscription',
        ar:'النشرة الإخبارية'
    },
    NewsletterSubscriptionFooterberif:{
        en:'Join our mailing list and receive our latest updates, recent CABs, training programs and etc. straight to your inbox',
        ar:'انضم إلى قائمتنا البريدية واحصل على آخر تحديثاتنا ، وأحدث برامج المركز، وبرامج التدريب وما إلى ذلك مباشرة إلى صندوق الوارد الخاص بك'
    },
    CreatedByFooter:{
        en:'Created By',
        ar:' التطوير بواسطة'
    },
    AhmedHemdan:{
        en:'Ahmed Hemdan',
        ar:'احمد حمدان'
    },
    CascoCopyright:{
        en:'Copyright &copy; 2023',
        ar:'حقوق النشر 2023'
    },
    Cascocopyright:{
        en:'CASCO',
        ar:'كاسكو'
    },
    CascoCopyrightAll:{
        en:'All Rights Reserved',
        ar:'جميع الحقوق محفوظة'
    },
    Ourobjective:{
        en:'Our Objective',
        ar:'هدفنا'
    },
    //////////////////// < About Us > //////////////////////////
    homepageurl:{
        en:'Home',
        ar:'الرئيسية'
    },
    aboutpageurl:{
        en:' > About CASCO',
        ar:' > عن كاسكو'
    },
    AboutUsTitle:{
        en:'About Us',
        ar:'عن الشركة'
    },
    OurobjectiveP:{
        en:`CASCO, aims to assist clients in achieving technical specifications compliance, using recommended global practices and collaborating with international bodies in the field of accreditation. Our services aim to enhance our client's position and empower their structure while increasing their awareness of the importance of accreditation for conformity assessment bodies.`,
        ar:' يهدف كاسكو إلى تعزيز الثقة في مخرجات جهات التحقق من المطابقة العاملة في الدول الأعضاء، والتي تتوافق مع الممارسات والمواصفات الدولية المعتمدة في هذا المجال، وتوفير الاستشارات اللازمة للعملاء بغية تعزيز قدراتهم الفنية وتحسين أدائهم في مجالات الاعتماد والتحقق من المطابقة. ويهدف كاسكو كذلك إلى زيادة الوعي بأهمية الاعتماد والتحقق من المطابقة، ودورهما الحاسم في تعزيز جودة المنتجات والخدمات، ودعم عمليات النمو والتنمية في المنطقة.'
    },
    OurVision:{
        en:'Our Vision',
        ar:'رؤيتنا'
    },
    OurVisionP:{
        en:`Our vision is to become the leading company in the field of qualification and provision of consulting services to all entities that seek accreditation in technical Standards, by offering innovative and effective solutions that meet our customer's needs, and by committing to excellence, quality, and customer satisfaction.`,
        ar:'نسعى لأن نصبح الشركة الرائدة في مجال التأهيل وتقديم الخدمات الاستشارية لجميع الجهات التي ترغب في الحصول على الاعتماد في المواصفات الفنية، وذلك من خلال تقديم حلول مبتكرة وفعالة تلبي احتياجات عملائنا، والالتزام بالتميز والجودة ورضا العملاء.'
    },
    OurMission:{
        en:'Our Mission',
        ar:'مهمتنا'
    },
    OurMissionP:{
        en:'We, at CASCO, strive to provide high-quality and professional consulting services to all entities that seek accreditation and implementation of technical Standards, in order to improve their performance and achieve growth and success.',
        ar:'نحن شركة "كاسكو" نسعى لتقديم خدمات استشارية عالية الجودة والمهنية لجميع الجهات التي ترغب في الحصول على الاعتماد وتطبيق المواصفات الفنية، بما يساهم في تحسين أدائها وتحقيق نموها ونجاحها.'
    },
    SUCCESSINDICATORS:{
        en:'SUCCESSINDICATORS',
        ar:'مؤشرات النجاح'
    },
    OurAchievements:{
        en:'OurAchievements',
        ar:'إنجازات المركز'
    },
    AccreditedBodiesAbout:{
        en:'Accredited Bodies',
        ar:'جهة معتمدة'
    },
    AssessorsandExperts:{
        en:'Assessors and Experts',
        ar:'مقيمين وخبراء'
    },
    Traineesduring2022:{
        en:"2022's Trainees",
        ar:'متدربين  2022'
    },
    CASCOAgreements:{
        en:'CASCOAgreements',
        ar:'اتفاقيات المركز'
    },
    Ethics:{
        en:'Ethics are central to CASCO’s actions',
        ar:'تعتبر الأخلاق أساسية في أعمال كاسكو '
    },
    EthicsP1:{
        en:"Central to CASCO's Actions: Ethics, Integrity, and Responsibility Ethics is a cornerstone of CASCO's actions, and compliance with local and international laws and regulations is crucial to the Group's standards. This fundamental principle ensures the Group's integrity and maintains its reputation. CASCO is committed to ethics and transparency, reflected in its Code of Ethics which is binding for all employees globally",
        ar:"الأخلاق هي حجر الزاوية في إجراءات  مجموعة كاسكو ، والامتثال للقوانين واللوائح المحلية والدولية أمر بالغ الأهمية لمعايير المجموعة. يضمن هذا المبدأ الأساسي نزاهة المجموعة ويحافظ على سمعتها.	تلتزم كاسكو بالأخلاق والشفافية ، وهو ما ينعكس في مدونة الأخلاقيات الملزمة لجميع الموظفين على مستوى كل شركة داخل المجموعة مسؤولة عن تنفيذ وتطبيق مدونة الأخلاقيات ، مع مراعاة التزامات وخصوصيات أنشطتها التجارية والتقنية وموقعها."
    },
    EthicsP2:{
        en:"Every company within the Group is responsible for implementing and enforcing the Code of Ethics, considering the obligations and specificities of its business activities and location.An annual message is sent to all employees to remind them of the existence of the Code of Ethics.A reporting mechanism is available for all employees and individuals to report any illegal activities or threats to public interest.The Ethics Committee is responsible for enforcing the Code of Ethics, receiving reports of unethical behavior, and ensuring compliance with anti-corruption laws.",
        ar:"يتم إرسال رسالة سنوية إلى جميع الموظفين لتذكيرهم بوجود مدونة الأخلاق.تتوفر آلية إبلاغ لجميع الموظفين والأفراد للإبلاغ عن أي أنشطة غير قانونية أو تهديدات للمصلحة العامة.لجنة الأخلاقيات هي المسؤولة عن تطبيق مدونة الأخلاقيات ، وتلقي التقارير عن السلوك غير الأخلاقي ، وضمان الامتثال لقوانين مكافحة الفساد."
    },
    budget:{
        en:'The budget of CASCO',
        ar:'ميزانية كاسكو'
    },
    budgetP:{
        en:`"CASCO Group" was founded with a clear vision to provide high-quality and professional consulting services to all entities that seek accreditation and application of technical specifications. Based on this vision, the company's available budget is funded from the following sources:`,
        ar:'تأسست شركة "كاسكو" برؤية واضحة لتقديم خدمات استشارية عالية الجودة والمهنية لجميع الجهات التي ترغب في الحصول على الاعتماد وتطبيق المواصفات الفنية. وبناء على هذه الرؤية، فإن الميزانية المتاحة للشركة تمول من المصادر التالية:'
    },
    budgetP1:{
        en:'The revenues and fees earned by the company for the services provided to its clients.',
        ar:'العوائد والرسوم التي تجنيها الشركة عن الخدمات المقدمة لعملائها.'
    },
    budgetP2:{
        en:'The funds allocated to the company by member states.',
        ar:'الأموال التي تخصصها للشركة الدول الأعضاء.'
    },
    budgetP3:{
        en:`Other resources determined by management do not conflict with the company's strategic objectives and vision.`,
        ar:'الموارد الأخرى التي تحددها الإدارة والتي لا تتعارض مع الأهداف والرؤية الاستراتيجية للشركة.'
    },
    budgetP4:{
        en:`The company's mission is to provide innovative and effective solutions to its clients and to achieve growth and success in all entities it works with. The company relies on its independent budget to meet its financial needs and enable it to achieve these goals.`,
        ar:'تتمثل مهمة الشركة في تقديم حلول مبتكرة وفعالة لعملائها، وتحقيق النمو والنجاح في جميع الجهات التي تعمل معها. وتعتمد الشركة على الميزانية المستقلة لتلبية احتياجاتها المالية وتمكينها من تحقيق هذه الأهداف.'
    },
////////////////////< Board of Directors >//////////////////////////////////
    BoardOfDirectorsNav2:{
        en:' > Our Team',
        ar:' > فريقنا'
    },
    AboutCascoNav2:{
    en:" > About CASCO",
    ar:" > عن كاسكو"
    },
    BoardofDirectors:{
        en:'Our Team',
        ar:'فريقنا'
    },
    MrAhmedMahrous:{
        en:'Mr.Ahmed Mahrous',
        ar:'السيد أحمد محروس'
    },
    BusinessDevelopmentManager:{
        en:'Business Development Manager',
        ar:'مدير تطوير الأعمال'
    },
    MrMostafaFarag:{
        en:'Mr.Mostafa Farag',
        ar:'السيد مصطفى فرج'
    },
    ChiefFinancialOfficerCFO:{
        en:'ChiefFinancialOfficer(CFO)',
        ar:'المدير المالي (CFO)'
    },
    MsJihadMohamed:{
        en:'Ms. Jihad Mohamed',
        ar:'السيدة جهاد محمد'
    },
    ChiefOperationsOfficerCFO:{
        en:'Chief Operations Officer (CFO)',
        ar:'مدير العمليات (CFO)'
    },
    MrsEsraaAbdelHafez:{
        en:'Mrs. Esraa Abdel Hafez',
        ar:'السيدة اسراء عبد الحافظ'
    },
    HumanResourcesDirector:{
        en:'Human Resources Director',
        ar:'مدير الموارد البشرية'
    },
    DrAhmedBedawi:{
        en:'Dr. Ahmed Bedawi',
        ar:'د. أحمد بدوي'
    },
    TrainingAcademyManager:{
        en:'Training Academy Manager',
        ar:'مدير أكاديمية التدريب'
    },
    ProfDrAbdelrhamanFarahat:{
        en:'Prof. Dr. Abdelrhaman Farahat',
        ar:'أ.د. عبد الرحمن فرحات'
    },
    TechnicalSchemeManager:{
        en:'Technical Scheme Manager',
        ar:'مدير البرنامج الفني'
    },
    ProfDrMagdyElMahdy:{
        en:'Prof. Dr. Magdy ElMahdy',
        ar:'الأستاذ الدكتور مجدي المهدى'
    },
    ChiefInspectorOfficerCIO:{
        en:'Chief Inspector Officer (CIO)',
        ar:'رئيس المفتشين (CIO)'
    },
    DrFred:{
        en:'Dr. Fred',
        ar:'د. فريد'
    },
    InformationSecurityBCMDirector:{
        en:'Information Security & BCM Director',
        ar:'مدير أمن وسلامة المعلومات'
    },
    ShehabAlAref:{
        en:'Shehab Al Aref',
        ar:'شهاب العارف'
    },
    DigitalTransformationDirector:{
        en:'Digital Transformation Director',
        ar:'مدير التحول الرقمي'
    },
    DinaMohi:{
        en:'Dina Mohi',
        ar:'دينا محي'
    },
    ArchitecturalGraphicDirector:{
        en:'Architectural Graphic Director',
        ar:'مديرة الجرافيك المعماري'
    },
    AhmedHammad:{
        en:'Dr .Ahmed Hammad',
        ar:'د .احمد حماد'
    },
    DrKossai:{
        en:'Dr .Kossai',
        ar:'د. قسي'
    },
    /////////////////////< The director general1 >/////////////////////////
    routeDirctorGeneral:{
        en:'Home > About Us > Director General',
        ar:' الرئيسية  >  عن كاسكو  >  المدير العام'
    },
    DirectorManger:{
        en:'Director General',
        ar:'المدير العام'
    },
    Thedirectorgeneral1:{
        en:'The director general is responsible for:-',
        ar:'مهام ومسؤوليات المدير العام :-'
    },
    Thedirectorgeneral2:{
        en:'Ensuring appropriate representation at national, regional and international levels',
        ar:'ضمان التمثيل المناسب على المستويات الوطنية والإقليمية والدولية'
    },
    Thedirectorgeneral3:{
        en:'Signing mutual recognition arrangements',
        ar:'توقيع اتفاقيات الاعتراف المتبادل'
    },
    Thedirectorgeneral4:{
        en:'Supporting GAC presence in regional and international institutions in accordance with relevant laws and regulations, international standards and conventions',
        ar:'دعم حضور المركز في المؤسسات الإقليمية والدولية وفقا للقوانين واللوائح ذات الصلة، والمعايير والاتفاقيات الدولية'
    },
    Thedirectorgeneral5:{
        en:'Develop relationships with stakeholders of accreditation activity',
        ar:'تطوير العلاقات مع أصحاب العلاقة بنشاط الاعتماد'
    },
    Thedirectorgeneral6:{
        en:'Head of evaluation teams for the accreditation of laboratories, inspection bodies, Halal certification bodies, and product certification bodies',
        ar:'رئيس فرق التقييم لاعتماد المختبرات وجهات التفتيش وجهات اصدار شهادات الحلال وجهات اصدار شهادات المنتجات'
    },
    Thedirectorgeneral7:{
        en:'A peer reviewer in each of the International Organization for Accreditation of Asia and the Pacific Countries (APAC) and the International Organization',
        ar:'مقيم نظراء في كل من المنظمة الدولية للاعتماد لدول آسيا والمحيط الهادي APAC و المنظمة الدولية'
    },
    Thedirectorgeneral8:{
        en:'Vice President of the Arab Regional Accreditation Agency (ARAC).',
        ar:'نائب رئيس الجهاز الإقليمي العربي للاعتماد ARAC'
    },
    Thedirectorgeneral9:{
        en:'An international trainer and certification expert since 2015',
        ar:'مدرب دولي وخبير اعتماد منذ 2015'
    },
//////////////////< Our Values >////////////////////////
    routeourvalues:{
        en:'Home > About Us > Our Values',
        ar:' الرئيسية  >  عن كاسكو  >  قيمنا'
    },
    ourValuesTitle:{
        en:'Our Values',
        ar:'قيمنا'  
    },
    Ourcorporatevalues:{
        en:'Our corporate values',
        ar:'قيم شركتنا'
    },
    LeadershipthroughExample:{
        en:'Leadership through Example',
        ar:'القيادة من خلال المثال'    
    },
    LeadershipthroughExampleb1:{
        en:`"Commitment" > highlights our employees' dedication to maintaining high standards in their daily work, taking extra steps to reduce the risk for clients, collaborating with and supporting coworkers, and making a positive impact to create a safer world.`,
        ar:'الالتزام" > الضوء على تفاني موظفينا في الحفاظ على معايير عالية في عملهم اليومي ، واتخاذ خطوات إضافية لتقليل المخاطر على العملاء ، والتعاون مع زملائهم في العمل ودعمهم ، وإحداث تأثير إيجابي لخلق عالم أكثر أمانًا.'
    },
    LeadershipthroughExampleb2:{
        en:`"Excellence" > embodies our ongoing pursuit of excellence by continuously enhancing our abilities and staying ahead of the curve in our field.`,
        ar:'"التميز" يجسد سعينا المستمر للتميز من خلال تعزيز قدراتنا باستمرار والبقاء في الطليعة في مجالنا.'    
    },
    EntrepreneurshipInnovation:{
        en:'Entrepreneurship & Innovation',
        ar:'ريادة الأعمال والابتكار'
    },        
    EntrepreneurshipInnovationb1:{
        en:'Embracing risk with an entrepreneurial mindset: Agile and Dependable',
        ar:'تقبل المخاطر بعقلية ريادة الأعمال: رشاقة ويمكن الاعتماد عليها'
    },
    EntrepreneurshipInnovationb2:{
        en:'We continuously seek improvement, and, through cross-disciplinary collaboration, we unlock new possibilities and create innovative solutions that bring added value and differentiation. We inspire our clients to strive for greater speed and progress so they can secure the future success of their businesses.',
        ar:'نسعى باستمرار إلى التحسين ، ومن خلال التعاون متعدد التخصصات ، نطلق العنان لإمكانيات جديدة ونخلق حلولًا مبتكرة تحقق قيمة مضافة وتميزًا. نحن نلهم عملائنا للسعي لتحقيق سرعة أكبر وتقدم أكبر حتى يتمكنوا من تأمين النجاح المستقبلي لأعمالهم.'
    },
    AccountabilitySocialResponsibility:{
        en:`Accountability & Social Responsibility`,
        ar:'المساءلة والمسؤولية الاجتماعية'
    },
    AccountabilitySocialResponsibilityb1:{
        en:`Being Proactive: Managing Risk, Encouraging Sustainability and Green Development, Addressing Urban Growth.`,
        ar:'أن تكون استباقيًا: إدارة المخاطر ، وتشجيع الاستدامة والتنمية الخضراء ، ومعالجة النمو الحضري'
    },
    AccountabilitySocialResponsibilityb2:{
        en:`Accountability represents a promise of quality for our clients and ensures that our solutions are designed for long-term success.`,
        ar:'تمثل المساءلة وعدًا بالجودة لعملائنا وتضمن أن حلولنا مصممة لتحقيق النجاح على المدى الطويل.'
    },
    AccountabilitySocialResponsibilityb3:{
        en:`Together with social responsibility, it reflects our shared mission and our commitment to ensuring the safety and well-being of individuals both within the company and in society as a whole.`,
        ar:'إلى جانب المسؤولية الاجتماعية ، فهي تعكس مهمتنا المشتركة والتزامنا بضمان سلامة ورفاهية الأفراد داخل الشركة وفي المجتمع ككل.'
    },
    /////////////////////////////< StakeholdersAdvisoryCommittee >////////////////////////////////////////
    routeStakeholdersAdvisoryCommittee:{
        en:'Home > About CASCO > Stakeholders Advisory Committee',
        ar:'الرئيسية  >  عن كاسكو  > اللجنة الاستشارية للجهات ذات العلاقة'
    },
    StakeholdersAdvisoryCommitteeTitle:{
        en:'Stakeholders Advisory Committee',
        ar:'اللجنة الاستشارية للجهات ذات العلاقة'
    },
    Responsibilitiesofthecommittee:{
        en:'Responsibilities of the committee',
        ar:'اختصاصات اللجنة الاستشارية'
    },
    Responsibilitiesofthecommitteeb1:{
        en:'The committee is in charge of the implementation of the following tasks and functions',
        ar:'تعمل اللجنة الاستشارية لتنفيذ المهام والاختصاصات التالية:'
    },
    Examininganddiscussingsubjects:{
        en:'Examining and discussing subjects related to the accreditation activities of the CASCO Group and providing relevant recommendations.',
        ar:'دراسة ومناقشة الموضوعات المتعلقة بأنشطة الاعتماد لمجموعة كاسكو وتقديم التوصيات ذات الصلة.'
    },
    Assessingthepolicies:{
        en:'Assessing the policies and strategies of the CASCO Group and offering opinions and recommendations to the General Director.',
        ar:'تقييم سياسات واستراتيجيات مجموعة كاسكو وتقديم الآراء والتوصيات إلى المدير العام.'
    },
    Evaluatingtheplans:{
        en:'Evaluating the plans and programs proposed by the General Director of the CASCO Group and making recommendations accordingly.',
        ar:' تقييم الخطط والبرامج المقترحة من قبل المدير العام لمجموعة كاسكو وتقديم التوصيات وفقًا لذلك.'
    },
    Reviewannualreports:{
        en:'Review annual reports on the activities and achievements of the CASCO Group and provide opinions and recommendations.',
        ar:'مراجعة التقارير السنوية عن أنشطة وإنجازات مجموعة كاسكو وإبداء الآراء والتوصيات.'
    },
    Compositionofthe:{
        en:'Composition of the stakeholders advisory committee',
        ar:'تكوين اللجنة الاستشارية للجهات ذات العلاقة'
    },
    TheAdvisory:{
        en:'The Advisory Committee is composed of 3 groups of interested parties represented as follows',
        ar:'تتكون اللجنة الاستشارية من ثلاث مجموعات للجهات ذات العلاقة بالاعتماد، كما يلي:'
    },
    Governmentauthorities:{
        en:'Government authorities',
        ar:'الجهات الحكومية'
    },
    ConformityAssessmentBodies:{
        en:'Conformity Assessment Bodies',
        ar:'جهات تقويم المطابقة'
    },
    GCCorganizationsIndustryandconsumers:{
        en:'GCC organizations, Industry and consumers',
        ar:'المستفيدون من خدمات الاعتماد'
    },
    Onerepresentativeofagovernment:{
        en:'One representative of a government authority (ministry) in each of the Member States (7 members).',
        ar:"ممثل واحد عن الجهات المختصة في كل من الدول الأعضاء (7 أعضاء)."
    },
    Onerepresentativefromtheconformity:{
        en:'One representative from the conformity assessment bodies accredited by the GAC (up to 6 members)',
        ar:'ستة ممثلين لجهات تقويم المطابقة المعتمدة من المركز يمثلون كل النشاطات المعتمدة.'
    },
    Onerepresentativefromtheconformity2:{
        en:'One representative from the conformity assessment bodies associations.',
        ar:'ممثل واحد عن تجمعات جهات تقويم المطابقة.'
    },
    Onerepresentative1:{
        en:'One representative of the chambers of commerce and industry of the Member States',
        ar:'ممثل واحد عن إتحاد الغرف التجارية والصناعية في الدول الأعضاء.'
    },
    Onerepresentative2:{
        en:'One representative of the consumer protection organizations',
        ar:'ممثل واحد عن الجمعيات الأهلية لحماية المستهلك في الدول الأعضاء.'
    },
    Onerepresentative3:{
        en:'One representative of the Secretariat-general of the Cooperation Council',
        ar:'ممثل واحد عن الأمانة العامة لمجلس التعاون على أن يكون من لجنة الاتحاد الجمركي.'
    },
    Onerepresentative4:{
        en:'One representative of the GCC Standardization Organization',
        ar:'ممثل واحد عن الأمانة العامة لهيئة التقييس لدول مجلس التعاون.'
    },
    Onerepresentative5:{
        en:'One representative of the regional metrology organization GULFMET',
        ar:'ممثل واحد عن التجمع الخليجي للمترولوجيا.'
    },
    Onerepresentative6:{
        en:'One representative from NGOs representing beneficiaries of conformity assessment activities',
        ar:'ممثل واحد عن الجهات الأهلية الممثلة للمستفيدين من أنشطة تقويم المطابقة.'
    },
    Onerepresentative7:{
        en:'One representative of the General Direction of the GCC accreditation Center.',
        ar:'ممثل واحد عن الإدارة العامة للمركز.'
    },
/////////////////////////////////////////// < Rights And Duties > //////////////////////////////////////////////////
    routeCASCORightsAndDuties:{
        en:'Home > About CASCO > Rights And Duties',
        ar:' الرئيسية  >  عن كاسكو  > الحقوق والواجبات'
    },
    CASCORightsAndDuties:{
        en:`CASCO’s Rights And Duties`,
        ar:'الحقوق والواجبات'
    },
    CASCOSRIGHTSANDDUTIES:{
        en:`CASCO'S RIGHTS AND DUTIES`,
        ar:'حقوق و واجبات المركز'
    },
    CASCOSRights:{
        en:`CASCO'S Rights`,
        ar:'حقوق المركز'
    },
    ritghs1:{
        en:'CASCO has the right to reject the accreditation request of an entity that does not cooperate in applying the accreditation requirements and standards, including applicable laws and regulations, or when fraudulent information or documents are found and when there is clear evidence of fraudulent behaviour.',
        ar:'يحق لشركة كاسكو رفض تأهيل الجهة طالبة الاعتماد الذي لا تتعاون فى تطبيق متطلبات ومعايير الاعتماد بما في ذلك القوانين / اللوائح المعمول بها ، أو عندما يتم العثور على معلومات أو مستندات مزورة وعندما يكون هناك دليل واضح على سلوكها الاحتيالي.'
    },
    ritghs2:{
        en:'The request from an entity that does not have the required information or documents or that does not cooperate to the necessary level to meet the qualification schedules will not be accepted.',
        ar:'عدم قبول الطلب من الجهة التي لا تتوفر لديها المعلومات أو المستندات المطلوبة أو تلك التي لا تتعاون إلى المستوى الضروري للوفاء بالجداول الزمنية للتأهيل.'
    },
    ritghs3:{
        en:`The top management or their delegates' failure to purchase technical specifications, technical regulations, or legal requirements to complete the technical qualification stages will result in disqualification.`,
        ar:'عدم التزام الادارة العليا أو مفوضيهم بشراء مواصفات فنية او لوائح فنية او متطلبات قانونية لأستكمال مراحل التأهيل الفني '
    },
    // ritghs4:{
    //     en:'To assess the management system of the CAB and require any document and access to location and facilities in relation to the scope of accreditation during the accreditation cycle of the CAB.',
    //     ar:'تقييم نظام إدارة الجهة والمطالبة بأي وثيقة والوصول إلى الموقع والمرافق فيما يتعلق بنطاق الاعتماد خلال فترة الاعتماد من المركز.'
    // },
    CASCOsduties:{
        en:'CASCO’s duties',
        ar:'واجبات المركز '
    },
    duiets1:{
        en:'To timely plan and conduct due assessments for the CABs to determine its competence',
        ar:'التخطيط في الوقت المناسب وإجراء التقييمات الواجبة لجهات تقييم المطابقة لتحديد كفاءتها'
    },
    duiets2:{
        en:'To ensure confidentiality of CAB’s information and their documents unless required by the law/regulation to disclose it in a way required.',
        ar:'ضمان سرية معلومات جهات تقويم المطابقة ووثائقها ما لم يطلب القانون / اللائحة الكشف عنها بالطرق النظامية.'
    },
    duiets3:{
        en:'GAC will make publicly available information about the current status of the accreditations that it has granted to the CABs, this information is updated regularly and in line with ISO/IEC 17011 requirements.',
        ar:`يتيح المركز للجمهور المعلومات حول الوضع الحالي للاعتمادات التي منحها إلى جهات تقويم المطابقة، ويتم تحديث هذه المعلومات بانتظام وبما يتماشى مع متطلبات ISO / IEC 17011.`
    },
    duiets4:{
        en:'To ensure impartiality of its services',
        ar:'ضمان حيادية خدماته'
    },
    duiets5:{
        en:'To inform its accredited CABs about any changes in the accreditation requirements and timelines as applicable, to ensure the implementation of changes it could be covered through next due assessment or by asking CABs to provide some immediate evidences of implementation.',
        ar:'إبلاغ جهات تقييم المطابقة المعتمده بالتغييرات في متطلبات الاعتماد والجداول الزمنية حسب الاقتضاء، لضمان تنفيذ التغييرات التي يمكن تغطيتها من خلال التقييم التالي الواجب أو عن طريق مطالبة الجهات بتقديم بعض الأدلة الفورية للتنفيذ.'
    },
    duiets6:{
        en:'To provide information about suitable ways to obtain tractability of measurement results in relation to the scope for which accreditation is provided. This is detailed in the Technical Note TN 2.0.',
        ar:'توفير معلومات حول الطرق المناسبة للحصول على إمكانية تتبع نتائج القياس فيما يتعلق بالنطاق الذي يتم تقديم الاعتماد من أجله. هذا مفصل في الدليل الفني TN 2.0.'
    },
//////////////////////////////////////< Contact Us >////////////////////////////////////////////////////////////////////////
    ContactUsHeadLink:{
        en:' > Contact Us',
        ar:' > تواصل معنا'
    },
    ContactUs:{
        en:'Contact Us',
        ar:'تواصل معنا'
    },
    EgyptBranch:{
        en:'Egypt Branch',
        ar:'فرع مصر'
    },
    egyptadress:{
        en:'61 Al Falki, Bab Al Louq, Abdeen, Cairo Governorate 11513, Egypt',
        ar:'61 الفلكي, باب اللوق, عابدين , القاهرة 11513, مصر'
    },
    UAEBranch:{
        en:'UAE Branch',
        ar:'فرع الإمارات'
    },
    uaeadress:{
        en:'Floor #14 flat #1401 Victoria Building 31 new al taawun road Sharjah - UAE. land Mark Oriana Hospital',
        ar:'دور 14 مكتب 1401 مبنى فيكتوريا رقم 31 طريق التعاون الجديد الشارقة الإمارات'
    },
    KSABranch:{
        en:'KSA Branch',
        ar:'فرع السعودية'
    },
    ksaAdress:{
        en:'KSA - Riyadh - Mosa Bin Nasser St. Borj Alnamer - office No: 506',
        ar:'مكتب 506 , برج الانامر, شارع موسى بن نصير, الرياض , السعودية'
    },
    pleasefillform:{
        en:'Please fill out the form below, and one of our representatives will contact you within 24 hours.',
        ar:'يرجى ملء النموذج أدناه ، وسيتصل بك أحد ممثلينا في غضون 24 ساعة.'
    },
    Contactoption:{
        en:'Contact',
        ar:'اتصل بنا'
    },
    Inquiryoption:{
        en:'Inquiry',
        ar:'استفسار'
    },
    ComplaintsSeggestionsoption:{
        en:'Complaints & Seggestions',
        ar:'الشكاوى والمقترحات'
    },
    TechnicalSupportoption:{
        en:'Technical Support',
        ar:'الدعم الفني'
    },
    Subject:{
        en:'Subject',
        ar:'الموضوع'
    },
    Message:{
        en:'Message',
        ar:'رسالتك'
    },
    sendmessage:{
        en:'Send Message',
        ar:'إرسال'
    },
/////////////////////////////////////////////////our Cients//////////////////////////////////////////////////////////////////////////////
    ourclientsnav:{
        en:' > Our Clients',
        ar:' > عملائنا'    
    },
////////////////////////////// driector general/////////////////////////////////////////
    Responsibilities:{
        en:'Roles and Responsibilities',
        ar:'المهام والمسؤلويات'
    },





















    // Login page
    welcomeBack: {
        en: 'Welcome back',
        ar: 'مرحبًا بعودتك'

    },
    login: {
        en: 'Login',
        ar: 'تسجيل الدخول'
    },
    email: {
        en: 'Email',
        ar: 'البريد الإلكتروني'
    },
    password: {
        en: 'Password',
        ar: 'كلمة المرور'
    },
    forgetPassword: {
        en: 'forget password?',
        ar: 'نسيت كلمة السر؟'
    },
    rememberMe: {
        en:'Remember me',
        ar: 'تذكرنى'
    },
    domainName: {
        en: 'Domain Name',
        ar: 'اسم النطاق'
    },
    localUser: {
        en: 'LOCAL USER',
        ar: 'مستخدم محلي'
    },
    emailOrPassError: {
        en: 'Email or password is incorrect!',
        ar: 'البريد الالكتروني او كلمة المرور غير صحيحة!'
    },
    loginNow: {
        en: 'Login Now',
        ar: 'تسجيل الدخول الآن'
    },

    // Forget password page
    forgotYourPassword: {
        en: 'Forgot Your Password ?',
        ar: 'نسيت كلمة المرور ؟'
    },
    enterYourEmailAddress: {
        en: 'Enter Your Email Address',
        ar: 'أدخل عنوان بريدك الالكتروني'
    },
    emailErrorMsg: {
        en: 'Enter a valid email address!',
        ar: 'أدخل عنوان بريد إلكتروني صالح!'
    },
    sendVerficationCode: {
        en: 'Send Verfication Code',
        ar: 'إرسال رمز التحقق'
    },
    signInToYourAccount: {
        en: 'Sign In To Your Account',
        ar: 'تسجيل الدخول إلى حسابك'
    },
    // Reset password Inputs Component.
    newPassword: {
        en: 'New Password',
        ar: 'كلمة السر الجديدة'
    },
    confirmNewPassword: {
        en: 'Confirm New Password',
        ar: 'تأكيد كلمة المرور الجديدة'
    },
    // Reset Pasword Page.
    resetYourPassword: {
        en: 'Reset Your Password',
        ar: 'اعد ضبط كلمه السر'
    },
    passwordCriteriaError: {
        en: `Password should contain at least one uppercase letter,
             one lowercase letter, one digit, one special symbol and
             should be more than 8 character.`,
        ar: `يجب أن تحتوي كلمة المرور على الأقل حرف كبير واحد،
             حرف واحد صغير، ورقم واحد ورمز خاص واحد، و
             يجب أن يكون أكثر من 8 أحرف.`
    },
    passwordsMatchError: {
        en: 'Passwords should match!!',
        ar: 'يجب أن تتطابق كلمات المرور !!'
    },
    submit: {
        en: 'Submit',
        ar: 'ارسل'
    },
    // ITR Navbar
    searchBarPlaceHolder: {
        en: "Search by tenant's name",
        ar: 'ابحث باسم المستأجر'
    },
    // ITR Settings card
    changeLanguage: {
        en: 'Change language',
        ar: 'تغيير اللغة'
    },
    changePassword: {
        en: 'Change password',
        ar: 'تغير كلمة السر'
    },
    logout: {
        en: 'Logout From This Account',
        ar: 'تسجيل الخروج من هذا الحساب'
    },
    // ITR Sidenav
    home: {
        en: 'Home',
        ar: 'الرئيسية'
    },
    tenants: {
        en: 'Tenants',
        ar: 'المستأجرين'
    },
    ticosysAdmins: {
        en: 'Ticosys Admins',
        ar: 'مشرفو Ticosys'
    },
    // ITR Admin Home Page
    hello: {
        en: 'Hello,',
        ar: 'مرحبًا،'
    },
    // ITR change password
    change: {
        en: 'Change',
        ar: 'تغير'
    },
    currentPassword: {
        en: 'Current Password',
        ar: 'كلمة المرور الحالية'
    },
    confirm: {
        en: 'Confirm',
        ar: 'تأكيد'
    },
    // ITR Profile
    profile: {
        en: 'Profile',
        ar: 'الملف الشخصي'
    },
    multiFactoAuthentication: {
        en: 'Multi Factor Authentication',
        ar: 'مصادقة متعددة العوامل'
    },
    disableMultiFactoAuthentication: {
        en: 'Disable Multi Factor Authentication',
        ar: 'تعطيل المصادقة متعددة العوامل'
    },
    itrAdminEmail: {
        en: 'ITR Admin Email',
        ar: 'البريد الإلكتروني لمدير ITR'
    },
    conatctEmail:{
        en: 'Contact Email',
        ar: 'البريد الاكتروني للتواصل عبره'
    },
    contactPhoneNumber: {
        en: 'Contact Phone Number',
        ar: 'رقم الهاتف للتواصل عبره'
    },
    // First and last Name component
    firstName: {
        en: 'First Name',
        ar: 'الاسم الاول'
    },
    lastName: {
        en: 'Last Name',
        ar: 'اسم العائلة'
    },
    // MFA Code input component
    mfaCodeInputLabel: {
        en: 'Enter The Code Generated By The App',
        ar: 'أدخل الرمز الذي تم إنشاؤه بواسطة التطبيق'
    },
    // MFA Modal msgs
    infoFirstPart: {
        en: 'Please We Need Your Email And Password',
        ar: 'من فضلك ، نحتاج إلى بريدك الإلكتروني وكلمة المرور'
    },
    infoSecondPart: {
        en: 'To Enable Multi Factor Authentication',
        ar: 'لتمكين المصادقة متعددة العوامل.'
    },
    mfaIsDoneMsg: {
        en: 'Successfully Done',
        ar: 'فعلت بنجاح'
    },
    // change password
    oldPassError: {
        en: 'Old password is incorrect.',
        ar: 'كلمة المرور القديمة غير صحيحة.'
    },
    newPassMsg: {
        en: 'A new password has been set.',
        ar: 'تم تعيين كلمة مرور جديدة.'
    },
    // create New Ticosys Admin Card
    newTicoSysAdmin: {
        en: 'New TicoSys Admin',
        ar: 'مسؤول TicoSys جديد'
    },
    createANewAdminInTicoSys: {
        en: 'Create A New Admin In TicoSys',
        ar: 'قم بإنشاء مسؤول جديد في TicoSys'
    },
    // Create New TicoSys admin page
    configurations: {
        en: 'Configurations',
        ar: 'جديد'
    },
    ticosysAdminName: {
        en: 'Ticosys Admin Name',
        ar: 'اسم مسؤول Ticosys'
    },
    ticosysAdminPassword: {
        en: 'Ticosys Admin Password',
        ar: 'كلمة مرور مسؤول Ticosys'
    },
    ticosysAdminEmail: {
        en: 'Ticosys Admin Email',
        ar: 'البريد الإلكتروني لمسؤول Ticosys'
    },
    confirmPassword: {
        en: 'Confirm Password',
        ar: 'تأكيد كلمة المرور'
    },
    allInputsAreRequired: {
        en: 'All inputs are required',
        ar: 'جميع المدخلات مطلوبة'
    },
    emailIsNotValid: {
        en: 'Email is not valid',
        ar: 'البريد الإلكتروني غير صالح'
    },
    emailIsAlreadyExists: {
        en: 'Email is already exists',
        ar: 'البريد الإلكتروني موجود بالفعل'
    },
    newTicoSysAdminCreatedMsg: {
        en: 'A new TicoSys admin has been created successfully',
        ar: 'تم إنشاء مسؤول TicoSys جديد بنجاح'
    },
    newTicoSys: {
        en: 'New TicoSys',
        ar: 'إعدادات TicoSys'
    },
    // ticosys admin profile page.
    ticosysAdmin: {
        en: 'Ticosys Admin',
        ar: 'الملف الشخصي'
    },
    ticosysProfileWord: {
        en: 'Profile',
        ar: 'لمسؤول Ticosys'
    },
    disable: {
        en: 'Disable',
        ar: 'تعطيل'
    },
    enable: {
        en: 'Enable',
        ar: 'تفعيل'
    },
    edit: {
        en: 'Edit',
        ar: 'تعديل'
    },
    disabled: {
        en: 'Disabled',
        ar: 'مُعطل'
    },
    enabled: {
        en: 'Enabled',
        ar: 'مٌفعل'
    },
    // ==== 404 Page ===
    fourOhfourNotFound: {
        en: 'Page Not Found',
        ar: 'صفحة غير موجود'
    },
    fourOhfourMsg: {
        en: "Woops. Looks Like this page doesn't Exist.",
        ar: 'Woops. يبدو أن هذه الصفحة غير موجودة.'
    },
    // === tenant profile page ===
    tenantId: {
        en: 'Tenant Id',
        aR: 'معرف المستأجر'
    },
    standardLicence: {
        en: 'Standard Licence',
        ar: 'رخصة عادية'
    },
    tenantName: {
        en: 'Tenant Name',
        ar: 'اسم المستأجر'
    },
    tenantAdminName: {
        en: 'Tenant Admin Name',
        ar: 'اسم مسؤول المستأجر'
    },
    tenantAdminEmail: {
        en: 'Tenant Admin Email',
        ar: 'البريد الإلكتروني لمدير المستأجر'
    },
    tenantAdminPassword: {
        en: 'Tenant Admin Password',
        ar: 'كلمة مرور مسؤول المستأجر'
    },
    subdomainError: {
        en: 'Sub-Domain name is invalid please change it and try again.',
        ar: 'اسم المجال الفرعي غير صالح يرجى تغييره والمحاولة مرة أخرى.'
    },
    tenantSuccessCreationMsg: {
        en: 'A new Tenant has been created successfully',
        ar: 'تم إنشاء مستأجر جديد بنجاح'
    },
    changeTenantLicense: {
        en: 'Change Tenant License',
        ar: 'تغيير رخصة المستأجر'
    },
    // not auth page.
    youRNotAuth: {
        en: 'You Are Not Authorized To Access This Page',
        ar: 'أنت غير مفوض لدخول هذه الصفحة'
    },
    backToHome: {
        en: 'Back To Home',
        ar: 'العودة إلى الصفحة الرئيسية'
    },
    // create new tenant page
    newTenant: {
        en: "New Tenant's",
        ar: 'تكوينات المستأجر'
    },
    chooseTenantLicense: {
        en: 'Choose Tenant License',
        ar: 'اختر رخصة المستأجر'
    },
    serverErrorMsg: {
        en: 'Server error. Please try again later!.',
        ar: 'خطأ في الخادم. الرجاء معاودة المحاولة في وقت لاحق!.'
    },
    yourFullName: {
        en: 'Your Full Name',
        ar: 'اسمك الكامل'
    },
    cancel: {
        en: 'cancel',
        ar: 'إلغاء'
    },
    admins: {
        en: 'Admins',
        ar: 'مشرفو'
    },
    // create new tenant component
    createNewTenantMsgFirst: {
        en: 'Create A New Tenant And',
        ar: 'إنشاء مستأجر جديد و'
    },
    createNewTenantMsgTwo: {
        en: 'Configure The Tenant Admin',
        ar: 'تكوين إدارة المستأجر'
    },
    // enable/disable Modal component
    disabledTenant: {
        en: 'Disabled Tenant !',
        ar: 'مستأجر معطل!'
    },
    disabledTicosysAdmin: {
        en: 'Disabled Ticosys Admin !',
        ar: 'مسؤول Ticosys معطل'
    },
    tenantDisableMsgFirst: {
        en: 'If The Tenant Disabled, No One Will',
        ar: 'إذا كان المستأجر معاقًا ، فلن يتمكن أحد'
    },
    tenantDisableMsgSecond: {
        en: 'Be Able To Access It !',
        ar: 'من الوصول إليه!'
    },
    ticosysAdminDisableMsgFirst: {
        en: 'tenantDisableMsgFirst',
        ar: 'إذا كان مسؤول Ticosys معطلًا ، فلن يكون قادرًا'
    },
    ticosysAdminDisableMsgSecond: {
        en: 'Be Able To Login Anymore.',
        ar: 'على تسجيل الدخول بعد الآن.'
    },
    pleaseConfirmThe: {
        en: 'Please Confirm that',
        ar: 'يرجى تأكيد أن'
    },
    willBeDisabled: {
        en: 'Will Be Disabled !',
        ar: 'سوف يعطل'
    },
    ticosysAdminNameIsIncorrect: {
        en: "Ticosys Admin's Name Is Incorrect!",
        ar: 'اسم مسؤول Ticosys غير صحيح!'
    },
    tenantNameIsIncorrect: {
        en: 'Tenant Name Is Incorrect!',
        ar: 'اسم المستأجر غير صحيح!'
    },
    accountVerification: {
        en: 'Account Verification',
        ar: 'تأكيد الحساب'
    },
    toDisableTicosysAdmin: {
        en: 'To Disable Ticosys Admin.',
        ar: 'لتعطيل مسؤول Ticosys.'
    },
    toDisableTenant: {
        en: 'To Disable Tenant.',
        ar: 'لتعطيل المستأجر.'
    },
    // new tenant Logo component
    setAnInitialOrganization: {
        en: 'Set An Initial Organization',
        ar: 'تعيين شعار المؤسسة'
    },
    logo: {
        en: 'Logo (.Png, .Svg, .Jpg)',
        ar: 'الأولي (.Png, .Svg, .Jpg)'
    },
    // subdomain input component
    enterSubDomain: {
        en: 'Enter Subdomain',
        ar: 'أدخل المجال الفرعي'
    },
    subdomanInfoOne: {
        en: "The Sub-Domain Can't Be Changed After",
        ar: 'لا يمكن تغيير المجال الفرعي بعد'
    },
    subdomainInfoTwo: {
        en: 'Creating The Tenant.',
        ar: 'إنشاء المستأجر.'
    },
    subdomainInfoThree: {
        en: 'Inputs Should Be 63 Char. Max, Begin And End With',
        ar: 'جب أن تكون المدخلات 63 حرفًا. الحد الأقصى والبدء والانتهاء'
    },
    subdomainInfoFour: {
        en: 'Letters/Numbers. Inputs May Contain Hyphens And Dots',
        ar: ' بالأحرف / الأرقام. قد تحتوي المدخلات على واصلات ونقاط'
    },
    subdomainInfoFive: {
        en: 'Without Any Other Special Characters.',
        ar: 'بدون أي أحرف خاصة أخرى.'
    },
    subdomainValidMsg: {
        en: 'Sub-Domain Name is Valid.',
        ar: 'اسم المجال الفرعي صالح.'
    },
    subdomainInvalidMsg: {
        en: 'Sub-Domain Name is Already Exists.',
        ar: 'اسم المجال الفرعي موجود بالفعل.'
    },
    // tenant card Component
    dotActiveTenant: {
        en: '• Active Tenant',
        ar: '• المستأجر النشط'
    },
    dotDisabledTenant: {
        en: '• Disabled Tenant',
        ar: '• مستأجر معطل'
    },
    createdBy: {
        en: 'Created By',
        ar: 'انشأ من قبل'
    },
    // Tenant License Modal
    tenantLicense: {
        en: 'Tenant License',
        ar: 'رخصة المستأجر'
    },
    chooseLicense: {
        en: 'Choose License',
        ar: 'اختر الرخصة'
    },
    confirmLicense: {
        en: 'Confirm License',
        ar: 'تأكيد الرخصة'
    },
    licenseErrorMsg: {
        en: "Number of users can not be 0. Number of technicians should be less than the total number of users.",
        ar: 'لا يمكن أن يكون عدد المستخدمين 0. يجب أن يكون عدد الفنيين أقل من إجمالي عدد المستخدمين.'
    }
};

export default indexTrans;