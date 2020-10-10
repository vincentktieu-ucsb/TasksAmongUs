import React, { useState } from 'react';
import authenticate from '../../utils/authenticate';
import Layout from '../../components/Layout';
import Upcoming from './Upcoming';
import Finished from './Finished';
import AddNewFriendForm from './AddNewFriendForm';
import FriendRequests from './FriendRequests';
import PendingRequests from './PendingRequests';
import ConfirmedRequests from './ConfirmedRequests';

import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Home() {
  let user = authenticate();
  const [homeToggle, setHomeToggle] = useState(1);

  return (
    <Layout user={user}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs="10" md>
            {homeToggle ?
              <div>
                <Button className="mb-2 mr-2 lg-btn" variant="contained" color="primary" size="large">
                  Upcoming
                </Button>
                <Button className="mb-2 lg-btn" variant="outlined" color="primary" size="large" onClick={() => setHomeToggle(0)}>
                  Finished
                </Button>
                <Upcoming />
              </div> :
              <div>
                <Button className="mb-2 mr-2 lg-btn" variant="outlined" color="primary" size="large" onClick={() => setHomeToggle(1)}>
                  Upcoming
                </Button>
                <Button className="mb-2 lg-btn" variant="contained" color="primary" size="large">
                  Finished
                </Button>
                <Finished />
              </div>
            }
          </Grid>
          <Grid item xs="10" md="3">
            <h2>Friends</h2>
            <AddNewFriendForm />
            <FriendRequests />
            <PendingRequests />
            <ConfirmedRequests />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}