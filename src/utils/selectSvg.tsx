import React from 'react';

import chevronBottomSvg from '../assets/icons/chevron-bottom-icon.svg';
import chevronRightSvg from '../assets/icons/chevron-right-icon.svg';
import chevronLeftSvg from '../assets/icons/chevron-left-icon.svg';

import threeDotSvg from '../assets/icons/three-dot-icon.svg';
import attachSvg from '../assets/icons/attach-icon.svg';
import sendSvg from '../assets/icons/send-icon.svg';

import requestsSvg from '../assets/icons/requests-icon.svg';
import calendarSvg from '../assets/icons/calendar-icon.svg';
import gridViewSvg from '../assets/icons/grid-view-icon.svg';
import listViewSvg from '../assets/icons/list-view-icon.svg';
import heartSvg from '../assets/icons/heart-icon.svg';
import closeSvg from '../assets/icons/close-icon.svg';
import searchSvg from '../assets/icons/search-icon.svg';
import arrowUpSvg from '../assets/icons/arrow-up-icon.svg';
import timerSvg from '../assets/icons/timer-icon.svg';
import burnSvg from '../assets/icons/burn-icon.svg';
import watchSvg from '../assets/icons/watch-icon.svg';
import searchListSvg from '../assets/icons/search-list-icon.svg';
import chatSvg from '../assets/icons/chat-icon.svg';
import homeSvg from '../assets/icons/home-icon.svg';
import healthSvg from '../assets/icons/health-icon.svg';
import profileSvg from '../assets/icons/profile-icon.svg';
import bottleSvg from '../assets/icons/bottle-icon.svg';
import runningSvg from '../assets/icons/running-icon.svg';
import footballSvg from '../assets/icons/football-icon.svg';
import fitnessSvg from '../assets/icons/fitness-icon.svg';
import basketballSvg from '../assets/icons/basketball-icon.svg';
import cyclingSvg from '../assets/icons/cycling-icon.svg';
import yogaSvg from '../assets/icons/yoga-icon.svg';
import verifiedSvg from '../assets/icons/verified-icon.svg';
import starSvg from '../assets/icons/star-icon.svg';
import pinSvg from '../assets/icons/pin-icon.svg';
import logoSvg from '../assets/icons/logo-icon.svg';

export type ISvgNames =
  | 'send'
  | 'attach'
  | 'three-dot'
  | 'chevron-left'
  | 'chevron-right'
  | 'requests'
  | 'calendar'
  | 'grid-view'
  | 'list-view'
  | 'heart'
  | 'close'
  | 'search'
  | 'chevron-bottom'
  | 'arrow-up'
  | 'timer'
  | 'burn'
  | 'watch'
  | 'search-list'
  | 'chat'
  | 'home'
  | 'health'
  | 'profile'
  | 'bottle'
  | 'running'
  | 'football'
  | 'fitness'
  | 'basketball'
  | 'cycling'
  | 'yoga'
  | 'verified'
  | 'star'
  | 'pin'
  | 'logo';

const selectSvg = (name: ISvgNames, options?: any) => {
  let icon = burnSvg;

  switch (name) {
    case 'send':
      icon = sendSvg;
      break;
    case 'attach':
      icon = attachSvg;
      break;
    case 'three-dot':
      icon = threeDotSvg;
      break;
    case 'chevron-left':
      icon = chevronLeftSvg;
      break;
    case 'chevron-right':
      icon = chevronRightSvg;
      break;
    case 'requests':
      icon = requestsSvg;
      break;
    case 'calendar':
      icon = calendarSvg;
      break;
    case 'grid-view':
      icon = gridViewSvg;
      break;
    case 'list-view':
      icon = listViewSvg;
      break;
    case 'heart':
      icon = heartSvg;
      break;
    case 'close':
      icon = closeSvg;
      break;
    case 'search':
      icon = searchSvg;
      break;
    case 'chevron-bottom':
      icon = chevronBottomSvg;
      break;
    case 'arrow-up':
      icon = arrowUpSvg;
      break;
    case 'timer':
      icon = timerSvg;
      break;
    case 'burn':
      icon = burnSvg;
      break;
    case 'watch':
      icon = watchSvg;
      break;
    case 'search-list':
      icon = searchListSvg;
      break;
    case 'chat':
      icon = chatSvg;
      break;
    case 'home':
      icon = homeSvg;
      break;
    case 'health':
      icon = healthSvg;
      break;
    case 'profile':
      icon = profileSvg;
      break;
    case 'bottle':
      icon = bottleSvg;
      break;
    case 'running':
      icon = runningSvg;
      break;
    case 'football':
      icon = footballSvg;
      break;
    case 'fitness':
      icon = fitnessSvg;
      break;
    case 'basketball':
      icon = basketballSvg;
      break;
    case 'cycling':
      icon = cyclingSvg;
      break;
    case 'yoga':
      icon = yogaSvg;
      break;
    case 'verified':
      icon = verifiedSvg;
      break;
    case 'star':
      icon = starSvg;
      break;
    case 'pin':
      icon = pinSvg;
      break;
    case 'logo':
      icon = logoSvg;
      break;
    default:
      icon = searchListSvg;
      break;
  }

  return React.createElement(icon, options);
};

export default selectSvg;
