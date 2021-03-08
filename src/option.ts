export declare interface InstallerOption {
  propertyName: string
}

let instance = {
  propertyName: '$bus'
} as InstallerOption

const setOption = (option: InstallerOption): void => {
  instance = option
}

const getOption = (): InstallerOption => {
  return instance
}

export {
  setOption,
  getOption
}
