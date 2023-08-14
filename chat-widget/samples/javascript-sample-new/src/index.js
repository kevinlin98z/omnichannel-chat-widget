// import React from 'react';
// import {render} from 'react-dom';

// class App extends React.Component {
//   render () {
//     return <p> Hello, World!</p>;
//   }
// }

// render(<App/>, document.getElementById('oc-lcw-container'));

import * as React from "react";

// import { BroadcastService } from "../../../lib/esm/index.js";
// import LiveChatWidget from "../../../lib/esm/components/livechatwidget/LiveChatWidget.js";
import { LiveChatWidget } from "@microsoft/omnichannel-chat-widget";
import { OmnichannelChatSDK } from "@microsoft/omnichannel-chat-sdk";
import ReactDOM from "react-dom";
// import { getCustomizationJson } from "./getCustomizationJson";
// import { getUnreadMessageCount, registerVisibilityListener } from "./getUnreadMessageCount";
// import { memoryDataStore } from "./Common/MemoryDataStore";
/* eslint @typescript-eslint/no-explicit-any: "off" */

// Below version numbers will help us to troubleshoot issues with specific package
import { version as chatSdkVersion } from "@microsoft/omnichannel-chat-sdk/package.json";
import { version as chatWidgetVersion } from "@microsoft/omnichannel-chat-widget/package.json";
import { version as chatComponentVersion } from "@microsoft/omnichannel-chat-components/package.json";

// let liveChatWidgetProps;

const main = async () => {

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const orgId = urlParams.get("data-org-id");
    // const orgUrl = urlParams.get("data-org-url");
    // const appId = urlParams.get("data-app-id");

    // const script = document.getElementById("oc-lcw-script");
    // const omnichannelConfig = {
    //     orgId: orgId ?? script?.getAttribute("data-org-id"),
    //     orgUrl: orgUrl ?? script?.getAttribute("data-org-url"),
    //     widgetId: appId ?? script?.getAttribute("data-app-id")
    // };

    const omnichannelConfig = {
        orgId: "27ff8a63-815a-49f6-b180-b248f806b867", // dummy config
        orgUrl: "https://unq27ff8a63815a49f6b180b248f806b-crm10.oc.crmlivetie.com", // dummy config
        widgetId: "0f0adb72-8c34-4b97-8019-8779f069a1c9" // dummy config
    };
    const chatSDK = new OmnichannelChatSDK(omnichannelConfig);
    await chatSDK.initialize();
    const chatConfig = await chatSDK.getLiveChatConfig();
    const liveChatWidgetProps = {
        styleProps: {
            generalStyles: {
                width: "700px",
                height: "800px"
            }
        },
        headerProps: {
            controlProps: {
                hideMinimizeButton: true
            }
        },
        chatSDK: chatSDK, // mandatory
        chatConfig: chatConfig, // mandatory
        telemetryConfig: {
            chatWidgetVersion: chatWidgetVersion,
            chatComponentVersion: chatComponentVersion,
            OCChatSDKVersion: chatSdkVersion
        }
    };

    console.log("ADAD liveChatWidgetProps new", liveChatWidgetProps);

    ReactDOM.render(
        <LiveChatWidget {...liveChatWidgetProps}/>,
        document.getElementById("oc-lcw-container")
    );

    // memoryDataStore();
    // await getUnreadMessageCount();
    // await registerVisibilityListener();
    // const switchConfig = (config) => {
    //     liveChatWidgetProps = config;
    //     liveChatWidgetProps = {
    //         ...liveChatWidgetProps,
    //         chatSDK: chatSDK, // mandatory
    //         chatConfig: chatConfig, // mandatory
    //         telemetryConfig: {
    //             chatWidgetVersion: chatWidgetVersion,
    //             chatComponentVersion: chatComponentVersion,
    //             OCChatSDKVersion: chatSdkVersion
    //         }
    //     };

    //     console.log("ADAD liveChatWidgetProps", liveChatWidgetProps);

    //     ReactDOM.render(
    //         <LiveChatWidget {...liveChatWidgetProps} />,
    //         document.getElementById("oc-lcw-container")
    //     );
    // };
    // const startProactiveChat = (notificationUIConfig, showPrechat, inNewWindow) => {
    //     const startProactiveChatEvent = {
    //         eventName: "StartProactiveChat",
    //         payload: {
    //             bodyTitle: (notificationUIConfig && notificationUIConfig.message) ? notificationUIConfig.message : "Hello Customer",
    //             showPrechat: showPrechat,
    //             inNewWindow: inNewWindow
    //         }
    //     };
    //     BroadcastService.postMessage(startProactiveChatEvent);
    // };

    // window["switchConfig"] = switchConfig;
    // window["startProactiveChat"] = startProactiveChat;
    // switchConfig(await getCustomizationJson());
};

main();
