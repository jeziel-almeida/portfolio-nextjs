export const loadHome = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_HOME_URL ?? "");
    const home = await res.json();
  
    return home;
}