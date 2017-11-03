import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/HomePage';
import AboutUs from './aboutus/AboutUsPage';
import Membership from './membership/MembershipPage';
import Training from './training/TrainingPage';
import Records from './records/RecordsPage';
import Results from './results/ResultsPage';
import ContactUs from './contactus/ContactUsPage';
import About from './about/AboutPage';
import Courses from './courses/CoursesPage';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/news" component={About}/>
      <Route path="/membership" component={Membership}/>
      <Route path="/training" component={Training}/>
      <Route path="/records" component={Records}/>
      <Route path="/results" component={Results}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route path="/about" component={About}/>
      <Route path="/courses" component={Courses}/>
    </Switch>
  </main>
);
export default Main;
