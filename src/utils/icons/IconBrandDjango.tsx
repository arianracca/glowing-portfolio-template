function IconBrandDjango(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M6 3 H18 A3 3 0 0 1 21 6 V18 A3 3 0 0 1 18 21 H6 A3 3 0 0 1 3 18 V6 A3 3 0 0 1 6 3 z" />
      <path d="M12 7v8.5l-2.015.201a2.715 2.715 0 110-5.402L12 10.5M16 7v.01M16 10v5.586c0 .905-.36 1.774-1 2.414" />
    </svg>
  );
}

export default IconBrandDjango;
