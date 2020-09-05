import { usePlugin, BuidlerConfig } from '@nomiclabs/buidler/config'

usePlugin('@nomiclabs/buidler-ethers')
usePlugin('@nomiclabs/buidler-waffle')
usePlugin('@openzeppelin/buidler-upgrades')

export default <BuidlerConfig>{
  solc: {
    version: '0.4.24',
  },
}
