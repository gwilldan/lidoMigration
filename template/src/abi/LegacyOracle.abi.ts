export const ABI_JSON = [
    {
        "type": "function",
        "name": "getCurrentOraclesReportStatus",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setAllowedBeaconBalanceAnnualRelativeIncrease",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_value"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasInitialized",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getVersion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEVMScriptExecutor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_script"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MANAGE_QUORUM",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "reportBeacon",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_epochId"
            },
            {
                "type": "uint64",
                "name": "_beaconBalance"
            },
            {
                "type": "uint32",
                "name": "_beaconValidators"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getRecoveryVault",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllowedBeaconBalanceAnnualRelativeIncrease",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllowedBeaconBalanceRelativeDecrease",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getExpectedEpochId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getLastCompletedReportDelta",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "postTotalPooledEther"
            },
            {
                "type": "uint256",
                "name": "preTotalPooledEther"
            },
            {
                "type": "uint256",
                "name": "timeElapsed"
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_lido"
            },
            {
                "type": "uint64",
                "name": "_epochsPerFrame"
            },
            {
                "type": "uint64",
                "name": "_slotsPerEpoch"
            },
            {
                "type": "uint64",
                "name": "_secondsPerSlot"
            },
            {
                "type": "uint64",
                "name": "_genesisTime"
            },
            {
                "type": "uint256",
                "name": "_allowedBeaconBalanceAnnualRelativeIncrease"
            },
            {
                "type": "uint256",
                "name": "_allowedBeaconBalanceRelativeDecrease"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getLido",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "SET_BEACON_REPORT_RECEIVER",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizeUpgrade_v3",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "MANAGE_MEMBERS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentFrame",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "frameEpochId"
            },
            {
                "type": "uint256",
                "name": "frameStartTime"
            },
            {
                "type": "uint256",
                "name": "frameEndTime"
            }
        ]
    },
    {
        "type": "function",
        "name": "allowRecoverability",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentReportVariant",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_index"
            }
        ],
        "outputs": [
            {
                "type": "uint64",
                "name": "beaconBalance"
            },
            {
                "type": "uint32",
                "name": "beaconValidators"
            },
            {
                "type": "uint16",
                "name": "count"
            }
        ]
    },
    {
        "type": "function",
        "name": "appId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getLastCompletedEpochId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getInitializationBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setBeaconReportReceiver",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferToVault",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "SET_BEACON_SPEC",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "canPerform",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_sender"
            },
            {
                "type": "bytes32",
                "name": "_role"
            },
            {
                "type": "uint256[]",
                "name": "_params"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentEpochId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEVMScriptRegistry",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "addOracleMember",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_member"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getBeaconReportReceiver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "SET_REPORT_BOUNDARIES",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setQuorum",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_quorum"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getQuorum",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "kernel",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOracleMembers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isPetrified",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setAllowedBeaconBalanceRelativeDecrease",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_value"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getBeaconSpec",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": "epochsPerFrame"
            },
            {
                "type": "uint64",
                "name": "slotsPerEpoch"
            },
            {
                "type": "uint64",
                "name": "secondsPerSlot"
            },
            {
                "type": "uint64",
                "name": "genesisTime"
            }
        ]
    },
    {
        "type": "function",
        "name": "setBeaconSpec",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "_epochsPerFrame"
            },
            {
                "type": "uint64",
                "name": "_slotsPerEpoch"
            },
            {
                "type": "uint64",
                "name": "_secondsPerSlot"
            },
            {
                "type": "uint64",
                "name": "_genesisTime"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "MAX_MEMBERS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentReportVariantsSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "removeOracleMember",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_member"
            }
        ],
        "outputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ScriptResult",
        "inputs": [
            {
                "type": "address",
                "name": "executor",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "script",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "input",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "returnData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoverToVault",
        "inputs": [
            {
                "type": "address",
                "name": "vault",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AllowedBeaconBalanceAnnualRelativeIncreaseSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AllowedBeaconBalanceRelativeDecreaseSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeaconReportReceiverSet",
        "inputs": [
            {
                "type": "address",
                "name": "callback",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MemberAdded",
        "inputs": [
            {
                "type": "address",
                "name": "member",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MemberRemoved",
        "inputs": [
            {
                "type": "address",
                "name": "member",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "QuorumChanged",
        "inputs": [
            {
                "type": "uint256",
                "name": "quorum",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpectedEpochIdUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "epochId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeaconSpecSet",
        "inputs": [
            {
                "type": "uint64",
                "name": "epochsPerFrame",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "slotsPerEpoch",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "secondsPerSlot",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "genesisTime",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeaconReported",
        "inputs": [
            {
                "type": "uint256",
                "name": "epochId",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "beaconBalance",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "beaconValidators",
                "indexed": false
            },
            {
                "type": "address",
                "name": "caller",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Completed",
        "inputs": [
            {
                "type": "uint256",
                "name": "epochId",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "beaconBalance",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "beaconValidators",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PostTotalShares",
        "inputs": [
            {
                "type": "uint256",
                "name": "postTotalPooledEther",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "preTotalPooledEther",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timeElapsed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalShares",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ContractVersionSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "version",
                "indexed": false
            }
        ]
    }
]
