export const appvm: { value: any } = { value: undefined };
export function getappvm() {
    if (appvm.value) {
        return appvm.value;
    } else {
        throw new Error("uninitalized");
    }
}
