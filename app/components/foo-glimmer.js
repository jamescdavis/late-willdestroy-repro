import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FooGlimmerComponent extends Component {
  @action
  onInsert() {
    console.log(`FooGlimmer (${this.args.route}) inserted`);
  }

  @action
  onWillDestroy() {
    console.log(`FooGlimmer (${this.args.route}) willDestroy`);
  }
}
