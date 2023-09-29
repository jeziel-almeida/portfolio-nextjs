export const loadHome = async () => {
    const res = await fetch('https://gist.githubusercontent.com/jeziel-almeida/dcf88339d5cfe0b840f6abca4dcd1ed4/raw/4b523f9c10a8c51ad55c2ace59bbe8f27780c729/home.json');
    const home = await res.json();
  
    return home;
}