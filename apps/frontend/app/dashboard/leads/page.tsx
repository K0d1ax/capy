"use client";

import { useState } from 'react';

const headers = ['Name', 'Email', 'Phone', 'Source', 'Tags', 'Status', 'Created'];

export default function LeadsPage() {
  const [query, setQuery] = useState('');
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 rounded-lg border bg-white p-4 shadow-sm">
        <input
          aria-label="Search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-56 rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input aria-label="Date range" placeholder="Date range" className="rounded border px-3 py-2" />
        <select aria-label="Source" className="rounded border px-3 py-2">
          <option>All sources</option>
        </select>
        <input aria-label="Tags" placeholder="Tags" className="rounded border px-3 py-2" />
        <select aria-label="Status" className="rounded border px-3 py-2">
          <option>Any status</option>
        </select>
        <div className="ml-auto flex gap-2">
          {['Tag', 'Export', 'Delete', 'Mark as Contacted'].map((a) => (
            <button key={a} disabled className="rounded bg-gray-200 px-3 py-2 text-sm text-gray-600">
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="bg-gray-50 text-left text-sm font-semibold">
              {headers.map((h) => (
                <th key={h} scope="col" className="px-4 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={headers.length} className="px-4 py-12 text-center text-sm text-gray-600">
                No leads yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
