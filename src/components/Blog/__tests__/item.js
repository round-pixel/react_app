import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { fakeStore } from 'helpers/fakeStore';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

import Item from '../Card';

describe('Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store  = fakeStore({});
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <Item />
        </MemoryRouter>
      </Provider>,
      div
    );
  });
  describe('render', () => {
    it('should render usual item', () => {
      const itemProps = { message: 'Hello World', image: {}, metaInfo: { createdBy: 'Bob'}, id: 5 };
      const item = shallow(<Item props={itemProps}/>);

      expect(item).toMatchSnapshot();
    });
  });
});
