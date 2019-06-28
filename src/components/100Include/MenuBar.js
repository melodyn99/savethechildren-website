import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { get, map, some } from 'lodash-es';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

let nextInstanceId = 1;

function renderDropdownMenuItem(item) {
    return <NavDropdown.Item
        key={item.id || item.url || item.label}
        href={item.url}
    >
        {item.label}
    </NavDropdown.Item>;
}

function renderDropdown(data, name, className, id) {
    // TODO: implement scss of className
    const items = get(data, 'items');
    return <NavDropdown
        id={id}
        key={id || name || className}
        title={name}
        className={className}
        active={some(items, 'active')}
    >
        {map(items, renderDropdownMenuItem)}
    </NavDropdown>
}

function renderResourcesForYouDropdownMenuItems() {
    // TODO: implement this
}

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.instanceId = nextInstanceId;
        ++nextInstanceId;
    }

    render() {
        const { instanceId: id } = this;
        const { menuData } = this.props;
        const {
            aboutUs,
            resourcesForYou,
            featuredIssues,
            researchFindings,
            ourEvents,
            externalResources
        } = (menuData || {});
        const menuBarContentId = 'menuBarContent_' + id;
        const resForYouDropdownId = 'menubarResourcesForYouDropdown_' + id;
        const resForYouItems = get(resourcesForYou, 'items');

        return <Navbar bg="light" expand="sm" className="stc-menubar">
            <Navbar.Toggle aria-controls={menuBarContentId} />
            <Navbar.Collapse id={menuBarContentId}>
                <Nav className="stc-menubar-navbar-nav">
                    {renderDropdown(aboutUs, 'ABOUT_US', 'about-us-dropdown', 'menubarAboutUsDropdown_' + id)}
                    <NavDropdown
                        id={resForYouDropdownId}
                        title="RESOURCES_FOR_YOU"
                        className="resources-for-you-dropdown"
                        active={some(resForYouItems, 'active')}
                    >
                        {renderResourcesForYouDropdownMenuItems()}
                    </NavDropdown>
                    {renderDropdown(featuredIssues, 'FEATURED_ISSUES', 'featured-issues-dropdown', 'menubarFeaturedIssuesDropdown_' + id)}
                    {renderDropdown(researchFindings, 'RESEARCH_FINDINGS', 'research-finding-dropdown', 'menubarResearchFindingsDropdown_' + id)}
                    {renderDropdown(ourEvents, 'OUR_EVENTS', 'our-events-dropdown', 'menubarOurEventsDropdown_' + id)}
                    {renderDropdown(externalResources, 'EXTERNAL_RESOURCES', 'external-resources-dropdown', 'menubarExternalResourcesDropdown_' + id)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
    }
}

MenuBar.propTypes = {
    menuData: PropTypes.object.isRequired
};

export default withTranslation()(MenuBar);
