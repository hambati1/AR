import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import FormsDemo from './FormsDemo';
import FormsDemoSource from '!raw-loader!./FormsDemo';
import FormControls from './FormControls';
import FormControlsSource from '!raw-loader!./FormControls';
import Sizing from './Sizing';
import SizingSource from '!raw-loader!./Sizing';
import Readonly from './Readonly';
import ReadonlySource from '!raw-loader!./Readonly';
import ReadonlyPlain from './ReadonlyPlain';
import ReadonlyPlainSource from '!raw-loader!./ReadonlyPlain';
import File from './File';
import FileSource from '!raw-loader!./File';
import Default from './Default';
import DefaultSource from '!raw-loader!./Default';
import ColorDemo from './ColorDemo';
import ColorDemoSource from '!raw-loader!./ColorDemo';
import Inline from './Inline';
import InlineSource from '!raw-loader!./Inline';
import Without from './Without';
import WithoutSource from '!raw-loader!./Without';
import CustomizingDemo from './CustomizingDemo';
import CustomizingDemoSource from '!raw-loader!./CustomizingDemo';
import Range from './Range';
import RangeSource from '!raw-loader!./Range';
import Floating from './Floating';
import FloatingSource from '!raw-loader!./Floating';
import TextareasDemo from './TextareasDemo';
import TextareasDemoSource from '!raw-loader!./TextareasDemo';
import Rendering from './Rendering';
import RenderingSource from '!raw-loader!./Rendering';
import Groups from './Groups';
import GroupsSource from '!raw-loader!./Groups';
import Grid from './Grid';
import GridSource from '!raw-loader!./Grid';
import FormGrid from './FormGrid';
import FormGridSource from '!raw-loader!./FormGrid';
import Horizontal from './Horizontal';
import HorizontalSource from '!raw-loader!./Horizontal';
import HorizontalForm from './HorizontalForm';
import HorizontalFormSource from '!raw-loader!./HorizontalForm';
import Column from './Column';
import ColumnSource from '!raw-loader!./Column';
import Auto from './Auto';
import AutoSource from '!raw-loader!./Auto';
import AutoSizing from './AutoSizing';
import AutoSizingSource from '!raw-loader!./AutoSizing';
import Help from './Help';
import HelpSource from '!raw-loader!./Help';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import DisabledForms from './DisabledForms';
import DisabledFormsSource from '!raw-loader!./DisabledForms';
import ValidationDemo from './ValidationDemo';
import ValidationDemoSource from '!raw-loader!./ValidationDemo';
import Libraries from './Libraries';
import LibrariesSource from '!raw-loader!./Libraries';
import Tooltips from './Tooltips';
import TooltipsSource from '!raw-loader!./Tooltips';
import Input from './Input';
import InputSource from '!raw-loader!./Input';
import Switches from './Switches';
import SwitchesSource from '!raw-loader!./Switches';

const Forms = () => {
  return (
    <>
      <AppComponentHeader
        title='Forms'
        description=''
        refUrl='https://react-bootstrap.github.io/components/forms/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Forms Demo'
            component={FormsDemo}
            source={FormsDemoSource}
            noScrollbar
            description='The <FormControl> component renders a form control with Bootstrap styling.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Form Controls'
            component={FormControls}
            source={FormControlsSource}
            noScrollbar
            description='For textual form controls—like inputs and textareas—use the FormControl component. FormControl adds some additional styles for general appearance, focus state, sizing, and more.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Sizing'
            component={Sizing}
            source={SizingSource}
            noScrollbar
            description='Use size on <FormControl> and <FormLabel> to change the size of inputs and labels respectively.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Readonly plain text'
            component={ReadonlyPlain}
            source={ReadonlyPlainSource}
            noScrollbar
            description='If you want to have readonly elements in your form styled as plain text, use the plaintext prop on FormControls to remove the default form field styling and preserve the correct margin and padding.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorDemo}
            source={ColorDemoSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Readonly'
            component={Readonly}
            source={ReadonlySource}
            noScrollbar
            description='Add the readOnly prop on an input to prevent modification of the inputs value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor. '
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Inline'
            component={Inline}
            source={InlineSource}
            noScrollbar
            description='Group checkboxes or radios on the same horizontal row by adding the inline prop.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Customizing'
            component={CustomizingDemo}
            source={CustomizingDemoSource}
            noScrollbar
            description='When you need tighter control, or want to customize how the FormCheck component renders, it may better to use its constituent parts directly.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Range'
            component={Range}
            source={RangeSource}
            noScrollbar
            description='Create custom <input type="range"> controls with<FormRange>. The track (the background) and thumb (the value) are both styled to appear the same across browsers.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Without labels'
            component={Without}
            source={WithoutSource}
            noScrollbar
            description='When you render a FormCheck without a label (no children) some additional styling is applied to keep the inputs from collapsing. Remember to add an aria-label when omitting labels!'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Default'
            component={Default}
            source={DefaultSource}
            noScrollbar
            description='By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with FormCheck.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Floating labels'
            component={Floating}
            source={FloatingSource}
            noScrollbar
            description='Wrap a <Form.Control> element in <FloatingLabel> to enable floating labels with Bootstrap’s textual form fields.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Textareas'
            component={TextareasDemo}
            source={TextareasDemoSource}
            noScrollbar
            description='By default, <textarea>s will be the same height as <input>s. To set a custom height on your <textarea>, do not use the rows attribute.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Form groups'
            component={Groups}
            source={GroupsSource}
            noScrollbar
            description='You also add the controlId prop to accessibly wire the nested label and input together via the id.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Form grid'
            component={Grid}
            source={GridSource}
            noScrollbar
            description='You also add the controlId prop to accessibly wire the nested label and input together via the id.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Column sizing'
            component={Column}
            source={ColumnSource}
            noScrollbar
            description='As shown in the previous examples, our grid system allows you to place any number of <Col>s within a <Row>.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='File input'
            component={File}
            source={FileSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Form Grid'
            component={FormGrid}
            source={FormGridSource}
            noScrollbar
            description='More complex layouts can also be created with the grid system.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Horizontal form label sizing'
            component={HorizontalForm}
            source={HorizontalFormSource}
            noScrollbar
            description='You can size the <FormLabel> using the column prop as shown.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Customizing rendering'
            component={Rendering}
            source={RenderingSource}
            noScrollbar
            description='If you need greater control over the rendering, use the <FormFloating> component to wrap your input and label.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Auto'
            component={Auto}
            source={AutoSource}
            noScrollbar
            description='The example below uses a flexbox utility to vertically center the contents and changes <Col> to <Col xs="auto"> so that your columns only take up as much space as needed. Put another way, the column sizes itself based on on the contents.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Auto Sizing'
            component={AutoSizing}
            source={AutoSizingSource}
            noScrollbar
            description='You can then remix that once again with size-specific column classes.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Help text'
            component={Help}
            source={HelpSource}
            noScrollbar
            description='Help text below inputs can be styled with <Form.Text>. '
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Disabled'
            component={Disabled}
            source={DisabledSource}
            noScrollbar
            description='Add the disabled boolean attribute on an input to prevent user interactions and make it appear lighter.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Horizontal form'
            component={Horizontal}
            source={HorizontalSource}
            noScrollbar
            description=''
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Disabled Forms'
            component={DisabledForms}
            source={DisabledFormsSource}
            noScrollbar
            description='Add the disabled attribute to a <fieldset> to disable all the controls within.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Validation'
            component={ValidationDemo}
            source={ValidationDemoSource}
            noScrollbar
            description='Provide valuable, actionable feedback to your users with form validation feedback.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Form libraries and server-rendered styles'
            component={Libraries}
            source={LibrariesSource}
            noScrollbar
            description='Its often beneficial (especially in React) to handle form validation via a library like Formik, or react-formal.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Input'
            component={Input}
            source={InputSource}
            noScrollbar
            description='To properly show rounded corners in an <InputGroup> with validation, the <InputGroup> requires the hasValidation prop.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Switches'
            component={Switches}
            source={SwitchesSource}
            noScrollbar
            description='To properly show rounded corners in an <InputGroup> with validation, the <InputGroup> requires the hasValidation prop.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Tooltips'
            component={Tooltips}
            source={TooltipsSource}
            noScrollbar
            description='Provide valuable, actionable feedback to your users with form validation feedback.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Forms;
