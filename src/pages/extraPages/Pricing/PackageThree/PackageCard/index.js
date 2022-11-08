import React from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroup, Card} from 'react-bootstrap';
import {Check2} from 'react-bootstrap-icons';
import styles from './index.module.scss';
import clsx from 'clsx';

const PackageCard = ({pricing}) => {
  return (
    <Card
      className={clsx(
        styles.pricingThreeCard,
        'overflow-hidden position-relative',
      )}>
      <div className={styles.pricingThreeContent}>
        <h5 className={styles.pricingThreeTitle}>{pricing.title}</h5>
        <ListGroup
          className={clsx(styles.pricingThreeCardList, 'position-relative')}>
          {pricing.pricingList.map((data, index) => (
            <ListGroup.Item
              key={index}
              className={clsx(styles.listItem, 'd-flex align-items-center')}>
              <Check2 className={styles.icon} />
              <p>{data.title}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className={styles.pricingThreeCardPricingValue}>
          <h3>
            <span className={styles.price}>${pricing.price}</span>
            /month
          </h3>
        </div>
      </div>
      <div className={styles.pricingThreeBtnView}>
        <Button
          className={styles.pricingThreeBtn}
          style={{backgroundColor: pricing.priceColor}}>
          Get started
        </Button>
      </div>
    </Card>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
