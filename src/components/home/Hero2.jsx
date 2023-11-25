import React from 'react';
import Typed from 'react-typed';
import bgb_usm from '../../assets/bgb-usm.jpg';
import logo_usm4u_white from '../../assets/logo-usm4u-white.png'; //update
import coco_logo from '../../assets/c.jpg';
import { Row, Col, Card} from 'react-bootstrap';

function Hero2() {
  return (
    <React.Fragment>
        <div className='max-w-[900px] w-full mx-auto my-14 text-center flex flex-col justify-center'>
          <p className='md:text-lg sm:text-base text-sm font-medium italic py-10 px-5 text-[#008080]'>Revolutionizing Your Financial Journey</p>
         </div>
      <Row>       
        <Col md={6} xl={12}>
            <Card style={{ borderRadius: '20px', backgroundColor:'white' , margin:'50px',border:'2px solid #008080'}}>
                <Card.Body>
                    <Card.Title as="h3" style={{ fontWeight: 'bold' }}>Your Financial Health</Card.Title>
                    <div className="text-right">
                        <p style={{ marginRight: '30px' , fontWeight: "bold", fontSize:'14px'}}>TOTAL ACCOUNTS</p>
                    </div>
                    <div className="text-right">
                        <p style={{ marginRight: '30px' , fontWeight: "bold",fontSize:'44px'}}>7</p>
                    </div>
                
                </Card.Body>
            </Card>
        </Col>
        </Row>
        <div className='grid lg:grid-cols-1 justify-center mx-[35px] pb-12'>
        {
              
            <div className='flex justify-center'>
                <div className="card w-[640px] bg-[#23303B] shadow-2xl m-4 text-white">
                    <div className="card-body flex flex-col justify-between text-justify">
                        <div>
                        <h2 className="card-title font-bold">Your Net Worth</h2>
                        </div>
                        <div className="flex justify-between items-end">
                        <p className="leading-5">RM</p>
                        <button className='bg-[#23303B] w-[180px] h-[40px] text-5xl font-bold rounded-lg mx-100 my-auto content-center text-white hover:scale-105 duration-300'>
                            123,245
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="card w-[640px] bg-[#23303B] shadow-2xl m-4 text-white">
                    <div className="card-body flex flex-col justify-between text-justify">
                        <div>
                        <h2 className="card-title font-bold">Your Total Expenses</h2>
                        </div>
                        <div className="flex justify-between items-end">
                        <p className="leading-5">RM</p>
                        <button className='bg-[#23303B] w-[150px] h-[40px] text-5xl font-bold rounded-lg mx-100 my-auto content-center text-white hover:scale-105 duration-300'>
                            13,485
                        </button>
                        </div>
                    </div>
                    </div>
                
            </div>
            
          }     
        </div>
        <div className='grid lg:grid-cols-1 justify-center mx-[35px] pb-12'>
        <div className="flex justify-center items-center"> {/* Wrap image and card in the same row */}
            <img className='w-[100px]' src={coco_logo} alt="/" />
            <div className="card w-[640px] bg-[#93E9BE] shadow-2xl m-4 text-[#004D4C]">
            <div className="card-body flex flex-col justify-between text-justify">
                <div>
                <h2 className="card-title font-bold">Grow Your Wealth with Hong Leong</h2>
                </div>
                <div className="flex justify-between items-end">
                <p className="leading-5">Unlock the Potential of Your Wealth with Hong Leong: Don't let your money stand idle,let it thrive and grow.</p>
                </div>
                <button className='bg-[#93E9BE] w-[120px] h-[30px]  font-medium rounded-lg mx-100 my-auto content-center text-red-500 hover:scale-105 duration-300'>
                    Find Out More
                </button>
            </div>
            </div>
        </div>
        </div>
        
      </React.Fragment>
    // <div className='text-black'>
    //   {/* <div classname='bg-white'>
    //     <img className='h-[400px] w-full object-cover' src={bgb_usm} alt="/" />
    //   </div> */}
    //   <div className='max-w-[900px] w-full mx-auto my-14 text-center flex flex-col justify-center'>
    //     {/* <img className='w-[300px] mx-auto' src={coco_logo} alt="/" /> */}
    //     {/* <p className='md:text-base sm:text-sm text-xs font-medium text-gray-400'>COCO : REVOLUTIONIZING YOUR FINANCIAL JOURNEY</p> */}
    //     <p className='md:text-lg sm:text-base text-sm font-medium italic py-10 px-5 text-[#008080]'>Revolutionizing Your Financial Journey</p>
    //   </div>
      
      
    // </div>
    
  )
}

export default Hero2
