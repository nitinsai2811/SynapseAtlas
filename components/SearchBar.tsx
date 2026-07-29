"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {

  const [value, setValue] = useState("");


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    setValue(e.target.value);
    onSearch(e.target.value);

  }

const [search, setSearch] = useState("");
  return (

    <input
      value={value}
      onChange={handleChange}
      placeholder="Search MUNs, committees, cities..."
      className="w-full p-4 text-black rounded-xl outline-none border"
    />

  );
}