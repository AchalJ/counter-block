import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes';
import edit from './edit';
import save from './save';
import example from './example';
import metadata from '../block.json';
import { BlockIcon } from './icon';
import './style.scss';
import './editor.scss';

const { name, category, keywords, supports } = metadata;

registerBlockType( name, {
	title: __( 'Counter', 'ib-counter' ),
	description: __(
		'Show off numbers or stats on your website using animated Counter block for Gutenberg.',
		'ib-counter'
	),
	icon: <BlockIcon />,
	category,
	keywords,
	supports,
	attributes,
	edit,
	save,
	example,
} );
