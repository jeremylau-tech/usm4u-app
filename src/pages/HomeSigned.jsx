import NavbarSigned from '../components/NavbarSigned';
import Hero2 from '../components/home/Hero2';
import Typed from 'react-typed';
import coco_logo from '../assets/c.jpg';
import { Row, Col, Card} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import { getDocs, collection } from "@firebase/firestore";
import Navbar from '../components/Navbar';



function HomeSigned() {

  const [data, setData] = useState([]);

  const fetchPost = async () => {       
    await getDocs(collection(firestore, "score"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setData(newData);
            console.log(data, newData);                
        })   
  }

  useEffect(()=>{
    fetchPost();
  }, [])

  const calculateInc = () => {
    return data.reduce((sum, item) => {
      // Convert strings to numbers before adding to the sum
      const salaValue = parseFloat(item.sala) || 0;
      const diviValue = parseFloat(item.divi) || 0;
  
      return sum + salaValue + diviValue; // Add other properties as needed
    }, 0);
  };

  const calculateExp = () => {
    return data.reduce((sum1, item) => {
      // Convert strings to numbers before adding to the sum
      const fnbValue = parseFloat(item.fnb) || 0;
      const utiValue = parseFloat(item.uti) || 0;
  
      return sum1 + fnbValue + utiValue; // Add other properties as needed
    }, 0);
  };

  const calculateScore = () => {
    return data.reduce((sum2, item) => {
      // Convert strings to numbers before adding to the sum
      const salaValue = parseFloat(item.sala) || 0;
      const fnbValue = parseFloat(item.fnb) || 0;
      const utiValue = parseFloat(item.uti) || 0;
      const diviValue = parseFloat(item.divi) || 0;
  
      return ((salaValue + diviValue - fnbValue - utiValue)/(salaValue + diviValue + fnbValue + utiValue) )*100 ; // Add other properties as needed
    }, 0);
  };

  return (
    <div>
      <NavbarSigned />
      <Hero2 />

      <React.Fragment>
        <div className='max-w-[900px] w-full mx-auto my-14 text-center flex flex-col justify-center'>
          <p className='md:text-lg sm:text-base text-sm font-medium italic py-1 px-5 text-[#008080]'>Revolutionizing Your Financial Journey</p>
         </div>

        <div className='grid lg:grid-cols-1 justify-center mx-[35px] pb-12'>
        {
              
            <div className='flex justify-center'>
                <div className="card w-[640px] bg-[#D2FFE8] shadow-2xl m-4 text-black">
                    <div className="card-body flex flex-col justify-between text-justify">
                        <div>
                        <h2 className="card-title font-bold">Your Net Worth</h2>
                        </div>
                        <div className="flex justify-between items-end">
                        <p className="leading-5">RM</p>
                        <button className='bg-[#D2FFE8] w-[180px] h-[40px] text-5xl font-bold rounded-lg mx-100 my-auto content-center text-black hover:scale-105 duration-300'>
                            {calculateInc()}
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="card w-[640px] bg-[#FFD2D2] shadow-2xl m-4 text-black">
                    <div className="card-body flex flex-col justify-between text-justify">
                        <div>
                        <h2 className="card-title font-bold">Your Total Expenses</h2>
                        </div>
                        <div className="flex justify-between items-end">
                        <p className="leading-5">RM</p>
                        <button className='bg-[#FFD2D2] w-[150px] h-[40px] text-5xl font-bold rounded-lg mx-100 my-auto content-center text-black hover:scale-105 duration-300'>
                          {calculateExp()}
                        </button>
                        </div>
                    </div>
                    </div>
                
            </div>
            
          }     
        </div>

        <Row>
        <Col md={2} xl={2}>
          <Card style={{ borderRadius: '20px', margin: '50px', shadow: '2xl',  border: '2px solid #008080' }}>
            <Card.Body>
              <Card.Title as="h3" style={{ fontWeight: 'bold' }}>Financial Health Score</Card.Title>
              <div className="text-right">
                <p style={{ marginRight: '30px', fontWeight: "bold", fontSize: '14px' }}>Today</p>
              </div>
              <div className="text-right">
                <p style={{ marginRight: '30px', fontWeight: "bold", fontSize: '44px', color: calculateScore() > 0 ?'#000000' : '#FF0000' }}>
                  {calculateScore()}%
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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
    </div>
  )
}

export default HomeSigned
