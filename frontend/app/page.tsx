'use client'

import Image from "next/image";
import useSWR from "swr";
import { getName } from "@/lib/api";

export default function Home() {
  const { data, error, isLoading } = useSWR("/api-get-name", getName);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching name</p>;

  return (
    <div >Hello, {data.name}!</div>
  );
}
