import $ from 'jquery';

let defaults = {
    $element: undefined,
    selectors: {
    	block: '.js-process-block',
    	number: '.js-process-number',
    	text: '.js-process-text'
    },
    classes: {
    	active: 'process__number--active',
    	display: 'process__text--display'
    }
}

export default class Process 
{
    constructor(properties = {}) 
    {
        let members = $.extend(true, {}, defaults, properties);

        this.$element = members.$element;
        this.selectors = members.selectors;
        this.classes = members.classes;
    }

    init() 
    {
        this.bind();
        this.$element.find(this.selectors.block).eq(0).find(this.selectors.number).addClass(this.classes.active);
        this.$element.find(this.selectors.block).eq(0).find(this.selectors.text).addClass(this.classes.display);
    }

    bind() 
    {
        this.$element.find(this.selectors.number).on('click', this.display.bind(this));
    }

    display(event)
    {
    	event.preventDefault();

    	let $text = $(event.currentTarget).parent().find(this.selectors.text);
    	let $allText = this.$element.find(this.selectors.text);
    	let $number = this.$element.find(this.selectors.number);

    	$allText.removeClass(this.classes.display);
    	$text.addClass(this.classes.display);

    	$number.removeClass(this.classes.active);
    	$(event.currentTarget).addClass(this.classes.active);
    }
}