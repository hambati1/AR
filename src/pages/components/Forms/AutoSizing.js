import React from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row} from 'react-bootstrap';
import styles from './index.module.scss';

const AutoSizing = () => {
  return (
    <div>
      <Form>
        <Row className='align-items-center'>
          <Col xs='auto'>
            <Form.Label htmlFor='inlineFormInput' visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className='mb-2'
              id='inlineFormInput'
              placeholder='Jane Doe'
            />
          </Col>
          <Col xs='auto'>
            <Form.Label htmlFor='inlineFormInputGroup' visuallyHidden>
              Username
            </Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Text className={styles.inputGroupText}>
                @
              </InputGroup.Text>
              <FormControl
                id='inlineFormInputGroup'
                placeholder='Username'
                className={styles.inputFormControl}
              />
            </InputGroup>
          </Col>
          <Col xs='auto'>
            <Form.Check
              type='checkbox'
              id='autoSizingCheck'
              className='mb-2'
              label='Remember me'
            />
          </Col>
          <Col xs='auto'>
            <Button type='submit' className='mb-2'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AutoSizing;
