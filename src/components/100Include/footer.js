import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
	let { html } = props;
	if (!html) {
		html = 'Sample footer content';
	}
	return (
		<div className="stc-footer">{html}</div >
	);
}

Footer.propTypes = {
	html: PropTypes.string
};

export default Footer;
