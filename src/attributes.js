import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},
	startingNumber: {
		type: 'number',
		default: 0,
	},
	endingNumber: {
		type: 'number',
		default: 100,
	},
	numberPrefix: {
		type: 'string',
		default: '',
	},
	numberSuffix: {
		type: 'string',
		default: '',
	},
	title: {
		type: 'string',
		default: __( 'Counter Title', 'ib-counter' ),
	},
	delimiter: {
		type: 'string',
		default: 'none',
	},
	titleColor: {
		type: 'string',
	},
	titleFontSize: {
		type: 'number',
	},

	speed: {
		type: 'number',
		default: 2000,
	},
	alignment: {
		type: 'string',
		default: 'center',
	},
	numberColor: {
		type: 'string',
	},
	numberFontSize: {
		type: 'number',
		default: 40,
	},
	spacing: {
		type: 'number',
	},
};
export default attributes;
