// listens for clicks on the extension icon button
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, 'toggle')
  console.log('message sent')
})

// returns email
chrome.identity.getProfileUserInfo((info) => console.log(info))
