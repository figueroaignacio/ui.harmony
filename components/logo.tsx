import Link from "next/link";

export function Logo() {
  return (
    <Link
      href={"/"}
      className="text-xl font-bold opacity-100 flex items-center space-x-2"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7C0 3.13401 3.13401 0 7 0H27C30.866 0 34 3.13401 34 7V27C34 30.866 30.866 34 27 34H7C3.13401 34 0 30.866 0 27V7Z"
          fill="#050505"
        />
        <path
          d="M25 16.7576C25 20.7742 18.7778 21 17 25C15.2222 21 9 20.7742 9 16.7576C9 13 13.4444 11.5 17 9C20.5 11.5 25 13 25 16.7576Z"
          fill="#F5F5F5"
        />
      </svg>
      <p>Aspen UI</p>
    </Link>
  );
}
