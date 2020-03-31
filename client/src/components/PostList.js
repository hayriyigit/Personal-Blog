import React, { Fragment } from "react";
import { Header, Label, Icon, Image, Button, Divider, Loader } from "semantic-ui-react";
import Markdown from 'markdown-to-jsx';
import moment from "moment"

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import {FETCH_POSTS_QUERY} from "../util/graphql";

import "../style/postlist.css";

const PostList = () => {
  const {
      loading,
      data
  } = useQuery(FETCH_POSTS_QUERY);
  if(loading){
      return (<Loader active inline='centered' size='large'>Loading</Loader>)
  }
  if(data){
      return(
          <Fragment>
              {data.blogs.map(post =>(
                  <Fragment>
                      <div className="Post">
                          <Header as="h2" className="PostTitle">
                             {post.title}
                          </Header>
                          <div className="PostMeta">
                              <Label as="a" image size="small">
                                  <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                                  {post.user.username}
                              </Label>
                              <Label size="small">
                                  <Icon name="calendar alternate" /> {
                                  moment(post.createdAt, "x").format("DD MMM YYYY")
                              }
                              </Label>
                              <Label as="a" size="small">
                                  <Icon name="tag" /> {post.category}
                              </Label>
                          </div>
                          <p>
                              {post.body.substr(1,450)}
                          </p>
                          <Button icon labelPosition="right" size="tiny" color="google plus">
                              Devam
                              <Icon name="right arrow" />
                          </Button>
                      </div>
                      <Divider />
                  </Fragment>
              ))}
          </Fragment>
      )
  }
};


export default PostList;
