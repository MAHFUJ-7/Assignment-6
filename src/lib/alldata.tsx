export const allData = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data;
}