import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const ConnectToTransport = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Connect To Transport 🚚' />
      <Association name='Associated Road Carriers Limited' desc="Sudhama Nagar, 1St Cross Road, Near Ghatge Patil Transports, Bangalore, Karnataka 560027" link='https://www.arclimited.com/' />
      <Association name='Sharma Transports' desc="Door No -81, Next To Amba Bajaj Show Room, After Ayyappa Temple, Hosur Main Road, Madiwala, Zuzuvadi, 1St Stage, Btm Layout, Bengaluru, Karnataka 560068" link='http://www.sharmatransports.com/' />
      <Association name='Sharma Transports' desc="No. 139/4, 1St Block, 1St Main, Dr Rajkumar Road, Near Allahabad Bank, Rajajinagar, E Block, 2Nd Stage, Rajajinagar, Bengaluru, Karnataka 560010" link='http://www.sharmatransports.com/' />
      <Association name='Maruti Road Transport Carrier-Peenya' desc="No.28, 2nd Main, 3rd Cross, Ganapathi Nagar MEI Colony, Laggere, Peenya Phase3, Near Manjunatha Park, Bengaluru, Karnataka" link='https://transportationbangalore.com/' />
      <Association name='Eita India Limited' desc="Hosur Road, C Beggur Gate, Bangalore, Karnataka 560068" link='https://www.eitain.com/' />
    </div>
  )
}

export default ConnectToTransport
