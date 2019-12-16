// Test away!
import React from 'react';
import {render} from '@testing-library/react';

import Display from './Controls';
import { testNameToKey } from 'jest-snapshot/build/utils';
import expectExport from 'expect';

test("Control the control", () => {

    const closed = false;
    const locked = false;

    const {baseElement, rerender}= render(<Display closed={closed} locked={locked}/>)
    expect(baseElement).toMatchSnapshot();
})