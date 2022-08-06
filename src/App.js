import './App.css';
import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import DogCard from './DogCard';
import {Row,Col,Button} from 'reactstrap';
import PageModal from './PageModal';

const dogData=[
  {name:"igyuig",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"drhdfh",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"657867",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"bbnm",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"22",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"sdg",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"dsg",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
  {name:"ll",src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  description:"this is a dog"},
]
function App() {
  const [showModal, setShowModal] = useState(false);
  const toggle=()=>setShowModal(!showModal);
  return (
  <>
    <NavigationBar ></NavigationBar>

    <div className='container'>
      <PageModal showModal={showModal} toggle={toggle}></PageModal>
      <Row style={{"marginTop":"50px"}}>
        {
          dogData.map((dog,index)=><Col sm="6" md="4">
          <DogCard data={dog} toggle={toggle}></DogCard>
        </Col>)
        }
        
      </Row>
    </div>
  </>
  );
}

export default App;
