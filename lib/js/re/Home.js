// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Title = require("./Title.js");
var DummyButton = require("./DummyButton.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var UpdateStateButton = require("./UpdateStateButton.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/lib/js/src/style.js");
var StyleSheet$BsReactNative = require("bs-react-native/lib/js/src/styleSheet.js");

var component = ReasonReact.statelessComponent("Home");

var styles = StyleSheet$BsReactNative.create({
      container: Style$BsReactNative.style(/* :: */[
            Style$BsReactNative.flex(1),
            /* :: */[
              Style$BsReactNative.justifyContent(/* SpaceAround */4),
              /* :: */[
                Style$BsReactNative.alignItems(/* Center */2),
                /* :: */[
                  Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["ivory"])),
                  /* [] */0
                ]
              ]
            ]
          ])
    });

function make(title, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(styles.container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, Title.make(title, /* array */[])),
                              ReasonReact.element(undefined, undefined, DummyButton.make(/* array */[])),
                              ReasonReact.element(undefined, undefined, UpdateStateButton.make(/* array */[]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.styles = styles;
exports.make = make;
/* component Not a pure module */
