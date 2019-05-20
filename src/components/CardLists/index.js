import React from 'react';
import './index.css';
import { Card, Button, CardTitle, CardText, CardFooter,
    CardBody } from 'reactstrap';

import * as d3 from 'd3';
import data from './data.csv';

function renderCards (dataCards){
    console.log(dataCards);
    var colors = ['info', 'primary']
    return dataCards.map((props, i) => {
        
        return (
            <Card body inverse color={colors[i%2]} className="Card-item">
                <CardBody>
                    <CardTitle>{props.topic}</CardTitle>
                    <CardText>{props.remark}</CardText>
                    <Button color='dark' 
                    to={props.reference}>Link</Button>
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

function goLink(link){
    console.log('cilck!!')
    window.open(link, '_blank');
}

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
                <h1 className='Center-text'>Journey</h1>
                {renderCards(this.state.data)}
            </div>
        )
    }
}

export default CardList;