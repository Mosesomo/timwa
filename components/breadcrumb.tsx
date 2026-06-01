"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  schema?: boolean;
}

export default function Breadcrumb({ items, schema = true }: BreadcrumbProps) {
  const schemaData = schema
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href ? `https://timwafisheries.com${item.href}` : undefined,
        })),
      }
    : null;

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <nav className="flex items-center gap-2 text-sm mb-6">
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-[#00b4d8] hover:text-[#1e1e6e] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight size={16} className="text-gray-400" />
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
