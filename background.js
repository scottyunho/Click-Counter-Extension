// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({counter: 0}, function() {
    console.log("Counter initialized at 0.");
  });
});

//chrome.browserAction.setIcon(ClickerIcon.png);



/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message="add one"){
    chrome.browserAction.getBadgeText({tabId:sender.id}, function(badgeText){//get the tab's badge text
         if(badgeText.length<1){
             badgeText="0";//set the text if its empty
         }
         chrome.browserAction.setBadgeText({tabId:tab.id,text:badgeText/1+1+""});//and add one.
    });
  }
});
*/