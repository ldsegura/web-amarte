import Link from "next/link";

const NavLink = (props) => {
  const { text, hasActiveLink, href } = props;
  return (
    <Link href={href} className={`nav-link ${hasActiveLink ? "active" : ""}`}>
      {text}
    </Link>
  );
};

export default NavLink;
