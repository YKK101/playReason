open BsReactNative

let component = ReasonReact.statelessComponent("Home");

let styles = StyleSheet.create(
  Style.({
    "container": style([
      flex(1.),
      justifyContent(SpaceAround),
      alignItems(Center),
      backgroundColor(String("ivory"))
    ])
  })
);

let make = (~title=?, _children) => {
  ...component,
  render: (self) => (
    <View style=styles##container>
      <Title value=?title />
      <DummyButton />
      <UpdateStateButton />
    </View>
  )
}