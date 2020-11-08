import React from 'react';
import {cleanup, fireEvent,  getByText, render,screen, waitFor} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Message from './Meesage'
import '@testing-library/jest-dom'


afterEach(cleanup)

describe('Message',()=>{
    test('snapshot renders',()=>{
        const component=renderer.create(<Message/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('message closes on click',async ()=>{
        const{getByTestId}= render(<Message/>);
        await waitFor(() => {
            expect(getByTestId('message')).toBeInTheDocument()
        })
        let message=getByTestId('message')
        fireEvent.click(getByTestId('message'))
        expect(message).not.toBeInTheDocument()
    })
})

