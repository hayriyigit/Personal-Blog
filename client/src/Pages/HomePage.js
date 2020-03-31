import React from "react";
import { Switch, Route } from "react-router-dom";

import {Header} from 'semantic-ui-react';

import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";
import PostList from "../components/PostList";

const HomePage = () => (
  <body>
      <SideBar />
      <Header as='h3' className='HeaderSign' textAlign='center'>
         HYRYGT.
      </Header>
      
      <main>

          <Switch>
              <Route exact path={["/", "/blog"]} component={PostList} />
              <Route path="/blog/:id" component={SinglePost} />
          </Switch>
      </main>
  </body>
);

export default HomePage;
