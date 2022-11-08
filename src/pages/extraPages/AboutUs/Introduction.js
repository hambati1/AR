import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import { Button, Card } from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';
import { Modal } from 'react-bootstrap';
import PropTypes from "prop-types";
import './Popupvideoresponse.scss';
import { BsPlayCircle } from 'react-icons/bs'




const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="765"
      height="482"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header className={styles.closeBtn} closeButton>
        {/* <Modal.Title id='contained-modal-title-vcenter'>
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <YoutubeEmbed embedId="G5I5_fnL3Tc" />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const Introduction = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card className={clsx(styles.cardBody, 'overflow-hidden')}>
      <div className='d-flex flex-column flex-md-row'>
        <div className={styles.aboutImgContent}>
          <h1>
            <IntlMessages id='extra.aboutUs' />
          </h1>
          <p>
            <IntlMessages id='extra.aboutContent' />
          </p>
          <div
            className={clsx(
              styles.aboutBtnView,
              'd-flex align-items-center flex-wrap',
            )}>
            <Button type='primary' className={styles.btn} onClick={() => setModalShow(true)}>
              <BsPlayCircle />
              <IntlMessages id='Watch Intro Video' />
            </Button>
            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Introduction;
