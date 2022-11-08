import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import InputGroupDemo from './InputGroupDemo';
import InputGroupDemoSource from '!raw-loader!./InputGroupDemo';
import Sizing from './Sizing';
import SizingSource from '!raw-loader!./Sizing';
import Checkboxes from './Checkboxes';
import CheckboxesSource from '!raw-loader!./Checkboxes';
import Multiple from './Multiple';
import MultipleSource from '!raw-loader!./Multiple';
import MultipleAddons from './MultipleAddons';
import MultipleAddonsSource from '!raw-loader!./MultipleAddons';
import ButtonDemo from './ButtonDemo';
import ButtonDemoSource from '!raw-loader!./ButtonDemo';
import DropdownsDemo from './DropdownsDemo';
import DropdownsDemoSource from '!raw-loader!./DropdownsDemo';
import Segmented from './Segmented';
import SegmentedSource from '!raw-loader!./Segmented';

const InputGroup = () => {
  return (
    <>
      <AppComponentHeader
        title='InputGroup'
        description=''
        refUrl='https://react-bootstrap.github.io/components/input-group/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Input Group'
            component={InputGroupDemo}
            source={InputGroupDemoSource}
            noScrollbar
            description='Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <label>s outside the input group.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='DropdownsDemo'
            component={DropdownsDemo}
            source={DropdownsDemoSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Sizing'
            component={Sizing}
            source={SizingSource}
            noScrollbar
            description='Add the relative form sizing classes to the InputGroup and contents within will automatically resize—no need for repeating the form control size classes on each element.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Button'
            component={ButtonDemo}
            source={ButtonDemoSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Checkboxes and radios'
            component={Checkboxes}
            source={CheckboxesSource}
            noScrollbar
            description='Use the InputGroup.Radio or InputGroup.Checkbox to add options to an input group.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Multiple inputs'
            component={Multiple}
            source={MultipleSource}
            noScrollbar
            description='While multiple inputs are supported visually, validation styles are only available for input groups with a single input.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Multiple Addons'
            component={MultipleAddons}
            source={MultipleAddonsSource}
            noScrollbar
            description='Multiple add-ons are supported and can be mixed with checkbox and radio input versions.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Segmented buttons'
            component={Segmented}
            source={SegmentedSource}
            noScrollbar
            description=''
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default InputGroup;
