import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import AnnouncementListPage from "./containers/AnnouncementListPage/AnnouncementListPage";
import SchoolLifePage from "./containers/SchoolLifePage/SchoolLifePage";
import AnnouncementItemPage from "./containers/AnnouncementItemPage/AnnouncementItemPage";
import VacanciesPage from "./containers/VacanciesPage/VacanciesPage"
import PresentationPage from "./containers/PresentationPage/PresentationPage";
import './App.css';

function App() {
  return (
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/contacts' component={ContactsPage}/>
          <Route path='/actualite/:name' component={AnnouncementItemPage}/>
          <Route path='/actualite' component={AnnouncementListPage}/>
          <Route path='/vie-scolaire' component={SchoolLifePage}/>
          <Route path='/postes-vacants' component={VacanciesPage}/>
          <Route path='/presentation' component={PresentationPage} />
        </Switch>
      </Layout>
  );
}

export default App;
