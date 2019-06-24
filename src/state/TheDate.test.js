import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TheDate from './TheDate'

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Date />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it.skip('renders the UI as expected', () => {
    expect(
      renderer.create(<Date />).toJSON()
    ).toMatchSnapshot()
  })
})