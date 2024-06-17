import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const InsuranceCompanies = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Insurance Schemes 🛡' />
      <div className='flex flex-row space-x-1 flex-wrap justify-evenly items-center'>
        <Association big={false} img='https://static.vikaspedia.in/media/images_en/agriculture/agri-insurance/pmfby.jpg' name='Pradhan Mantri Fasal Bima Yojana (PMFBY)' link='https://pmfby.gov.in/' desc="" />
        <Association big={false} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_uxzbiT2kz95qoxjcIFi6dLtnKPl2lFRjbg&s' name='Weather based Crop Insurance Scheme (WBCIS)' link='https://www.india.gov.in/weather-based-crop-insurance-scheme-wbcis' desc="" />
        <Association big={false} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNAY5l0odv-8bmBb4MNeJuxaqRkaEIfyEbg&s' name='Coconut Palm insurance scheme (CPIS)' link='https://www.myscheme.gov.in/schemes/cpis' desc="" />
        <Association big={false} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTc7uccHGGGC3a4S2d3TIb8MaHu7AN4WutHQ&s' name='Pilot Unified Package insurance scheme (UPIS) (45 districts)' link='https://vikaspedia.in/agriculture/agri-insurance/unified-package-insurance-scheme' desc="" />
        <Association big={false} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PNB7ONk9D9hanaMufwDH3Q03FlpMUVUdRw&s' name='LIC Of India' link='https://licindia.in/' desc="" />
      </div>
    </div>
  )
}

export default InsuranceCompanies
