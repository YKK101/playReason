open BsReactNative

let component = ReasonReact.statelessComponent("Home");

let styles = StyleSheet.create(
  Style.({
    "container": style([
      flex(1.),
      justifyContent(Center),
      alignItems(Center),
      backgroundColor(String("salmon"))
    ])
  })
);

let make = (~title=?, _children) => {
  ...component,
  render: (self) => (
    <View style=styles##container>
      <Title value=?title />
    </View>
  )
}