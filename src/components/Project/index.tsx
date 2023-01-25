import React, { useEffect, useState } from 'react';
import Card from './card'
import mockData from '../../mock/data.json';
import { Container, Row } from 'react-bootstrap';

type IData = {
  imgSrc: string;
  text: string
  link: string;
}


const Project = () => {
  const [data, setData] = useState<IData[]>([])
  const loadData = async () => {
    // TODO: use db from server
    const arr = [...mockData.project]
    setData(arr)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (

    <div className="Card-list">
      <Container>
        <Row>
          <h1 className="Center-text">Project</h1>
        </Row>
        <Row>
          {data && data?.map((d, i) => (
            <Card
              key={i}
              imgSrc={d.imgSrc}
              text={d.text}
              link={d.link}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Project;