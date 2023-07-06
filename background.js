console.log('background script is running!');

chrome.contextMenus.create({
    id: "myContextMenu",
    title: "Learn This Word",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === 'myContextMenu'){
        console.log(info.selectionText);
    }
});