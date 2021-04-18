import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import './App.css';

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

    const List = () => {
        if (!listShortUrls.length) return (
            <React.Fragment>
                <p>No record found </p>
            </React.Fragment>
        );
        return listShortUrls.map(item => {
            return (
                <React.Fragment key={item._id}>
                    <div>{item._id}</div>
                    <div>{item.shortCode}</div>
                    <div>{item.longUrl}</div>
                </React.Fragment>
            )
        });
    };

    return (
        <Container>
            <Row>
                <Col md={{span: 6, offset: 4}} offset>
                    <h1>Tiny URL demo App</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 4}} offset>
                    <Form inline onSubmit={handleSubmit}>
                        <Form.Label>URL:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Large text"
                            name="longUrl"
                            value={longUrlValue}
                            onChange={handleLongUrlFieldValue}
                        />
                        <Button type="submit" className="mb-2">Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <List/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
