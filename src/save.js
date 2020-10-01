import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const save = ( props ) => {
	const { attributes } = props;

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

	return (
		<div>
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
				{ ! RichText.isEmpty( title ) && (
					<RichText.Content
						tagName="div"
						className="ib-counter-title"
						value={ title }
						style={ {
							fontSize: titleFontSize,
							color: titleColor,
						} }
					/>
				) }
			</div>
		</div>
	);
};
export default save;
