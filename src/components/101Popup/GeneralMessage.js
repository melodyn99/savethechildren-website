import React from 'react';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function GeneralMessage(props) {
	// const { t, i18n } = props;

	return (
		<div>
			<h4>{props.message}</h4>
		</div>
	);
}

export default withTranslation()(GeneralMessage);
