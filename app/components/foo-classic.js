import Component from '@ember/component';
import { action } from '@ember/object';

export default class FooClassic extends Component {
  @action
  onInsert() {
    console.log(`FooClassic (${this.route}) inserted`);
  }

  @action
  onWillDestroy() {
    console.log(`FooClassic (${this.route}) willDestroy`);
  }

  willDestroyElement() {
    console.log(`FooClassic (${this.route}) willDestroyElement`);
  }
}
