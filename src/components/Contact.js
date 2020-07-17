import React,{useState} from 'react';

function Contact() {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((prevalue)=>{
            return{
                ...prevalue,
                [name]:value,
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile no is ${data.phone}. my email is ${data.email}. My msg is ${data.msg}`);
    }
    return (
        <React.Fragment>
            <div class="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input required name="fullname" onChange={InputEvent} value={data.fullname} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">PhoneNo</label>
                                <input required name="phone" onChange={InputEvent} value={data.phone} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone No" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input required name="email" onChange={InputEvent} value={data.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea name="msg" onChange={InputEvent} value={data.msg} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary btn-block" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;