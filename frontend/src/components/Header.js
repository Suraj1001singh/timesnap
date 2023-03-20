import { MoonIcon, SunIcon } from "@primer/octicons-react";

const Header = (props) => {
  const getOtherTheme = () => (props.theme === "light" ? "dark" : "light");

  const toggleTheme = () => {
    props.setTheme(getOtherTheme);
  };

  return (
    <div className="header">
      <h2 className="logo">TimeSnap</h2>
      <div className="theme-toggler" onClick={toggleTheme}>
        {props.theme === "light" ? <MoonIcon size={26} /> : <SunIcon size={26} />}
      </div>
    </div>
  );
};

export default Header;
