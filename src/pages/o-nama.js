import * as React from 'react';
import { graphql, StaticQuery } from "gatsby";
import Layout from '../components/layout';

const AboutPage = ({ data, title }) => {
  const postBody = data.wpPost.content;
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postBody }}></div>
    </>
  )
}

const About = (props) => {
  const postTitle = "O NAMA";
  return (
    <Layout>
    <StaticQuery
      query={graphql`
        query {
          wpPost(title: {eq: "O NAMA"}) {
            content
          }
        }
      `}
      render={data => <AboutPage data={data} title={postTitle} {...props} />} 
    />
    </Layout>
  )
}

export default About;