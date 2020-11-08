import React from 'react';
import {cleanup, fireEvent,  getByText, render,screen, waitFor} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import Filter from './Filter'

describe('Filter',()=>{
    test('snapshot renders',()=>{
        const component=renderer.create(
        <Filter setSource={()=>{}} setCall={()=>{}}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('whether on clicking the button selected is working or not',()=>{
        const { getByTestId } = render(<Filter setSource={()=>{}} setCall={()=>{}}/>)
        // clicking nature
        fireEvent.click(getByTestId('2'))
        let selceted=getByTestId('2').children.length
        let selceted2=getByTestId('4').children.length
        expect(getByTestId('filters')).toMatchSnapshot()
        expect(selceted).toBe(1)
        expect(selceted2).toBe(0)

        // clicking funny
        fireEvent.click(getByTestId('4'))
        selceted2=getByTestId('4').children.length
        selceted=getByTestId('2').children.length
        expect(getByTestId('filters')).toMatchSnapshot()
        expect(selceted2).toBe(1)
        expect(selceted).toBe(0)
    })
})