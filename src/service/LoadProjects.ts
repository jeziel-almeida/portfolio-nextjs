export const loadProjects = async () => {
    const res = await fetch('https://gist.githubusercontent.com/jeziel-almeida/2cbedbb6119b39de85e01a9c5ed91ab3/raw/fcb78a3a7907a604322bef96d12c69b3801aca3d/projects.json');
    const data = res.json();

    return data;
}