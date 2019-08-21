(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #000; }\n.child-route-container {\n  position: absolute;\n  top: calc(35% + 144px);\n  height: 100%;\n  width: 100%; }\n.follow-list {\n  padding-left: 32px;\n  padding-right: 32px; }\n.follow-list .follow-list-item {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 32px; }\n.follow-list .follow-list-item .username {\n      margin-left: 32px;\n      color: white; }\n.follow-list .follow-list-item .avatar {\n      width: 64px;\n      height: 64px; }\n.follow-list .follow-list-item .avatar img {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n.btn-submit {\n  font-weight: bold;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 48px;\n  border-radius: 0px;\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  background: black;\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  transition: all 420ms ease; }\n.btn-submit:disabled {\n    color: rgba(255, 255, 255, 0.15); }\n.can-toggle {\n  position: relative; }\n.can-toggle *,\n  .can-toggle *:before,\n  .can-toggle *:after {\n    box-sizing: border-box; }\n.can-toggle input[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.can-toggle input[type=\"checkbox\"][disabled] ~ label {\n      pointer-events: none; }\n.can-toggle input[type=\"checkbox\"][disabled] ~ label .can-toggle__switch {\n        opacity: 0.4; }\n.can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:before {\n      content: attr(data-unchecked);\n      left: 0; }\n.can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n      content: attr(data-checked); }\n.can-toggle label {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    position: relative;\n    display: flex;\n    align-items: center; }\n.can-toggle label .can-toggle__label-text {\n      flex: 1;\n      padding-left: 32px; }\n.can-toggle label .can-toggle__switch {\n      position: relative; }\n.can-toggle label .can-toggle__switch:before {\n        content: attr(data-checked);\n        position: absolute;\n        top: 0;\n        text-transform: uppercase;\n        text-align: center; }\n.can-toggle label .can-toggle__switch:after {\n        content: attr(data-unchecked);\n        position: absolute;\n        z-index: 5;\n        text-transform: uppercase;\n        text-align: center;\n        background: white;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0); }\n.can-toggle input[type=\"checkbox\"] {\n    cursor: pointer; }\n.can-toggle input[type=\"checkbox\"][disabled] ~ label {\n      color: rgba(119, 119, 119, 0.5); }\n.can-toggle input[type=\"checkbox\"]:focus ~ label .can-toggle__switch,\n    .can-toggle input[type=\"checkbox\"]:hover ~ label .can-toggle__switch {\n      background-color: #777; }\n.can-toggle input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n      .can-toggle input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n        color: #5e5d5d; }\n.can-toggle input[type=\"checkbox\"]:hover ~ label {\n      color: #6a6a6a; }\n.can-toggle input[type=\"checkbox\"]:checked ~ label:hover {\n      color: black; }\n.can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch {\n      background-color: #0d0d0d; }\n.can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n        color: black; }\n.can-toggle input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch, .can-toggle input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch {\n      background-color: #000; }\n.can-toggle input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n        color: black; }\n.can-toggle label .can-toggle__label-text {\n    flex: 1; }\n.can-toggle label .can-toggle__switch {\n    transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);\n    background: #848484; }\n.can-toggle label .can-toggle__switch:before {\n      color: rgba(255, 255, 255, 0.5); }\n.can-toggle label .can-toggle__switch:after {\n      transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1), -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      color: #777; }\n.can-toggle input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n  .can-toggle input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4); }\n.can-toggle input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    -webkit-transform: translate3d(65px, 0, 0);\n            transform: translate3d(65px, 0, 0); }\n.can-toggle input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4); }\n.can-toggle label {\n    font-size: 14px; }\n.can-toggle label .can-toggle__switch {\n      height: 36px;\n      flex: 0 0 134px;\n      border-radius: 4px; }\n.can-toggle label .can-toggle__switch:before {\n        left: 67px;\n        font-size: 12px;\n        line-height: 36px;\n        width: 67px;\n        padding: 0 12px; }\n.can-toggle label .can-toggle__switch:after {\n        top: 2px;\n        left: 2px;\n        border-radius: 2px;\n        width: 65px;\n        line-height: 32px;\n        font-size: 12px; }\n.can-toggle label .can-toggle__switch:hover:after {\n        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4); }\n.can-toggle.can-toggle--size-small input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n  .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n.can-toggle.can-toggle--size-small input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    -webkit-transform: translate3d(44px, 0, 0);\n            transform: translate3d(44px, 0, 0); }\n.can-toggle.can-toggle--size-small input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.can-toggle--size-small input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n.can-toggle.can-toggle--size-small label {\n    font-size: 13px; }\n.can-toggle.can-toggle--size-small label .can-toggle__switch {\n      height: 28px;\n      flex: 0 0 90px;\n      border-radius: 2px; }\n.can-toggle.can-toggle--size-small label .can-toggle__switch:before {\n        left: 45px;\n        font-size: 10px;\n        line-height: 28px;\n        width: 45px;\n        padding: 0 12px; }\n.can-toggle.can-toggle--size-small label .can-toggle__switch:after {\n        top: 1px;\n        left: 1px;\n        border-radius: 1px;\n        width: 44px;\n        line-height: 26px;\n        font-size: 10px; }\n.can-toggle.can-toggle--size-small label .can-toggle__switch:hover:after {\n        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4); }\n.can-toggle.can-toggle--size-large input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n  .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n.can-toggle.can-toggle--size-large input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    -webkit-transform: translate3d(78px, 0, 0);\n            transform: translate3d(78px, 0, 0); }\n.can-toggle.can-toggle--size-large input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.can-toggle--size-large input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n.can-toggle.can-toggle--size-large label {\n    font-size: 14px; }\n.can-toggle.can-toggle--size-large label .can-toggle__switch {\n      height: 50px;\n      flex: 0 0 160px;\n      border-radius: 4px; }\n.can-toggle.can-toggle--size-large label .can-toggle__switch:before {\n        left: 80px;\n        font-size: 14px;\n        line-height: 50px;\n        width: 80px;\n        padding: 0 12px; }\n.can-toggle.can-toggle--size-large label .can-toggle__switch:after {\n        top: 2px;\n        left: 2px;\n        border-radius: 2px;\n        width: 78px;\n        line-height: 46px;\n        font-size: 14px; }\n.can-toggle.can-toggle--size-large label .can-toggle__switch:hover:after {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"] {\n    cursor: pointer; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"][disabled] ~ label {\n      color: rgba(181, 62, 116, 0.5); }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch,\n    .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch {\n      background-color: #b53e74; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n      .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n        color: #8f315c; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:hover ~ label {\n      color: #a23768; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked ~ label:hover {\n      color: #39916a; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch {\n      background-color: #44ae7f; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n        color: #368a65; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch {\n      background-color: #3d9c72; }\n.can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n        color: #2f7757; }\n.can-toggle.demo-rebrand-1 label .can-toggle__label-text {\n    flex: 1; }\n.can-toggle.demo-rebrand-1 label .can-toggle__switch {\n    transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);\n    background: #c14b81; }\n.can-toggle.demo-rebrand-1 label .can-toggle__switch:before {\n      color: rgba(255, 255, 255, 0.6); }\n.can-toggle.demo-rebrand-1 label .can-toggle__switch:after {\n      transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1), -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);\n      color: #b53e74; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"] {\n    cursor: pointer; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"][disabled] ~ label {\n      color: rgba(68, 68, 68, 0.5); }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch,\n    .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch {\n      background-color: #444; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n      .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n        color: #2b2a2a; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label {\n      color: #373737; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label:hover {\n      color: #62b125; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch {\n      background-color: #75d32d; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n        color: #5da924; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch {\n      background-color: #69be28; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n        color: #52941f; }\n.can-toggle.demo-rebrand-2 label .can-toggle__label-text {\n    flex: 1; }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch {\n    transition: background-color 0.3s function;\n    background: #515151; }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch:before {\n      color: rgba(255, 255, 255, 0.7); }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch:after {\n      transition: -webkit-transform 0.3s function;\n      transition: transform 0.3s function;\n      transition: transform 0.3s function, -webkit-transform 0.3s function;\n      color: #444; }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:focus ~ label .can-toggle__switch:after,\n  .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked ~ label .can-toggle__switch:after {\n    -webkit-transform: translate3d(58px, 0, 0);\n            transform: translate3d(58px, 0, 0); }\n.can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type=\"checkbox\"]:checked:hover ~ label .can-toggle__switch:after {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n.can-toggle.demo-rebrand-2 label {\n    font-size: 13px; }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch {\n      height: 60px;\n      flex: 0 0 120px;\n      border-radius: 60px; }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch:before {\n        left: 60px;\n        font-size: 13px;\n        line-height: 60px;\n        width: 60px;\n        padding: 0 12px; }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch:after {\n        top: 2px;\n        left: 2px;\n        border-radius: 30px;\n        width: 58px;\n        line-height: 56px;\n        font-size: 13px; }\n.can-toggle.demo-rebrand-2 label .can-toggle__switch:hover:after {\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcd29ya3NwYWNlXFx3ZWJkZXNpZ25cXHNvY2lhbG1lZGlhXFxhbmd1bGFyLXNyYy9zcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQVEvRTtFQUVFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUNwQixhQUFZO0VBQ1osWUFBVyxFQUNkO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBd0JwQjtBQTFCRDtJQUtJLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsb0JBQW1CLEVBa0JwQjtBQXpCSDtNQVVNLGtCQUFpQjtNQUNqQixhQUFZLEVBQ2I7QUFaTDtNQWVNLFlBQVc7TUFDWCxhQUFZLEVBT2I7QUF2Qkw7UUFrQlEsWUFBVztRQUNYLGFBQVk7UUFDWixtQkFBa0I7UUFDbEIscUJBQWlCO1dBQWpCLGtCQUFpQixFQUNwQjtBQVFMO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsVUFBUztFQUNULFFBQU87RUFDUCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGdEQXBEK0I7RUFxRC9CLGtCQUFpQjtFQUNqQixnQ0FBd0I7RUFDeEIsWUFBVztFQUNYLDJCQUEwQixFQUkzQjtBQWZEO0lBYUksaUNBQWdDLEVBQ2pDO0FBOEpIO0VBQ0UsbUJBQWtCLEVBNEpuQjtBQTdKRDs7O0lBS0ksdUJBQXNCLEVBQ3ZCO0FBTkg7SUFVSSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixRQUFPLEVBNkJSO0FBMUNIO01BZ0JNLHFCQUFvQixFQUlyQjtBQXBCTDtRQWtCUSxhQUFZLEVBQ2I7QUFuQlA7TUEwQlksOEJBQTZCO01BQzdCLFFBQU8sRUFDUjtBQTVCWDtNQStCWSw0QkFBMkIsRUFDNUI7QUFoQ1g7SUE2Q0ksMEJBQWlCO09BQWpCLHVCQUFpQjtRQUFqQixzQkFBaUI7WUFBakIsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isb0JBQW1CLEVBNEJwQjtBQTVFSDtNQW1ETSxRQUFPO01BQ1AsbUJBQWtCLEVBQ25CO0FBckRMO01Bd0RNLG1CQUFrQixFQW1CbkI7QUEzRUw7UUEyRFEsNEJBQTJCO1FBQzNCLG1CQUFrQjtRQUNsQixPQUFNO1FBQ04sMEJBQXlCO1FBQ3pCLG1CQUFrQixFQUNuQjtBQWhFUDtRQW1FUSw4QkFBNkI7UUFDN0IsbUJBQWtCO1FBQ2xCLFdBQVU7UUFDViwwQkFBeUI7UUFDekIsbUJBQWtCO1FBQ2xCLGtCQUFpQjtRQUNqQix3Q0FBK0I7Z0JBQS9CLGdDQUErQixFQUNoQztBQS9OTDtJQUNFLGdCQUFlLEVBNENoQjtBQTFDQztNQUNFLGdDQVR1QixFQVV4QjtBQUlDOztNQUNFLHVCQWZxQixFQW1CdEI7QUFIQzs7UUFDRSxlQUF5QyxFQUMxQztBQUdMO01BQ0UsZUFBd0MsRUFDekM7QUFHRztNQUNFLGFBQXVDLEVBQ3hDO0FBRUQ7TUFDRSwwQkFBbUQsRUFJcEQ7QUFIQztRQUNFLGFBQXVDLEVBQ3hDO0FBT0Q7TUFDRSx1QkF6Q2dCLEVBNkNqQjtBQUhDO1FBQ0UsYUFBd0MsRUFDekM7QUFRVDtJQUNFLFFBQU8sRUFDUjtBQUVEO0lBQ0UsNkRBdkQ4QztJQXdEOUMsb0JBQThDLEVBVS9DO0FBVEM7TUFDRSxnQ0EzRCtCLEVBNERoQztBQUNEO01BR0UsOERBL0Q0QztNQStENUMsc0RBL0Q0QztNQStENUMseUdBL0Q0QztNQWdFNUMsWUFuRXFCLEVBb0V0QjtBQW9CQzs7SUFDRSx5Q0FUZ0MsRUFVakM7QUFPQztJQUNFLDJDQUtDO1lBTEQsbUNBS0MsRUFDRjtBQU9DO0lBQ0UseUNBaEM0QixFQWlDN0I7QUFPWDtJQUNFLGdCQTNDK0IsRUF5RWhDO0FBNUJDO01BQ0UsYUFqRG9CO01Ba0RwQixnQkFuRG9CO01Bb0RwQixtQkFsRDBCLEVBMEUzQjtBQXRCQztRQUNFLFdBQXlCO1FBQ3pCLGdCQW5ENEI7UUFvRDVCLGtCQXhEa0I7UUF5RGxCLFlBQTBCO1FBQzFCLGdCQUFlLEVBQ2hCO0FBRUQ7UUFDRSxTQTVEaUI7UUE2RGpCLFVBN0RpQjtRQThEakIsbUJBQTBDO1FBQzFDLFlBQW9EO1FBQ3BELGtCQUEwRDtRQUMxRCxnQkEvRDRCLEVBZ0U3QjtBQUdDO1FBQ0UseUNBbkVnQyxFQW9FakM7QUE1REQ7O0lBQ0UseUNBa0trQixFQWpLbkI7QUFPQztJQUNFLDJDQUtDO1lBTEQsbUNBS0MsRUFDRjtBQU9DO0lBQ0UseUNBMkljLEVBMUlmO0FBT1g7SUFDRSxnQkE4SFEsRUFoR1Q7QUE1QkM7TUFDRSxhQXFITTtNQXBITixlQWtISTtNQWpISixtQkFxSEssRUE3Rk47QUF0QkM7UUFDRSxXQUF5QjtRQUN6QixnQkF1SEk7UUF0SEosa0JBOEdJO1FBN0dKLFlBQTBCO1FBQzFCLGdCQUFlLEVBQ2hCO0FBRUQ7UUFDRSxTQTRHRztRQTNHSCxVQTJHRztRQTFHSCxtQkFBMEM7UUFDMUMsWUFBb0Q7UUFDcEQsa0JBQTBEO1FBQzFELGdCQTJHSSxFQTFHTDtBQUdDO1FBQ0UseUNBd0drQixFQXZHbkI7QUE1REQ7O0lBQ0UseUNBb0xrQixFQW5MbkI7QUFPQztJQUNFLDJDQUtDO1lBTEQsbUNBS0MsRUFDRjtBQU9DO0lBQ0UseUNBNkpjLEVBNUpmO0FBT1g7SUFDRSxnQkFnSlEsRUFsSFQ7QUE1QkM7TUFDRSxhQXVJTTtNQXRJTixnQkFvSUs7TUFuSUwsbUJBdUlLLEVBL0dOO0FBdEJDO1FBQ0UsV0FBeUI7UUFDekIsZ0JBeUlJO1FBeElKLGtCQWdJSTtRQS9ISixZQUEwQjtRQUMxQixnQkFBZSxFQUNoQjtBQUVEO1FBQ0UsU0E4SEc7UUE3SEgsVUE2SEc7UUE1SEgsbUJBQTBDO1FBQzFDLFlBQW9EO1FBQ3BELGtCQUEwRDtRQUMxRCxnQkE2SEksRUE1SEw7QUFHQztRQUNFLHlDQTBIa0IsRUF6SG5CO0FBL0lQO0lBQ0UsZ0JBQWUsRUE0Q2hCO0FBMUNDO01BQ0UsK0JBMlFPLEVBMVFSO0FBSUM7O01BQ0UsMEJBcVFLLEVBalFOO0FBSEM7O1FBQ0UsZUFBeUMsRUFDMUM7QUFHTDtNQUNFLGVBQXdDLEVBQ3pDO0FBR0c7TUFDRSxlQUF1QyxFQUN4QztBQUVEO01BQ0UsMEJBQW1ELEVBSXBEO0FBSEM7UUFDRSxlQUF1QyxFQUN4QztBQU9EO01BQ0UsMEJBNE9HLEVBeE9KO0FBSEM7UUFDRSxlQUF3QyxFQUN6QztBQVFUO0lBQ0UsUUFBTyxFQUNSO0FBRUQ7SUFDRSw2REF2RDhDO0lBd0Q5QyxvQkFBOEMsRUFVL0M7QUFUQztNQUNFLGdDQTJOVSxFQTFOWDtBQUNEO01BR0UsOERBL0Q0QztNQStENUMsc0RBL0Q0QztNQStENUMseUdBL0Q0QztNQWdFNUMsZUFpTkssRUFoTk47QUEvREw7SUFDRSxnQkFBZSxFQTRDaEI7QUExQ0M7TUFDRSw2QkFzUkksRUFyUkw7QUFJQzs7TUFDRSx1QkFnUkUsRUE1UUg7QUFIQzs7UUFDRSxlQUF5QyxFQUMxQztBQUdMO01BQ0UsZUFBd0MsRUFDekM7QUFHRztNQUNFLGVBQXVDLEVBQ3hDO0FBRUQ7TUFDRSwwQkFBbUQsRUFJcEQ7QUFIQztRQUNFLGVBQXVDLEVBQ3hDO0FBT0Q7TUFDRSwwQkF1UEcsRUFuUEo7QUFIQztRQUNFLGVBQXdDLEVBQ3pDO0FBUVQ7SUFDRSxRQUFPLEVBQ1I7QUFFRDtJQUNFLDJDQTJPVTtJQTFPVixvQkFBOEMsRUFVL0M7QUFUQztNQUNFLGdDQXNPVSxFQXJPWDtBQUNEO01BR0UsNENBbU9RO01Bbk9SLG9DQW1PUTtNQW5PUixxRUFtT1E7TUFsT1IsWUE0TkUsRUEzTkg7QUFvQkM7O0lBQ0UseUNBMk5rQixFQTFObkI7QUFPQztJQUNFLDJDQUtDO1lBTEQsbUNBS0MsRUFDRjtBQU9DO0lBQ0UseUNBb01jLEVBbk1mO0FBT1g7SUFDRSxnQkF1TFEsRUF6SlQ7QUE1QkM7TUFDRSxhQThLTTtNQTdLTixnQkEyS0s7TUExS0wsb0JBOEtNLEVBdEpQO0FBdEJDO1FBQ0UsV0FBeUI7UUFDekIsZ0JBZ0xJO1FBL0tKLGtCQXVLSTtRQXRLSixZQUEwQjtRQUMxQixnQkFBZSxFQUNoQjtBQUVEO1FBQ0UsU0FxS0c7UUFwS0gsVUFvS0c7UUFuS0gsb0JBQTBDO1FBQzFDLFlBQW9EO1FBQ3BELGtCQUEwRDtRQUMxRCxnQkFvS0ksRUFuS0w7QUFHQztRQUNFLHlDQWlLa0IsRUFoS25CIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLy8gVE9HR0xFIFNUVUZGICAvLyBUT0dHTEUgU1RVRkYgIC8vIFRPR0dMRSBTVFVGRiAgLy8gVE9HR0xFIFNUVUZGXHJcbi8vIFRPR0dMRSBTVFVGRiAgLy8gVE9HR0xFIFNUVUZGICAvLyBUT0dHTEUgU1RVRkYgIC8vIFRPR0dMRSBTVFVGRlxyXG4vLyBUT0dHTEUgU1RVRkYgIC8vIFRPR0dMRSBTVFVGRiAgLy8gVE9HR0xFIFNUVUZGICAvLyBUT0dHTEUgU1RVRkZcclxuXHJcbiRsaWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuJGRhcms6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG5ib2R5IHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYTI5ODAsICMyNmQwY2UpO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5jaGlsZC1yb3V0ZS1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogY2FsYygzNSUgKyAxNDRweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvbGxvdy1saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzJweDtcclxuXHJcbiAgLmZvbGxvdy1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuICAgIC51c2VybmFtZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uYnRuLXN1Ym1pdCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogMC45KTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNDIwbXMgZWFzZTtcclxuICAmOmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNhbi10b2dnbGUtYnJhbmRpbmcoXHJcbiAgJGNhbi10b2dnbGUtb2ZmLWNvbG9yOiAjNzc3LFxyXG4gICRjYW4tdG9nZ2xlLW9uLWNvbG9yOiAjMDAwLFxyXG4gICRjYW4tdG9nZ2xlLWluYWN0aXZlLXRleHQ6IHJnYmEod2hpdGUsIDAuNSksXHJcbiAgJGNhbi10b2dnbGUtdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSlcclxuKSB7XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmW2Rpc2FibGVkXSB+IGxhYmVsIHtcclxuICAgICAgY29sb3I6IHJnYmEoJGNhbi10b2dnbGUtb2ZmLWNvbG9yLCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMgfiBsYWJlbCxcclxuICAgICY6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICAgIC5jYW4tdG9nZ2xlX19zd2l0Y2gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW4tdG9nZ2xlLW9mZi1jb2xvcjtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNhbi10b2dnbGUtb2ZmLWNvbG9yLCAxMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB+IGxhYmVsIHtcclxuICAgICAgY29sb3I6IGRhcmtlbigkY2FuLXRvZ2dsZS1vZmYtY29sb3IsIDUlKTtcclxuICAgIH1cclxuICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgIH4gbGFiZWwge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IGRhcmtlbigkY2FuLXRvZ2dsZS1vbi1jb2xvciwgMyUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhbi10b2dnbGVfX3N3aXRjaCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjYW4tdG9nZ2xlLW9uLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkY2FuLXRvZ2dsZS1vbi1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgfiBsYWJlbCB7XHJcbiAgICAgICAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbi10b2dnbGUtb24tY29sb3I7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNhbi10b2dnbGUtb24tY29sb3IsIDEwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIC5jYW4tdG9nZ2xlX19sYWJlbC10ZXh0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzICRjYW4tdG9nZ2xlLXRyYW5zaXRpb247XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGNhbi10b2dnbGUtb2ZmLWNvbG9yLCA1JSk7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogJGNhbi10b2dnbGUtaW5hY3RpdmUtdGV4dDtcclxuICAgICAgfVxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICAvLyBBdXRvcHJlZml4ZXIgY2hva2VkIGhlcmUsIHNvIG1ha2luZyB0aGUgcHJlZml4ZXMgZXhwbGljaXRcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgJGNhbi10b2dnbGUtdHJhbnNpdGlvbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAkY2FuLXRvZ2dsZS10cmFuc2l0aW9uO1xyXG4gICAgICAgIGNvbG9yOiAkY2FuLXRvZ2dsZS1vZmYtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjYW4tdG9nZ2xlLWFwcGVhcmFuY2UoXHJcbiAgJGNhbi10b2dnbGUtd2lkdGg6IDEzNHB4LFxyXG4gICRjYW4tdG9nZ2xlLWhlaWdodDogMzZweCxcclxuICAkY2FuLXRvZ2dsZS1ib3JkZXItcmFkaXVzOiA0cHgsXHJcbiAgJGNhbi10b2dnbGUtb2Zmc2V0OiAycHgsXHJcbiAgJGNhbi10b2dnbGUtbGFiZWwtZm9udC1zaXplOiAxNHB4LFxyXG4gICRjYW4tdG9nZ2xlLXN3aXRjaC1mb250LXNpemU6IDEycHgsXHJcbiAgJGNhbi10b2dnbGUtc2hhZG93OiAwIDNweCAzcHggcmdiYShibGFjaywgMC40KVxyXG4pIHtcclxuICAkY2FuLXRvZ2dsZS1zd2l0Y2gtd2lkdGg6ICRjYW4tdG9nZ2xlLXdpZHRoLzI7XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAmOmZvY3VzIH4gbGFiZWwsXHJcbiAgICAmOmhvdmVyIH4gbGFiZWwge1xyXG4gICAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICRjYW4tdG9nZ2xlLXNoYWRvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICB+IGxhYmVsIHtcclxuICAgICAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKFxyXG4gICAgICAgICAgICAgICRjYW4tdG9nZ2xlLXdpZHRoIC1cclxuICAgICAgICAgICAgICAgICgkY2FuLXRvZ2dsZS1zd2l0Y2gtd2lkdGggKyAkY2FuLXRvZ2dsZS1vZmZzZXQpLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB+IGxhYmVsIHtcclxuICAgICAgICAgIC5jYW4tdG9nZ2xlX19zd2l0Y2gge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAkY2FuLXRvZ2dsZS1zaGFkb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGNhbi10b2dnbGUtbGFiZWwtZm9udC1zaXplO1xyXG5cclxuICAgIC5jYW4tdG9nZ2xlX19zd2l0Y2gge1xyXG4gICAgICBoZWlnaHQ6ICRjYW4tdG9nZ2xlLWhlaWdodDtcclxuICAgICAgZmxleDogMCAwICRjYW4tdG9nZ2xlLXdpZHRoO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkY2FuLXRvZ2dsZS1ib3JkZXItcmFkaXVzO1xyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6ICRjYW4tdG9nZ2xlLXdpZHRoLzI7XHJcbiAgICAgICAgZm9udC1zaXplOiAkY2FuLXRvZ2dsZS1zd2l0Y2gtZm9udC1zaXplO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkY2FuLXRvZ2dsZS1oZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6ICRjYW4tdG9nZ2xlLXdpZHRoLzI7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB0b3A6ICRjYW4tdG9nZ2xlLW9mZnNldDtcclxuICAgICAgICBsZWZ0OiAkY2FuLXRvZ2dsZS1vZmZzZXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGNhbi10b2dnbGUtYm9yZGVyLXJhZGl1cy8yO1xyXG4gICAgICAgIHdpZHRoOiAkY2FuLXRvZ2dsZS1zd2l0Y2gtd2lkdGggLSAkY2FuLXRvZ2dsZS1vZmZzZXQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRjYW4tdG9nZ2xlLWhlaWdodCAtICgkY2FuLXRvZ2dsZS1vZmZzZXQgKiAyKTtcclxuICAgICAgICBmb250LXNpemU6ICRjYW4tdG9nZ2xlLXN3aXRjaC1mb250LXNpemU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogJGNhbi10b2dnbGUtc2hhZG93O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhbi10b2dnbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAqLFxyXG4gICo6YmVmb3JlLFxyXG4gICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgJltkaXNhYmxlZF0gfiBsYWJlbCB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICB+IGxhYmVsIHtcclxuICAgICAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXVuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jaGVja2VkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIH4gbGFiZWwge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuY2FuLXRvZ2dsZV9fbGFiZWwtdGV4dCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FuLXRvZ2dsZV9fc3dpdGNoIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jaGVja2VkKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdW5jaGVja2VkKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZWZhdWx0IHZhbHVlcyBmb3IgLmNhbi10b2dnbGUgY2xhc3NcclxuICBAaW5jbHVkZSBjYW4tdG9nZ2xlLWJyYW5kaW5nO1xyXG4gIEBpbmNsdWRlIGNhbi10b2dnbGUtYXBwZWFyYW5jZTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRvZ2dsZXMgb2YgZGlmZmVyZW50IHNpemVzIGJ5IG92ZXJyaWRpbmcgdGhlIGNhbi10b2dnbGUtYXBwZWFyYW5jZSBtaXhpbiBkZWZhdWx0c1xyXG4gICYuY2FuLXRvZ2dsZS0tc2l6ZS1zbWFsbCB7XHJcbiAgICBAaW5jbHVkZSBjYW4tdG9nZ2xlLWFwcGVhcmFuY2UoXHJcbiAgICAgIDkwcHgsXHJcbiAgICAgIC8vIFRvZ2dsZSB3aWR0aFxyXG4gICAgICAgIDI4cHgsXHJcbiAgICAgIC8vIFRvZ2dsZSBoZWlnaHRcclxuICAgICAgICAycHgsXHJcbiAgICAgIC8vIFRvZ2dsZSBib3JkZXIgcmFkaXVzXHJcbiAgICAgICAgMXB4LFxyXG4gICAgICAvLyBPZmZzZXQgKGRpc3RhbmNlIGJ0dyBzd2l0Y2ggYW5kIGJveClcclxuICAgICAgICAxM3B4LFxyXG4gICAgICAvLyBMYWJlbCBmb250IHNpemVcclxuICAgICAgICAxMHB4LFxyXG4gICAgICAvLyBTd2l0Y2ggZm9udCBzaXplXHJcbiAgICAgICAgMCAycHggMnB4IHJnYmEoYmxhY2ssIDAuNClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAmLmNhbi10b2dnbGUtLXNpemUtbGFyZ2Uge1xyXG4gICAgQGluY2x1ZGUgY2FuLXRvZ2dsZS1hcHBlYXJhbmNlKFxyXG4gICAgICAxNjBweCxcclxuICAgICAgLy8gVG9nZ2xlIHdpZHRoXHJcbiAgICAgICAgNTBweCxcclxuICAgICAgLy8gVG9nZ2xlIGhlaWdodFxyXG4gICAgICAgIDRweCxcclxuICAgICAgLy8gVG9nZ2xlIGJvcmRlciByYWRpdXNcclxuICAgICAgICAycHgsXHJcbiAgICAgIC8vIE9mZnNldCAoZGlzdGFuY2UgYnR3IHN3aXRjaCBhbmQgYm94KVxyXG4gICAgICAgIDE0cHgsXHJcbiAgICAgIC8vIExhYmVsIGZvbnQgc2l6ZVxyXG4gICAgICAgIDE0cHgsXHJcbiAgICAgIC8vIFN3aXRjaCBmb250IHNpemVcclxuICAgICAgICAwIDRweCA0cHggcmdiYShibGFjaywgMC40KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIE9yIHJlLWJyYW5kIHRoZSB0b2dnbGUgZm9yIGRpZmZlcmVudCBhcHBsaWNhdGlvbnNcclxuICAmLmRlbW8tcmVicmFuZC0xIHtcclxuICAgIEBpbmNsdWRlIGNhbi10b2dnbGUtYnJhbmRpbmcoXHJcbiAgICAgICNiNTNlNzQsXHJcbiAgICAgIC8vIE9mZiBzdGF0ZSBjb2xvclxyXG4gICAgICAgICMzZDljNzIsXHJcbiAgICAgIC8vIE9uIHN0YXRlIGNvbG9yXHJcbiAgICAgICAgcmdiYSh3aGl0ZSwgMC42KSxcclxuICAgICAgLy8gT2ZmIHN0YXRlIHRleHQgY29sb3IgZWFzZS1pbi1vdXQgLyAvIFRyYW5zaXRpb24gdGltaW5nIGZ1bmN0aW9uXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgJi5kZW1vLXJlYnJhbmQtMiB7XHJcbiAgICBAaW5jbHVkZSBjYW4tdG9nZ2xlLWJyYW5kaW5nKFxyXG4gICAgICAjNDQ0LFxyXG4gICAgICAvLyBPZmYgc3RhdGUgY29sb3JcclxuICAgICAgICAjNjliZTI4LFxyXG4gICAgICAvLyBPbiBzdGF0ZSBjb2xvclxyXG4gICAgICAgIHJnYmEod2hpdGUsIDAuNyksXHJcbiAgICAgIC8vIE9mZiBzdGF0ZSB0ZXh0IGNvbG9yIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSAvIC8gVHJhbnNpdGlvbiB0aW1pbmdcclxuICAgICAgICBmdW5jdGlvblxyXG4gICAgKTtcclxuICAgIEBpbmNsdWRlIGNhbi10b2dnbGUtYXBwZWFyYW5jZShcclxuICAgICAgMTIwcHgsXHJcbiAgICAgIC8vIFRvZ2dsZSB3aWR0aFxyXG4gICAgICAgIDYwcHgsXHJcbiAgICAgIC8vIFRvZ2dsZSBoZWlnaHRcclxuICAgICAgICA2MHB4LFxyXG4gICAgICAvLyBUb2dnbGUgYm9yZGVyIHJhZGl1c1xyXG4gICAgICAgIDJweCxcclxuICAgICAgLy8gT2Zmc2V0IChkaXN0YW5jZSBidHcgc3dpdGNoIGFuZCBib3gpXHJcbiAgICAgICAgMTNweCxcclxuICAgICAgLy8gTGFiZWwgZm9udCBzaXplXHJcbiAgICAgICAgMTNweCxcclxuICAgICAgLy8gU3dpdGNoIGZvbnQgc2l6ZVxyXG4gICAgICAgIDAgNHB4IDRweCByZ2JhKGJsYWNrLCAwLjQpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\webdesign\socialmedia\angular-src\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map