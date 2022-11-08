import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {onUpdateContactLabel} from '../../../../../redux/actions/ContactApp';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {MdLabelOutline} from 'react-icons/md';
import {Dropdown} from "react-bootstrap";
import AppIconBtn from "@crema/core/AppIconBtn";
import styles from '../index.module.scss';
import clsx from "clsx";

const ContactCheckedActions = (props) => {
  const {checkedContacts, setCheckedContacts, onSelectContactsForDelete} =
    props;

  const dispatch = useDispatch();

  const {pathname} = useLocation();

  const [isLabelOpen, onOpenLabel] = useState(false);

  const onLabelOpen = () => {
    onOpenLabel(true);
  };

  const onLabelClose = () => {
    onOpenLabel(false);
  };

  const onSelectLabel = ({key}) => {
    const path = pathname.split('/');
    dispatch(onUpdateContactLabel(checkedContacts, key, path[path.length - 2]));
    setCheckedContacts([]);
    onLabelClose();
  };

  return (
    <span className={styles.contactCheckedAction}>
        <div className='mx-1'>
          <AppIconBtn
            smallBtn
            title={<IntlMessages id='common.delete'/>}
            onClick={() => onSelectContactsForDelete(checkedContacts)}
          >
            <AiOutlineDelete/>
          </AppIconBtn>
        </div>

        <div className='mx-1'>
          <Dropdown>
            <Dropdown.Toggle
              className={clsx(
                styles.dropdownToggleBtn,
                'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
              )} onClick={onLabelOpen} variant="success" id="dropdown-basic">
               <AppIconBtn
                 title={<IntlMessages id='common.label'/>}
               >
                 <MdLabelOutline/>
               </AppIconBtn>
            </Dropdown.Toggle>

            <Dropdown.Menu
              open={isLabelOpen}
              onClick={onSelectLabel}
              onClose={onLabelClose}>
              <Dropdown.Item value={311} key={311} href="#/action-1">
            <IntlMessages id='common.crema'/>
              </Dropdown.Item>
              <Dropdown.Item value={312} key={312} href="#/action-2">
            <IntlMessages id='common.personal'/>
              </Dropdown.Item>
              <Dropdown.Item value={313} key={313} href="#/action-3">
            <IntlMessages id='common.work'/>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </div>
    </span>
  );
};

export default ContactCheckedActions;

ContactCheckedActions.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
};
