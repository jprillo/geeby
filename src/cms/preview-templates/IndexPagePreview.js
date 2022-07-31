import React from 'react'
import PropTypes from 'prop-types'
import IndexPageTemplate from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset}) => {

  
    return (
      <IndexPageTemplate
          headingOne = {entry.getIn(['data', 'headingOne'])}
          subheadingOne = {entry.getIn(['data', 'subheadingOne'])}
          heroButtonCtaOne = {entry.getIn(['data', 'heroButtonCtaOne'])}
          heroButtonCtaTwo = {entry.getIn(['data', 'heroButtonCtaTwo'])}
          heroButtonLinkOne = {entry.getIn(['data', 'heroButtonLinkOne'])}
          image = {getAsset(entry.getIn(['data', 'heroImage']))}
          headingTwo = {entry.getIn(['data', 'headingTwo'])}
          headingThree = {entry.getIn(['data', 'headingThree '])}
          headingFour = {entry.getIn(['data', 'headingFour'])}
       
          
    
      />
    )
 
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview