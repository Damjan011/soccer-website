import * as React from 'react';
import { graphql, StaticQuery } from "gatsby";
import Layout from '../components/layout';

const PaymentPage = ({ data }) => {
  const postBody = data.allWpPost.nodes[0].content;
  const postTitle = data.allWpPost.nodes[0].title;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: postTitle }}></div>
      <div dangerouslySetInnerHTML={{ __html: postBody }}></div>
    </>
  )
}

const Payment = (props) => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
         query {
           allWpPost {
             nodes {
               title
               content
             }
           }
         }`
        }
        render={data => <PaymentPage data={data} {...props} />}
      />
    </Layout>
  )
}

export default Payment;