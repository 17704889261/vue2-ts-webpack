// eslint-disable-next-line no-undef
const packages = APP_PKG.pkg
console.log(' packages =======> ', packages)

export function useGetDependencies() {
  const { dependencies, devDependencies } = packages
  return { dependencies, devDependencies }
}

export function useGetVersion() {
  const { version } = packages
  return version
}
