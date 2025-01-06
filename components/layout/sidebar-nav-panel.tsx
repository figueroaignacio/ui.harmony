"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

// Config
import { docsNavigation } from "@/lib/config/navigation";

export function SidebarNavPanel() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 h-[calc(100vh-5rem)] hidden lg:block">
      <nav>
        {docsNavigation.map((section, index) => (
          <div
            key={section.title}
            className={cn("pb-4", index !== 0 && "pt-4")}
          >
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md py-2 text-sm hover:bg-primary-foreground px-3 ${
                      pathname === `${item.href}`
                        ? "bg-primary-foreground"
                        : "text-muted-foreground hover:text-muted"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
