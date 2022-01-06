import selectorManager from './selectorManager.js'
import styleManager from './styleManager.js'
import blockManager from './blockManager.js'
import canvas from './canvas.js'
import plugins from './plugins.js'
import panels from './panels.js'

export default {
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: 'calc(100vh - 50px)',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels,
  selectorManager,
  styleManager,
  blockManager,
  canvas,
  ...plugins
};