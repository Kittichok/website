import React from 'react';
import './index.css';
import { Card, Button, CardText, CardFooter,
    CardBody, CardHeader } from 'reactstrap';
import {Container, Row} from 'react-bootstrap';
import Spinner from 'react-spinner-material';

import ReactGA from 'react-ga';
import Tabletop from 'tabletop';
ReactGA.initialize('UA-141787668-1');

const renderCards = (dataCards) => {
    // console.log(dataCards);
    var colors = ['info', 'primary']
    return dataCards.map((props, i) => {
        return (
            <Card body inverse color={colors[i%2]} className="Card-item text-center">
                <CardHeader>{props.topic}</CardHeader>
                <CardBody>
                    <CardText>{props.remark}</CardText>
                    <a href={props.reference} >
                        <Button color='dark' onClick={ReactGA.event({
                        category: 'User',
                        action: 'Click'
                        })}>Link</Button>
                    </a>
                </CardBody>
                <CardFooter>{props.date}</CardFooter>
            </Card> )
    })
};

class CardList extends React.Component {
    constructor(){
        super()
        this.state = { data: [], loading: true}
    }

    componentDidMount(){
        if(process.env.NODE_ENV === "development"){
            console.log(process.env.REACT_APP_G_KEY);
        }
        Tabletop.init({
            key: process.env.REACT_APP_G_KEY,
            callback: googleData => {
                googleData.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date);
                });
                this.setState({data: googleData, loading: false})
            },
            simpleSheet: true
        })
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className='Card-list'>
            <Container>
                <Row>
                    <h1 className='Center-text'>Journey of me</h1>
                </Row>
                <Row>
                    <div className='Center-text'>
                        <Spinner size={250} spinnerColor={"#1ba8a4"} spinnerWidth={10} visible={this.state.loading} />
                    </div>
                    {/* <CardDeck> */}
                        {renderCards(this.state.data)}
                    {/* </CardDeck> */}
                </Row>
            </Container>
            </div>
        )
    }
}

export default CardList;