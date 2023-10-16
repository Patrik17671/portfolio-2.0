export async function getHero() {
  try{
    const res = await fetch(`${process.env.API_BASE_URL}/api/globals/hero-content`)
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    return res.json()
  }catch (error) {
    console.error("Error fetching hero content:", error);
    throw error;
  }
}
