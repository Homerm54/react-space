import React from 'react';

import { mount } from 'enzyme';
import { ContextProvider } from 'context';
import Controls from 'components/MediaRender/Controls';
import types from 'context/types';




// Date used: Dec 02, 2020.
// Some dates are created using string, to simulate how the work in production

describe('Controls Unit Test', ()=>{

  let wrapper = mount(<div></div>); // For intellisense
  const dispatchMock = jest.fn();


  beforeEach(()=>{

    const state = {
      state: {
        date: new Date(2020, 11, 2),
      },
      dispatch: dispatchMock, // functions shortcut
    }

    wrapper = mount(
      <ContextProvider value={state}>
        <Controls />
      </ContextProvider>
    );
  });

  afterEach(()=>{
    dispatchMock.mockClear();
  });



  test('should render a Timer Input with current time and 2 Buttons', ()=>{
  
    // Render the appropiate input widgets for UI
    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(1);
    
    // Display the time provided by the global context
    expect(wrapper.find('input').prop('value')).toBe("2020-12-02");
    
  });


  test('should Handle Input Change correctly', ()=>{
  
    const dateInput = wrapper.find('input');

    // handle input change, onChange
    dateInput.simulate('change', {
      target: {
        value: '2020-12-01', 
        // simulate user selected a before our current date
      }
    });

    // Asserts the call to the dispatcher method
    expect(dispatchMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(({
      type: types.setDate,
      payload: {
        date: new Date('2020-12-01'),
      }
    }));
    
    /**
     * If the reducer is called correctly, the value of the input
     * should be updated, since it was already tested above
     */
  });


  test('should change the date on dayBefore click', ()=>{
  
    const dayBack = wrapper.find('button').at(0);

    // check dispatch called
    dayBack.simulate('click');
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: types.setDate,
      payload: {
        date: new Date(2020, 11, 1),
      }
    })
  });


  test('should change the date on dayAfter click', ()=>{
  
    const dayAfter = wrapper.find('button').at(1);

    // check dispatch called
    dayAfter.simulate('click');
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: types.setDate,
      payload: {
        date: new Date(2020, 11, 3),
      }
    })
  });

});

