import Image from "next/image";
import useSWR from "swr";
import { getName } from "@/lib/api";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "${process.env.NEXT_PUBLIC_API_URL}/get-name",
    getName,
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching name</p>;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">Hello, {data.name}!</div>
  );
}
