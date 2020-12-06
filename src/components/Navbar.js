import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as UserIcon } from '../icons/user-solid.svg'
import { ReactComponent as TwitterIcon } from '../icons/twitter-brands.svg'
import { ReactComponent as InstagramIcon } from '../icons/instagram-brands.svg'
import { ReactComponent as SlackIcon } from '../icons/slack-brands.svg'
import { ReactComponent as LinkedInIcon } from '../icons/linkedin-brands.svg'
import { ReactComponent as LinkIcon } from '../icons/link-solid.svg'
import { ReactComponent as InstructablesIcon } from '../icons/instructables.svg'
import { ReactComponent as HamburgerIcon } from '../icons/hamburger.svg'
import { ReactComponent as GithubIcon } from '../icons/github-brands.svg'
import { ReactComponent as DiscordIcon } from '../icons/discord-brands.svg'
import { ReactComponent as GearIcon } from '../icons/cog-solid.svg'
import { ReactComponent as PeopleIcon } from '../icons/users-solid.svg'
import { ReactComponent as ArrowRightIcon } from '../icons/arrow-right-solid.svg'
import { ReactComponent as ArrowLeftIcon } from '../icons/arrow-left-solid.svg'

export function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav >
    );
}

export function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href={props.location} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export function NavBurger(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a
                href="#"
                className={`icon-button hamburger ${open ? "opened" : ""}`}
                onClick={() => setOpen(!open)}>
                <HamburgerIcon />
            </a>
            {open && props.children}
        </li>
    );
}

export function Logo() {

    return (
        <li className="nav-item">
            <a
                href="#"
                className="logo-a">

                <svg id="logo-svg" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0">
                        <circle cx="136" cy="136" r="136" fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0)">
                        <circle cx="136" cy="136" r="136" fill="#C4C4C4" />
                        <rect width="164.646" height="165.68" transform="matrix(0.573576 -0.819152 0.569997 0.821647 41.5631 135.87)" fill="#FFF8F8" />
                        <rect width="164.646" height="165.68" transform="matrix(0.573576 -0.819152 0.569997 0.821647 0 76.8698)" fill="#FFF8F8" />
                        <rect width="164.646" height="165.68" transform="matrix(0.573576 -0.819152 0.569997 0.821647 83 75.8698)" fill="#FFF8F8" />
                        <rect width="108.733" height="108.733" transform="matrix(-0.190809 -0.981627 0.195262 -0.980751 135.747 232.375)" fill="#1A1A1A" />
                        <rect width="28.7225" height="28.7225" transform="matrix(0.819152 -0.573576 0.824027 0.56655 112 26.4746)" fill="#121212" />
                        <rect width="14.6647" height="92.7158" transform="matrix(0.819152 -0.573576 0.849985 0.526807 174 49.4113)" fill="#111111" />
                        <rect width="14.6647" height="110.754" transform="matrix(-0.819152 -0.573576 -0.849985 0.526807 115.151 39.9089)" fill="#111111" />
                        <rect width="14.6647" height="110.754" transform="matrix(0.819152 -0.573576 0.849985 0.526807 159 39.9089)" fill="#111111" />
                        <path d="M151.901 250.015L240.07 76.3737L263.825 90.6469L151.901 250.015Z" fill="#1E1E1E" />
                        <path d="M120.296 250.015L32.1274 76.3737L8.37291 90.6469L120.296 250.015Z" fill="#1E1E1E" />
                        <path d="M214.619 207.883C214.619 208.926 214.414 209.91 214.004 210.836C213.594 211.75 213.072 212.594 212.439 213.367C211.818 214.141 211.133 214.844 210.383 215.477C209.645 216.098 208.941 216.637 208.273 217.094C209.211 217.176 210.143 217.404 211.068 217.779C212.006 218.143 212.844 218.652 213.582 219.309C214.332 219.953 214.936 220.738 215.393 221.664C215.861 222.578 216.096 223.621 216.096 224.793C216.096 225.754 215.955 226.621 215.674 227.395C215.404 228.156 215.041 228.842 214.584 229.451C214.127 230.049 213.605 230.564 213.02 230.998C212.445 231.432 211.859 231.789 211.262 232.07C210.664 232.352 210.072 232.557 209.486 232.686C208.912 232.826 208.402 232.896 207.957 232.896C206.832 232.896 205.895 232.762 205.145 232.492C204.406 232.223 203.814 231.895 203.369 231.508C202.936 231.109 202.631 230.693 202.455 230.26C202.279 229.826 202.191 229.445 202.191 229.117C202.191 228.613 202.297 228.133 202.508 227.676C202.73 227.207 203.023 226.785 203.387 226.41C203.75 226.035 204.172 225.707 204.652 225.426C205.133 225.133 205.631 224.91 206.146 224.758L206.516 225.338C205.777 225.736 205.232 226.252 204.881 226.885C204.529 227.506 204.354 228.133 204.354 228.766C204.354 229.117 204.424 229.486 204.564 229.873C204.717 230.248 204.939 230.594 205.232 230.91C205.537 231.227 205.912 231.49 206.357 231.701C206.814 231.9 207.348 232 207.957 232C208.848 232 209.68 231.836 210.453 231.508C211.227 231.168 211.895 230.705 212.457 230.119C213.031 229.521 213.477 228.824 213.793 228.027C214.121 227.23 214.285 226.369 214.285 225.443C214.285 224.494 214.086 223.656 213.688 222.93C213.301 222.203 212.779 221.594 212.123 221.102C211.479 220.598 210.729 220.217 209.873 219.959C209.029 219.701 208.15 219.572 207.236 219.572C206.861 219.572 206.492 219.596 206.129 219.643C205.766 219.678 205.42 219.73 205.092 219.801C204.775 219.859 204.488 219.918 204.23 219.977C203.973 220.035 203.773 220.082 203.633 220.117L203.457 219.941L205.074 217.428C205.203 217.393 205.35 217.352 205.514 217.305C205.654 217.27 205.824 217.234 206.023 217.199C206.223 217.152 206.445 217.117 206.691 217.094C207.254 216.754 207.84 216.326 208.449 215.811C209.07 215.283 209.633 214.68 210.137 214C210.652 213.309 211.074 212.535 211.402 211.68C211.742 210.824 211.912 209.893 211.912 208.885C211.912 207.186 211.508 205.902 210.699 205.035C209.891 204.168 208.736 203.734 207.236 203.734C206.369 203.734 205.496 203.922 204.617 204.297C203.738 204.66 202.889 205.223 202.068 205.984C201.26 206.746 200.498 207.707 199.783 208.867C199.08 210.027 198.465 211.393 197.938 212.963C197.422 214.533 197.012 216.32 196.707 218.324C196.402 220.328 196.25 222.549 196.25 224.986C196.25 225.994 196.291 226.926 196.373 227.781C196.467 228.637 196.602 229.381 196.777 230.014C196.965 230.635 197.193 231.121 197.463 231.473C197.732 231.824 198.049 232 198.412 232C198.775 232 199.062 231.736 199.273 231.209C199.496 230.67 199.66 229.973 199.766 229.117C199.883 228.25 199.953 227.283 199.977 226.217C200.012 225.15 200.029 224.078 200.029 223C200.029 221.359 200.006 219.818 199.959 218.377C199.912 216.924 199.859 215.629 199.801 214.492C199.754 213.355 199.707 212.406 199.66 211.645C199.613 210.883 199.584 210.373 199.572 210.115L201.611 209.5C201.67 209.594 201.752 209.875 201.857 210.344C201.963 210.812 202.068 211.434 202.174 212.207C202.279 212.969 202.367 213.859 202.438 214.879C202.52 215.887 202.561 216.977 202.561 218.148C202.561 220.129 202.502 221.869 202.385 223.369C202.279 224.857 202.127 226.152 201.928 227.254C201.729 228.344 201.494 229.252 201.225 229.979C200.967 230.705 200.68 231.285 200.363 231.719C200.059 232.141 199.736 232.439 199.396 232.615C199.068 232.803 198.74 232.896 198.412 232.896C197.697 232.896 197.053 232.65 196.479 232.158C195.916 231.678 195.436 231.039 195.037 230.242C194.639 229.434 194.334 228.514 194.123 227.482C193.912 226.439 193.807 225.367 193.807 224.266C193.807 222.684 193.953 221.049 194.246 219.361C194.539 217.674 194.973 216.027 195.547 214.422C196.121 212.805 196.83 211.275 197.674 209.834C198.518 208.381 199.49 207.115 200.592 206.037C201.693 204.947 202.918 204.086 204.266 203.453C205.625 202.809 207.096 202.486 208.678 202.486C209.58 202.486 210.395 202.609 211.121 202.855C211.859 203.09 212.486 203.441 213.002 203.91C213.518 204.367 213.916 204.93 214.197 205.598C214.479 206.266 214.619 207.027 214.619 207.883Z" fill="black" />
                    </g>
                </svg>



            </a>
        </li>
    );
}

export function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href={props.location} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                {/* <span className="icon-right">{props.rightIcon}</span> */}
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon={<UserIcon />}
                        location="https://harrisfauntleroy.dev/resume/"
                    >Resume
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<GearIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="projects">
                        Projects
          </DropdownItem>

                    <DropdownItem
                        leftIcon={<PeopleIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="personal">
                        Socials
          </DropdownItem>

                    <DropdownItem
                        leftIcon={<LinkIcon />}
                        rightIcon={<ArrowRightIcon />}
                        goToMenu="links">
                        Links
          </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'projects'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Projects</h2>
                    </DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/marvel-react-app" leftIcon="🦸">Marvel React App</DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/no-more-plants" leftIcon="🌿">No More Plants!</DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/library-admin-panel" leftIcon="📖">Library Admin Panel</DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy/hermes" leftIcon="🚧">Hermes (In-dev)</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'personal'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Socials</h2>
                    </DropdownItem>
                    <DropdownItem location="https://github.com/HarrisFauntleroy" leftIcon={<GithubIcon />}>Github</DropdownItem>
                    <DropdownItem location="https://www.linkedin.com/in/harris-fauntleroy-b4b5b51b1/" leftIcon={<LinkedInIcon />}>LinkedIn</DropdownItem>
                    <DropdownItem location="https://twitter.com/CosmicOctopus99" leftIcon={<TwitterIcon />}>Twitter</DropdownItem>
                    <DropdownItem location="https://discord.gg/N4MGJGG7RA" leftIcon={<DiscordIcon />}>Discord</DropdownItem>
                    <DropdownItem location="https://www.instagram.com/harrisfauntleroy/" leftIcon={<InstagramIcon />}>Instagram</DropdownItem>
                    <DropdownItem location="https://www.instructables.com/member/HazzWold1993/" leftIcon={<InstructablesIcon />}>Instructables</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'links'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                        <h2>Links</h2>
                    </DropdownItem>
                    <DropdownItem location="https://mdigi.tools/color-shades/" leftIcon={<GithubIcon />}>Color Shade tool</DropdownItem>
                    <DropdownItem location="https://unsplash.com/" leftIcon={<LinkedInIcon />}>UnSplash Photos</DropdownItem>
                    <DropdownItem location="https://tinypng.com/" leftIcon={<TwitterIcon />}>TinyPNG</DropdownItem>
                    <DropdownItem location="https://fontawesome.com/icons?d=gallery" leftIcon={<DiscordIcon />}>Font Awesome Icons</DropdownItem>
                    <DropdownItem location="https://cdnjs.com/" leftIcon={<InstagramIcon />}>CDNJS</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}