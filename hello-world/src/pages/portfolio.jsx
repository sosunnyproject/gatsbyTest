import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link, graphql } from "gatsby"

export default function Portfolio({ data }) {
  return (
  <Container>
    <Header />
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        (node.frontmatter.category === 'portfolio') && 
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "} — {node.frontmatter.date}
                </h3>
              </Link>
              <p>{node.excerpt}</p>
            </div>
         ))}
      </div>
  </Container>
  )
}

export const query = graphql`
query {
  allMarkdownRemark{
    totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
          }
          fields {
            slug
          }
      }
    }
  }
}
`