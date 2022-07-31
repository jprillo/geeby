import React from 'react'
import PropTypes from 'prop-types'
import IndexPageTemplate from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
          headingOne = {data.headingOne}
          subheadingOne = {data.subheadingOne}
          heroButtonCtaOne = {data.heroButtonCtaOne}
          heroButtonCtaTwo = {data.heroButtonCtaTwo}
          heroButtonLinkOne = {data.heroButtonLinkOne}
         
          headingTwo = {data.CardOneheadingTwo} 
          headingThree = {data.headingThree}
          headingFour = {data.headingFour} 
          cards = {data.cards || {}}
          dependancies = {data.dependancies || {}} 
          reviews = {data.reviews || {}}
    
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview