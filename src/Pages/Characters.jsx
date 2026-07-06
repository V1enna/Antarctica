// CHARACTER LIST PAGE UHEAUHE
import React, { useState, useMemo } from 'react';
import { chardata } from "../assets/data/chardata";
import CharList from '../components/charList'; // rename file to CharList.jsx and change this to './CharList' for Vercel

const Characters = () => {
  const [query, setQuery] = useState(''); // search query lah
  const [page, setPage] = useState(1); // page number lah
  const perPage = 12; // portraits per page

  const filtered = useMemo(
    () => chardata.filter(c => c.name?.toLowerCase().includes(query.toLowerCase())),
    [query]
  ); // filter characters based on search query PLEASE

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage)); // total number of pages
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage); // items for current page, references the filtered charlist

  return (
    <div className="min-h-screen text-white sm:p-2 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Characters Page</h1>

      <div className="flex justify-center mb-6">
        <input
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1); }} // to search
          placeholder="Search characters..."
          className="w-full max-w-md p-2 rounded bg-gray-800 border border-gray-700"
        />
      </div>

      <CharList characters={pageItems} />

      <div className="flex justify-center items-center gap-3 mt-6">
        <button // page navigation buttons
          disabled={page === 1}
          onClick={() => setPage(p => Math.max(1, p - 1))}
          className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>{page} / {pageCount}</span>
        <button
          disabled={page === pageCount}
          onClick={() => setPage(p => Math.min(pageCount, p + 1))}
          className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;