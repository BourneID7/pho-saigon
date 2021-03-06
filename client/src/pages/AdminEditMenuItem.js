import React from 'react';
import Container from '../components/Container';
import EditMenuItemForm from '../components/EditMenuItemForm';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

function AdminEditMenuItem() {
  return(
    <div>
      <Header />
      <Container fluid>
        <Jumbotron
          h1="Edit a menu item"
        />
      </Container>
      <main>
        <EditMenuItemForm />
      </main>
    </div>
  )
}

export default AdminEditMenuItem;