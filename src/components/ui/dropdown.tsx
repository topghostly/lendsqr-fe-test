"use client";

import { useState, useRef, useEffect } from "react";
import { DropdownProps } from "@/types/layout";

import styles from "@/styles/modules/dropdown.module.scss";

const Dropdown = ({ trigger, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Atdd mousepress event listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Always remember to CLEANUP
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownWrapper}>
      {/* DROPDOWN TRIGGER ELEMENT */}
      <div ref={triggerRef} onClick={toggleDropdown} className={styles.trigger}>
        {trigger}
      </div>

      {/* DROPDOWN CONTENT */}
      {isOpen && (
        <div ref={dropdownRef} className={styles.dropdown}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
