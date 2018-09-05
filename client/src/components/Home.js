import React, { Component } from 'react';
import { Header, Segment, Image, Reveal, Dimmer, Accordion, Icon, Modal, Button, Divider, Grid, Container, Label } from 'semantic-ui-react';
import Me from '../images/Me.jpg'
import Family from '../images/Family.jpg'
import Kings from '../images/Kings Peak'
import Main from '../images/KingsMain'
import B2B from '../images/B2B'
import B2B2 from '../images/B2B2'
import B2Babout from '../images/B2Babout'
import B2BPay from '../images/B2BPay'
import KP from '../images/KP'
import K from '../images/K'
import k2 from '../images/k2'
import k3 from '../images/k3'
import k4 from '../images/k4'
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import './home.css'

class Home extends Component {

  state = { activeIndex: 0 }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    const { activeIndex, active } = this.state

    return (
      <div>
        <div style={styles.Top}>
          <Segment.Group>
            <Segment style={styles.lseg}>
              <Header style={styles.header1}>Devin Parkinson</Header>
              <Divider inverted />
              <Header style={styles.header}>Web Developer</Header>
              <Header style={styles.header}>Software Engineer</Header>
              <Header style={styles.header}>Full Stack Developer</Header>
            </Segment>
            <Segment style={{ position: 'absolute', display: 'block', justifyContent: 'right', backgroundColor: 'black', background: 'transparent', marginLeft: '60%', marginTop: '10vh', color: 'white'}}>
              <Reveal animated='move left'>
                <Reveal.Content visible>
                  <Image style={styles.image} src={Me} />
                  <Header style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>Me</Header>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Segment style={styles.pictureback}>
                    <Header style={{textAlign: 'center'}}>My Family</Header>
                    <Image centered style={styles.bimage} src={Family} />
                  </Segment>
                </Reveal.Content>
              </Reveal>
            </Segment>
          </Segment.Group>
          <p class="pulsate">Scroll Down To See Credentials</p>
          <Image src="http://willmoreoutfitters.ca/wp-content/uploads/2017/04/arrow-down@2x.png" style={{height: '6vh', marginLeft: "54%"}} />
        </div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
        <div style={styles.middle}>
          <Container style={{backgroundColor: '#bbbbbb', color: 'white', textDecoration: 'underline', padding: '1%'}}>
            <Label as="h3" color="blue" ribbon>My Background</Label>
            <p>Before I went into development, I was working for: <Modal trigger={<p style={styles.inbutton}>Fidelity Investments</p>}>
              <Modal.Content>
                <Header as="h1" style={{textAlign: 'center'}}>
                  Fidelity Investments
                  <Image src="http://www.explora.us/wp-content/uploads/2018/04/fidelity-sq-logo.jpg" avatar />
                </Header>
                <div>I worked for Fidelity Investments for 2.5 years.</div>
                <div>Most of what I did there was working with Equity Compensation plans. Also known as Stock Plans.</div>
              </Modal.Content>
            </Modal>
          </p>
          <p></p>
        </Container>
          <Header>
            Skills
          </Header>
          <Grid celled style={{textAlign: 'center', fontFamily: 'coven-medium,sans-serif', fontSize: '2vh'}}>
            <Grid.Row>
              <Label attached="top left">List of Skills Acquired</Label>
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
                <Image src="https://1jorbp275diw1mzdov326h98-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/best-seo-tools.jpg" avatar />
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
                <Modal trigger={<Button positive>See Website Images</Button>}>
                  <Modal.Content>
                    <Carousel autoPlay infiniteLoop showArrows={true} style={styles.carousel}>
                      <div>
                        <img src={B2B} alt="Main Page" style={styles.link}/>
                        <p className="legend">This is a Fully Functional and responsive website</p>
                      </div>
                      <div>
                        <img src={B2B2} alt="Main Page lower" style={styles.link} />
                      </div>
                      <div>
                        <img src={B2Babout} alt="Main Page lower" style={styles.link} />
                      </div>
                      <div>
                        <img src={B2BPay} alt="Main Page lower" style={styles.link} />
                        <p className="legend">Allows you to sign up for a monthly payment subscription. Integrated through Braintree.</p>
                      </div>
                    </Carousel1>
                  </Modal.Content>
                </Modal>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style={{color: 'black', textAlign: 'left'}}>
                Kings Peak Customs
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p style={{color: 'black', textAlign: 'left'}}>
                <a href="https://kings-peak-customs.herokuapp.com/" target="_blank" rel="noopener noreferrer">Kings Peak Customs</a> is a customized pistol website. This also was created with React.js and Redux on the front end. Rails Back End. Deployed for the time being through Heroku, but will be moved to AWS. Using a PostgresQL Database.
                </p>
                  <Modal trigger={<Button positive>See Website Images</Button>}>
                    <Modal.Content>
                      <Carousel1 autoPlay infiniteLoop showArrows={true} style={styles.carousel}>
                        <div>
                          <img src={Kings} alt="Main Page" style={styles.link}/>
                          <p className="legend">Here shows how I set up the Main page using a React Responsive Carousel</p>
                        </div>
                        <div>
                          <img src={Main} alt="Main Page lower" style={styles.link} />
                          <p className="legend">Includes a fun video showing how the pistols are actually made</p>
                        </div>
                        <div>
                          <img src={KP} alt="Customization Page" style={styles.link} />
                          <p className="legend">Allows you to customize the pistol that you have chosen the way you want. A lot of redux used here...</p>
                        </div>
                      </Carousel1>
                    </Modal.Content>
                  </Modal>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style={{color: 'black', textAlign: 'left'}}>
                KUKU
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p style={{color: 'black'}}>
                  KUKU was a group project at DevPoint Labs. We worked together to build this website. Similar to the popular dating app Tinder, you can choose what you want by simply swiping right. React. Redux. React Native. Rails. Has not yet been deployed.
                </p>
                <Modal trigger={<Button positive>See Website Images</Button>}>
                  <Modal.Content>
                    <Carousel1 autoPlay infiniteLoop showArrows={true} style={styles.carousel}>
                      <div>
                        <img src={K} alt="Home Page" style={styles.link} />
                        <p className="legend">Another Fully Responsive Design</p>
                      </div>
                      <div>
                        <img src={k2} alt="Home Page Lower" style={styles.link} />
                        <p className="legend">Fun Videos also show that it is also a app. (release date: TBD...)</p>
                      </div>
                      <div>
                        <img src={k3} alt="traditional shopping" style={styles.link} />
                        <p className="legend">You can shop traditionally if you want and see all images. Or filter them to just your category.</p>
                      </div>
                      <div>
                        <img src={k4} alt="Kuku Shopping" style={styles.link} />
                        <p className="legend">Going Kuku is shopping one product at a time. Swipe right if you want an item and we will add it to your cart.</p>
                      </div>
                    </Carousel>
                  </Modal.Content>
                </Modal>
              </Accordion.Content>
            </Accordion>
          </Segment>
          </Dimmer>
        </div>
      </Dimmer.Dimmable>
      </div>
    );
  }
}

const styles = {
  Top: {
    height: '96vh'
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
  },
  middle: {
    height: '100vh'
    width: '100%',
  },
  header: {
    fontFamily: "coven-medium,sans-serif",
    textAlign: 'center',
    fontSize: '5vh',
    color: 'white'
  },
  header1: {
    fontFamily: "coven-medium,sans-serif",
    textAlign: 'center',
    fontSize: '8vh',
    color: 'white'
  },
  lseg: {
    position: 'absolute',
    marginTop: '15vh',
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
  },
  pictureback: {
    backgroundColor: 'white',
    color: 'black',
  },
  bimage: {
    width: '18vw'
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
