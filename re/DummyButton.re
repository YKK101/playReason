open BsReactNative

let component = ReasonReact.statelessComponent("DummyButton");

let make = (_children) => {
  let onPress = () => { print_endline("Hi") };
  {
    ...component,
    render: (self) => <MyButton title="Just a dummy button" onPress />
  }
}