import React from 'react';
import reactDom from 'react-dom';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

interface ICustomWindow extends Window {
  ga?: any
}

const customWindow:ICustomWindow = window;

customWindow.ga = customWindow.ga;

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? reactDom.render
    : reactDom.hydrate || reactDom.render;

  const render = (Comp: any) => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }

  const ga = customWindow.ga;
  ga('create', 'UA-2176096-15', 'auto');


  // Only require the plugins you've imported above.
  ga('require', 'eventTracker');
  ga('require', 'outboundLinkTracker');
  ga('require', 'urlChangeTracker');

  ga('send', 'pageview');

}
