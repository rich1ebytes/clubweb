export default function Footer() {
  return (
    <footer className="bg-brand-nav border-t border-gray-800 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-white font-bold text-xl">ClubConnect</div>
        </div>
        <div className="grid grid-cols-2 text-gray-300 font-bold gap-x-6 gap-y-2 text-sm md:text-base">
          <a href="/clubs" className="hover:text-brand-accent transition-colors duration-200">All the Clubs</a>
          <a href="https://bhavansvc.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-200">Know the College</a>
          <a href="/our-team" className="hover:text-brand-accent transition-colors duration-200">Know the Team</a>
          <a href="mailto:richardgomesxd@gmail.com" className="hover:text-brand-accent transition-colors duration-200">Contact Us</a>
        </div>
      </div>
      <div className="mt-8 text-center font-bold text-brand-accent text-sm">
        <h5>&copy; {new Date().getFullYear()} ClubConnect Org.</h5>
        <span className="text-xs text-brand-secondary"> meow;)</span>
      </div>
    </footer>
  );
}