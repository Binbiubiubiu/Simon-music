/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.less';
declare module '*.css';
declare module '*.scss';
declare module 'next-redux-saga';

interface Window {
  __NEXT_REDUX_STORE__: any;
}
