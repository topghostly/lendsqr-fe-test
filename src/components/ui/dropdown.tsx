"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/modules/dropdown.module.scss";
import { DropdownProps } from "@/types/layout";

const Dropdown = ({ trigger, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownWrapper}>
      <div ref={triggerRef} onClick={toggleDropdown} className={styles.trigger}>
        {trigger}
      </div>

      {isOpen && (
        <div ref={dropdownRef} className={styles.dropdown}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
