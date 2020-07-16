import React, { useState, useEffect } from 'react';
import './index.css';
import {
  Card,
  Button,
  CardText,
  CardFooter,
  CardBody,
  CardHeader,
} from 'reactstrap';
import { Container, Row } from 'react-bootstrap';
import Spinner from 'react-spinner-material';

import ReactGA from 'react-ga';
// @ts-ignore
import Tabletop from 'tabletop';
ReactGA.initialize('UA-141787668-1');

const renderCards = (dataCards: IMyGooglesheet[]) => {
  var colors = ['info', 'primary'];
  return dataCards.map((props: any, i) => {
    return (
      <Card
        key={i}
        body
        inverse
        color={colors[i % 2]}
        className="Card-item text-center"
      >
        <CardHeader>{props.topic}</CardHeader>
        <CardBody>
          <CardText>{props.remark}</CardText>
          <a href={props.reference}>
            <Button
              color="dark"
              onClick={() => {
                ReactGA.event({
                  category: 'User',
                  action: 'Click',
                });
              }}
            >
              Link
            </Button>
          </a>
        </CardBody>
        <CardFooter>{props.date}</CardFooter>
      </Card>
    );
  });
};
interface IMyGooglesheet {
  topic: string;
  remark: string;
  reference: string;
  date: string;
  type: string;
}
interface IState {
  data: IMyGooglesheet[];
  loading: boolean;
}

const CardList = () => {
  const [state, setState] = useState<IState>({
    data: [],
    loading: true,
  });
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setState({
        data: [
          {
            topic: 'TDD',
            remark: '',
            reference: 'https://www.youtube.com/watch?v=q0wdEt1IMiY',
            date: '2018-11-14',
            type: 'information technology',
          },
          {
            topic: 'Scrum master',
            remark: '',
            reference: 'https://www.youtube.com/watch?v=JNFeXBRqdsI',
            date: '2018-11-20',
            type: 'information technology',
          },
          {
            topic: 'Retrospective',
            remark: '',
            reference: 'https://www.youtube.com/watch?v=ZP8c1PtAqO4&t=999s',
            date: '2018-11-23',
            type: 'information technology',
          },
          {
            topic: 'Flutter',
            remark: 'Try to build first andriod app with flutter',
            reference: 'https://flutter.dev/docs/get-started/codelab',
            date: '2019-05-13',
            type: 'information technology',
          },
          {
            topic: 'Github page',
            remark: 'Github page with react',
            reference:
              'https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d',
            date: '2019-05-16',
            type: 'information technology',
          },
          {
            topic: 'CI/CD Pipeline: A Gentle Introduction',
            remark: '',
            reference:
              'https://dev.to/markoa/ci-cd-pipeline-a-gentle-intr…=email&utm_term=0_d8f11d5d1e-345e02f878-154991169',
            date: '2019-05-20',
            type: 'information technology',
          },
          {
            topic: 'Travis CI',
            remark: 'Use travis in this github page',
            reference: 'https://travis-ci.org/Kittichok/website',
            date: '2019-10-03',
            type: 'CI/CD',
          },
        ],
        loading: false,
      });
    }
    Tabletop.init({
      key: process.env.REACT_APP_G_KEY,
      callback: (googleData: any) => {
        // googleData.sort(function (a: any, b: any) {
        //   return new Date(b.date) - new Date(a.date);
        // });
        setState({ data: googleData, loading: false });
      },
      simpleSheet: true,
    });
  }, []);

  return (
    <div className="Card-list">
      <Container>
        <Row>
          <h1 className="Center-text">Journey of me</h1>
        </Row>
        <Row>
          <div className="Center-text">
            <Spinner
              size={250}
              spinnerColor={'#1ba8a4'}
              spinnerWidth={10}
              visible={state.loading}
            />
          </div>
          {/* <CardDeck> */}
          {renderCards(state.data)}
          {/* </CardDeck> */}
        </Row>
      </Container>
    </div>
  );
};

export default CardList;
