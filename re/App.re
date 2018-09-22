open BsReactNative;

let styles = StyleSheet.create(
  Style.({
    "container": style([
      flex(1.),
      justifyContent(Center),
      alignItems(Center),
    ]),
    "text": style([
      fontSize(Float(20.)),
      color(String("#333"))
    ])
  })
)

let app = () =>
  <View style=styles##container>
    <Text style=styles##text value="Reason is awesome!" />
  </View>;
