import React from 'react';
// import './App.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import Papa from 'papaparse';
import CSVReader from 'react-csv-reader';
import * as d3 from 'd3';
import data from './data.csv';


const CardList = (props) => {
    let lists = [];
    d3.csv(data, function(data) { 
        if(data){
            lists.push(data);
        }
    });
    // const buildCard = function (dataCard) {
    //     <Card body inverse color="primary" className="Card-item">
    //         <CardTitle>{dataCard.topic}</CardTitle>
    //         <CardText>{dataCard.remark}</CardText>
    //         <Button color="dark">Button</Button>
    //     </Card>
    // };
    // var buildCards = function(dataCards){
    //   var tmpDatas = dataCards;
    //   console.log(tmpDatas);
    //   console.log(typeof(lists));
    //   tmpDatas.map((data) => {
    //     console.log(data)
    //     return buildCard(data)
    //   })
    // };
    
    // lists.map((data) => {
    //   console.log(data)
    // })  
    
    console.log(lists)
    // lists.forEach(element => {
    //     console.log(element)
    // }) 
    // console.log(lists.length)
    return (
        <div className="Card-list">
            <h1 className="Center-text">Journey</h1>
            
            {/* {lists} */}

            <Card body inverse color="primary" className="Card-item">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="dark">Button</Button>
            </Card>
            
            <Card body inverse color="success">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="dark">Button</Button>
            </Card>
        </div>
    );
};

export {CardList};