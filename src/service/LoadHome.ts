export const loadHome = async () => {
    const res = await fetch('https://gist.githubusercontent.com/jeziel-almeida/dcf88339d5cfe0b840f6abca4dcd1ed4/raw/2b107a005c8c8587337941982fde427b0789fd4f/home.json');
    const home = await res.json();
  
    return home;
}