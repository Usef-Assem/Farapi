import React from 'react';
import style from './Services.module.css';
import apple from '../../Assets/apple.svg';
import Desktop from '../../Assets/desktop.svg';
import Android from '../../Assets/android.svg';
import customSolution from '../../Assets/solutions.svg';
import Cloud from '../../Assets/cloud.svg';
import ux from '../../Assets/ux.svg';
import CTO from '../../Assets/cto.svg';
import Software from '../../Assets/software.svg';
import Slider from '../Slider/Slider'

function Services() {
    const services = [
        { index : 0 , imgSrc: apple, title: 'IOS Apps', paragraph: 'High-quality iOS apps deliver seamless user experiences.' , alt: 'Ios Apps' },
        { index : 1 , imgSrc: Desktop, title: 'Desktop Apps', paragraph: 'Robust desktop applications enhance productivity and efficiency.' , alt:'Desktop Apps' },
        { index : 2 , imgSrc: Android, title: 'Android Apps', paragraph: 'Custom Android apps are developed to meet specific needs and business goals.' , alt: 'Android Apps' },
        { index : 3 , imgSrc: customSolution, title: 'Custom Solutions', paragraph: 'Custom solutions address unique business challenges and objectives.' , alt:'Custom Solutions' },
    ]
        const services2 = [
        { index : 4 , imgSrc: Cloud, title: 'Cloud Support', paragraph: 'Comprehensive cloud support ensures systems run efficiently.' , alt:'Cloud Support' },
        { index : 5 , imgSrc: ux, title: 'UX Design', paragraph: 'UX Design services focus on creating intuitive and engaging user experiences.' , alt:'UX Design' },
        { index : 6 , imgSrc: CTO, title: 'CTO as a Service', paragraph: 'CTO as a Service provides strategic technical leadership for business.' , alt:'CTO' },
        { index : 7 , imgSrc: Software, title: 'Software Execution', paragraph: 'Complete software execution ensures projects meet all requirements.' , alt: 'Software Execution' }
    ];

    return (
        <div className={style.Services} id='Services'>
            <p className={`${style.SectionTitle} text-white text-end me-lg-5 me-md-4 me-3`}>Services</p>
            <div className={`${style.servicesContent} text-white text-center py-4 d-lg-block d-none`}>
                <h3 className='mt-5'>Your Software Partner</h3>
                <p>Our custom solutions are designed <br /> to fit your exact needs.</p>
            </div>
            <div className={`${style.services} d-lg-flex d-none justify-content-center flex-wrap py-lg-4`}>
                {services.map((service)=>{
                    return (
                            <div key={service.index} className={`${style.ServiceCard} text-white col-lg-2 col-md-12 p-3 ms-lg-5 mt-lg-0 mt-md-3 mt-3`}>
                            <img src={service.imgSrc} alt={service.alt} />
                            <p className='py-3'>{service.title}</p>
                            <p>{service.paragraph}</p>
                        </div>
                    )
                })}
            </div>

            <div className={`${style.services} d-lg-flex d-none justify-content-center flex-wrap py-lg-4`}>
            {services2.map((service)=>{
                    return (
                        <div key={service.index} className={`${style.ServiceCard} text-white col-lg-2 col-md-12 p-3 ms-lg-5 mt-lg-0 mt-md-3 mt-3`}>
                            <img src={service.imgSrc} alt={service.alt} />
                            <p className='py-3'>{service.title}</p>
                            <p>{service.paragraph}</p>
                        </div>
                    )
                })}
            </div>
            <div className="col-12 d-lg-none d-block d-md-block">
                <Slider />
            </div>

            
            


        </div>
    );
}

export default Services;
