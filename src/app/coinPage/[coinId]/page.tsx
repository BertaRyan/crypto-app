export default function coinPage({ params }: { params: { coinId: string } }) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
      {params.coinId}
    </main>
  );
}
