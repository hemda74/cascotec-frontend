import React from 'react'
import Accordion from './Accordion'
const Services2 = () => {
  return (
    <>
     <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <Accordion title="First Accordion" content="First Accordion content" />
        <Accordion
          title="Second Accordion"
          content="Second Accordion content"
        />
        <Accordion
          title="Third Accordion"
          content=" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
        />
      </div>
    </>
  )
}

export default Services2