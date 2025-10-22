// Small presentational component for navigation items
function NavItem({
  lineOne,
  lineTwo,
  onClick,
  as = "div",
  to,
  className = "",
}) {
  const content = (
    <div className={`nav__items ${className}`.trim()} onClick={onClick}>
      <span className="nav__itemLineone">{lineOne}</span>
      <span className="nav__itemLinetwo">{lineTwo}</span>
    </div>
  );

  if (as === "link" && to) {
    return (
      <Link
        to={to}
        style={{ textDecoration: "none" }}
        aria-label={`${lineOne} ${lineTwo}`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
export default NavItem;