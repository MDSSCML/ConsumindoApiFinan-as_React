import React from "react";
import { Card, ListGroupItem, ListGroup, Button, Stack } from "react-bootstrap";
import './Css.css';

const Modal = () => {
    
    return (
        <React.Fragment>
        <Stack direction="horizontal" gap={3} className="my-3 stack">
            <Card style={{ width: '18rem' }}>
                <h4 id="code"></h4>
                <Card.Img variant="top" src="https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=640&,format=auto/uploads/2021/08/shutterstock_1902390253-4-628x353.jpg" />
                <Card.Body>
                    <Card.Title><h6 id="time"></h6></Card.Title>
                    <Card.Text>
                        <h6>Esses dados foram produzidos a partir do CoinDesk Bitcoin Price Index (USD). Dados de moedas diferentes do dólar americano convertidos usando a taxa de conversão por hora de openexchangerates.org</h6>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><h6 id="description"></h6></ListGroupItem>
                    <ListGroupItem><h6 id="rate"></h6></ListGroupItem>
                    <ListGroupItem><h6 id="rate_float"></h6></ListGroupItem>
                </ListGroup>
            </Card>


            {/* código gbp */}
            <Card style={{ width: '18rem' }}>
                <h4 id="gbpcode"></h4>
                <Card.Img variant="top" src="https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=640&,format=auto/uploads/2021/08/shutterstock_1902390253-4-628x353.jpg" />
                <Card.Body>
                    <Card.Title><h6 id="gbptime"></h6></Card.Title>
                    <Card.Text>
                        <h6>Esses dados foram produzidos a partir do CoinDesk Bitcoin Price Index (USD). Dados de moedas diferentes do dólar americano convertidos usando a taxa de conversão por hora de openexchangerates.org</h6>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><h6 id="gbpdescription"></h6></ListGroupItem>
                    <ListGroupItem><h6 id="gbprate"></h6></ListGroupItem>
                    <ListGroupItem><h6 id="gbprate_float"></h6></ListGroupItem>
                </ListGroup>
            </Card>



            {/* código USD */}
            <Card style={{ width: '18rem' }}>
                <h4 id="usdcode"></h4>
                <Card.Img variant="top" src="https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=640&,format=auto/uploads/2021/08/shutterstock_1902390253-4-628x353.jpg" />
                <Card.Body>
                    <Card.Title><h6 id="usdtime"></h6></Card.Title>
                    <Card.Text>
                        <h6>Esses dados foram produzidos a partir do CoinDesk Bitcoin Price Index (USD). Dados de moedas diferentes do dólar americano convertidos usando a taxa de conversão por hora de openexchangerates.org</h6>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><h6 id="usddescription"></h6></ListGroupItem>
                    <ListGroupItem><h6 id="usdrate"></h6></ListGroupItem>
                    <ListGroupItem><h6 id="usdrate_float"></h6></ListGroupItem>
                </ListGroup>
            </Card>
            {/* <button className="card" onClick={() => window.location.reload()}>Atualizar</button> */}
        </Stack>
        <Stack className="col-md-2">
            <Button onClick={() => window.location.reload()}>Atualizar</Button>
            <h5 id="nome" className="text-center my-3" style={{color:'white'}}></h5>
        </Stack>

    </React.Fragment>
    );
}

export default Modal;