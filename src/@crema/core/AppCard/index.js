import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './index.module.scss';
import Card from 'react-bootstrap/Card';

const AppCard = ({
  title,
  footer,
  children,
  className,
  titleClass,
  actionClass,
  footerClass,
  cardBodyClass,
  cardHeaderClass,
  action,
  heightFull,
  cardImg,
  ...rest
}) => {
  return (
    <Card
      className={clsx(
        styles.card,
        heightFull ? styles.heightFull : '',
        className,
      )}
      title={title}
      {...rest}>
      {cardImg ? <Card.Img variant='top' src={cardImg} /> : null}
      {title || action ? (
        <Card.Header className={clsx(styles.cardHeader, cardHeaderClass)}>
          {typeof title === 'object' ? (
            title
          ) : (
            <Card.Title
              className={clsx(
                styles.cardTitle,
                'mb-0 text-truncate',
                titleClass,
              )}>
              {title}
            </Card.Title>
          )}
          {typeof action === 'object' ? (
            action
          ) : (
            <a
              className={clsx(
                styles.action,
                'text-decoration-none ms-1',
                actionClass,
              )}
              href='#'>
              {action}
            </a>
          )}
        </Card.Header>
      ) : null}
      <Card.Body className={clsx(styles.cardBody, cardBodyClass)}>
        {children}
      </Card.Body>
      {footer ? (
        <Card.Footer className={clsx(styles.cardFooter, footerClass)}>
          {footer}
        </Card.Footer>
      ) : null}
    </Card>
  );
};

export default AppCard;

AppCard.propTypes = {
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  className: PropTypes.string,
  cardImg: PropTypes.string,
  titleClass: PropTypes.string,
  actionClass: PropTypes.string,
  footerClass: PropTypes.string,
  cardBodyClass: PropTypes.string,
  cardHeaderClass: PropTypes.string,
  heightFull: PropTypes.bool,
};

AppCard.defaultProps = {};
