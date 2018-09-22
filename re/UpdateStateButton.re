open BsReactNative

type state = {
  count: int,
}

type action =
  | Add;

let component = ReasonReact.reducerComponent("UpdateStateButton");

let make = (_children) => {
  {
    ...component,
    initialState: () => { count: 0 },
    reducer: (action, state) => {
      switch(action) {
      | Add => ReasonReact.Update({ ...state, count: state.count + 1 })
      }
    },
    render: (self) => (
      <MyButton
        title=("Current = " ++ string_of_int(self.state.count) ++ " (Click to add)")
        onPress=(_event => self.send(Add))
      />
    )
  }
}