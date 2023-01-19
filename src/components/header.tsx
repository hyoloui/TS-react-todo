const Header = ({ children }: MyProps) => {
  return <h1 className="header">{children}</h1>;
};

export default Header;

interface MyProps {
  children: string;
}
