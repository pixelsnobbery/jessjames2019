import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export const cardImage = graphql`
fragment cardImage on File {
  childImageSharp {
    fluid(maxWidth: 200, maxHeight: 200) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

const Image = () => (
  <StaticQuery
    query={graphql`
    query {
      image1: file(relativePath: { eq: "images/galiano-island.jpg" }) {
        ...cardImage
      }

      image2: file(relativePath: { eq: "images/stanley-park.jpg" }) {
        ...cardImage
      }

    }
  `}
    
    render={data => <Img fluid={data.placeholderImage.image1.fluid} style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    }}  />}
  />
)
export default Image
