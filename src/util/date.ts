export function getYear(): number {
    return new Date().getFullYear();
}

export function getAge(birthdate: string): number {
    const birth = new Date(birthdate);
    const now = new Date();
    let age: number = now.getFullYear() - birth.getFullYear();
    if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

export async function isDay() {
    const response = await fetch('https://api.sunrisesunset.io/json?lat=53.22369&lng=6.56479');
    const data = await response.json();

    const now = new Date();

    const sunrise = new Date(`${now.toDateString()} ${data.results.sunrise} UTC`);
    const sunset = new Date(`${now.toDateString()} ${data.results.sunset} UTC`);

    return (now >= sunrise && now <= sunset);
}
