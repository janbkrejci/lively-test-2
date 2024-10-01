'format esm';
import { part } from 'lively.morphic';
import { Outer } from './ui/outer.cp.js';
import { connect } from 'lively.bindings';

export async function main () {
  // new MyRectangle().openInWorld();
  part(Outer).openInWorld();
  connect($world, 'extent', Outer, 'relayout');
}
