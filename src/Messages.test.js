import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';


describe('messages component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
        })
        
        it('renders as expected', () => {
            const tree = renderer.create(<Messages name='Messages' unread={4} />).toJSON(); 
            //create a component and turn it in into JSON snapshot
            expect(tree).toMatchSnapshot();
        })

        it('renders as expected with no unreads', () => {
            const tree = renderer.create(<Messages name='Messages' unread={0} />).toJSON();
            expect(tree).toMatchSnapshot();
        })
})


