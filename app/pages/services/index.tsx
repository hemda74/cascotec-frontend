import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout9';
import { NextPageWithLayout } from '../_app';
import Services from '../../components/ServicesPage';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData={
  services:[
    {
      service_id:0,
      service_name:'Laboratory Testing Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of testing laboratories, in accordance with the international standard ISO/IEC 17025:2017.',
      service_image:'../public/images/services_images/1.jpg',
      service_link:'laboratory-testing-consultation',
      services_name_ar:'استشارة مختبرات الاختبار',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال مختبرات الفحص، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17025:2017.'
    },
    {
      service_id:1,
      service_name:'Calibration Laboratory Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of calibration laboratories, in accordance with the international standard ISO/IEC 17025:2017.',
      service_image:'../public/images/services_images/2.jpg',
      service_link:'calibration-laboratory-consultation',
      services_name_ar:'استشارة مختبرات المعايرة',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال مختبرات المعايرة، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17025:2017.'
    },
    {
      service_id:2,
      service_name:'Inspection Certification Body Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of inspection body accreditation, in accordance with the international standard ISO/IEC 17020:2012.',
      service_image:'../public/images/services_images/3.jpg',
      service_link:'inspection-certification-body-consultation',
      services_name_ar:'استشارة جهات التفتيش',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال اعتماد جهات التفتيش، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17020:2012.'
    },
    {
      service_id:3,
      service_name:'Product Certification Body Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of product certification body accreditation, in accordance with the international standard ISO/IEC 17065:2012.',
      service_image:'../public/images/services_images/4.jpg',
      service_link:'product-certification-body-consultation',
      services_name_ar:'استشارة جهات منح الشهادات للمنتجات',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح الشهادات للمنتجات، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17065:2012.'
    },
    {
      service_id:4,
      service_name:'Management System Certification Body Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of management system certification body accreditation, in accordance with the international standard ISO/IEC 17021-1:2015.',
      service_image:'../public/images/services_images/5.jpg',
      service_link:'management-system-certification-body-consultation',
      services_name_ar:'استشارة الجهات المانحة لشهادات النظم الإدارية',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح شهادات النظم الإدارية، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17021-1:2015.'
    },
    {
      service_id:5,
      service_name:'Medical Laboratory Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of medical laboratories, in accordance with the international standard ISO 15189:2012.',
      service_image:'../public/images/services_images/6.jpg',
      service_link:'medical-laboratory-consultation',
      services_name_ar:'استشارة المختبرات الطبية',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال المختبرات الطبية، وذلك وفقًا للمواصفة القياسية الدولية ISO 15189:2012.'
    },
    {
      service_id:6,
      service_name:'Halal Certification Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of halal certification, in accordance with the international standard GSO 2055-2:2021.',
      service_image:'../public/images/services_images/7.jpg',
      service_link:'halal-certification-consultation',
      services_name_ar:'استشارة الجهات المانحة لشهادات الحلال',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح شهادات الحلال، وذلك وفقًا للمواصفة القياسية الدولية GSO 2055-2:2021.'
    },
    {
      service_id:7,
      service_name:'Personal Certification Consultation',
      service_desc:'At CASCO, we provide consultation services in the field of Personal certification, in accordance with the international standard ISO/IEC 17024:2012.',
      service_image:'../public/images/services_images/1.jpg',
      service_link:'personal-certification-consultation',
      services_name_ar:'استشارة جهات منح الشهادات للأفراد',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال منح الشهادات للأفراد، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17024:2012.'
    },
    {
      service_id:8,
      service_name:'Consultation for Proficiency Testing Providers',
      service_desc:'At CASCO, we provide consulting services in the field of proficiency testing providers in accordance with the international standard ISO/IEC 17043:2010.',
      service_image:'../public/images/services_images/2.jpg',
      service_link:'consultation-for-proficiency-testing-providers',
      services_name_ar:'استشارة الجهات المزودة لاختبارات الكفاءة',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال الجهات المزودة لاختبارات الكفاءة، وذلك وفقًا للمواصفة القياسية الدولية ISO/IEC 17043:2010.'
    },
    {
      service_id:9,
      service_name:'Technical Consultation for Notification Purposes',
      service_desc:`At CASCO, we offer technical consulting services for evaluation processes aimed at qualifying for notification by certifying authorities for products conformity certificates listed in the Gulf technical regulations GCC Standardization Organization "GSO", such as the regulations for children's toys (BD-131704-01) , low voltage electrical devices (BD-142004-01) , and more.`,
      service_image:'../public/images/services_images/3.jpg',
      service_link:'technical-consultation-for-notification-purposes',
      services_name_ar:'استشارة فنية لأغراض التعيين',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في عمليات التقييم الفني بغرض التأهيل للحصول على التعيين للجهات المانحة لشهادات مطابقة المنتجات الواردة في اللوائح الفنية الخليجية وذلك وفقا للائحة لعب الاطفال و لائحة الأجهزة الكهربائية منخفضة الجهد وغيرها.'
    },
    {
      service_id:10,
      service_name:'Consultation for Obtaining BRCGS Certification',
      service_desc:`At CASCO, we provide consultation services for qualification processes to obtain BRCGS Food Safety and BRCGS Packaging Material certifications.`,
      service_image:'../public/images/services_images/4.jpg',
      service_link:'consultation-for-obtaining-brcgs-certification',
      services_name_ar:'استشارة الحصول على شهادة تجار التجزئة بالمملكة المتحدة British Retail Consortium  -BRCGS ',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في عمليات التأهيل للحصول على شهادة BRCGS Food Safety وBRCGS Packaging Material  '
    },
    {
      service_id:11,
      service_name:'Consultation for Obtaining Forest Stewardship Council (FSC) Certification',
      service_desc:`At CASCO, we offer consulting services in the field of responsible forest management to ensure that wood products originating from forests are managed in a responsible and sustainable manner, in accordance with the international standard of the Forest Stewardship Council (FSC), Programme for the Endorsement of Forest Certification (PEFC), Keurhout, and the European Union Timber Regulation (EU TR).`,
      service_image:'../public/images/services_images/5.jpg',
      service_link:'consultation-for-obtaining-forest-stewardship-council-certification',
      services_name_ar:'استشارة الحصول على اعتماد إدارة الغابات FSC - Forest Stewardship Council',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال إدارة الغابات الطمأنينة للعامة بأن منتجات الأخشاب الناشئة من الغابات تدار بطريقة مسؤولة ومستدامة ، وذلك وفقًا للمواصفة القياسية الدولية لمجلس الإشراف على الغابات (FSC) ومجلس PEFC (برنامج للتصديق على أنظمة اعتماد الغابات) و Keurhout ولائحة الأخشاب في الاتحاد الأوروبي (EU TR).'
    },
    {
      service_id:12,
      service_name:'Consultation for Obtaining FSSC 22000 Scheme Certification',
      service_desc:`At CASCO, we provide consulting services in the field of FSSC 22000 - Food and Feed Safety Management System and Quality Management System accreditation, in compliance with ISO 22000/9001 requirements, the Basic Requirements for Sector Program, and additional program requirements as applicable, according to the FSSC 22000 Version 6.0 international standard for obtaining GFSI (Global Food Safety Initiative) accreditation.`,
      service_image:'../public/images/services_images/6.jpg',
      service_link:'consultation-for-obtaining-fssc22000-scheme-certification',
      services_name_ar:'استشارة الحصول على شهادة FSSC 22000 Scheme',
      service_desc_ar:'نقدم في شركة كاسكو خدمات استشارية في مجال FSSC 22000 - اعتماد نظام سلامة الأغذية والأعلاف وأنظمة إدارة الجودة بما يتوافق مع متطلبات ISO22000 / 9001 ومتطلبات برنامج المتطلبات الأساسية للقطاع ومتطلبات البرنامج الإضافية تبعا ، وذلك وفقًا للمواصفة القياسية الدولية  FSSC 22000 Version 6.0 للحصول على مصادقة GFSI.'
    },
    {
      service_id:13,
      service_name:'ESG Report Service',
      service_desc:'CASCO offers a low-cost and credible ESG report service for businesses in the Gulf region, leveraging our team of highly experienced advisors with in-depth knowledge of ESG standards, regulations, and best practices across all major jurisdictions.',
      service_image:'../public/images/services_images/7.jpg',
      service_link:'esg-report-service',
      services_name_ar:'14- خدمة تقارير ESG',
      service_desc_ar:'تقدم شركة كاسكو خدمة تقارير ESG بتكلفة منخفضة وموثوقة للشركات في منطقة الخليج، باستخدام فريق مستشارين ذوي خبرة عالية يتمتعون بمعرفة عميقة بمعايير ESG واللوائح وأفضل الممارسات في جميع الولايات الرئيسية'
    },
  ]
}
const services:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Services | CASCO</title>
    </Head>
    <main>
      <Services />
    </main>
    </>
  )
}
// adding Layout
services.getLayout = function getLayout(contactus: ReactElement) {
return <ViewerLayout childern={contactus}></ViewerLayout>;}
export default services;