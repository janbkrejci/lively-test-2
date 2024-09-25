import { TilingLayout, component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { Color } from "lively.graphics/color.js";
"format esm";
const AMorph = component({
  name: undefined,
  borderColor: Color.rgb(23,160,251),
  borderWidth: 1,
  extent: pt(271.6,183.9),
  layout: new TilingLayout({
  resizePolicies: [["aMorph", {
        height: "fixed",
        width: "fill"
      }]]
}),
  position: pt(232.9,142.9),
  scale: 1.3107960100000002,
  submorphs: [{
  name: 'aMorph',
  borderColor: Color.rgb(23,160,251),
  borderWidth: 1,
  extent: pt(272,42.9),
  fill: Color.rgb(237,111,111)
}]
});



export { AMorph }