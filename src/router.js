import Navaid from 'navaid';

const router = Navaid('/', on404).listen();

function on404(uri) {
  console.log(uri);
}

export function set(module) {
  this.set({
    route: module.default
  })
}

export default router;