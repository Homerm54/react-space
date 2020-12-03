import React from 'react';
import { render } from "enzyme";
import Loading from 'components/Loading';


describe('<Loading /> Test Suit', ()=>{

  test('Should Render Correctly', ()=>{
  
    const wrapper = render(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});


