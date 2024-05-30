import { Icon } from "@iconify/react";
export function Footer() {
  return (
    <footer className="absolute -bottom-36 w-full px-10 font-semibold text-sm">
      <hr className="h-0.5 bg-gray-200" />
      <div className="flex justify-between py-10">
        <ul className=" flex gap-5 ">
          <li className="flex items-center justify-center gap-2">
            <Icon
              icon="material-symbols-light:business-center-outline"
              className="text-red-400 text-xl"
            />
            <p>Become Seller</p>
          </li>
          <li className="flex items-center justify-center gap-2">
            <Icon
              icon="iconamoon:gift-light"
              className="text-red-400 text-xl"
            />
            <p>Gift Cards</p>
          </li>
          <li className="flex items-center justify-center gap-2">
            <Icon
              icon="material-symbols:help-outline"
              className="text-red-400 text-xl"
            />
            <p>Help Center</p>
          </li>
        </ul>
        <ul className=" flex gap-5 ">
          <li>
            <p>Terms of Use</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
        </ul>
        <p>All Right reserved by Group 1 | 2024</p>
      </div>
    </footer>
  );
}
