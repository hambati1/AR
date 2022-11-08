import React from 'react';
import {
  AiOutlineDollar,
  AiOutlineFileText,
  AiOutlineFrown,
  AiOutlineSetting,
  AiOutlineSync,
} from 'react-icons/ai';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import SideBarItem from './SideBarItem';
import {Card, ListGroup} from 'react-bootstrap';
import styles from '../index.module.scss';

const faqFolderList = [
  {id: 101, name: <IntlMessages id='faq.general' />, icon: <AiOutlineSync />},
  {
    id: 102,
    name: <IntlMessages id='knowledge.installation' />,
    icon: <AiOutlineSetting />,
  },
  {id: 103, name: <IntlMessages id='faq.pricing' />, icon: <AiOutlineDollar />},
  {
    id: 104,
    name: <IntlMessages id='faq.licenseTypes' />,
    icon: <AiOutlineFileText />,
  },
  {
    id: 105,
    name: <IntlMessages id='faq.support' />,
    icon: <AiOutlineFrown />,
  },
];

const FaqSideBar = ({onGetFaqData, selectionId}) => {
  return (
    <Card className={styles.faqSidebarCard}>
      <div className={styles.cardBody}>
        <h3>
          <IntlMessages id='faq.queries' />
        </h3>
        <ListGroup
          aria-label='main mailbox folders'
          className='p-0 border-0'>
          {faqFolderList.map((item) => {
            return (
              <SideBarItem
                key={item.id}
                item={item}
                selectionId={selectionId}
                onGetFaqData={onGetFaqData}
              />
            );
          })}
        </ListGroup>
      </div>
    </Card>
  );
};

export default FaqSideBar;

FaqSideBar.propTypes = {
  selectionId: PropTypes.number,
  onGetFaqData: PropTypes.func,
};
