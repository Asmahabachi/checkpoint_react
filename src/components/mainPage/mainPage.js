import {Col,Card,Row} from 'react-bootstrap';

const mainPage = () =>{
return(
    <div className="mainPage m-4">
            <div className="container-fluid">
           <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/80px50" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            </div>
    </div>
)
}
export default mainPage;