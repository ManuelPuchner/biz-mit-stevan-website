import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="footer container mx-auto gap-6 flex flex-col-reverse md:flex-row justify-between p-4 border-primary border-t-2 rounded-xs  mt-4">
      <div className="">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Websters.at. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
        <p className="text-center flex items-center text-sm text-gray-800">
          <EnvelopeIcon className="size-6 mr-1 font-bold stroke-2 text-primary" />
          {/* TODO: Add email link */}
          <a href="mailto:info@websters.at">info@websters.at</a>
        </p>
        <p className="text-center flex items-center text-sm text-gray-800">
          <PhoneIcon className="size-6 mr-1 font-bold stroke-2 text-primary" />
          {/* TODO: Add email link */}
          <a href="tel:+43123456789">+43 1 23456789</a>
        </p>
      </div>
    </footer>
  );
}
