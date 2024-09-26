import { ConstraintLayout, component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { Color } from "lively.graphics/color.js";
"format esm";
const Outer = component({
  name: undefined,
  borderColor: Color.rgb(23,160,251),
  borderWidth: 1,
  extent: pt(156,130.6),
  fill: Color.rgb(194,236,201),
  layout: new ConstraintLayout({
  lastExtent: {
    x: 225.51171875,
    y: 191.3515625
  },
  reactToSubmorphAnimations: false,
  submorphSettings: [["inner", {
        x: "center",
        y: "center"
      }]]
}),
  position: pt(297,445.8),
  submorphs: [{
  tooltip: 'Inner Morph',
  name: 'inner',
  borderColor: Color.rgb(23,160,251),
  borderWidth: 1,
  extent: pt(110.7,80.8),
  fill: Color.rgb(243,183,183),
  position: pt(65.9,72.4)
}],
  tooltip: 'Outer Morph'
});



export { Outer }