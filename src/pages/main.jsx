import React, { Component } from 'react';
import MainPageImg from '../pic/mainpageImg.png';

class MainPage extends Component {
    state = { 

    }
     
    render() { 
        return (
            <main className="">
                <span>
                    <img src={MainPageImg} className=" img-fluid  mx-auto width: 100% m-5" alt="bg"/>
                </span>
                <div className="position-absolute top-50 start-0 translate-middle-y" >
                    <div className='text-start' style={{margin : '0 130px'}}>
                        <h5>Web Devloper</h5>
                        <h1>Yunzhong(Mark) Xiao</h1>
                        <p style={{width: "30em"}}>
                            Enjoy solving complex problems both independently and collaboratively. 
                            Enable to write high-quality and clean code. 
                            Motivated to learn new web design and machine learning technology.
                        </p>
                        <button style={{marginTop: "20px"}} className='btn btn-dark'>resumes</button>
                    </div>
                </div>
                
            </main>
        );
    }
}
 
export default MainPage;