import React from 'react'
import Heading from '@/components/explore/Heading'
import Association from '@/components/connecttomarket/Association'

const GovernmentSchemes = () => {
  return (
    <div className='flex flex-col space-y-4 w-full'>
      <Heading text='Government Schemes 💼' />
      <div className='flex flex-row space-x-1 flex-wrap justify-evenly items-center'>
        <Association big={false} img='/schemes/enam.jpeg' link='https://www.enam.gov.in/web/' name='E-NAM' desc="an online trading platform for agricultural communities in India" />
        <Association big={false} img='/schemes/pmkmy.jpeg' link='https://pmkisan.gov.in/' name='Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)' desc="a pension scheme for small and marginal farmers" />
        <Association big={false} img='/schemes/pmfby.jpeg' link='https://pmfby.gov.in/' name='Pradhan Mantri Fasal Bima Yojana (PMFBY)' desc="a crop insurance scheme to protect farmers from natural calamities" />
        <Association big={false} img='/schemes/kcc.jpeg' link='https://www.myscheme.gov.in/schemes/kcc' name='Kisan Credit Card (KCC) Scheme' desc="a credit scheme to provide timely and adequate credit to farmers" />
        <Association big={false} img='/schemes/pmksy.jpeg' link='https://www.pmksy.gov.in/' name='Pradhan Mantri Krishi Sinchai Yojana (PMKSY)' desc="a scheme to enhance irrigation coverage and water use efficiency" />
        <Association big={false} img='/schemes/nmsa.jpeg' link='https://nmsa.dac.gov.in/' name='National Mission for Sustainable Agriculture (NMSA)' desc="a scheme to promote sustainable and climate-resilient agriculture" />
        <Association big={false} img='/schemes/pkvy.jpeg' link='https://www.myscheme.gov.in/schemes/pkvy' name='Paramparagat Krishi Vikas Yojana (PKVY)' desc="a scheme to promote organic farming and soil health" />
      </div>
    </div>
  )
}

export default GovernmentSchemes
