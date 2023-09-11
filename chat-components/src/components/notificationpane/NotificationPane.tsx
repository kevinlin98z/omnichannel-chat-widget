import React from "react";
import { ILabelStyles, Image, Label, Stack, Link, IStackStyles, IImageStyles, ILinkStyles, DefaultButton, IButtonStyles } from "@fluentui/react";
import { INotificationPaneInternal } from "./interfaces/common/INotificationPaneInternal";
import DismissButton from "./subcomponents/DismissButton";
import CloseChatButton from "./subcomponents/CloseChatButton";
import { decodeComponentString } from "../../common/decodeComponentString";

function NotificationPane(props: INotificationPaneInternal) {
    const elementId = props.id ?? "lcw-notification-pane";

    const containerStyles: IStackStyles = {
        root: Object.assign({}, props.generalStyleProps)
    }; // TODO see if object.assign can be avoided here!

    const titleStyles: ILabelStyles = {
        root: Object.assign({}, props.titleStyleProps)
    };

    const subtitleStyles: ILabelStyles = {
        root: Object.assign({}, props.subtitleStyleProps)
    };

    const hyperlinkStyles: ILinkStyles = {
        root: Object.assign({}, props.hyperlinkStyleProps)
    };
    const hyperlinkHoverStyles: ILinkStyles = {
        root: Object.assign({}, props.hyperlinkHoverStyleProps)
    };

    const notificationIconProps = Object.assign({}, props.notificationIconProps);
    const notificationIconStyles = Object.assign({}, props.notificationIconStyleProps);
    const notificationIconImageStyles: IImageStyles = { root: {}, image: notificationIconStyles };

    const dismissButtonProps = Object.assign({}, props.dismissButtonProps);
    const dismissButtonStyles = Object.assign({}, props.dismissButtonStyleProps);
    const dismissButtonHoverStyles = Object.assign({}, props.dismissButtonHoverStyleProps);

    const closeChatButtonProps = Object.assign({}, props.closeChatButtonProps);
    const closeChatButtonStyles = Object.assign({}, props.closeChatButtonStyleProps); // TODO -> closeChat is IButton vs ICommandButton???
    const closeChatButtonHoverStyles = Object.assign({}, props.closeChatButtonHoverStyleProps);

    const closeChatButtonStyles2: IButtonStyles = {
        root: Object.assign({}, props.closeChatButtonStyleProps),
        rootHovered: Object.assign({}, props.closeChatButtonHoverStyleProps)
    };

    const infoGroupStyles: IStackStyles = {
        root: Object.assign({}, props.infoGroupStyleProps)
    };

    const buttonGroupStyles: IStackStyles = {
        root: Object.assign({}, props.buttonGroupStyleProps)
    };

    // const NotificationIcon = (level: string) => { // TODO: this will need to go under subcomponents (similar to header with minimize button)
    //     if (level === NotificationLevel.Error) {
    //         return <svg aria-label="Error" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 0C10.2409 0 11.071 0.110677 11.8652 0.332031C12.666 0.553385 13.4147 0.869141 14.1113 1.2793C14.8079 1.68294 15.4395 2.17122 16.0059 2.74414C16.5788 3.31055 17.0671 3.94206 17.4707 4.63867C17.8809 5.33529 18.1966 6.08398 18.418 6.88477C18.6393 7.67904 18.75 8.50911 18.75 9.375C18.75 10.2409 18.6393 11.0742 18.418 11.875C18.1966 12.6693 17.8809 13.4147 17.4707 14.1113C17.0671 14.8079 16.5788 15.4427 16.0059 16.0156C15.4395 16.582 14.8079 17.0703 14.1113 17.4805C13.4147 17.8841 12.666 18.1966 11.8652 18.418C11.071 18.6393 10.2409 18.75 9.375 18.75C8.50911 18.75 7.67578 18.6393 6.875 18.418C6.08073 18.1966 5.33529 17.8841 4.63867 17.4805C3.94206 17.0703 3.30729 16.582 2.73438 16.0156C2.16797 15.4427 1.67969 14.8079 1.26953 14.1113C0.865885 13.4147 0.553385 12.6693 0.332031 11.875C0.110677 11.0742 0 10.2409 0 9.375C0 8.50911 0.110677 7.67904 0.332031 6.88477C0.553385 6.08398 0.865885 5.33529 1.26953 4.63867C1.67969 3.94206 2.16797 3.31055 2.73438 2.74414C3.30729 2.17122 3.94206 1.68294 4.63867 1.2793C5.33529 0.869141 6.08073 0.553385 6.875 0.332031C7.67578 0.110677 8.50911 0 9.375 0ZM9.375 17.5C10.1172 17.5 10.8333 17.4023 11.5234 17.207C12.2201 17.0117 12.8678 16.7383 13.4668 16.3867C14.0723 16.0352 14.6224 15.612 15.1172 15.1172C15.612 14.6224 16.0352 14.0755 16.3867 13.4766C16.7383 12.8711 17.0117 12.2233 17.207 11.5332C17.4023 10.8431 17.5 10.1237 17.5 9.375C17.5 8.63281 17.4023 7.91667 17.207 7.22656C17.0117 6.52995 16.7383 5.88216 16.3867 5.2832C16.0352 4.67773 15.612 4.1276 15.1172 3.63281C14.6224 3.13802 14.0723 2.71484 13.4668 2.36328C12.8678 2.01172 12.2201 1.73828 11.5234 1.54297C10.8333 1.34766 10.1172 1.25 9.375 1.25C8.6263 1.25 7.9069 1.34766 7.2168 1.54297C6.52669 1.73828 5.87891 2.01172 5.27344 2.36328C4.67448 2.71484 4.1276 3.13802 3.63281 3.63281C3.13802 4.1276 2.71484 4.67773 2.36328 5.2832C2.01172 5.88216 1.73828 6.52995 1.54297 7.22656C1.34766 7.91667 1.25 8.63281 1.25 9.375C1.25 10.1172 1.34766 10.8366 1.54297 11.5332C1.73828 12.2233 2.01172 12.8711 2.36328 13.4766C2.71484 14.0755 3.13802 14.6224 3.63281 15.1172C4.1276 15.612 4.67448 16.0352 5.27344 16.3867C5.87891 16.7383 6.52669 17.0117 7.2168 17.207C7.9069 17.4023 8.6263 17.5 9.375 17.5ZM8.75 5H10V11.25H8.75V5ZM8.75 12.5H10V13.75H8.75V12.5Z"></path></svg>;
    //     }

    //     if (level === NotificationLevel.Info) {
    //         return <svg aria-label="Information" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 0C10.2409 0 11.071 0.110677 11.8652 0.332031C12.666 0.553385 13.4147 0.869141 14.1113 1.2793C14.8079 1.68294 15.4395 2.17122 16.0059 2.74414C16.5788 3.31055 17.0671 3.94206 17.4707 4.63867C17.8809 5.33529 18.1966 6.08398 18.418 6.88477C18.6393 7.67904 18.75 8.50911 18.75 9.375C18.75 10.2409 18.6393 11.0742 18.418 11.875C18.1966 12.6693 17.8809 13.4147 17.4707 14.1113C17.0671 14.8079 16.5788 15.4427 16.0059 16.0156C15.4395 16.582 14.8079 17.0703 14.1113 17.4805C13.4147 17.8841 12.666 18.1966 11.8652 18.418C11.071 18.6393 10.2409 18.75 9.375 18.75C8.50911 18.75 7.67578 18.6393 6.875 18.418C6.08073 18.1966 5.33529 17.8841 4.63867 17.4805C3.94206 17.0703 3.30729 16.582 2.73438 16.0156C2.16797 15.4427 1.67969 14.8079 1.26953 14.1113C0.865885 13.4147 0.553385 12.6693 0.332031 11.875C0.110677 11.0742 0 10.2409 0 9.375C0 8.50911 0.110677 7.67904 0.332031 6.88477C0.553385 6.08398 0.865885 5.33529 1.26953 4.63867C1.67969 3.94206 2.16797 3.31055 2.73438 2.74414C3.30729 2.17122 3.94206 1.68294 4.63867 1.2793C5.33529 0.869141 6.08073 0.553385 6.875 0.332031C7.67578 0.110677 8.50911 0 9.375 0ZM9.375 17.5C10.1172 17.5 10.8333 17.4023 11.5234 17.207C12.2201 17.0117 12.8678 16.7383 13.4668 16.3867C14.0723 16.0352 14.6224 15.612 15.1172 15.1172C15.612 14.6224 16.0352 14.0755 16.3867 13.4766C16.7383 12.8711 17.0117 12.2233 17.207 11.5332C17.4023 10.8431 17.5 10.1237 17.5 9.375C17.5 8.63281 17.4023 7.91667 17.207 7.22656C17.0117 6.52995 16.7383 5.88216 16.3867 5.2832C16.0352 4.67773 15.612 4.1276 15.1172 3.63281C14.6224 3.13802 14.0723 2.71484 13.4668 2.36328C12.8678 2.01172 12.2201 1.73828 11.5234 1.54297C10.8333 1.34766 10.1172 1.25 9.375 1.25C8.6263 1.25 7.9069 1.34766 7.2168 1.54297C6.52669 1.73828 5.87891 2.01172 5.27344 2.36328C4.67448 2.71484 4.1276 3.13802 3.63281 3.63281C3.13802 4.1276 2.71484 4.67773 2.36328 5.2832C2.01172 5.88216 1.73828 6.52995 1.54297 7.22656C1.34766 7.91667 1.25 8.63281 1.25 9.375C1.25 10.1172 1.34766 10.8366 1.54297 11.5332C1.73828 12.2233 2.01172 12.8711 2.36328 13.4766C2.71484 14.0755 3.13802 14.6224 3.63281 15.1172C4.1276 15.612 4.67448 16.0352 5.27344 16.3867C5.87891 16.7383 6.52669 17.0117 7.2168 17.207C7.9069 17.4023 8.6263 17.5 9.375 17.5ZM8.75 5H10V11.25H8.75V5ZM8.75 12.5H10V13.75H8.75V12.5Z"></path></svg>;
    //     }

    //     if (level === NotificationLevel.Success) {
    //         return <svg aria-label="Success" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5605 5.81055L15.4395 6.68945L8.125 14.0039L4.56055 10.4395L5.43945 9.56055L8.125 12.2461L14.5605 5.81055ZM10 0C10.918 0 11.8034 0.120443 12.6562 0.361328C13.5091 0.595703 14.3066 0.93099 15.0488 1.36719C15.791 1.79688 16.4648 2.31771 17.0703 2.92969C17.6823 3.53516 18.2031 4.20898 18.6328 4.95117C19.069 5.69336 19.4043 6.49089 19.6387 7.34375C19.8796 8.19661 20 9.08203 20 10C20 10.918 19.8796 11.8034 19.6387 12.6562C19.4043 13.5091 19.069 14.3066 18.6328 15.0488C18.2031 15.791 17.6823 16.4681 17.0703 17.0801C16.4648 17.6855 15.791 18.2064 15.0488 18.6426C14.3066 19.0723 13.5091 19.4076 12.6562 19.6484C11.8034 19.8828 10.918 20 10 20C9.08203 20 8.19661 19.8828 7.34375 19.6484C6.49089 19.4076 5.69336 19.0723 4.95117 18.6426C4.20898 18.2064 3.5319 17.6855 2.91992 17.0801C2.31445 16.4681 1.79362 15.791 1.35742 15.0488C0.927734 14.3066 0.592448 13.5124 0.351562 12.666C0.117188 11.8132 0 10.9245 0 10C0 9.08203 0.117188 8.19661 0.351562 7.34375C0.592448 6.49089 0.927734 5.69336 1.35742 4.95117C1.79362 4.20898 2.31445 3.53516 2.91992 2.92969C3.5319 2.31771 4.20898 1.79688 4.95117 1.36719C5.69336 0.93099 6.48763 0.595703 7.33398 0.361328C8.18685 0.120443 9.07552 0 10 0ZM10 18.75C10.8008 18.75 11.5723 18.6458 12.3145 18.4375C13.0632 18.2292 13.7598 17.9362 14.4043 17.5586C15.0553 17.1745 15.6478 16.7155 16.1816 16.1816C16.7155 15.6478 17.1712 15.0586 17.5488 14.4141C17.9329 13.763 18.2292 13.0664 18.4375 12.3242C18.6458 11.582 18.75 10.8073 18.75 10C18.75 9.19922 18.6458 8.42773 18.4375 7.68555C18.2292 6.93685 17.9329 6.24023 17.5488 5.5957C17.1712 4.94466 16.7155 4.35221 16.1816 3.81836C15.6478 3.28451 15.0553 2.82878 14.4043 2.45117C13.7598 2.06706 13.0632 1.77083 12.3145 1.5625C11.5723 1.35417 10.8008 1.25 10 1.25C9.19922 1.25 8.42448 1.35417 7.67578 1.5625C6.93359 1.77083 6.23698 2.06706 5.58594 2.45117C4.94141 2.82878 4.35221 3.28451 3.81836 3.81836C3.28451 4.35221 2.82552 4.94466 2.44141 5.5957C2.0638 6.24023 1.77083 6.93685 1.5625 7.68555C1.35417 8.42773 1.25 9.19922 1.25 10C1.25 10.8008 1.35417 11.5755 1.5625 12.3242C1.77083 13.0664 2.0638 13.763 2.44141 14.4141C2.82552 15.0586 3.28451 15.6478 3.81836 16.1816C4.35221 16.7155 4.94141 17.1745 5.58594 17.5586C6.23698 17.9362 6.93359 18.2292 7.67578 18.4375C8.41797 18.6458 9.19271 18.75 10 18.75Z" fill="#107C10"></path></svg>;
    //     }

    //     if (level === NotificationLevel.Warning) {
    //         return <svg aria-label="Warning" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 0C10.2409 0 11.071 0.110677 11.8652 0.332031C12.666 0.553385 13.4147 0.869141 14.1113 1.2793C14.8079 1.68294 15.4395 2.17122 16.0059 2.74414C16.5788 3.31055 17.0671 3.94206 17.4707 4.63867C17.8809 5.33529 18.1966 6.08398 18.418 6.88477C18.6393 7.67904 18.75 8.50911 18.75 9.375C18.75 10.2409 18.6393 11.0742 18.418 11.875C18.1966 12.6693 17.8809 13.4147 17.4707 14.1113C17.0671 14.8079 16.5788 15.4427 16.0059 16.0156C15.4395 16.582 14.8079 17.0703 14.1113 17.4805C13.4147 17.8841 12.666 18.1966 11.8652 18.418C11.071 18.6393 10.2409 18.75 9.375 18.75C8.50911 18.75 7.67578 18.6393 6.875 18.418C6.08073 18.1966 5.33529 17.8841 4.63867 17.4805C3.94206 17.0703 3.30729 16.582 2.73438 16.0156C2.16797 15.4427 1.67969 14.8079 1.26953 14.1113C0.865885 13.4147 0.553385 12.6693 0.332031 11.875C0.110677 11.0742 0 10.2409 0 9.375C0 8.50911 0.110677 7.67904 0.332031 6.88477C0.553385 6.08398 0.865885 5.33529 1.26953 4.63867C1.67969 3.94206 2.16797 3.31055 2.73438 2.74414C3.30729 2.17122 3.94206 1.68294 4.63867 1.2793C5.33529 0.869141 6.08073 0.553385 6.875 0.332031C7.67578 0.110677 8.50911 0 9.375 0ZM9.375 17.5C10.1172 17.5 10.8333 17.4023 11.5234 17.207C12.2201 17.0117 12.8678 16.7383 13.4668 16.3867C14.0723 16.0352 14.6224 15.612 15.1172 15.1172C15.612 14.6224 16.0352 14.0755 16.3867 13.4766C16.7383 12.8711 17.0117 12.2233 17.207 11.5332C17.4023 10.8431 17.5 10.1237 17.5 9.375C17.5 8.63281 17.4023 7.91667 17.207 7.22656C17.0117 6.52995 16.7383 5.88216 16.3867 5.2832C16.0352 4.67773 15.612 4.1276 15.1172 3.63281C14.6224 3.13802 14.0723 2.71484 13.4668 2.36328C12.8678 2.01172 12.2201 1.73828 11.5234 1.54297C10.8333 1.34766 10.1172 1.25 9.375 1.25C8.6263 1.25 7.9069 1.34766 7.2168 1.54297C6.52669 1.73828 5.87891 2.01172 5.27344 2.36328C4.67448 2.71484 4.1276 3.13802 3.63281 3.63281C3.13802 4.1276 2.71484 4.67773 2.36328 5.2832C2.01172 5.88216 1.73828 6.52995 1.54297 7.22656C1.34766 7.91667 1.25 8.63281 1.25 9.375C1.25 10.1172 1.34766 10.8366 1.54297 11.5332C1.73828 12.2233 2.01172 12.8711 2.36328 13.4766C2.71484 14.0755 3.13802 14.6224 3.63281 15.1172C4.1276 15.612 4.67448 16.0352 5.27344 16.3867C5.87891 16.7383 6.52669 17.0117 7.2168 17.207C7.9069 17.4023 8.6263 17.5 9.375 17.5ZM8.75 5H10V11.25H8.75V5ZM8.75 12.5H10V13.75H8.75V12.5Z"></path></svg>;
    //     }

    //     return <svg aria-label="Information" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 0C10.2409 0 11.071 0.110677 11.8652 0.332031C12.666 0.553385 13.4147 0.869141 14.1113 1.2793C14.8079 1.68294 15.4395 2.17122 16.0059 2.74414C16.5788 3.31055 17.0671 3.94206 17.4707 4.63867C17.8809 5.33529 18.1966 6.08398 18.418 6.88477C18.6393 7.67904 18.75 8.50911 18.75 9.375C18.75 10.2409 18.6393 11.0742 18.418 11.875C18.1966 12.6693 17.8809 13.4147 17.4707 14.1113C17.0671 14.8079 16.5788 15.4427 16.0059 16.0156C15.4395 16.582 14.8079 17.0703 14.1113 17.4805C13.4147 17.8841 12.666 18.1966 11.8652 18.418C11.071 18.6393 10.2409 18.75 9.375 18.75C8.50911 18.75 7.67578 18.6393 6.875 18.418C6.08073 18.1966 5.33529 17.8841 4.63867 17.4805C3.94206 17.0703 3.30729 16.582 2.73438 16.0156C2.16797 15.4427 1.67969 14.8079 1.26953 14.1113C0.865885 13.4147 0.553385 12.6693 0.332031 11.875C0.110677 11.0742 0 10.2409 0 9.375C0 8.50911 0.110677 7.67904 0.332031 6.88477C0.553385 6.08398 0.865885 5.33529 1.26953 4.63867C1.67969 3.94206 2.16797 3.31055 2.73438 2.74414C3.30729 2.17122 3.94206 1.68294 4.63867 1.2793C5.33529 0.869141 6.08073 0.553385 6.875 0.332031C7.67578 0.110677 8.50911 0 9.375 0ZM9.375 17.5C10.1172 17.5 10.8333 17.4023 11.5234 17.207C12.2201 17.0117 12.8678 16.7383 13.4668 16.3867C14.0723 16.0352 14.6224 15.612 15.1172 15.1172C15.612 14.6224 16.0352 14.0755 16.3867 13.4766C16.7383 12.8711 17.0117 12.2233 17.207 11.5332C17.4023 10.8431 17.5 10.1237 17.5 9.375C17.5 8.63281 17.4023 7.91667 17.207 7.22656C17.0117 6.52995 16.7383 5.88216 16.3867 5.2832C16.0352 4.67773 15.612 4.1276 15.1172 3.63281C14.6224 3.13802 14.0723 2.71484 13.4668 2.36328C12.8678 2.01172 12.2201 1.73828 11.5234 1.54297C10.8333 1.34766 10.1172 1.25 9.375 1.25C8.6263 1.25 7.9069 1.34766 7.2168 1.54297C6.52669 1.73828 5.87891 2.01172 5.27344 2.36328C4.67448 2.71484 4.1276 3.13802 3.63281 3.63281C3.13802 4.1276 2.71484 4.67773 2.36328 5.2832C2.01172 5.88216 1.73828 6.52995 1.54297 7.22656C1.34766 7.91667 1.25 8.63281 1.25 9.375C1.25 10.1172 1.34766 10.8366 1.54297 11.5332C1.73828 12.2233 2.01172 12.8711 2.36328 13.4766C2.71484 14.0755 3.13802 14.6224 3.63281 15.1172C4.1276 15.612 4.67448 16.0352 5.27344 16.3867C5.87891 16.7383 6.52669 17.0117 7.2168 17.207C7.9069 17.4023 8.6263 17.5 9.375 17.5ZM8.75 5H10V11.25H8.75V5ZM8.75 12.5H10V13.75H8.75V12.5Z"></path></svg>;
    // };

    return (
        <>
            <Stack className={props.containerClassName}
                // horizontalAlign="space-between"
                styles={containerStyles}
                id={elementId}
                dir={props.dir ?? "ltr"}
                tabIndex={-1}
                role={"presentation"}>
                
                <Stack horizontal
                    // horizontalAlign="space-between"
                    // verticalAlign="start"
                    styles={containerStyles}
                    dir={props.dir ?? "ltr"}>
                    {!props.hideNotificationIcon && (decodeComponentString(props.componentOverrides?.notificationIcon) || <Image
                        className={notificationIconProps.className}
                        id={notificationIconProps.id}
                        src={notificationIconProps.src}
                        alt={notificationIconProps.alt}
                        tabIndex={-1}
                        styles={notificationIconImageStyles}
                    />)}

                    <Stack 
                        // verticalAlign="space-between" // TODO add + add own stack stylings to add space between top and bottom?
                        styles={infoGroupStyles}
                        dir={props.dir ?? "ltr"}>
                        {!props.hideTitle && (decodeComponentString(props.componentOverrides?.title) || <Label
                            className={props.titleClassName ?? "nb-title"}
                            styles={titleStyles}
                            tabIndex={-1}
                            id={elementId + "-title"}>
                            {props.titleText ?? "Sample notification title"}
                        </Label>)}
                        {!props.hideSubtitle && (decodeComponentString(props.componentOverrides?.subtitle) || <Label
                            className={props.subtitleClassName ?? "nb-subtitle"}
                            styles={subtitleStyles}
                            tabIndex={-1}
                            id={elementId + "-subtitle"}>
                            {props.subtitleText ?? "Sample notification subtitle"}
                        </Label>)}
                        {!props.hideHyperlink && (decodeComponentString(props.componentOverrides?.hyperlink) || <Link
                            className={props.hyperlinkClassName}
                            ariaLabel={props.hyperlinkAriaLabel}
                            styles={hyperlinkStyles}
                            hoverStyles={hyperlinkHoverStyles}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            href={props.hyperlinkHref}>
                            {props.hyperlinkText}
                        </Link>)}
                    </Stack>

                    {!props.hideDismissButton && (decodeComponentString(props.componentOverrides?.dismissButton) || <DismissButton
                        {...dismissButtonProps}
                        className={props.dismissButtonClassName}
                        onClick={props.dismissButtonProps?.onClick}
                        styles={dismissButtonStyles}
                        hoverStyles={dismissButtonHoverStyles}
                    />)}
                </Stack>
                
                <Stack horizontal
                    // horizontalAlign="space-between"
                    // verticalAlign="start"
                    styles={buttonGroupStyles}
                    dir={props.dir ?? "ltr"}>
                    {!props.hideCloseChatButton && <CloseChatButton
                        {...closeChatButtonProps}
                        className={props.closeChatButtonClassName}
                        onClick={props.closeChatButtonProps?.onClick}
                        styles={closeChatButtonStyles}
                        hoverStyles={closeChatButtonHoverStyles}
                    />}
                </Stack>

                <Stack horizontal
                    // horizontalAlign="space-between"
                    // verticalAlign="start"
                    styles={buttonGroupStyles}
                    dir={props.dir ?? "ltr"}>
                    {!props.hideCloseChatButton && <DefaultButton
                        className={props.closeChatButtonClassName}
                        text={props.closeChatButtonProps?.text}
                        ariaLabel={props.closeChatButtonProps?.ariaLabel}
                        onClick={props.closeChatButtonProps?.onClick}
                        id={"nb-start-chat-button-id"}
                        styles={closeChatButtonStyles2}
                    />}
                </Stack>
                
            </Stack>
        </>
    );

    // return (
    //     <>
    //         <Stack
    //             id={elementId}
    //             tabIndex={-1}
    //             styles={containerStyles}
    //             className={props.containerClassName}
    //             role={"presentation"}
    //             dir={props.dir ?? "ltr"}>
    //             {!props.hideNotificationIcon && (decodeComponentString(props.componentOverrides?.notificationIcon) || <Image
    //                 className={notificationIconProps.className}
    //                 id={notificationIconProps.id}
    //                 src={notificationIconProps.src}
    //                 alt={notificationIconProps.alt}
    //                 tabIndex={-1}
    //                 styles={notificationIconImageStyles}
    //             />)}
    //             {!props.hideTitle && (decodeComponentString(props.componentOverrides?.title) || <Label
    //                 className={props.titleClassName ?? "nb-title"}
    //                 styles={titleStyles}
    //                 tabIndex={-1}
    //                 id={elementId + "-title"}>
    //                 {props.titleText ?? "Sample notification title"}
    //             </Label>)}
    //             {!props.hideSubtitle && (decodeComponentString(props.componentOverrides?.subtitle) || <Label
    //                 className={props.subtitleClassName ?? "nb-subtitle"}
    //                 styles={subtitleStyles}
    //                 tabIndex={-1}
    //                 id={elementId + "-subtitle"}>
    //                 {props.subtitleText ?? "Sample notification subtitle"}
    //             </Label>)}
    //             {!props.hideHyperlink && (decodeComponentString(props.componentOverrides?.hyperlink) || <Link
    //                 className={props.hyperlinkClassName}
    //                 ariaLabel={props.hyperlinkAriaLabel}
    //                 styles={hyperlinkStyles}
    //                 hoverStyles={hyperlinkHoverStyles}
    //                 target={"_blank"}
    //                 rel={"noopener noreferrer"}
    //                 href={props.hyperlinkHref}>
    //                 {props.hyperlinkText}
    //             </Link>)}
    //             {!props.hideDismissButton && (decodeComponentString(props.componentOverrides?.dismissButton) || <DismissButton
    //                 {...dismissButtonProps}
    //                 className={props.dismissButtonClassName}
    //                 onClick={props.dismissButtonProps?.onClick}
    //                 styles={dismissButtonStyles}
    //                 hoverStyles={dismissButtonHoverStyles}
    //             />)}
    //             {/* {!props.hideDismissButton && <DefaultButton
    //                 className={"nb-close-button"}
    //                 // styles={dismissButtonStyles}
    //                 // text={"CLOSE"}
    //                 text={props.dismissButtonProps?.text}
    //                 // onClick={props.chatDisconnectNotificationProps?.controlProps?.dismissButtonProps?.onClick}
    //                 onClick={props.dismissButtonProps?.onClick}
    //                 id={"nb-close-button-id"}
    //                 // ariaLabel={props.controlProps?.cancelButtonAriaLabel || defaultConfirmationPaneControlProps.cancelButtonAriaLabel}
    //             />} */}
    //             {!props.hideCloseChatButton && <CloseChatButton
    //                 {...closeChatButtonProps}
    //                 className={props.closeChatButtonClassName}
    //                 onClick={props.closeChatButtonProps?.onClick}
    //                 styles={closeChatButtonStyles}
    //                 hoverStyles={closeChatButtonHoverStyles}
    //             />}
    //             {/* {!props.hideCloseChatButton && <DefaultButton
    //                 className={"nb-start-chat-button"}
    //                 // styles={dismissButtonStyles}
    //                 // text={"CLOSE"}
    //                 text={props.closeChatButtonProps?.text}
    //                 // onClick={props.chatDisconnectNotificationProps?.controlProps?.dismissButtonProps?.onClick}
    //                 onClick={props.closeChatButtonProps?.onClick}
    //                 id={"nb-start-chat-button-id"}
    //                 // ariaLabel={props.controlProps?.cancelButtonAriaLabel || defaultConfirmationPaneControlProps.cancelButtonAriaLabel}
    //             />} */}
    //         </Stack>
    //     </>
    // );
}

export default NotificationPane;