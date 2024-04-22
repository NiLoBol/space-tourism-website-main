import React from "react";

type Propstype = {
  ID: string;
  name: string;
  active?: boolean;
}& React.ComponentProps<'a'>;
function NavButton(props: Propstype) {
  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className={
        props.active
          ? `uppercase lg:mx-5 md:mx-2 mx-5 border-b-4 hover:border-b-4 hover:cursor-pointer border-white ${
              props.ID ? "h-24 py-8 " : "h-10 py-2"
            }  `
          : `uppercase lg:mx-5 md:mx-2 mx-5 hover:border-b-4 hover:cursor-pointer border-textdark ${
              props.ID ? "h-24 py-8" : "h-10 py-2"
            }  `
      }
    >
      {props.ID ? <span className="me-3 font-bold sm:hidden xl:inline">{props.ID}</span> : ""}
      <span className="textNAV">{props.name}</span>
    </a>
  );
}

export default NavButton;
