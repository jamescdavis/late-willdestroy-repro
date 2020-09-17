import Route from '@ember/routing/route';

export default class Route1Route extends Route {
  activate() {
    console.log('acivated: route1');
  }

  didTransition() {
    console.log('transitioned to: route1');
  }
}
