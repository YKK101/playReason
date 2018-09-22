open BsReactNative

let component = ReasonReact.statelessComponent("Button")

let styles = StyleSheet.create(
  Style.({
    "buttonContainer": style([
      backgroundColor(String("green")),
      padding(Pt(16.)),
      borderRadius(8.)
    ]),
    "title": style([
      color(String("white")),
      fontSize(Float(18.))
    ])
  })
)

let make = (~title="Title", ~onPress=?, _children) => {
  ...component,
  render: (self) => (
    <TouchableOpacity style=styles##buttonContainer onPress=?onPress>
      <Text style=styles##title value=title />
    </TouchableOpacity>
  )
}