import React, { Component } from 'react';
import { Header, Segment, Image, Dimmer, Accordion, Icon, Modal, Button, Divider, Grid, Container, Label, Transition, Popup } from 'semantic-ui-react';
import Me from '../images/Me.jpg'
import Family from '../images/Family.jpg'
import Kings from '../images/Kings Peak'
import Main from '../images/KingsMain'
import B2B from '../images/B2B'
import B2Babout from '../images/B2Babout'
import B2BPay from '../images/B2BPay'
import KP from '../images/KP'
import K from '../images/K'
import k2 from '../images/k2'
import k3 from '../images/k3'
import './home.css'
import TextLoop from "react-text-loop";

class Home extends Component {

  state = { activeIndex: 0, hide: 500, show: 500, visible: false }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    const { activeIndex, active, hide, show, visible } = this.state

    return (
      <div>
        <div style={styles.Top}>
          <Segment.Group>
            <Segment style={styles.lseg}>
              <Popup trigger={
                  <Button content="Devin Parkinson" style={styles.header1} onClick={this.toggleVisibility} />
                } content="Click for pictures of me and my family" basic position="top center" />
              <Transition duration={{ hide, show }} visible={visible}>
                <div>
                  <Image style={styles.image} src={Me} />
                  <Image centered style={styles.bimage} src={Family} />
                  </div>
              </Transition>
              <Divider inverted />
              <TextLoop springConfig={{ stiffness: 300, damping: 7 }} interval={1200}>
                <Header style={styles.header}>Web Developer</Header>
                <Header style={styles.header}>Software Engineer</Header>
                <Header style={styles.header}>Full Stack Developer</Header>
              </TextLoop>
            </Segment>
            <Segment style={{ position: 'absolute', display: 'block', justifyContent: 'right', backgroundColor: 'black', background: 'transparent', marginLeft: '60%', marginTop: '10vh', color: 'white'}}>
            </Segment>
          </Segment.Group>
          <p class="pulsate">Scroll Down To See Credentials</p>
          <Image src="http://willmoreoutfitters.ca/wp-content/uploads/2017/04/arrow-down@2x.png" style={{height: '6vh', marginLeft: "54%"}} />
        </div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <Grid columns={2} divided>
            <Grid.Row>
            <Grid.Column>
        <div style={styles.middle}>
          <Container fluid style={{backgroundColor: '#909090', color: 'white', fontSize: '2vh', marginLeft: '1vw', padding: '1vw'}}>
            <Label as="h3" color="blue" ribbon>My Background</Label>
            <p>Before I went into Software Development, I was working for:<Modal trigger={<p style={styles.inbutton}>Fidelity Investments</p>}>
              <Modal.Content style={{height: '50vh', width: '50vw'}}>
                <Header as="h1" style={{textAlign: 'center'}}>
                  <Image src="http://1000logos.net/wp-content/uploads/2017/08/Fidelity-Logo.png" avatar />
                </Header>
                <li>I worked for Fidelity Investments for 2.5 years.</li>
                <li>Most of what I did there was working with Equity Compensation plans. Also known as Stock Plans.</li>
                <li>I worked on a Windows computer handling several systems on multiple screens at the same time.</li>
                <li>When I left I was the top rated representative in the nation for all Stock Plan Associates.</li>
              </Modal.Content>
            </Modal>
          </p>
          <Modal trigger={<p style={styles.inbutton}>JC Penney</p>}>
            <Modal.Content style={{height: '50vh', width: '50vw'}}>
              <Header as="h1" style={{textAlign: 'center'}}>
                <Image src="https://cblproperty.blob.core.windows.net/production/assets/blt9c47aac174a95228-JCPenney_710.png" avatar />
              </Header>
              <li>I worked at JC Penneys inbound phone center in Downtown SLC, handling calls from stores and providing all the procedural information they need to complete their jobs.</li>
              <li>I worked on a windows OS working with several systems all at the same time. At times remotely logging into other computers to handle fixes on the computers at the stores location.</li>
            </Modal.Content>
          </Modal>
        </Container>
      </div>
      </Grid.Column>
        <Divider hidden />
        <Grid.Column>
          <Container fluid style={{backgroundColor: '#0079c7', color: 'white', fontSize: '2vh', marginLeft: '1vw', padding: '1vw'}}>
            <Label as="h3" color="#909090" ribbon>My Education</Label>
            <p>DevPoint Labs</p>
            <p>Weber State University</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
        <Divider />
        <br/><br/><br/><br/><br/><br/>
          <Header>
            Skills
          </Header>
          <Grid celled style={{textAlign: 'center', fontFamily: 'coven-medium,sans-serif', fontSize: '2vh'}}>
            <Grid.Row>
              <Grid.Column width={4}>
                Languages
                <Image src="http://www.bobbyberberyan.com/wp-content/uploads/2016/12/ES6LOGO.svg" avatar />
                <Image src="https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png" avatar/>
                <Image src="https://b.kisscc0.com/20180717/ocq/kisscc0-ruby-on-rails-the-ruby-programming-language-comput-ruby-stone-gem-5b4eb8d27abef8.0039820215318857785028.jpg" avatar />
                <Image src="https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png" avatar />
              </Grid.Column>
              <Grid.Column width={4}>
                Frameworks
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" avatar />
                <Image src="https://eventil.s3.amazonaws.com/uploads/event/logo/744/reactnative.png" avatar />
                <Image src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" avatar />
                <Image src="http://gloify.com/wp-content/uploads/2018/02/rails-300x300.png" avatar />
              </Grid.Column>
              <Grid.Column width={4}>
                Databases
                <Image src="https://heroku-blog-files.s3.amazonaws.com/posts/1474483786-postgres-app-icon.png" avatar />
                <Image src="https://www.prchecker.info/free-icons/128x128/mysql_128_px.png" avatar />
                <Image src="https://cdn-images-1.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png" avatar/>
                <Image src="https://png.icons8.com/color/1600/mongodb.png" avatar/>
              </Grid.Column>
              <Grid.Column width={4}>
                Other Tools
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tools_nicu_buculei_01.svg/1024px-Tools_nicu_buculei_01.svg.png" avatar />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4} style={{textAlign: 'center'}}>ES6, Javascript, Ruby, HTML5, CSS3</Grid.Column>
              <Grid.Column width={4}>React, React Native, React w/ Redux, Ruby on Rails</Grid.Column>
              <Grid.Column width={4}>PostgresQL, Mysql, Postman, MongoDB</Grid.Column>
              <Grid.Column width={4}>AJAX, Fetch, Axios, Help Desk, Troubleshooting, Design, Windows/Mac proficient</Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <br/>
          <Button onClick={this.handleShow}>See My Personal Websites</Button>
            <Dimmer active={active} onClickOutside={this.handleHide}>
          <Segment>
            <Header as='h1'>List of my personal websites I have created</Header>
            <Accordion>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} style={{color: 'black', textAlign: 'left'}}>
                Bucket To Beak
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p style={{color: 'black'}}>
                <a href="https://bucket-2-beak.herokuapp.com/" target="_blank" rel="noopener noreferrer">Bucket To Beak</a> is a company started by my brother in law. This was created using a React.js front end. Using Rails backend. Deployed through Heroku. Using a PostgresQL Database.
                </p>
                  <div>
                    <img src={B2B} alt="Main Page" height={"200vh"}/>
                    <p className="legend">This is a Fully Functional and responsive website</p>
                  </div>
                  <div>
                    <img src={B2Babout} alt="Main Page lower" height={"200vh"} />
                  </div>
                  <div>
                    <img src={B2BPay} alt="Main Page lower" height={"200vh"} />
                  </div>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style={{color: 'black', textAlign: 'left'}}>
                Kings Peak Customs
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p style={{color: 'black', textAlign: 'left'}}>
                <a href="https://kings-peak-customs.herokuapp.com/" target="_blank" rel="noopener noreferrer">Kings Peak Customs</a> is a customized pistol website. This also was created with React.js and Redux on the front end. Rails Back End. Deployed for the time being through Heroku, but will be moved to AWS. Using a PostgresQL Database.
                </p>
                  <div>
                    <img src={Kings} height={"200vh"} alt="Main Page"/>
                    <p className="legend">Here shows how I set up the Main page using a React Responsive Carousel</p>
                  </div>
                  <div>
                    <img src={Main} height={"200vh"} alt="Main Page lower" />
                    <p className="legend">Includes a fun video showing how the pistols are actually made</p>
                  </div>
                  <div>
                    <img src={KP} height={"200vh"} alt="Customization Page" />
                    <p className="legend">Allows you to customize the pistol that you have chosen the way you want. A lot of redux used here...</p>
                  </div>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style={{color: 'black', textAlign: 'left'}}>
                KUKU
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p style={{color: 'black'}}>
                  KUKU was a group project at DevPoint Labs. We worked together to build this website. Similar to the popular dating app Tinder, you can choose what you want by simply swiping right. React. Redux. React Native. Rails. Has not yet been deployed.
                </p>
                <img src={K} alt="landing page" height={"200vh"}/>
                <Divider />
                <img src={k2} alt="lower main page" height={"200vh"} />
                <Divider />
                <img src={k3} alt="shopping page" height={"200vh"} />
              </Accordion.Content>
            </Accordion>
          </Segment>
          </Dimmer>
      </Grid>
      </Dimmer.Dimmable>
      </div>
    );
  }
}

const styles = {
  Top: {
    height: '96vh',
    width: '100%',
    backgroundImage: 'linear-gradient(to bottom right, #1f7fe4, #010563)',
    color: 'white',
  },
  middle: {
    height: '100vh',
    width: '100%',
  },
  header: {
    fontFamily: "DejaVu Sans Mono, monospace",
    textAlign: 'center',
    fontSize: '3vh',
    color: 'white',
    marginLeft: '6vw'
  },
  header1: {
    fontFamily: "DejaVu Sans Mono, monospace",
    textAlign: 'center',
    fontSize: '5vh',
    color: 'white',
    backgroundColor: 'transparent',
    width: '50vw',
  },
  lseg: {
    position: 'absolute',
    marginTop: '7vh',
    marginLeft: '4vw',
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
    float: 'right',
    height: '30vh'
  },
  pictureback: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  bimage: {
    height: '40vh',
  },
  link: {
    height: '50vh'
  },
  carousel: {
    height: '50vh',
    width: 'auto',
    overFlow: 'hidden',
  },
  inbutton: {
    background: 'transparent',
    color: 'white',
    textDecoration: 'underline blue',
    cursor: 'pointer'
  }
}

export default Home;
