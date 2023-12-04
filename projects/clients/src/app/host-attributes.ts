let remoteParent = 'none';

export function setRemoteParent(value: string): void {
    console.log('set', value);
    remoteParent = value;
}

export function getRemoteParent(): string {
    console.log('get', remoteParent);
    return remoteParent;
}
