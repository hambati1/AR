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
import { AiOutlineUnorderedList, AiFillHome, AiFillSignal, AiFillDatabase, AiOutlineLineChart ,AiOutlineSearch,AiOutlineImport,AiOutlineExport,
  AiFillDollarCircle,AiFillAccountBook,AiOutlineTransaction,AiOutlineFolderView } from 'react-icons/ai';
import React from 'react';

const routesConfig = [
  {
    id: 'app',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      // {
      //   id: 'payments',
      //   title: 'Payments',
      //   messageId: 'sidebar.app.dashboard.payments',
      //   type: 'item',
      //   icon: <  MdOutlineDns/>,
      //   url: '/Search-Worklist/Payments',
        
      // },
      // {
      //   id: 'adjustments',
      //   title: 'Adjustments',
      //   messageId: 'sidebar.app.dashboard.adjustments',
      //   type: 'item',
      //   icon: <CgFeed/>,
      //   url: '/Search-Worklist/Adjustments',
      // },
      // {
      //   id: 'search',
      //   title: 'Search',
      //   messageId: 'sidebar.app.dashboard.Search',
      //   type: 'item',
      //   icon: < AiOutlineSearch />,
      //   url: '/menu-pages/Search',

      // },
      {
        id: 'crypto',
        title: 'File Import',
        messageId: 'sidebar.app.dashboard.fileImport',
        type: 'item',
        icon: <AiOutlineImport />,
        url: '/menu-pages/File-Import',
      },
      {
        id: 'crm',
        title: 'File Export',
        messageId: 'sidebar.app.dashboard.fileExport',
        type: 'item',
        icon: <AiOutlineExport />,
        url: '/menu-pages/File-Export',
      },

    
      {
        id: 'analytics',
        title: 'Batch Payment Entry',
        messageId: 'sidebar.app.dashboard.BatchPayment',
        type: 'item',
        icon: <AiFillDollarCircle />,
        url: '/menu-pages/Batch-Payment',
      },
      {
        id: 'health-care',
        title: 'GL Account Maintenence',
        messageId: 'sidebar.app.dashboard.GLAccount',
        type: 'item',
        icon: <AiFillAccountBook />,
        url: '/menu-pages/GLAccount',
      },
      {
        id: 'Tax Viewer',
        title: 'Tax Viewer',
        messageId: 'sidebar.app.dashboard.TaxViewer',
        type: 'item',
        icon: <AiOutlineFolderView />,
        url: '/menu-pages/Tax-viewer',
      },
      {
        id: 'academy',
        title: 'Credit Card Transaction Worklist',
        messageId: 'sidebar.app.dashboard.Creditcardtransactionworklist',
        type: 'item',
        icon: <AiOutlineTransaction />,
        url: '/menu-pages/Credit-Card-Transaction-Worklist',
      },
     
    ],
  },

];
export default routesConfig;
