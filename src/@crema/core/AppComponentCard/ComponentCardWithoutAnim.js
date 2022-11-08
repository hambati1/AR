import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {highlightTheme} from './highlightTheme';
import AppScrollbar from '../AppScrollbar';
import styles from './index.module.scss';
import Expand from '../AppAnimate/Expand';
import AppCard from '../AppCard';
import {HiOutlineCode} from 'react-icons/hi';
import {Button} from 'react-bootstrap';

const ComponentCardWithoutAnim = ({
  title,
  description,
  className,
  maxHeight,
  component: Component,
  source,
}) => {
  const [viewSource, setToggleViewSource] = useState(false);
  return (
    <AppCard
      className={className}
      title={
        <div className='w-100'>
          <div>{title}</div>
          <div
            className={clsx(styles.compCardTitleDescription, 'text-truncate')}>
            {description}
          </div>
        </div>
      }
      extra={
        source ? (
          <Button
            aria-label='view code'
            shape='circle'
            onClick={() => setToggleViewSource(!viewSource)}>
            <HiOutlineCode className={styles.codeIcon} />
          </Button>
        ) : null
      }>
      <Expand open={viewSource}>
        {source ? (
          <AppScrollbar
            style={{
              borderRadius: 8,
              background: '#333333',
              height: 350,
              maxHeight: 400,
            }}>
            <Highlight
              {...defaultProps}
              code={source}
              language='jsx'
              theme={highlightTheme}>
              {({style, tokens, getLineProps, getTokenProps}) => (
                <pre
                  className={styles.preTag}
                  style={{...style, maxHeight: 500}}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                        <span key={i} {...getTokenProps({token, key})} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </AppScrollbar>
        ) : null}
      </Expand>
      <AppScrollbar
        style={{maxHeight: maxHeight}}
        className='position-relative'>
        <div
          className={clsx(
            styles.componentRoot,
            'd-flex align-items-center justify-content-center w-100 p-3',
          )}>
          <Component />
        </div>
      </AppScrollbar>
    </AppCard>
  );
};

export default ComponentCardWithoutAnim;

ComponentCardWithoutAnim.defaultProps = {
  description: '',
  maxHeight: 500,
};

ComponentCardWithoutAnim.propTypes = {
  component: PropTypes.any.isRequired,
  source: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.number,
};
