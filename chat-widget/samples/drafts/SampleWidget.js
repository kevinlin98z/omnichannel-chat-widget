// import * as React from "react";

// // import { BroadcastService } from "../../../lib/esm/index.js";
// // import LiveChatWidget from "../../../lib/esm/components/livechatwidget/LiveChatWidget.js";
// import { LiveChatWidget } from "@microsoft/omnichannel-chat-widget";
// import { OmnichannelChatSDK } from "@microsoft/omnichannel-chat-sdk";
// import ReactDOM from "react-dom";
// // import { getCustomizationJson } from "./getCustomizationJson";
// // import { getUnreadMessageCount, registerVisibilityListener } from "./getUnreadMessageCount";
// // import { memoryDataStore } from "./Common/MemoryDataStore";
// /* eslint @typescript-eslint/no-explicit-any: "off" */

// // Below version numbers will help us to troubleshoot issues with specific package
// import { version as chatSdkVersion } from "@microsoft/omnichannel-chat-sdk/package.json";
// import { version as chatWidgetVersion } from "@microsoft/omnichannel-chat-widget/package.json";
// import { version as chatComponentVersion } from "@microsoft/omnichannel-chat-components/package.json";

// // let liveChatWidgetProps;

// const main = async () => {

//     // const queryString = window.location.search;
//     // const urlParams = new URLSearchParams(queryString);
//     // const orgId = urlParams.get("data-org-id");
//     // const orgUrl = urlParams.get("data-org-url");
//     // const appId = urlParams.get("data-app-id");

//     // const script = document.getElementById("oc-lcw-script");
//     // const omnichannelConfig = {
//     //     orgId: orgId ?? script?.getAttribute("data-org-id"),
//     //     orgUrl: orgUrl ?? script?.getAttribute("data-org-url"),
//     //     widgetId: appId ?? script?.getAttribute("data-app-id")
//     // };

//     const omnichannelConfig = {
//         orgId: "00000000-0000-0000-0000-000000000000", // dummy config
//         orgUrl: "https://www.org-url.com", // dummy config
//         widgetId: "00000000-0000-0000-0000-000000000000" // dummy config
//     };
//     const chatSDK = new OmnichannelChatSDK(omnichannelConfig);
//     await chatSDK.initialize();
//     const chatConfig = await chatSDK.getLiveChatConfig();
//     const liveChatWidgetProps = {
//         styleProps: {
//             generalStyles: {
//                 width: "700px",
//                 height: "800px"
//             }
//         },
//         headerProps: {
//             controlProps: {
//                 hideMinimizeButton: true
//             }
//         },
//         chatSDK: chatSDK, // mandatory
//         chatConfig: chatConfig, // mandatory
//         telemetryConfig: {
//             chatWidgetVersion: chatWidgetVersion,
//             chatComponentVersion: chatComponentVersion,
//             OCChatSDKVersion: chatSdkVersion
//         }
//     };

//     console.log("ADAD liveChatWidgetProps new", liveChatWidgetProps);

//     ReactDOM.render(
//         <LiveChatWidget {...liveChatWidgetProps}/>,
//         document.getElementById("oc-lcw-container")
//     );

//     // memoryDataStore();
//     // await getUnreadMessageCount();
//     // await registerVisibilityListener();
//     // const switchConfig = (config) => {
//     //     liveChatWidgetProps = config;
//     //     liveChatWidgetProps = {
//     //         ...liveChatWidgetProps,
//     //         chatSDK: chatSDK, // mandatory
//     //         chatConfig: chatConfig, // mandatory
//     //         telemetryConfig: {
//     //             chatWidgetVersion: chatWidgetVersion,
//     //             chatComponentVersion: chatComponentVersion,
//     //             OCChatSDKVersion: chatSdkVersion
//     //         }
//     //     };

//     //     console.log("ADAD liveChatWidgetProps", liveChatWidgetProps);

//     //     ReactDOM.render(
//     //         <LiveChatWidget {...liveChatWidgetProps} />,
//     //         document.getElementById("oc-lcw-container")
//     //     );
//     // };
//     // const startProactiveChat = (notificationUIConfig, showPrechat, inNewWindow) => {
//     //     const startProactiveChatEvent = {
//     //         eventName: "StartProactiveChat",
//     //         payload: {
//     //             bodyTitle: (notificationUIConfig && notificationUIConfig.message) ? notificationUIConfig.message : "Hello Customer",
//     //             showPrechat: showPrechat,
//     //             inNewWindow: inNewWindow
//     //         }
//     //     };
//     //     BroadcastService.postMessage(startProactiveChatEvent);
//     // };

//     // window["switchConfig"] = switchConfig;
//     // window["startProactiveChat"] = startProactiveChat;
//     // switchConfig(await getCustomizationJson());
// };

// main();

console.log("ADAD HI");
