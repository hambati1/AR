import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {Accordion} from 'react-bootstrap';

function callback(key) {
  console.log(key);
}

const FaqList = ({faqList}) => {
  console.log(faqList[0].id);

  return (
    <div className='w-100 h-100'>
      <Accordion defaultActiveKey={faqList[0].id} onChange={callback}>
        {faqList.map((item) => {
          return (
            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header className={styles.accHeader}>
                {item.ques}
              </Accordion.Header>
              <Accordion.Body>{item.ans}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqList;

FaqList.propTypes = {
  faqList: PropTypes.array.isRequired,
};
