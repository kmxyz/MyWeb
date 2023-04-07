import React, { Component } from 'react';
import MainPageImg from '../pic/mainpageImg.png';

class MainPage extends Component {
    state = { 
     } 
    
    render() { 
        return (
            <main className="bg-secondary-subtle">
                <span>
                    <img src={MainPageImg} class=" img-fluid  mx-auto width: 100% " alt="bg"/>
                </span>
                <div className="position-absolute top-50 start-0 translate-middle-y" style={{margin : '0 130px'}}>
                    <div className='text-start'>
                        <h5>Web Devloper</h5>
                        <h1>Mark Xiao</h1>
                        <p style={{width: "30em"}}>Enjoy solving complex problems both independently and collaboratively. 
                        Enable to write high-quality and clean code. Motivated to learn new web design and machine learning technology.</p>
                        <button style={{marginTop: "20px"}} className='btn btn-dark'>View More</button>
                    </div>
                </div>
                
            </main>
        );
    }
}
 
export default MainPage;