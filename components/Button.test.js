import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Button from './Button'

describe('Button',()=>{
    test('snapshot renders',()=>{
        const component=renderer.create(
        <Button isSelected={false}bg="#93f"changeSource={()=>{}}>AMi holam abhik</Button>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})