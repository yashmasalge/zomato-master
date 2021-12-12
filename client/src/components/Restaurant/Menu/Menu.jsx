import React, { useState } from "react";

// components
import MenuCollection from "../MenuCollection";

function Menu() {
  const [menus] = useState([
    "https://b.zmtcdn.com/data/menus/506/19119506/2d28e4999d61f37c8a19e852284abfbf.jpg",
    "https://b.zmtcdn.com/data/menus/506/19119506/57f429b03c18238a20e583aaaf247834.jpg",
    "https://b.zmtcdn.com/data/menus/506/19119506/5deb7f5c08dd9c554fe86d4e2fa0a782.jpg",
  ]);
  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
  );
}

export default Menu;