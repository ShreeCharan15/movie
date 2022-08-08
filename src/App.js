import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import DogCard from './DogCard';
import {Row,Col,Button} from 'reactstrap';
import PageModal from './PageModal';
import {fetchDogData} from './backend'
import {Spinner} from 'reactstrap'
function App() {

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
    <NavigationBar ></NavigationBar>

    <div className='container'>
      {
        state.isLoading?<Loading></Loading>
        :state.error?<Error></Error>
        :<DogInfo dogData={state.data}></DogInfo>
      }
    </div>
  </>
  );
}

export default App;

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