import React from 'react'
import PropTypes from 'prop-types'
import IndexPageTemplate from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryCards = entry.getIn(['data', 'cards'])
  const cards = entryCards ? entryCards.toJS() : []

  const entryReviews = entry.getIn(['data', 'reviews'])
  const reviews = entryReviews ? entryReviews.toJS() : []

  const entryDependancies = entry.getIn(['data', 'dependancies'])
  const dependancies = entryDependancies ? entryDependancies.toJS() : []

  
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
          cards = {{ cards }}
          dependancies = {{ dependancies }} 
          reviews = {{ reviews }}
          
    
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