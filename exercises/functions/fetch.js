export async function task(x) {
  const resp = await fetch(`https://kodaktor.ru/api/m/${x}`, {
    headers: { "Content-Type": "application/json" },
  });
  const result = await resp.json();
  return result.result;
}
