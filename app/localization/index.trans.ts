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
    // NavBar
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
        en:'Board Of Directors',
        ar:'مجلس الادارة'
    },
    DirectorMangerNav:{
        en:'Director Manger',
        ar:'المدير العام'
    },
    OrganizationalStructureNav:{
        en:'Organizational Structure',
        ar:'الهيكل التنظيمي'
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
        en:'Accredited Bodies',
        ar:'الجهات المعتمدة',
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
        en: '404 Not Found',
        ar: '404 غير موجود'
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