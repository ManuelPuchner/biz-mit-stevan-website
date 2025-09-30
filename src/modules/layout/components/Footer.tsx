export default function Footer() {
  return (
    <footer className="footer container mx-auto p-4 border-t mt-4">
      <div className="">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Websters.at. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
