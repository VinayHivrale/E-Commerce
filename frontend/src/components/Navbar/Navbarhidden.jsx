import React from "react";
import categories from "../categories";
import { Link, useNavigate } from "react-router-dom";

export default function Navbarhidden({ category, Color,handleLeave }) {
  const navigate = useNavigate();
  const selectedCategory = categories.find((c) => c.type === category);

  if (!selectedCategory) {
    return null;
  }

  const handleCategoryClick = (subcategory, categoryItem) => {
    const path = `/${category}/${subcategory}/${categoryItem}`;
    navigate(path);
    handleLeave();
  };

  return (
    <div className="z-10 absolute left-[160px] top-[80px] w-[1150px] bg-white h-fit flex justify-evenly gap-[10px] overflow-x-auto border border-solid border-[#dbeaeabb] hover:flex hover:flex-1 ">
      {selectedCategory.subType.map((subtype, subtypeIndex) => (
        <div key={subtypeIndex} className="bg-white w-[200px] p-[20px] h-full font-sans box-border">
          <ul className="list-none p-0 m-0 text-[14px] font-sans hover:font-bold text-[#f504d9] font-bold" id="bold" style={{ color: Color }}>
            <a className="no-underline mb-[10px]" href="#">{subtype.title}</a>
            <br />
            <br />
          </ul>
          <ul className="list-none p-0 m-0 text-[14px] font-[400] font-san space-y-3">
            {subtype.category.map((categoryItem, categoryIndex) => (
              <li key={categoryIndex}>
                <button onClick={() => handleCategoryClick(subtype.title.toLowerCase(), categoryItem.toLowerCase())} className="no-underline mb-[10px] hover:font-bold ">{categoryItem}</button>
              </li>
            ))}
            <br />
          </ul>
        </div>
      ))}
    </div>
  );
}
