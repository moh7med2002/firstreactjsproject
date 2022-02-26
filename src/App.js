
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import data from './data';
import Service from './components/service';
import Room from './components/room';
import Roomdetail from './components/roomDetails';
import Rommland from './components/roomLand';
import Form from './components/form';
import {Route,Routes} from 'react-router-dom'
import React from 'react';

function App() {
  let [serciceData,setServiceData]=React.useState(data[0].services);


  let servicesComponents=serciceData.map((serv,index)=>{
    return(
      <Service
      {...serv}
      key={index}
      />
    )
  })

  let[roomsFeatured,setroomFeatured]=React.useState(data[2].allRoomsData);
  
  let roomsComponents=[];
  for(let i=3;i<roomsFeatured.length;i+=3){
    roomsComponents.push(<Room key={i} {...roomsFeatured[i]}/>)
  }

  let [allrooms,setAllRooms]=React.useState(data[2].allRoomsData);
  let [roomPart,setPart]=React.useState(data[2].allRoomsData);

  let [formData,setFormData]=React.useState({
    roomType:"all",
    guests:"",
    roomPrice:"600",
    minSize:"0",
    maxSize:"3000",
    isBreakfast:true,
    isPets:true
});

  function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
          
    };
    
    React.useEffect(()=>{
      if(formData.roomType==='all'){
        setPart(allrooms)
      }
      else{
        setPart((prev)=>{
          return allrooms.filter(roo=> {
            return (
              (roo.title===formData.roomType) 
              && (roo.guests===formData.guests || formData.guests==='')
              &&(roo.price <= parseInt(formData.roomPrice))
              &&(roo.size>=parseInt(formData.minSize) && roo.size<=parseInt(formData.maxSize))
              &&(roo.isBreakfast == formData.isBreakfast)
              &&(roo.isPets == formData.isPets)
              )
          });
        })
      }
    },[formData])

  

  let allRoomsComponenta=roomPart.map((room,index)=>{
    return(
      <Room
      key={index}
      {...room}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
            <>
              <Home/>
              <div className='services'>
                <h2 className='fs-2'>services</h2>
                <div className='services-content container'>
                  {servicesComponents}
                </div>
              </div>

              <div className='rooms-featured'>
                <h2>featured rooms</h2>
                <div className='rooms-content container'>
                  {roomsComponents}
                </div>
              </div>
            </>
        }/>
        <Route path='rooms' element={
            <div className='rooms-page'>
              <Rommland/>
              <h3>search romms</h3>
              <div className='container'>
                <Form data={formData} handleChange={handleChange}/>
                {roomPart.length>0? 
                <div className='rooms-content cont-2' style={{paddingBottom:"30px"}}>
                  {allRoomsComponenta}
                </div>
                :
                <h3 className='notMatch'>Unfortuunalty No Rooms Matched Your Search Parameters</h3>
                }
              </div>
            </div>

          }/>
          <Route path='rooms/rooms/:usertitle' element={<Roomdetail/>}/>
          <Route path='rooms/:usertitle' element={<Roomdetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
