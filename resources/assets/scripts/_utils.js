import $ from 'jquery';

function init(context) 
{
    $('[data-js]', context || 'body').addBack('[data-js]').each((moduleIndex, dataModule) => {
        let $module = $(dataModule);
        let data = $module.data();
        let modules = $module.data('js').split(',').map(module => module.trim());

        for (let key in modules) {
            let module = modules[key];

            if (window._vf[module] !== undefined) {
                let properties = Object.keys(data).reduce((carry, property) => {
                    if (typeof data[property] === 'string') {
                        carry[property] = data[property].match('=') ? queryToObject(data[property]) : carry[property];
                    } else {
                        carry[property] = data[property];
                    }

                    return carry;
                }, data);

                delete properties.js;

                properties.$element = $module;

                let instance = new window._vf[module](properties);

                properties.$element.data('module-instance', instance);

                if (instance.init) {
                    instance.init();
                }
            }
        }
    });
}

module.exports = {
    init: init
};