'use strict';

var php = {
    dist: {
        options: {
            base: '<%= path.public %>',
            hostname: '0.0.0.0',
            port: 8001,
            keepalive: true,
            open: true,
            router: 'grunt/config/router.php'
        }
    }
};

module.exports = php;