module.exports = {
    apps : [
        {
            name: 'Benchmarks Simple',
            instances: 1,
            script: 'npx caliper launch manager --caliper-benchconfig benchmarks/scenario/simple/config.yaml --caliper-networkconfig networks/besu/1node-clique/networkconfig.json --caliper-workspace . ',
        },
        {
            name: 'Benchmarks ERC20',
            instances: 1,
            script: 'npx caliper launch manager --caliper-benchconfig benchmarks/scenario/ERC-20/config.yaml --caliper-networkconfig networks/besu/1node-clique/erc20networkconfig.json --caliper-workspace . --caliper-flow-skip-install',
        }
    ]
}