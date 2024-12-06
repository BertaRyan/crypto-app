export default async function coinPage({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const coinId = (await params).coinId;
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
      {coinId}
    </main>
  );
}
