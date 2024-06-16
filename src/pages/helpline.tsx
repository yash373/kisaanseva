import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const Helpline = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Get Help 🔴' />
      <div className='flex flex-row space-x-1 flex-wrap justify-evenly items-center'>
        <Association img='https://asianfarmers.org/wp-content/uploads/2011/02/india-sri-farming-1024x682.jpg' name='Uttar Pradesh' desc='2237617' link='tel:2237617' />
        <Association img='https://img.etimg.com/thumb/msid-58513140,width-672,resizemode-4,imgsize-133246/news/economy/agriculture/west-bengal-starts-organic-farming-activities-across-the-state/farming-bccl.jpg' name='West Bengal' desc='2252-0619' link='tel:22520619' />
        <Association img='https://thumbs.dreamstime.com/z/dewas-madhya-pradesh-india-farmer-using-oxen-working-field-indian-farming-scene-soybean-plants-dewas-madhya-pradesh-157197053.jpg' name='Madhya Pradesh' desc='1800 180 1551' link='tel:18001801551' />
        <Association img='https://www.alightindia.com/CDN/Content/Images/PostImages/ORIGINAL/kr3--523ad0.jpg' name='Karnataka' desc='18004 253553' link='tel:18004253553' />
        <Association img='https://newsd.in/wp-content/uploads/2016/10/maharashtr.jpg' name='Maharashtra' desc='022-61316429' link='tel:02261316429' />
      </div>
    </div>
  )
}

export default Helpline
