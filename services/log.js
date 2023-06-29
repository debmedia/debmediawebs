const WARN_COLOR = '\x1b[33m%s\x1b[0m';
export const Log = {
    warn: (...args) => console.log('\x1b[33m%s\x1b[0m', ...args),
}