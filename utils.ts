export const delay = (time: number = 1000): Promise<void> | void => {
    let timeoutId;
    try {
        return new Promise<void>((resolve):void => {
            timeoutId = setTimeout(() => {
                resolve();
            }, time)
        });
    } catch (error) {
        timeoutId && clearTimeout(timeoutId);
    }
}
