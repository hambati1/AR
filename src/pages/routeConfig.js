import { FaRegCalendarAlt, FaRegHospital } from 'react-icons/fa';
import { FiMail, FiMap, FiUsers } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineChartSquareBar } from 'react-icons/hi';
import {
  RiBarChart2Line,
  RiCustomerService2Line,
  RiDashboardLine,
  RiShieldUserLine,
  RiTodoLine,
  RiFolderUserFill
} from 'react-icons/ri';
import { BiCartAlt, BiDollar, BiErrorAlt, BiBookReader, BiNotepad } from 'react-icons/bi';
import { CgComponents } from 'react-icons/cg';
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,
  BsQuestionDiamond,
} from 'react-icons/bs';
import { DiHtml5Multimedia } from 'react-icons/di';
import {
  MdInvertColors,
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
  MdTimeline,
  MdFolderShared
} from 'react-icons/md';
import { CgAttachment, CgFeed } from 'react-icons/cg';
import { AiOutlineUnorderedList, AiFillHome, AiFillSignal, AiFillDatabase, AiOutlineLineChart,AiOutlineImport,AiOutlineExport,
  AiFillDollarCircle,AiFillAccountBook,AiOutlineTransaction,AiOutlineFolderView } from 'react-icons/ai';
import React from 'react';

const routesConfig = [
  {
    id: 'app',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'crypto',
        title: 'File Import',
        messageId: 'sidebar.app.dashboard.crypto',
        type: 'item',
        icon: <AiOutlineImport />,
        url: '/import',
      },
      {
        id: 'crm',
        title: 'File Export',
        messageId: 'sidebar.app.dashboard.crm',
        type: 'item',
        icon: <AiOutlineExport />,
        url: '/extra-pages/portfolio',
      },
      {
        id: 'analytics',
        title: 'Batch Payment Entry',
        messageId: 'sidebar.app.dashboard.analytics',
        type: 'item',
        icon: <AiFillDollarCircle />,
        url: '/extra-pages/error-pages/error-404',
      },
      {
        id: 'health-care',
        title: 'GL Account Maintenence',
        messageId: 'sidebar.healthCare',
        type: 'item',
        icon: <AiFillAccountBook />,
        url: '/extra-pages/error-pages/error-403',
      },
      {
        id: 'eCommerce',
        title: 'Tax Viewer',
        messageId: 'sidebar.app.dashboard.eCommerce',
        type: 'item',
        icon: <AiOutlineFolderView />,
        url: '/extra-pages/error-pages/error-500',
      },
      {
        id: 'academy',
        title: 'Credit Card Transaction Worklist',
        messageId: 'sidebar.app.dashboard.academy',
        type: 'item',
        icon: <AiOutlineTransaction />,
        url: '/dashboards/academy',
      },
      {
        id: 'academy',
        title: 'Archive Balances for Aging ',
        messageId: 'sidebar.app.dashboard.archive',
        type: 'item',
        icon: <AiOutlineLineChart />,
        url: '/extra-pages/error-pages/error-402',
      }
    ],
  },

];
export default routesConfig;
