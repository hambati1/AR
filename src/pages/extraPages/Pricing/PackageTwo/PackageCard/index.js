import React from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroup, Card} from 'react-bootstrap';
import {Check2} from 'react-bootstrap-icons';
import styles from './index.module.scss';
import clsx from 'clsx';

const PackageCard = ({pricing}) => {
  return (
    <Card className={styles.pricingTwoCard}>
      <div className={clsx(styles.pricingTwoCardHeader, 'text-center')}>
        <h5 className={clsx(styles.pricingTwoCardHeaderTitle, 'mb-3')}>
          {pricing.title}
        </h5>
        <p>{pricing.description}</p>
      </div>
      <div className={clsx(styles.pricingTwoCardValue, 'text-center')}>
        <div className={clsx(styles.pricingTwoCardPricingValue, 'mb-3')}>
          <h3>
            <span className={styles.dollar}>$</span>
            <span
              className={styles.price}
              style={{
                color: pricing.priceColor,
              }}>
              {pricing.price}
            </span>
            /month
          </h3>
        </div>
        <p>{pricing.priceDescription}</p>
      </div>
      <div className={styles.pricingTwoCardContent}>
        <ListGroup
          className={clsx(styles.pricingTwoCardList, 'position-relative')}>
          {pricing.pricingList.map((data, index) => (
            <ListGroup.Item
              key={index}
              className={clsx(styles.listItem, 'd-flex align-items-center')}>
              <Check2 className={styles.icon} />
              <p>{data.title}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className={clsx(styles.pricingTwoCardBtnView, 'text-center')}>
          <Button
            className={styles.pricingTwoCardBtn}
            style={{
              backgroundColor: pricing.priceColor,
              color: 'white',
              borderColor: pricing.priceColor,
            }}>
            Get started
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
