import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import '../../resources/css/dsf.main.min.css';

export type NavMenuItem = {
  label: string;
  href: string;
};

export interface DSFHeaderProps {
  headerTitle: string;
  showLang?: boolean;
  menu?: NavMenuItem[];
}

const DSFHeader = ({ headerTitle, menu, showLang }: DSFHeaderProps) => {
  return (
    <section className="govcy-container-fluid govcy-p-0 govcy-m-0 govcy-position-relative govcy-d-print-none">
      <div className="govcy-container" id="headerContainer">
        <div className="row">
          <header className="govcy-header govcy-bg-primary govcy-text-white govcy-bg-primary-right">
            <a href="/" className="govcy-logo">
              <img />
            </a>

            {showLang && (
              <div className="govcy-text-white govcy-bg-primary">
                <select name="govcy-lang-menu" className="govcy-lang-menu govcy-text-white">
                  <option value="English">English</option>
                  <option value="Greek">Ελληνικά</option>
                </select>
              </div>
            )}

            {menu && menu.length && (
              <>
                <input className="govcy-menu-btn govcy-d-none" type="checkbox" id="menu-btn" />
                <label className="govcy-menu-icon govcy-d-md-none" htmlFor="menu-btn">
                  Menu
                  <span className="material-icons govcy-my-3">arrow_drop_down</span>
                </label>
              </>
            )}

            <span className="govcy-service-name">{headerTitle}</span>
            {menu && menu.length && (
              <ul className="govcy-menu govcy-bg-sub-menu govcy-bg-md-primary">
                {menu.map((menuItem: NavMenuItem) => (
                  <li>
                    <NavLink to={menuItem.href}>{menuItem.label}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </header>
        </div>
      </div>
    </section>
  );
};

DSFHeader.defaultProps = {
  showLang: true,
  menu: undefined,
  headerTitle: '',
};

DSFHeader.displayName = 'DSFHeader';

export default DSFHeader;
