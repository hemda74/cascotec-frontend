import React from 'react'
import DriectorRole from '../../../components/DriectorRole';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData = {
    name:'Mostafa Farag',
    title:'ChiefFinancialOfficer(CFO)',
    image:'/images/borad_of_directors/Roles/03 Mostafa Farg/Mostafa Frag.jpeg',
    image_width:500,
    image_height:300,
    responsible:[
        'Ensuring appropriate representation at national, regional and international levels',
        'Signing mutual recognition arrangements',
        'Supporting GAC presence in regional and international institutions in accordance with relevant laws and regulations, international standards and conventions',
        'Develop relationships with stakeholders of accreditation activity',
        'An international trainer and certification expert since 2015',
    ]
}

const mostafa_farag = () => {
  return (
    <DriectorRole name={dummyData.name} title={dummyData.title} imaage={dummyData.image} responsible={dummyData.responsible} width={dummyData.image_width} height={dummyData.image_height} />
  )
}

export default mostafa_farag