/* eslint-disable no-multi-assign */
import nextRoutes from 'next-routes';

const routes = (module.exports = nextRoutes());

routes.add('blog', '/blog/:slug');
routes.add('about', '/about-us/:foo(bar|baz)');
