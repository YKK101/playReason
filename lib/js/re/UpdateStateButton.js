// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var MyButton = require("./MyButton.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("UpdateStateButton");

function make() {
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
          /* render */(function (self) {
              return ReasonReact.element(undefined, undefined, MyButton.make("Current = " + (String(self[/* state */1][/* count */0]) + " (Click to add)"), (function () {
                                return Curry._1(self[/* send */3], /* Add */0);
                              }), /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[/* count */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, state) {
              return /* Update */Block.__(0, [/* record */[/* count */state[/* count */0] + 1 | 0]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
