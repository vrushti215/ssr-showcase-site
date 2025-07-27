export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-sm text-center text-gray-600 mt-12">
      &copy; {new Date().getFullYear()} SSR Showcase. All rights reserved.
    </footer>
  );
}
