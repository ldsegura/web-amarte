"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Container, Button, Nav, NavDropdown } from "react-bootstrap";
import { useTranslations } from "next-intl";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import NavLink from "./components/NavLink";
import breakpointConstants from "../../../constants/breakpointConstants";
import localstorageConstants from "../../../constants/localstorageConstants";
import pagesContants from "../../../constants/pagesContants";
import i18nConfig from "../../../../i18nConfig";
import useActiveLinkMenuHeader from "@/hooks/useActiveLinkMenuHeader";

const Header = () => {
  const hasActiveLink = useActiveLinkMenuHeader();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const locale = i18nConfig.defaultLocale;
  const expand = isMobile ? false : true;
  const [showOffCanvas, setShowOffCanvas] = useState(false)
  //const router = useRouter();
  const navigate = {};

  // const dispatch = useDispatch();
  // const { auth } = useGlobalState();
  const auth = {complete: false}
  const textLogin = useTranslations("login");
  const textWebsiteTextLink = useTranslations("websiteTextLink");

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);
  const handleLogout = () => {
    window.localStorage.removeItem(localstorageConstants.AUTH);
    authAction.logout(dispatch);

    const location = {
      pathname: `${languageUtils.linksLocale(locale)}`,
    };
    navigate(location);
  };

  useEffect(() => {
    handleClose();
  },[hasActiveLink]);

  return (
    <header style={{
      position: isMobile? "initial": "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "white"
    }}>
      {!isMobile && (
        <Navbar className="bg-body-tertiary">
          <Container>
            <Link href={"/"} className="navbar-brand">
              {`Logo ${process.env.NEXT_PUBLIC_SITENAME}`}
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Collapse className="justify-content-end">
              {auth.complete && (
                <>
                  <NavDropdown
                    title={`${textLogin("wellcome")} ${
                      auth.username
                    }`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      {textLogin("login.logout")}
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              {!auth.complete && (
                <>
                  <Link href={`${pagesContants.login}`}>
                    <Button
                      className="text-white me-1"
                      size="sm"
                      as="span"
                    >
                      {textLogin("login")}
                    </Button>
                  </Link>
                  <Link href={`/${
                        pagesContants.register
                      }`}>
                    <Button
                      className="text-white"
                      size="sm"
                      as="span"
                    >
                      {textLogin("singup")}
                    </Button>
                  </Link>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Navbar expand={expand} className="border-bottom">
        <Container>
          {isMobile && (
            <Link href={`/`} className="navbar-brand">
            {`Logo ${process.env.NEXT_PUBLIC_SITENAME}`}
            </Link>
          )}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow}/>
          <Navbar.Offcanvas show={showOffCanvas} onHide={handleClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div
                className={`justify-content-between d-flex w-100 ${
                  isMobile ? "flex-column" : ""
                }`}
              >
                <Nav>
                  <NavLink text={textWebsiteTextLink("aboutUS")} hasActiveLink={hasActiveLink === 1} href={pagesContants.aboutUSES}/>
                  <NavLink text={textWebsiteTextLink("mesaDirectiva")} hasActiveLink={hasActiveLink === 2} href={pagesContants.mesaDirectivaES}/>
                  <NavLink text={textWebsiteTextLink("amarteMexico")} hasActiveLink={hasActiveLink === 3} href={pagesContants.amarteMexicoES}/>
                  <NavLink text={textWebsiteTextLink("afiliate")} hasActiveLink={hasActiveLink === 4} href={pagesContants.afiliateES}/>
                  <NavLink text={textWebsiteTextLink("directorios")} hasActiveLink={hasActiveLink === 5} href={pagesContants.directoriosES}/>
                  <NavLink text={textWebsiteTextLink("education")} hasActiveLink={hasActiveLink === 6} href={pagesContants.educationES}/>
                  <NavLink text={textWebsiteTextLink("galeria")} hasActiveLink={hasActiveLink === 7} href={pagesContants.galeriaES}/>
                  <NavLink text={textWebsiteTextLink("blog")} hasActiveLink={hasActiveLink === 8} href={pagesContants.blogES}/>
                </Nav>
                <Nav>
                  <NavLink text={textWebsiteTextLink("bolsaTrabajo")} hasActiveLink={hasActiveLink === 9} href={pagesContants.bolsaTrabajoES}/>
                  <NavLink text={textWebsiteTextLink("contacto")} hasActiveLink={hasActiveLink === 10} href={pagesContants.contactoES}/>

                  {isMobile && (
                    <>
                      <hr />
                      <Link href={pagesContants.login}>
                        <Button
                          as={"span"}
                          className="text-white mb-1"
                          size="sm"
                        >
                          {textLogin("login")}
                        </Button>
                      </Link>
                      <Link href={pagesContants.register}>
                        <Button
                          className="text-white"
                          size="sm"
                          as={"span"}
                        >
                          {textLogin("singup")}
                        </Button>
                      </Link>
                    </>
                  )}
                </Nav>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
