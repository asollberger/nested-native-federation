const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
    name: 'navigation',

    exposes: {
        './Component': './projects/navigation/src/app/app.component.ts',
        './routes': './projects/navigation/src/app/app.routes.ts'
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
    },

    skip: [
        'rxjs/ajax',
        'rxjs/fetch',
        'rxjs/testing',
        'rxjs/webSocket'
        // Add further packages you don't need at runtime
    ]
});
