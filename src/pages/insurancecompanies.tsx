import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const InsuranceCompanies = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Insurance Schemes 🛡' />
      <div className='flex flex-row space-x-1 flex-wrap justify-evenly items-center'>
        <Association big={false} img='/insurance/pmfby.jpeg' name='Pradhan Mantri Fasal Bima Yojana (PMFBY)' link='https://pmfby.gov.in/' desc="" />
        <Association big={false} img='/insurance/wbcis.jpeg' name='Weather based Crop Insurance Scheme (WBCIS)' link='https://www.india.gov.in/weather-based-crop-insurance-scheme-wbcis' desc="" />
        <Association big={false} img='/insurance/cpis.jpeg' name='Coconut Palm insurance scheme (CPIS)' link='https://www.myscheme.gov.in/schemes/cpis' desc="" />
        <Association big={false} img='/insurance/upis.jpeg' name='Pilot Unified Package insurance scheme (UPIS) (45 districts)' link='https://vikaspedia.in/agriculture/agri-insurance/unified-package-insurance-scheme' desc="" />
        <Association big={false} img='/insurance/lic.jpeg' name='LIC Of India' link='https://licindia.in/' desc="" />
      </div>
    </div>
  )
}

export default InsuranceCompanies
