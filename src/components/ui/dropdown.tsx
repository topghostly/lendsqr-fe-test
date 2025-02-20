"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/modules/dropdown.module.scss";
import { DropdownProps } from "@/types/layout";

const Dropdown = ({ trigger, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle positioning
  //   useEffect(() => {
  //     if (isOpen && triggerRef.current && dropdownRef.current) {
  //       const rect = triggerRef.current.getBoundingClientRect();
  //       setPosition({
  //         top: rect.bottom + window.scrollY, // Position below trigger
  //         left: rect.left + window.scrollX,
  //       });
  //     }
  //   }, [isOpen]);

  // Close dropdown when clicking outside
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
      {/* Trigger element */}
      <div ref={triggerRef} onClick={toggleDropdown} className={styles.trigger}>
        {trigger}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={styles.dropdown}
          //   style={{ top: position.top, left: position.left }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
