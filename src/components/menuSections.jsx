import React from 'react';
const MenuSections = ({
  sections,
  onSections,
  selectedSection,
  pageHidden,
}) => {
  return (
    <ul className={pageHidden ? 'list-group items-visibility' : 'list-group'}>
      {sections.map((section) => (
        <li
          onClick={() => onSections(section)}
          key={section._id}
          className={
            selectedSection._id === section._id
              ? 'list-group-item active'
              : 'list-group-item'
          }
        >
          {section.name}
        </li>
      ))}
    </ul>
  );
};

export default MenuSections;
