import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import Service1 from '../../assets/Services1.png'
import Service2 from '../../assets/Services2.png'
import Service3 from '../../assets/Services3.png'
import Service4 from '../../assets/Services4.png'

const Services = () => {
  return (
    <>
    <div className="bg-white py-[120px]">
        <Container>
            <div className="">
                <Heading text={'We also offer unique servicess for your events'} as={'h4'} className={'font-medium text-[55px] text-mClr pb-[57px] pr-[620px]'}/>
            </div>
            <div className="">
                <Flex className={'gap-x-4'}>
                    <div className="">
                        <Image src={Service1} alt={Service1}/>
                        <Heading text={'Caterings'} as={'h5'} className={'pt-8 text-2xl pb-[13px] font-bold text-mClr'}/>
                        <Heading text={'In the new era of technology we look in the future with certainty for life.'} as={'p'} className={'pt-8 text-base pb-[13px] text-mClr'}/>
                    </div>
                    <div className="">
                        <Image src={Service2} alt={Service2} className={'rounded-md'}/>
                        <Heading text={'Birthdays'} as={'h5'} className={'pt-8 text-2xl pb-[13px] font-bold text-mClr'}/>
                        <Heading text={'In the new era of technology we look in the future with certainty for life.'} as={'p'} className={'pt-8 text-base pb-[13px] text-mClr'}/>
                    </div>
                    <div className="">
                        <Image src={Service3} alt={Service3}/>
                        <Heading text={'Weddings'} as={'h5'} className={'pt-8 text-2xl pb-[13px] font-bold text-mClr'}/>
                        <Heading text={'In the new era of technology we look in the future with certainty for life.'} as={'p'} className={'pt-8 text-base pb-[13px] text-mClr'}/>
                    </div>
                    <div className="">
                        <Image src={Service4} alt={Service4}/>
                        <Heading text={'Events'} as={'h5'} className={'pt-8 text-2xl pb-[13px] font-bold text-mClr'}/>
                        <Heading text={'In the new era of technology we look in the future with certainty for life.'} as={'p'} className={'pt-8 text-base pb-[13px] text-mClr'}/>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Services