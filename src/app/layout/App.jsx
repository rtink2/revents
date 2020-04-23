import React, { Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
        <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
