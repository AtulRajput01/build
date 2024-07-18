import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilLockLocked,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Mangement',
    to: '/UserManagement',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Consumer Management',
  //   to: '/tables',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Assessment Management',
  //   to: '/Doc_verification',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Digital Signature',
  //   to: '/Animal_Weather',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Assignment and Workflow',
  //   to: '/Analytics_Reporting',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Reports and Analytics',
  //   to: '/Booking_Management',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Notifications and Alerts',
  //   to: '/Integration_Itinerary',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },

  // {
  //   component: CNavItem,
  //   name: 'Booking History & Reporting',
  //   to: '/Booking_history',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
]

export default _nav
