import React from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroup, Card} from 'react-bootstrap';
import {Check2} from 'react-bootstrap-icons';
import styles from './index.module.scss';
import clsx from 'clsx';

const PackageCard = ({pricing}) => {
  return (
    <Card className={styles.pricingFourCard}>
      <div className={styles.pricingFourContent}>
        <div
          className={clsx(
            styles.pricingFourCardHeader,
            'd-flex justify-content-center',
          )}>
          <div
            className={clsx(
              styles.pricingFourCardPricingCircle,
              'd-flex justify-content-center align-items-center flex-column',
            )}
            style={{backgroundColor: pricing.priceColor}}>
            <h3>
              <span className={styles.price}>${pricing.price}</span>
              /month
            </h3>
            <h5>{pricing.title}</h5>
          </div>
        </div>
        <ListGroup className={styles.pricingFourCardList}>
          {pricing.pricingList.map((data, index) => (
            <ListGroup.Item
              key={index}
              className={clsx(styles.listItem, 'd-flex align-items-center')}>
              <Check2 className={styles.icon} />
              <p>{data.title}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className={styles.pricingFourBtnView}>
        <Button
          className={styles.pricingFourBtn}
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
