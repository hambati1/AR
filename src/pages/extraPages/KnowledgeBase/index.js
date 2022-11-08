import React, {useState} from 'react';
import {salesData} from '@crema/services/db/extraPages/portFolio/sales';
import {installationData} from '@crema/services/db/extraPages/portFolio/installation';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import Sales from './Sales';
import Installation from './Installation';
import {InputGroup, FormControl} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';
import styles from './index.module.scss';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';

const KnowledgeBase = () => {
  const {messages} = useIntl();

  const [filterText, setFilterText] = useState('');

  const saleQueries =
    filterText !== ''
      ? salesData.filter((data) => data.ques.includes(filterText))
      : salesData;

  const installationQueries =
    filterText !== ''
      ? installationData.filter((data) => data.ques.includes(filterText))
      : installationData;

  return (
    <div className='w-100'>
      <AppPageMetadata title='Knowledge Base' />
      <AppAnimateGroup type='bottom' animateStyle={{height: 'auto'}}>
        <div className={styles.knowBaseHeader} key='a'>
          <h2>
            <IntlMessages id='knowledge.howHelp' />
          </h2>

          <InputGroup>
            <FormControl
              className={styles.searchInput}
              placeholder={messages['knowledge.AppSkeleton']}
              value={filterText}
              onChange={(event) => setFilterText(event.target.value)}
            />
            <InputGroup.Text id='basic-addon2' className={styles.searchBtn}>
              <Search />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </AppAnimateGroup>
      <div className={styles.knowDivider} />

      <Sales saleQueries={saleQueries} />

      <Installation installationQueries={installationQueries} />
    </div>
  );
};

export default KnowledgeBase;
