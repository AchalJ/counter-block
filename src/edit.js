import {
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		alignment,
		startingNumber,
		endingNumber,
		numberPrefix,
		numberSuffix,
		title,
		delimiter,
		speed,
		titleFontSize,
		titleColor,
		numberFontSize,
		numberColor,
		spacing,
	} = attributes;

	const getClassName = () => {
		const className = props.className;
		return props.isSelected ? className + ' is-selected' : className;
	};

	setTimeout( function () {
		if ( 'undefined' !== typeof ibCounter ) {
			ibCounter();
		}
	}, 500 );

	return [
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ ( value ) => {
						setAttributes( { alignment: value } );
					} }
				/>
			</BlockControls>
			<Inspector { ...{ attributes, setAttributes } } />
			<div className={ getClassName() }>
				<div
					className="ib-counter-container"
					style={ { textAlign: alignment } }
				>
					<div
						className="ib-counter"
						style={ {
							fontSize: numberFontSize,
							color: numberColor,
							marginBottom: spacing,
						} }
					>
						{ numberPrefix && (
							<span className="ib-counter-number-prefix">
								{ numberPrefix }
							</span>
						) }
						<span
							className="ib-counter-number"
							data-from-value={ startingNumber }
							data-to-value={ endingNumber }
							data-delimiter={ delimiter }
							data-duration={ speed }
						>
							{ ! startingNumber ? '0' : startingNumber }
						</span>
						{ numberSuffix && (
							<span className="ib-counter-number-suffix">
								{ numberSuffix }
							</span>
						) }
					</div>
					{ title && (
						<RichText
							tagName="div"
							className="ib-counter-title"
							value={ title }
							onChange={ ( title ) => setAttributes( { title } ) }
							placeholder={ __( 'Title', 'ib-counter' ) }
							allowedFormats={ [
								'core/bold',
								'core/italic'
							] }
							disableLineBreaks
							keepPlaceholderOnFocus={ true }
							style={ {
								fontSize: titleFontSize,
								color: titleColor,
							} }
						/>
					) }
				</div>
			</div>
		</>,
	];
};

export default edit;
