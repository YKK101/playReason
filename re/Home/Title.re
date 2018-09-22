open BsReactNative

let component = ReasonReact.statelessComponent("Title")

let styles = StyleSheet.create(
  Style.({
    "text": style([
      color(String("white")),
      fontSize(Float(20.)),
      fontWeight(`Bold) 
    ])
  })
)

let make = (~value="Temp", _children) => {
  ...component,
  render: (self) => (
    <Text style=styles##text value={value} />
  )
}