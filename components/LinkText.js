import { Link } from "next-translate-routes";


export const LinkText = ({children, ...props }) => {
    return (
       <Link {...props} >
          <a>{children}</a>
      </Link>
    );
  };