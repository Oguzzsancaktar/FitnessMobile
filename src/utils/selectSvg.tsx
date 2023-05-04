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

const selectSvg = (name: ISvgNames) => {
  switch (name) {
    case 'search-list':
      return searchListSvg;
    case 'chat':
      return chatSvg;
    case 'home':
      return homeSvg;
    case 'health':
      return healthSvg;
    case 'profile':
      return profileSvg;
    case 'bottle':
      return bottleSvg;
    case 'running':
      return runningSvg;
    case 'football':
      return footballSvg;
    case 'fitness':
      return fitnessSvg;
    case 'basketball':
      return basketballSvg;
    case 'cycling':
      return cyclingSvg;
    case 'yoga':
      return yogaSvg;
    case 'verified':
      return verifiedSvg;
    case 'star':
      return starSvg;
    case 'pin':
      return pinSvg;
    case 'logo':
      return logoSvg;
    default:
      return searchListSvg;
  }
};

export default selectSvg;
