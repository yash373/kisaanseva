import React from 'react'
import Heading from '@/components/explore/Heading'
import Association from '@/components/connecttomarket/Association'

const GovernmentSchemes = () => {
  return (
    <div className='flex flex-col h-full space-y-4 w-full'>
      <Heading text='Government Schemes 💼' />
      <div className='flex flex-row space-x-1 flex-wrap justify-evenly items-center'>
        <Association big={false} img='https://cdn1.byjus.com/wp-content/uploads/2016/05/e-nams-role-in-the-agriculture-sector-of-india1.png' link='https://www.enam.gov.in/web/' name='E-NAM' desc="an online trading platform for agricultural communities in India" />
        <Association big={false} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMluCydrpZkINgW0bVGM_rvAq40JtymDcZQ&s' link='https://pmkisan.gov.in/' name='Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)' desc="a pension scheme for small and marginal farmers" />
        <Association big={false} img='https://static.vikaspedia.in/media/images_en/agriculture/agri-insurance/pmfby.jpg' link='https://pmfby.gov.in/' name='Pradhan Mantri Fasal Bima Yojana (PMFBY)' desc="a crop insurance scheme to protect farmers from natural calamities" />
        <Association big={false} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBvZEgJdoTuiE0fnEsyWt-_yDGvELKJOcJg&s' link='https://www.myscheme.gov.in/schemes/kcc' name='Kisan Credit Card (KCC) Scheme' desc="a credit scheme to provide timely and adequate credit to farmers" />
        <Association big={false} img='https://www.instamojo.com/blog/wp-content/uploads/2020/01/PMKSY.jpg' link='https://www.pmksy.gov.in/' name='Pradhan Mantri Krishi Sinchai Yojana (PMKSY)' desc="a scheme to enhance irrigation coverage and water use efficiency" />
        <Association big={false} img='https://www.instamojo.com/blog/wp-content/uploads/2020/01/National-Mission-For-Sustainable-Agriculture.jpg' link='https://nmsa.dac.gov.in/' name='National Mission for Sustainable Agriculture (NMSA)' desc="a scheme to promote sustainable and climate-resilient agriculture" />
        <Association big={false} img='https://tneaonline.in/wp-content/uploads/2021/09/Paramparagat-Krishi-Vikas-Yojana.png' link='https://www.myscheme.gov.in/schemes/pkvy' name='Paramparagat Krishi Vikas Yojana (PKVY)' desc="a scheme to promote organic farming and soil health" />
      </div>
    </div>
  )
}

export default GovernmentSchemes
