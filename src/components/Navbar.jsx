import React from "react";
import dayjs from "dayjs";
import { navLinks , navIcons} from "@constants";
import useWindowStore from "@store/window";
const Navbar = () => {
  const {openWindow}=useWindowStore()
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className="font-bold ">Hemant's Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id} onClick={()=>openWindow(item.type)}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
            {
                navIcons.map(({id,img})=>(
                    <li key={id}>
                        <img src={img} className="icon-hover" alt={`icon-${id}`} />
                    </li>
                ))
            }
        </ul>
        <time>{dayjs().format("ddd D MMM h:mm A")}</time>
      </div>
    </nav>
  );    
};

export default Navbar;
