import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const InsuranceCompanies = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Insurance Schemes 🛡' />
      <Association name='Pradhan Mantri Fasal Bima Yojana (PMFBY)' link='https://pmfby.gov.in/' desc="" />
      <Association name='Weather based Crop Insurance Scheme (WBCIS)' link='https://www.india.gov.in/weather-based-crop-insurance-scheme-wbcis' desc="" />
      <Association name='Coconut Palm insurance scheme (CPIS)' link='https://www.myscheme.gov.in/schemes/cpis' desc="" />
      <Association name='Pilot Unified Package insurance scheme (UPIS) (45 districts)' link='https://vikaspedia.in/agriculture/agri-insurance/unified-package-insurance-scheme' desc="" />
      <Association name='LIC Of India' link='https://licindia.in/' desc="" />
    </div>
  )
}

export default InsuranceCompanies
