"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";

interface NavItem {
  name: string;
  href: string;
}

export default function Header() {
  const t = useTranslations("HomePage.Header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.features"), href: "/features" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        className={`bg-transparent transition-all duration-500`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl font-bold"
              >
                Ilmly
              </Link>
            </motion.div>

            <nav className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {hoveredItem === item.name && (
                      <motion.div
                        className="bg-muted absolute inset-0 rounded-lg"
                        layoutId="navbar-hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="hidden items-center space-x-3 lg:flex"
              variants={itemVariants}
            >
              <LocaleSwitcher />

              <Link
                href="/login"
                className="text-foreground/80 hover:text-foreground px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t("signIn")}
              </Link>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/signup"
                  className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center space-x-2 rounded-lg px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200"
                >
                  <span>{t("getStarted")}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.button
              className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="border-border bg-background fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <Link
                        href={item.href}
                        className="text-foreground hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="border-border space-y-3 border-t pt-6"
                  variants={mobileItemVariants}
                >
                  <Link
                    href="/login"
                    className="text-foreground hover:bg-muted block w-full rounded-lg py-3 text-center font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-foreground text-background hover:bg-foreground/90 block w-full rounded-lg py-3 text-center font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
