import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Search({ mobile = false }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

   navigate(`/page/search?search=${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`border rounded flex ${
        mobile ? "md:hidden mt-2" : "hidden md:flex"
      }`}
    >
      <input
        className={`outline-none ${
          mobile ? "px-3 py-2 w-full" : "px-3 py-1 text-sm"
        }`}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        style={{ backgroundColor: "var(--pink_color)" }}
        className="px-3 text-white"
      >
        <CiSearch />
      </button>
    </form>
  );
}

export default Search;
