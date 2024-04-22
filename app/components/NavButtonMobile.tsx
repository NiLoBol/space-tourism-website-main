import React from "react";

type Propstype = {
  ID: string;
  name: string;
  active?: boolean;
}& React.ComponentProps<'a'>;

function NavButtonMobile(props: Propstype) {
  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className={
        props.active
          ? `uppercase my-6 ms-8  border-e-4 hover:border-e-4
           hover:cursor-pointer border-white  text-white
            }  `
          : `uppercase my-6 ms-8 hover:border-e-4 text-white hover:cursor-pointer border-textdark 
            }  `
      }
    >
      {props.ID ? <span className="me-3 tracking-[2.7px] font-bold sm:hidden xl:inline">{props.ID}</span> : ""}
      <span className="textNAV ">{props.name}</span>
    </a>
  );
}


export default NavButtonMobile;
