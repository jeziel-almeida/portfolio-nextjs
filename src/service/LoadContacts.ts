export const loadContacts = async () => {
    const res = await fetch('https://gist.githubusercontent.com/jeziel-almeida/32d84d8ecb577e1bad52260346e1ece0/raw/51eac808b36b6aa924b7a94c6d4e4d72335f010c/contact.json');
    const data = res.json();

    return data;
}