    if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);