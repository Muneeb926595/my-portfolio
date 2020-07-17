import React from 'react';
import ServiceData from './ServiceData';
import ServiceCard from './ServiceCard';

function Services() {
    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {ServiceData.map((val,index)=>{
                                return <ServiceCard key={index} imgSrc={val.imgSrc} title={val.title}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services;