import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';



function MyCard (date, reference, remark, topic, type, ...rest) {
    // console.log(topic);
    return (
    <Card body inverse color="primary" className="Card-item">
        <CardTitle>{topic}</CardTitle>
        <CardText>{remark}</CardText>
        <Button color="dark">Link</Button>
    </Card>)
}


export default MyCard;