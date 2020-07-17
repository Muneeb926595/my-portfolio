import React,{useRef,useLayoutEffect} from 'react';
import {NavLink} from 'react-router-dom';
function CommonPage(props) {

    const myAnimation=useRef(null);

    useLayoutEffect(()=>{
        myAnimation.current.animate(
            [
              { transform: 'translateY(0)' },
              { transform: 'translateY(-3%)' },
              { transform: 'translateY(0)' }
            ], {
            direction: "reverse",
            duration: 2400,
            iterations: Infinity
          });
    })


    return (
        <React.Fragment>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row d-flex align-items-center align-content-center">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.heading} <strong className="myname">Muneeb Ur Rehman</strong></h1>
                                    <h4 className="my-3">
                                        We are the team of talented developer making websites and mobile apps.
                                </h4>
                                    <div className="mt-3">
                                        <NavLink className="btn-get-started" to={props.openUrl}>{props.btnText}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img p-5" ref={myAnimation}>
                                    <img src={props.imgSrc} className="img-fluid animated" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CommonPage;