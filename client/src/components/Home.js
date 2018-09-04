import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import styled from 'styled-components'
import Me from '../images/Me.jpg'
import './home.css'

const Top = styled.div`
  height: 96vh;
  width: 100%;
  background-color: black;
  color: white;
`
const Middle = styled.div`
  height: 100vh;
  width: 100%;
`

class Home extends Component {
  render() {
    return (
      <div>
        <Top>
          <Segment.Group>
            <Segment style={styles.lseg}>
              <Header style={styles.header}>Web Developer</Header>
              <Header style={styles.header}>Software Engineer</Header>
              <Header style={styles.header}>Full Stack Developer</Header>
            </Segment>
            <Segment style={{ position: 'absolute', display: 'block', justifyContent: 'right', backgroundColor: 'black', background: 'transparent', marginLeft: '60%', marginTop: '10vh'}}>
              <Image style={styles.image} src={Me} />
            </Segment>
          </Segment.Group>
          <p class="pulsate">Scroll Down</p>
          <Image src="http://willmoreoutfitters.ca/wp-content/uploads/2017/04/arrow-down@2x.png" style={{height: '6vh', marginLeft: "50%"}} />
        </Top>
        <Middle>
        </Middle>
      </div>
    );
  }
}

const styles = {
  header: {
    fontFamily: "coven-medium,sans-serif",
    textAlign: 'center',
    fontSize: '6vh',
    color: 'white'
  },
  lseg: {
    position: 'absolute',
    marginTop: '20vh',
    marginLeft: '8vw',
    width: "50%",
    backgroundColor: 'black',
    background: 'transparent'
  },
  scroll: {
    display: 'flex',
    padding: "90vh",
    marginLeft: '65vh',
    animation: "opacityPulse 2s ease-out",
    animationIterationCount: "infinite",
    opacity: "1"
  },
  image: {
    float: 'right'
  }
}

export default Home;
