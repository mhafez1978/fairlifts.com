const AppPages = [
  {
    title: "search",
    href: "/search",
  },
  {
    title: "HeavyLifts",
    href: "/heavy-lifts",
  },
  {
    title: "News",
    href: "/latest-news",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-row w-full pr-6 justify-end items-center gap-2 h-full uppercase text-[10px]">
        {AppPages.map((page) => (
          <li key={page.title}>
            <a href={page.href} className="hover:text-slate-950">
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
