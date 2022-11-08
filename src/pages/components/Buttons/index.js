import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Example from './Example';
import ExampleSource from '!raw-loader!./Example';
import Outline from './Outline';
import OutlineSource from '!raw-loader!./Outline';
import Tags from './Tags';
import TagsSource from '!raw-loader!./Tags';
import Sizes from './Sizes';
import SizesSource from '!raw-loader!./Sizes';
import Block from './Block';
import BlockSource from '!raw-loader!./Block';
import Active from './Active';
import ActiveSource from '!raw-loader!./Active';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import Loading from './Loading';
import LoadingSource from '!raw-loader!./Loading';
import Checkbox from './Checkbox';
import CheckboxSource from '!raw-loader!./Checkbox';
import Uncontrolled from './Uncontrolled';
import UncontrolledSource from '!raw-loader!./Uncontrolled';
import Controlled from './Controlled';
import ControlledSource from '!raw-loader!./Controlled';

const Buttons = () => {
  return (
    <>
      <AppComponentHeader
        title='Buttons'
        description='Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'
        refUrl='https://react-bootstrap.github.io/components/buttons/'
      />

      <AppRowContainer>
        <Col xs={12}>
          <AppComponentCard
            title='Example'
            component={Example}
            source={ExampleSource}
            noScrollbar
            description='Use any of the available button style types to quickly create a styled button. Just modify the variant prop.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Outline buttons'
            component={Outline}
            source={OutlineSource}
            noScrollbar
            description='For a lighter touch, Buttons also come in outline-* variants with no background color.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Button tags'
            component={Tags}
            source={TagsSource}
            noScrollbar
            description='Normally <Button> components will render a HTML <button> element. However you can render whatever youd like, adding a href prop will automatically render an <a /> element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you. '
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Sizes'
            component={Sizes}
            source={SizesSource}
            noScrollbar
            description='Fancy larger or smaller buttons? Add size="lg", size="sm" for additional sizes.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Block buttons'
            component={Block}
            source={BlockSource}
            noScrollbar
            description='Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Active state'
            component={Active}
            source={ActiveSource}
            noScrollbar
            description='To set a buttons active state simply set the components active prop.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Disabled state'
            component={Disabled}
            source={DisabledSource}
            noScrollbar
            description='Make buttons look inactive by adding the disabled prop to.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Button loading state'
            component={Loading}
            source={LoadingSource}
            noScrollbar
            description='When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />s props from a state change like below.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Checkbox / Radio'
            component={Checkbox}
            source={CheckboxSource}
            noScrollbar
            description='Buttons can also be used to style checkbox and radio form elements. This is helpful when you want a toggle button that works neatly inside an HTML form.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Uncontrolled'
            component={Uncontrolled}
            source={UncontrolledSource}
            noScrollbar
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Controlled'
            component={Controlled}
            source={ControlledSource}
            noScrollbar
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Buttons;
