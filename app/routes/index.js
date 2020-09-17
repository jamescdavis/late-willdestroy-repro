import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  activate() {
    console.log('acivated: index');
  }

  didTransition() {
    console.log('transitioned to: index');
  }
}
