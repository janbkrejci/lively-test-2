import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { Color } from "lively.graphics/color.js";
"format esm";
const MyRectangle = component({
  name: undefined,
  borderColor: Color.rgb(23,160,251),
  borderWidth: 1,
  extent: pt(201.4,171.6),
  position: pt(794.8,271.4)
});



export { MyRectangle }