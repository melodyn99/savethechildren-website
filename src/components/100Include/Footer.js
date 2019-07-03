import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import footerLogo from '../../images/Footer/schk_web_footer_logo_schk_n_NA.png';
import facebookLinkIcon from '../../images/Footer/btn_footer_contact_FB.png';
import instagramLinkIcon from '../../images/Footer/btn_footer_contact_IG.png';

function Footer(props) {
	// const { i18n } = props;

	return (
		<div className="wrapper-footer container-fluid">
			<div class="row">
				<div className="col-sm-4 footer-column footer-subscription">
					<form>
						<img className="footer-subscription-logo" src={footerLogo} alt="Logo of Save the Children"/>
						<label for="signup_email">Sign up for exclusive Netizen Academy news and events</label>
						<div class="input-group">
							<input type="email" class="form-control" id="signup_email" placeholder="Email"/>
							<span class="input-group-btn">
								<button class="btn btn-default" type="submit">Subscribe</button>
							</span>
						</div>
					</form>
				</div>
				<div className="col-sm-4 footer-column footer-contact">
					<h3>Contact</h3>
					<ul>
						<li className="email">hk.program@savethchildren.org</li>
						<li className="tel">(852) 2122-5640</li>
						<li className="fax">(852) 3160-8685</li>
					</ul>
					<div className="footer-social-icon-div">
						<a href="#facebook_link"><img className="footer-social-icon" src={facebookLinkIcon} alt="Facebook link"/></a>
						<a href="#instagram_link"><img className="footer-social-icon" src={instagramLinkIcon} alt="Instagram link"/></a>
					</div>
				</div>
				<div className="col-sm-4 footer-column footer-address">
					<h3>Address</h3>
					<p>
						8/F Pacific Plaza,<br/>
						410-418 Des Voeux Root West,<br/>
						Sai Wan,<br/>
						Hong Kong
					</p>
				</div>
			</div>
		</div>
	);
}

Footer.propTypes = {
	html: PropTypes.string
};

export default withTranslation()(Footer);
