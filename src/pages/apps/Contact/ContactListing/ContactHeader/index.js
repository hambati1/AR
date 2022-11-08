import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import ViewSelectButtons from './ViewSelectButtons';
import AppsPagination from '@crema/core/AppsPagination';
import {FormControl, InputGroup} from 'react-bootstrap';
import {AiOutlineSearch} from 'react-icons/ai';
import styles from '../index.module.scss';

const ContactHeader = (props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    onChangePageView,
    onSelectContactsForDelete,
    page,
    onChange,
    pageView,
  } = props;

  const contactList = useSelector(({contactApp}) => contactApp.contactList);

  const totalContacts = useSelector(({contactApp}) => contactApp.totalContacts);

  const {messages} = useIntl();

  return (
    <>
      <div className={styles.contactContentHeader}>
        <CheckBox
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            setCheckedContacts={setCheckedContacts}
          />
        ) : null}

        <InputGroup className={styles.contactSearch}>
          <FormControl
            value={filterText}
            onChange={(event) => onSetFilterText(event.target.value)}
            placeholder={messages['common.searchHere']}
            aria-label='Username'
            className={styles.searchInput}
            aria-describedby='basic-addon1'
          />
          <InputGroup.Text id='basic-addon1' className={styles.searchBtn}>
            <AiOutlineSearch />
          </InputGroup.Text>
        </InputGroup>

        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </div>
      {contactList.length > 0 ? (
        <AppsPagination
          className={styles.contactHeaderPagination}
          count={totalContacts}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: '',
  page: 0,
};

ContactHeader.propTypes = {
  checkedContacts: PropTypes.array,
  setCheckedContacts: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
