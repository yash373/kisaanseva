import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const ConnectToTransport = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Connect To Transport 🚚' />
      <div className='flex flex-row space-x-1 flex-wrap justify-evenly items-center'>
        <Association big={true} img='https://i.ytimg.com/vi/XfXDQkTY_ec/maxresdefault.jpg' name='Associated Road Carriers Limited' desc="Sudhama Nagar, 1St Cross Road, Near Ghatge Patil Transports, Bangalore, Karnataka 560027" link='https://www.arclimited.com/' />
        <Association big={true} img='https://cdn.pixabay.com/photo/2014/06/30/08/09/india-380050_1280.jpg' name='Sharma Transports' desc="Door No -81, Next To Amba Bajaj Show Room, After Ayyappa Temple, Hosur Main Road, Madiwala, Zuzuvadi, 1St Stage, Btm Layout, Bengaluru, Karnataka 560068" link='http://www.sharmatransports.com/' />
        <Association big={true} img='https://thumbs.dreamstime.com/z/front-traditional-indian-truck-rural-rajasthan-front-traditional-indian-truck-rural-rajasthan-india-164914244.jpg' name='Sharma Transports' desc="No. 139/4, 1St Block, 1St Main, Dr Rajkumar Road, Near Allahabad Bank, Rajajinagar, E Block, 2Nd Stage, Rajajinagar, Bengaluru, Karnataka 560010" link='http://www.sharmatransports.com/' />
        <Association big={true} img='https://th.bing.com/th/id/OIP.yvCVnhvUN7P3E2-EiQjJGgAAAA?rs=1&pid=ImgDetMain' name='Maruti Road Transport Carrier-Peenya' desc="No.28, 2nd Main, 3rd Cross, Ganapathi Nagar MEI Colony, Laggere, Peenya Phase3, Near Manjunatha Park, Bengaluru, Karnataka" link='https://transportationbangalore.com/' />
        <Association big={true} img='https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/HB7483/highly-decorated-indian-truck-in-lamayuru-in-the-indian-himalayan-HB7483.jpg' name='Eita India Limited' desc="Hosur Road, C Beggur Gate, Bangalore, Karnataka 560068" link='https://www.eitain.com/' />
      </div>
    </div>
  )
}

export default ConnectToTransport
