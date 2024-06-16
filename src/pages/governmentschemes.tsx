import React from 'react'
import Scheme from '@/components/governmentschemes/Scheme'

const GovernmentSchemes = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Scheme link='https://www.enam.gov.in/web/' name='E-NAM' desc="an online trading platform for agricultural communities in India" />
      <Scheme link='https://pmkisan.gov.in/' name='Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)' desc="a pension scheme for small and marginal farmers" />
      <Scheme link='https://pmfby.gov.in/' name='Pradhan Mantri Fasal Bima Yojana (PMFBY)' desc="a crop insurance scheme to protect farmers from natural calamities" />
      <Scheme link='https://www.myscheme.gov.in/schemes/kcc' name='Kisan Credit Card (KCC) Scheme' desc="a credit scheme to provide timely and adequate credit to farmers" />
      <Scheme link='https://www.pmksy.gov.in/' name='Pradhan Mantri Krishi Sinchai Yojana (PMKSY)' desc="a scheme to enhance irrigation coverage and water use efficiency" />
      <Scheme link='https://nmsa.dac.gov.in/' name='National Mission for Sustainable Agriculture (NMSA)' desc="a scheme to promote sustainable and climate-resilient agriculture" />
    </div>
  )
}

export default GovernmentSchemes
