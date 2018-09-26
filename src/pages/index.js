import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Groups from './../components/Groups'
import Toc from './../components/Toc'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
    }
  }

  resize = resizeState => {
    this.setState({
      isOpen: resizeState.isOpen,
    })
  }

  render() {
    const data = this.props.data
    const conentClass = this.state.isOpen ? 'content open' : 'content'
    return (
      <Layout>
        <div
          style={{
            display: 'flex',
            height: '100%',
          }}
        >
          <Toc isOpen={this.state.isOpen} resize={this.resize} />
          <div className={conentClass}>
            <Groups data={data} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fileAbsolutePath
          html
        }
      }
    }
  }
`

export default IndexPage
