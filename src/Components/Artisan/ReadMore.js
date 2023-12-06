import React, { useState } from "react";
export default function ReadMore({ content, maxLength }) {
  const [isExpanded, setisExpanded] = useState(false);

  return (
    <div>
      <p style={{ textAlign: "justify" }}>

{/*  Conditional rendering: If the length of the 'content' is greater than or equal to 'maxLength' 
  and 'isExpanded' is false, display a trimmed version of the content followed by '...'. 
  Otherwise, display the full 'content'.*/}

        {content.length >= maxLength && !isExpanded
          ? `${content.substring(0, maxLength)}...`
          : content}


 {/* Create a clickable 'span' element to toggle the 'isExpanded' state when clicked.
  If 'isExpanded' is true, display "show less"; otherwise, display "show more".*/}
        <span
          style={{ fontWeight: "bold" }}
          onClick={() => setisExpanded(!isExpanded)}
        >
          {isExpanded ? " show less" : " show more"}
        </span>
      </p>
    </div>
  );
}
