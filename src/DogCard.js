import {Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'
const DogCard=({toggle,data})=>{
    return <Card  color="light" style={{"marginTop":"10px"}}>
        <img src={data.src} height={"150px"}></img>
        <CardBody>
            <CardTitle tag="h4">{data.name}</CardTitle>
            <CardText>{data.description}</CardText>
            <Button outline={true} onClick={()=>toggle()} color="dark">Adopt</Button>
        </CardBody>
    </Card>
}

export default DogCard;