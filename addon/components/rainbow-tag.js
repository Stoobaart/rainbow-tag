import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/rainbow-tag';

export default Component.extend({
  layout,
  classNames: ['rainbow-tag'],
  rainbowArray: [],

  didInsertElement() {
    this._super(...arguments);
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const text = this.get('string').split('');
    let i = 0;
    let letterArray = text.map((letter) => {
      const color = colors[i];
      if (i >= 6) {
        i = 0;
      } else if ( letter === ' ') {
        i = i;
      } else {
        i++;
      }
      return {
        color: color,
        value: letter
      }

    });
    this.set('rainbowArray', letterArray);
  }
});