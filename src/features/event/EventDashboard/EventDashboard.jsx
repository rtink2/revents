import React from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Patty',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/40.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Patty',
        photoURL: 'https://randomuser.me/api/portraits/women/40.jpg'
      },
      {
        id: 'b',
        name: 'Adrian',
        photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Adrian',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/42.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Adrian',
        photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
      },
      {
        id: 'a',
        name: 'Patty',
        photoURL: 'https://randomuser.me/api/portraits/women/40.jpg'
      }
    ]
  }
]


class EventDashboard extends React.Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false
  }

  handleIsOpenToggle = () => {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }))
  }

  render() {
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleIsOpenToggle}
            color='violet'
            content='Create Event'
          />
          {isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle} />}
        </Grid.Column>
      </Grid>
    )
  }
}
export default EventDashboard;