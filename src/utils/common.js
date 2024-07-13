export const splitTime = (time) => {
    const [hh, mm] = time.split(':');
    return { hh: Number(hh), mm: Number(mm) }
}