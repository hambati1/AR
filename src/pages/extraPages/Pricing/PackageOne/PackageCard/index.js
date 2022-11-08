import React from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import {Check2, HeartFill} from 'react-bootstrap-icons';
import styles from './index.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const PackageCard = ({pricing}) => {
  return (
    <div className={clsx(styles.pricingWrapper, 'position-relative')}>
      <span
        className={styles.tag}
        style={{
          backgroundColor: pricing.tagColor,
          color: 'white',
        }}>
        {pricing.tag}
      </span>
      <div
        className={clsx(
          styles.pricingOneCard,
          'position-relative overflow-hidden',
        )}>
        <div className={clsx(styles.pricingOneCardHeader, 'position-relative')}>
          <h3
            className={clsx(
              styles.pricingOneCardHeaderTitle,
              'position-relative',
            )}>
            {pricing.title}
          </h3>
          <h4
            className={clsx(
              styles.pricingOneCardHeaderSubtitle,
              'position-relative',
            )}>
            <span>${pricing.price}</span>
            /month
          </h4>
          {pricing.popular ? (
            <div className={styles.popular}>
              <HeartFill size={30}/>
              <p style={{}}>{pricing.popular}</p>
            </div>
          ) : null}
        </div>
        <div className={styles.pricingOneBtnView}>
          <Button
            className={styles.pricingOneBtn}
            style={{borderColor: pricing.tagColor}}>
            Start Trial
          </Button>
        </div>
        <ListGroup
          className={clsx(styles.pricingOneCardList, 'position-relative')}>
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
    </div>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
