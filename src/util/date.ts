export function getYear(): number {
    return new Date().getFullYear();
}

export function getAge(birthdate: string): number {
    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

export function isDay(): boolean {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 8 && hour < 21;
}