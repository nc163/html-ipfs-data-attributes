import type { CID } from 'multiformats'

import HTMLIPFSElement from './HTMLIPFSElement';

//
export default class HTMLIPFSImageElement extends HTMLIPFSElement {

  constructor() {
    super(); 
  }

  // cid が設定されたら呼ばれる
  cidAttributeChangedCallback(cid: CID) {
    console.log("call!!!")
  }
}