import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Badges from './Badges';
import BadgesSource from '!raw-loader!./Badges';
import Profile from './Profile';
import ProfileSource from '!raw-loader!./Profile';
import Contextual from './Contextual';
import ContextualSource from '!raw-loader!./Contextual';
import Pill from './Pill';
import PillSource from '!raw-loader!./Pill';

const Badge = () => {
  return (
    <>
      <AppComponentHeader
        title='Badges'
        description='Badges scale to match the size of the immediate parent element by using relative font sizing and em units.'
        refUrl='https://react-bootstrap.github.io/components/badge/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title=''
            component={Badges}
            source={BadgesSource}
            noScrollbar
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title=''
            component={Profile}
            source={ProfileSource}
            noScrollbar
            description='Badges can be used as part of links or buttons to provide a counter.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Contextual variations'
            component={Contextual}
            source={ContextualSource}
            noScrollbar
            description='Add any of the below mentioned modifier classes to change the appearance of a badge.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Pill'
            component={Pill}
            source={PillSource}
            noScrollbar
            description='badges Use the pill modifier class to make badges more rounded (with a larger border-radius). Useful if you miss the badges from v3.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Badge;
