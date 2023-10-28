export const loadHome = async () => {
    const res = await fetch('https://gist.githubusercontent.com/jeziel-almeida/dcf88339d5cfe0b840f6abca4dcd1ed4/raw/0f6c5ba177fdc55b04c3a877776650a68e6904ee/home.json');
    const home = await res.json();
  
    return home;
}