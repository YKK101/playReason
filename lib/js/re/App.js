// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/lib/js/src/components/text.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/lib/js/src/style.js");
var StyleSheet$BsReactNative = require("bs-react-native/lib/js/src/styleSheet.js");

var styles = StyleSheet$BsReactNative.create({
      container: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.flex(1),
            /* :: */[
              Style$BsReactNative.justifyContent(/* Center */2),
              /* :: */[
                Style$BsReactNative.alignItems(/* Center */2),
                /* [] */0
              ]
            ]
          ]),
      text: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.fontSize(/* Float */Block.__(0, [20])),
            /* :: */[
              Style$BsReactNative.color(/* String */Block.__(0, ["#333"])),
              /* [] */0
            ]
          ])
    });

function app() {
  return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles.container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles.text), undefined, undefined, undefined, undefined, undefined, undefined, "Reason is awesome!", /* array */[]))]));
}

exports.styles = styles;
exports.app = app;
/* styles Not a pure module */