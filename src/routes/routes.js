const RouteBuilder = require('../builders/RouteBuilder');
const controlRoute = require('./control-route/control-route');
const malformedRoutes = require('./malformed-routes/malformed-routes');
const logsRoute = require('./logs-route/logs-route');

var maxineRoutes = RouteBuilder.createNewRoute()
                        .mapRoute("/sd", () => SVGDefsElement.sd()) // to test exceptions logging
                        .mapRoute('/control',controlRoute)
                        .mapRoute("/logs", logsRoute)
                        .mapRoute('*',malformedRoutes)                        
                        .getRoute();

module.exports = maxineRoutes;