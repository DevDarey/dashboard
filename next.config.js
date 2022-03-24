const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias['styles'] = path.join(__dirname, 'styles');
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['utils'] = path.join(__dirname, 'utils');
        config.resolve.alias['layouts'] = path.join(__dirname, 'layouts');
        config.resolve.alias['services'] = path.join(__dirname, 'services');
        config.resolve.alias['modals'] = path.join(__dirname, 'modals');
        config.resolve.alias['contexts'] = path.join(__dirname, 'contexts');

        return config;
    },
};
