import React from "react";
import categories from "../categories";

export default function Navbarhidden({ category, Color }) {
  
  const selectedCategory = categories.find((c) => c.type === category);

  function subCateories(subtype, subtypeIndex) {
    return (
      <div key={subtypeIndex} className="bg-white w-[200px]  p-[20px] h-full font-sans box-border">
        <ul className=" list-none p-0 m-0 text-[14px] font-sans hover:font-bold text-[#f504d9] font-bold" id="bold" style={{ color: Color }}>
          <a className=" no-underline mb-[10px]" href="#">{subtype.title}</a>
          <br />
          <br />
        </ul>
        <ul className=" list-none p-0 m-0 text-[14px] font-[400] font-san">
          {subtype.category.map((categoryItem, categoryIndex) => (
            <li key={categoryIndex}>
              <a className=" no-underline mb-[10px] hover:font-bold" href="#" >{categoryItem}</a>
            </li>
          ))}
          <br />
        </ul>
      </div>
    );
  }
  if (!selectedCategory) {
    // Handle the case where the selected category is not found
    return null;
  }

  return (
    <div className="z-10 absolute left-[160px] top-[80px] w-[1150px] bg-white h-[400px] flex justify-evenly gap-[10px] overflow-x-auto border border-solid border-[#dbeaeabb] hover:flex hover:flex-1 ">
      {selectedCategory.subType.map((subtype, subtypeIndex) => (
        subCateories(subtype, subtypeIndex)
      ))}
    </div>
  );
}
