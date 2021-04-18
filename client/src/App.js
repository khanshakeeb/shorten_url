import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Button,
    Form, Table
} from 'react-bootstrap';
import './App.css';
import List from './components/List';

function App() {
    const [longUrlValue, setLongUrlValue] = useState();
    const [listShortUrls, setListShortUrls] = useState([]);
    const [refetch,setRefetch] = useState(false);

    const baseAPIUrl = 'http://localhost:3001/api/v1';
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`${baseAPIUrl}/short-urls`, {
            "longUrl": longUrlValue
        });
        setRefetch(true);
        setLongUrlValue("");
    };

    const handleLongUrlFieldValue = (event) => setLongUrlValue(event.target.value);
    const getListShortUrls = async () => {
        try {
            const {data = null} = await axios.get(`${baseAPIUrl}/short-urls`);
            setListShortUrls(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => getListShortUrls(), [refetch]);

    return (
        <Container>
            <Row>
                <Col md={{span: 6, offset: 4}} offset>
                    <h1>Shorten URL demo App</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8}} offset>
                    <Form className="App-form" onSubmit={handleSubmit}>
                        <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Shorten your link"
                            name="longUrl"
                            value={longUrlValue}
                            onChange={handleLongUrlFieldValue}
                            required
                        />
                        <Button size="lg" type="submit" className="mb-2 App-button">Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <List listData={listShortUrls} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
