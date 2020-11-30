/**
 * This file holds the basic configuration for the Tests that will be doing,
 * from configuring the serializer fto basic imports.
 * 
 * Fell free to aadd any other configuration here.
*/


import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));