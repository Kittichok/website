import React from 'react';
import './index.css';
import { Card, Button, CardTitle, CardText, CardFooter,
    CardBody, CardHeader, CardDeck } from 'reactstrap';
import {Container, Row, Col} from 'react-bootstrap'

import * as d3 from 'd3';
import data from './data.csv';

const renderCards = (dataCards) => {
    // console.log(dataCards);
    var colors = ['info', 'primary']
    return dataCards.map((props, i) => {
        return (
            <Card body inverse color={colors[i%2]} className="Card-item text-center">
                <CardHeader>{props.topic}</CardHeader>
                <CardBody>
                    <CardText>{props.remark}</CardText>
                    <a href={props.reference} target="_blank">
                        <Button color='dark' >Link</Button>
                    </a>
                </CardBody>
                <CardFooter>{props.date}</CardFooter>
            </Card> )
    })
};

var loadData = new Promise((resolve, reject) => {
    var lists = [];
    d3.csv(data, function(data) { 
        if(data){
            lists.push({
                date: data.date,
                reference: data.reference,
                remark: data.remark,
                topic: data.topic,
                type: data.type
            });
        }
    }).then(() => {
        resolve(lists)
    });
})


class CardList extends React.Component {
    constructor(){
        super()
        this.state = { data: [],}
    }

    componentWillMount() {
        loadData.then(data => {
            this.setState({data: data})
        })
    }

    render() {
        return (
            <div className='Card-list'>
            <Container>
                <Row>
                    <h1 className='Center-text'>Journey of me</h1>
                </Row>
                <Row>
                    <CardDeck>
                            {renderCards(this.state.data)}
                    </CardDeck>
                </Row>
            </Container>
            </div>
        )
    }
}

export default CardList;