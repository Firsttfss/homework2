import React from 'react'


const Box = () => {
    return (
        <div>

            <br/>
           
            <div className="card container boxsize" >
            <div className="card-body">  
            <h4 className="text-left text-black">Personal Information</h4>
            <h6 className="text-left text-black "><span className="title">Fullname :</span><span> Sarita Sanguansaksri</span></h6>
            <h6 className="text-left text-black"><span className="title">Nickname :</span><span> First</span></h6>
            <h6 className="text-left text-black"><span className="title">Birthday :</span><span> 19 November 1998</span></h6>
           
            </div>
            </div>
            <br/>

            <div className="row">
            <div className="card container boxsize" >
            <div className="card-body">
            <h4 className="text-left text-black">Family Information</h4>
            <h6 className="text-left text-black"><span className="title">Father name :</span><span> SS</span></h6>
            <h6 className="text-left text-black"><span className="title">Mothername :</span><span> PT</span></h6>
            <h6 className="text-left text-black"><span className="title">Number of relative :</span><span> 2</span></h6>
            </div>
            </div>
            </div>
            <br/>

            <div className="row">
            <div className="card container boxsize" >
            <div className="card-body">  
            <h4 className="text-left text-black">Skill</h4>
            <h6 className="text-left text-black">Basic skill : Eat</h6>
            </div>
            </div>
            </div>
            <br/>
            
        </div>
    )
}

export default Box