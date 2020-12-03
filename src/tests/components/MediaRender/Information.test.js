import React from 'react';

import { shallow } from 'enzyme';

import Information from 'components/MediaRender/Information';


describe('Unit Testing of <Information />', () => {

  const dataNoCopyright = {
    data: {
      title: 'Random Space Image',
      fetching: false,
    }
  }

  const dataLoading = {
    fetching: true,
  }

  const dataError = {
    error: true,
  }

  const dataComplete = {
    data: {
      title: "Random Space Image",
      copyright: "Fake Copyright",
    }
  }


  test('should render nothing if loading/error', () => {

    let wrapper = shallow(<Information data={dataLoading} />);
    expect(wrapper.find('#title').length).not.toBeGreaterThanOrEqual(1);
    expect(wrapper.find('#copyright').length).not.toBeGreaterThanOrEqual(1);

    wrapper = shallow(<Information data={dataError} />);
    expect(wrapper.find('#title').length).not.toBeGreaterThanOrEqual(1);
    expect(wrapper.find('#copyright').length).not.toBeGreaterThanOrEqual(1);
  });


  test("should render the image's Title and Copyright", () => {
    

    let wrapper = shallow(<Information data={dataComplete} />);
    expect(wrapper.find('#title').text().trim())
      .toBe("Random Space Image");
      
    expect(wrapper.find('#copyright').text())
      .toBe("Copyright: Fake Copyright");

    wrapper = shallow(<Information data={dataNoCopyright} />);
    expect(wrapper.find('#copyright').text().trim())
      .toBe("Copyright: Nasa Public Domain");
  });
});



