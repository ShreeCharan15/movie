import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import DogCard from './DogCard';
import {Row,Col,Button} from 'reactstrap';
import PageModal from './PageModal';
import {fetchDogData} from './backend'
import {Spinner} from 'reactstrap'
import { Routes, Route } from "react-router-dom";



function App() {
return <div>
  <NavigationBar ></NavigationBar>
  <div className='container'>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
</Routes>
  </div>
</div>
  
}

export default App;

const ContactPage=()=>{
  return <div>CONTACT PAGE</div>
}

const AboutPage=()=>{
  return <div>ABOUT PAGE</div>
}
const HomePage=()=>{
  useEffect(()=>{
    //TODO: fetch data from server
    fetchDogData()
    .then(data=>{
      setState({
        isLoading:false,
        data:data,
        error:null
      })
    })
    .catch(err=>{
      setState({
        isLoading:false,
        data:null,
        error:err
      })
    })
  },[])

  const [state,setState]=useState({
    isLoading:true,
    data:null,
    error:null
  })
  return (
  <>
    

    
      {
        state.isLoading?<Loading></Loading>
        :state.error?<Error></Error>
        :<DogInfo dogData={state.data}></DogInfo>
      }
  </>
  );
}

const Loading=()=>{
  return <div style={{"height":"100vh",width:"100%"}}>
    <Spinner></Spinner>
    </div>
}

const Error=()=>{
  return <div>Error</div>
}

const DogInfo=({dogData})=>{
  const [showModal, setShowModal] = useState(false);
  const toggle=()=>setShowModal(!showModal);
  return <>
  <PageModal showModal={showModal} toggle={toggle}></PageModal>
      <Row style={{"marginTop":"50px"}}>
        {
          dogData.map((dog,index)=><Col sm="6" md="4">
          <DogCard data={dog} toggle={toggle}></DogCard>
        </Col>)
        }
        
      </Row>
  </>
}