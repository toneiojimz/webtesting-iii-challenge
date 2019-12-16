// Test away
import React from 'react';
import {render} from '@testing-library/react'

import Dashboard from './Dashboard';
import { testNameToKey } from 'jest-snapshot/build/utils';
import expectExport from 'expect';

test("Dashboard is there", ()=> {

    const state = false;

    const {baseElment, rerender} = render(<Dashboard state={state}/>)
    
    expect(baseElment).toMatchSnapshot();
     

})