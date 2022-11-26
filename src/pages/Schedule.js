import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import react, { useState } from 'react';
function Schedule() {

    // const [data, setData] = useState([])

    const Data = [
        {
            heading: 'SUN, NOV 27 2022'

        },
        {
            heading: 'SUN, NOV 27 2022'
        },
        {
            heading: 'SUN, NOV 27 2022'
        },
        {
            heading: 'SUN, NOV 27 2022'
        },
        {
            heading: 'SUN, NOV 27 2022'
        },
    ]

    const Data2 = [
        {
            matches: 'New Zealand vs India, 2nd ODI',
            player: 'Seddon Park, Hamilton',
            date_2: '01:30 AM GMT / 02:30 PM LOCAL',
            date: '7:00 AM',
        },
        {
            matches: 'New Zealand vs India, 2nd ODI',
            player: 'Seddon Park, Hamilton',
            date_2: '01:30 AM GMT / 02:30 PM LOCAL',
            date: '7:00 AM',
        },
        {
            matches: 'New Zealand vs India, 2nd ODI',
            player: 'Seddon Park, Hamilton',
            date_2: '01:30 AM GMT / 02:30 PM LOCAL',
            date: '7:00 AM',
        },
        
    ]

    return (
        <>
            <Container>
                <h1 style={{ textAlign: "start", color: "black" }}>Cricket Schedule
                </h1>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link >INTERNATIONAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >T20 LEAGUES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >DOMESTIC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >WOMEN</Nav.Link>
                    </Nav.Item>
                </Nav>
                <hr></hr>

                {Data.map((item) => (
                    <div>
                        <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold" }}>{item.heading}
                        </h4>
                        {Data2.map((item2) => (
                            <div>
                                <Row className='ml-3' style={{ marginLeft: "8px" }}>
                                    <Col >{item2.matches}
                                    </Col>
                                    <Col>New Zealand vs India, 2nd ODI
                                        <p style={{ color: "grey" }}>{item2.player}</p>
                                    </Col>
                                    <Col>{item2.date}
                                        <p style={{ color: "grey" }}>
                                            {item2.date_2}</p>
                                    </Col>
                                </Row>
                                <br></br>
                            </div>
                        ))}
                    </div>
                ))}

            </Container>

        </>
    );
}
export default Schedule;
