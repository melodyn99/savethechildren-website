import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import footerLogo from '../../images/Footer/schk_web_footer_logo_schk_n_NA.png';
import facebookLinkIcon from '../../images/Footer/btn_footer_contact_FB.png';
import instagramLinkIcon from '../../images/Footer/btn_footer_contact_IG.png';

function Footer(props) {
	const { t } = props;

	return (
		<div className="wrapper-footer container-fluid">
			<div className="row footer">
				<div className="col-xs-4 footer-column footer-subscription">
					<form>
						<img className="footer-subscription-logo" src={footerLogo} alt="Logo of Save the Children"/>
						<label htmlFor="signup_email">{t("Common:Subscribe.Signup")}</label>
						<div className="input-group">
							<input type="email" className="form-control" id="signup_email" placeholder={t("Common:Subscribe.Email")}/>
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit">{t("Common:Subscribe.Subscribe")}</button>
							</span>
						</div>
					</form>
				</div>
				<div className="col-xs-4 footer-column footer-contact">
					<h2>{t("Common:Contact.Title")}</h2>
					<ul>
						<li className="email"><span className="sr-only">Email: </span><a target="_blank" rel="noopener noreferrer" href="mailto:hk.program@savethchildren.org">{t("Common:Contact.Email")}</a></li>
						<li className="tel"><span className="sr-only">Phone: </span><a target="_blank" rel="noopener noreferrer" href="tel:+852-2122-5640">{t("Common:Contact.Phone")}</a></li>
						<li className="fax"><span className="sr-only">Fax: </span><a target="_blank" rel="noopener noreferrer" href="tel:tel:+852-3160-8685">{t("Common:Contact.Fax")}</a></li>
					</ul>
					<div className="footer-social-icon-div">
						<a href="#facebook_link"><img className="footer-social-icon" src={facebookLinkIcon} alt="Facebook link"/></a>
						<a href="#instagram_link"><img className="footer-social-icon" src={instagramLinkIcon} alt="Instagram link"/></a>
					</div>
				</div>
				<div className="col-xs-4 footer-column footer-address">
					<h2>{t("Common:Address.Title")}</h2>
					<p>
						{t("Common:Address.Address1")}<br/>
						{t("Common:Address.Address2")}<br/>
						{t("Common:Address.Address3")}<br/>
						{t("Common:Address.Address4")}
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
