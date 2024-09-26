import { ConstraintLayout, ShadowObject, component } from 'lively.morphic/index.js';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
'format esm';
const Outer = component({
  name: undefined,
  dropShadow: new ShadowObject({ color: Color.black, blur: 15 }),
  clipMode: 'scroll',
  borderColor: Color.rgb(23, 160, 251),
  extent: pt(1024, 768),
  fill: Color.rgb(194, 236, 201),
  layout: new ConstraintLayout({
    lastExtent: {
      x: 0,
      y: 0
    },
    reactToSubmorphAnimations: false,
    submorphSettings: [['inner', {
      x: 'center',
      y: 'center'
    }]]
  }),
  position: pt(297, 445.8),
  submorphs: [{
    tooltip: 'Inner Morph',
    name: 'inner',
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(320, 200),
    fill: Color.rgb(243, 183, 183),
    position: pt(512 - 160, 384 - 100)
  }]
});

export { Outer };
