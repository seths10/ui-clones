import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen gap-5 bg-[#24292e] flex-col items-center justify-center p-24">
      <h1 className="text-white font-bold text-5xl">Course Dashboard Clone</h1>
      <p className="text-white bg-[#414b54] px-3 py-1 border rounded-full border-gray-500">
        Please navigate to{" "}
        <Link href={"/dashboard"} className="underline cursor-pointer">
          `/dashboard`
        </Link>
      </p>
    </main>
  );
}
