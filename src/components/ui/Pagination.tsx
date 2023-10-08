"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  pageAmount: number;
  queryParams: {
    [key: string]: string;
  };
};

const Pagination = ({ pageAmount, queryParams }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = Number(searchParams.get("page"));

  let params = "";
  for (const key in queryParams) {
    params += `&${key}=${queryParams[key]}`;
  }

  return (
    <div>
      {[...Array(pageAmount)].map((el, i) => (
        <button
          key={i}
          onClick={() => router.push(`${pathname}?page=${i + 1}${params}`)}
          style={{
            opacity: `${i + 1 === Number(page) ? "1" : "0.5"}`,
            border: `${
              i + 1 === Number(page) ? "1px solid #000 " : "1px solid #e5e5e5"
            }`,
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
