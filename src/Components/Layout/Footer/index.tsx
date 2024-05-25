// import { Icon } from '@iconify/react';
export function Footer() {
  return (
    <footer className="absolute -bottom-36 w-full flex justify-between bg-gray-500 p-14 text-white">
      <ul className=" flex gap-5 ">
        <li className="flex items-center justify-center gap-2">
          {/* <Icon icon="iconamoon:gift-light" className="text-red-500" /> */}
          <p>Become Seller</p>
        </li>
        <li className="flex items-center justify-center gap-2">
          {/* <Icon icon="bi:wallet-fill" className="text-red-500 " /> */}
          <p>Gift Cards</p>
        </li>
        <li className="flex items-center justify-center gap-2">
          {/* <Icon
            icon="material-symbols:help-outline"
            className="text-red-500 "
          /> */}
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
      <p>All Right reserved by Musemind | 2022</p>
    </footer>
  );
}
