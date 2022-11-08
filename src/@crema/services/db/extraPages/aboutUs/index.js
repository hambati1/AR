import React from 'react';
import { AiOutlineSearch, AiOutlineEdit, AiOutlineCamera, AiFillSignal, AiFillDatabase, AiOutlineLineChart } from 'react-icons/ai';
import { BiNotepad } from 'react-icons/bi'
import { MdFolderShared } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import IntlMessages from '../../../../utility/IntlMessages';

export const aboutUsData = [
  {
    alias: 'branding',
    title: <IntlMessages id='extra.branding' />,
    avatarColor: '#006d75',
    icon: <AiFillSignal color='#db7100' />,
    content: <IntlMessages id='extra.brandingContent' />,
  },
  {
    alias: 'photography',
    title: <IntlMessages id='extra.oversightreview' />,
    avatarColor: '#f5222d',
    icon: <BiNotepad color='#db7100' />,
    content: <IntlMessages id='extra.oversightreviewContent' />,
  },
  {
    alias: 'seo',
    title: <IntlMessages id='extra.fieldmanagement' />,
    avatarColor: '#1890ff',
    icon: <AiFillDatabase color='#db7100' />,
    content: <IntlMessages id='extra.fieldmanagementContent' />,
  },
  {
    alias: 'nonCitizenDetails',
    title: <IntlMessages id='extra.noncitizendetails' />,
    avatarColor: '#1890ff',
    icon: <MdFolderShared color='#db7100' />,
    content: <IntlMessages id='extra.noncitizendetailsContent' />,
  },
  {
    alias: 'PredicitveAnalytics',
    title: <IntlMessages id='extra.predictiveanalytics' />,
    avatarColor: '#1890ff',
    icon: <AiOutlineLineChart color='#db7100' />,
    content: <IntlMessages id='extra.predictiveanalyticsContent' />,
  },
  {
    alias: 'geoDetect',
    title: <IntlMessages id='extra.geodata' />,
    avatarColor: '#1890ff',
    icon: <HiLocationMarker color='#db7100' />,
    content: <IntlMessages id='extra.geodataContent' />,
  },
  {
    alias: 'selfServiceBI',
    title: <IntlMessages id='extra.selfservicebi' />,
    avatarColor: '#1890ff',
    icon: <BiNotepad color='#db7100' />,
    content: <IntlMessages id='extra.selfservicebiContent' />,
  },
  {
    alias: 'loremipsum',
    title: <IntlMessages id='extra.loremspum' />,
    avatarColor: '#1890ff',
    icon: <AiFillSignal color='#db7100' />,
    content: <IntlMessages id='extra.loremspumContent' />,
  },

];

export const teamData = [
  {
    id: 444,
    name: 'Asantha Powel',
    position: 'CEO',
    image: '/assets/images/teamImages/User1.png',
  },
  {
    id: 111,
    name: 'Johna Taylor',
    position: 'CTO',
    image: '/assets/images/teamImages/User4.png',
  },
  {
    id: 222,
    name: 'Nick Campbell',
    position: 'General Manager',
    image: '/assets/images/teamImages/User3.png',
  },
  {
    id: 333,
    name: 'Johna Taylor',
    position: 'CFO',
    image: '/assets/images/teamImages/User5.png',
  },
  {
    id: 555,
    name: 'Ricardo Johnson',
    position: 'Director',
    image: '/assets/images/teamImages/User2.png',
  },
  {
    id: 666,
    name: 'Johnson Lopez',
    position: 'Technical Advisor',
    image: '/assets/images/teamImages/User6.png',
  },
];
