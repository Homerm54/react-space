import React from 'react';
import { act } from '@testing-library/react';
import { mount, } from 'enzyme';

import { ContextProvider } from 'context';
import types from 'context/types';

import SpaceImage from "assets/space-image.jpg";
import Image from "components/MediaRender/Image";
import cacheImage from 'components/MediaRender/Image/cacheImage';
jest.mock('../../../components/MediaRender/Image/cacheImage')





describe('Image Component Unit Test', () => {


  const noURLData = {
    data: {
      url: '',
    }
  }

  const urlData = {
    data: {
      url: SpaceImage,
    }
  }

  const dispatchMock = jest.fn();


  function forComponentUpdate(node) {

    return new Promise(resolve => {
      setImmediate(() => {

        node.update();
        resolve();
      })
    })
  }


  afterEach(() => {
    dispatchMock.mockClear();
  });



  test('Should have the Loading Component when init', () => {


    cacheImage.mockImplementation(async () => {
      return true;
    });

    const wrapper = mount(
      <ContextProvider value={{ state: {}, dispatch: dispatchMock }}>
        <Image data={{ ...noURLData }} />
      </ContextProvider>
    );


    expect(wrapper.find('#loading-component').exists()).toBeTruthy();
    
    expect(dispatchMock).not.toHaveBeenCalled();

  });



  test('should show the image when it finish loading it', async () => {


    cacheImage.mockImplementation(async () => {
      return true;
    });


    const wrapper = mount(
      <ContextProvider value={{ state: {}, dispatch: dispatchMock }}>
        <Image data={urlData} />
      </ContextProvider>
    );


    await forComponentUpdate(wrapper);


    expect(wrapper.find('#loading-component').exists()).toBeFalsy();

    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').prop('alt')).toBe('Cool Space Media');
    expect(wrapper.find('img').prop('src')).toBe(SpaceImage);

    expect(dispatchMock).not.toHaveBeenCalled();

    // dispatch assertions

    // act(async () => {
    // done();
    // })

  });


  test('should catch an error and call the dispatch', async () => {


    cacheImage.mockImplementation(async () => {
      throw Error('Testing Error');
    });


    const wrapper = mount(
      <ContextProvider value={{ state: {}, dispatch: dispatchMock }}>
        <Image data={noURLData} />
      </ContextProvider>
    );


    await forComponentUpdate(wrapper);

    expect(dispatchMock).toHaveBeenCalledTimes(1);

    expect(dispatchMock).toBeCalledWith({
      type: types.setError,
      payload: {
        error: {
          message: 'Error loading image, try another date.',
          fatal: false,
        }
      }
    })
  })
});


