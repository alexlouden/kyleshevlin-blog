import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Container from './Container'
import ValueSell from './ValueSell'
import Footer from './Footer'
import Header from './Header'
import { bs } from '../shevy'

const MainWrap = styled.main`
  padding-bottom: ${bs(2)};
  min-height: 65vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={data => {
      const { subTitle, title } = data.site.siteMetadata

      return (
        <Fragment>
          <Header subTitle={subTitle} title={title} />
          <MainWrap role="main">
            <Container>{children}</Container>
          </MainWrap>
          <ValueSell />
          <Footer />
        </Fragment>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
