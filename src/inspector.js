import { InspectorControls, ColorPalette } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	BaseControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		startingNumber,
		endingNumber,
		numberPrefix,
		numberSuffix,
		delimiter,
		titleColor,
		titleFontSize,
		speed,
		numberColor,
		numberFontSize,
		spacing,
	} = attributes;

	const validateValue = ( value ) => {
		if ( isNaN( Number( value ) ) ) {
			return 0;
		}
		return Number( value );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Content', 'ib-counter' ) }>
				<TextControl
					label={ __( 'Starting Number', 'ib-counter' ) }
					value={ startingNumber }
					onChange={ ( startingNumber ) => {
						startingNumber = validateValue( startingNumber );
						setAttributes( { startingNumber } );
					} }
				/>
				<TextControl
					label={ __( 'Ending Number', 'ib-counter' ) }
					value={ endingNumber }
					onChange={ ( endingNumber ) => {
						endingNumber = validateValue( endingNumber );
						setAttributes( { endingNumber } );
					} }
				/>
				<TextControl
					label={ __( 'Prefix Text', 'ib-counter' ) }
					value={ numberPrefix }
					onChange={ ( numberPrefix ) => {
						setAttributes( { numberPrefix } );
					} }
				/>
				<TextControl
					label={ __( 'Suffix Text', 'ib-counter' ) }
					value={ numberSuffix }
					onChange={ ( numberSuffix ) => {
						setAttributes( { numberSuffix } );
					} }
				/>
				<TextControl
					label={ __( 'Speed', 'ib-counter' ) }
					value={ speed }
					onChange={ ( speed ) => {
						speed = validateValue( speed );
						setAttributes( { speed } );
					} }
				/>
				<SelectControl
					label={ __( 'Thousand Separator', 'ib-counter' ) }
					value={ delimiter }
					options={ [
						{ value: ',', label: __( 'Comma', 'ib-counter' ) },
						{ value: '.', label: __( 'Dot', 'ib-counter' ) },
						{ value: 'none', label: __( 'None', 'ib-counter' ) },
					] }
					onChange={ ( delimiter ) => setAttributes( { delimiter } ) }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Style', 'ib-counter' ) }
				initialOpen={ false }
			>
				<BaseControl label={ __( 'Number Color', 'ib-counter' ) }>
					<ColorPalette
						value={ numberColor }
						onChange={ ( numberColor ) =>
							setAttributes( { numberColor } )
						}
					/>
				</BaseControl>
				<RangeControl
					label={ __( 'Number Font Size', 'ib-counter' ) }
					value={ numberFontSize }
					onChange={ ( numberFontSize ) =>
						setAttributes( { numberFontSize } )
					}
					min={ 1 }
					max={ 100 }
					allowReset
				/>
				<hr />
				<BaseControl label={ __( 'Title Color', 'ib-counter' ) }>
					<ColorPalette
						value={ titleColor }
						onChange={ ( titleColor ) =>
							setAttributes( { titleColor } )
						}
					/>
				</BaseControl>
				<RangeControl
					label={ __( 'Title Font Size', 'ib-counter' ) }
					value={ titleFontSize }
					onChange={ ( titleFontSize ) => {
						setAttributes( { titleFontSize } );
					} }
					min={ 1 }
					max={ 100 }
					allowReset
				/>
				<hr />
				<RangeControl
					label={ __( 'Spacing', 'ib-counter' ) }
					value={ spacing }
					onChange={ ( spacing ) => {
						setAttributes( { spacing } );
					} }
					min={ -100 }
					max={ 100 }
					allowReset
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
