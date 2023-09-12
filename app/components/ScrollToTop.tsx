"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname  = usePathname();
  const token = localStorage.getItem("authToken")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}