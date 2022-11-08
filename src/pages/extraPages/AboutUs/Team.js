import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IntlMessages from '@crema/utility/IntlMessages';
import {teamData} from '@crema/services/db/extraPages/aboutUs';
import {Card} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Team = () => {
  return (
    <Card className={styles.teamCard}>
      <div className={styles.teamCardBody}>
        <h2>
          <IntlMessages id='extra.team' />
        </h2>

        <div className={styles.teamSliderView}>
          <Slider {...settings}>
            {teamData.map((member) => {
              return (
                <div
                  className={clsx(styles.teamSliderInfo, 'text-center')}
                  key={member.id}>
                  <div className={clsx(styles.teamSliderThumb, 'w-100')}>
                    <img src={member.image} alt='about us' title='aboutUs' />
                  </div>
                  <h5>{member.name}</h5>
                  <p className='mb-0'>{member.position}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </Card>
  );
};

export default Team;
