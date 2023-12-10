export const ABI_JSON = [
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
        "name": "addSigningKeys",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_quantity"
            },
            {
                "type": "bytes",
                "name": "_pubkeys"
            },
            {
                "type": "bytes",
                "name": "_signatures"
            }
        ],
        "outputs": []
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
        "name": "disableNodeOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
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
        "name": "assignNextSigningKeys",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_numKeys"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "pubkeys"
            },
            {
                "type": "bytes",
                "name": "signatures"
            }
        ]
    },
    {
        "type": "function",
        "name": "SIGNATURE_LENGTH",
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
        "name": "SET_NODE_OPERATOR_ADDRESS_ROLE",
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
        "name": "removeSigningKeysOperatorBH",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_index"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setNodeOperatorName",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "string",
                "name": "_name"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getRewardsDistribution",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_totalRewardShares"
            }
        ],
        "outputs": [
            {
                "type": "address[]",
                "name": "recipients"
            },
            {
                "type": "uint256[]",
                "name": "shares"
            }
        ]
    },
    {
        "type": "function",
        "name": "setNodeOperatorActive",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "bool",
                "name": "_active"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "SET_NODE_OPERATOR_NAME_ROLE",
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
        "name": "removeSigningKey",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_index"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeSigningKeys",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_index"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "ADD_NODE_OPERATOR_ROLE",
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
        "name": "addSigningKeysOperatorBH",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_quantity"
            },
            {
                "type": "bytes",
                "name": "_pubkeys"
            },
            {
                "type": "bytes",
                "name": "_signatures"
            }
        ],
        "outputs": []
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
        "name": "getActiveNodeOperatorsCount",
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
        "name": "addNodeOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "address",
                "name": "_rewardAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "id"
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
        "name": "getUnusedSigningKeyCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setNodeOperatorRewardAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_rewardAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getNodeOperator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "bool",
                "name": "_fullInfo"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "active"
            },
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "address",
                "name": "rewardAddress"
            },
            {
                "type": "uint64",
                "name": "stakingLimit"
            },
            {
                "type": "uint64",
                "name": "stoppedValidators"
            },
            {
                "type": "uint64",
                "name": "totalSigningKeys"
            },
            {
                "type": "uint64",
                "name": "usedSigningKeys"
            }
        ]
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
        "name": "PUBKEY_LENGTH",
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
        "name": "getNodeOperatorsCount",
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
        "name": "setNodeOperatorStakingLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint64",
                "name": "_stakingLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getSigningKey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_index"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "key"
            },
            {
                "type": "bytes",
                "name": "depositSignature"
            },
            {
                "type": "bool",
                "name": "used"
            }
        ]
    },
    {
        "type": "function",
        "name": "reportStoppedValidators",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint64",
                "name": "_stoppedIncrement"
            }
        ],
        "outputs": []
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
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "REPORT_STOPPED_VALIDATORS_ROLE",
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
        "name": "getKeysOpIndex",
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
        "name": "SET_NODE_OPERATOR_ACTIVE_ROLE",
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
        "name": "SET_NODE_OPERATOR_LIMIT_ROLE",
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
        "name": "getTotalSigningKeyCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
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
        "name": "MAX_NODE_OPERATORS_COUNT",
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
        "name": "removeSigningKeyOperatorBH",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_operator_id"
            },
            {
                "type": "uint256",
                "name": "_index"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "MANAGE_SIGNING_KEYS",
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
        "name": "trimUnusedKeys",
        "constant": false,
        "payable": false,
        "inputs": [],
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
        "name": "NodeOperatorAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            },
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "address",
                "name": "rewardAddress",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "stakingLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeOperatorActiveSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "active",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeOperatorNameSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "string",
                "name": "name",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeOperatorRewardAddressSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "rewardAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeOperatorStakingLimitSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "stakingLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeOperatorTotalStoppedValidatorsReported",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "totalStopped",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeOperatorTotalKeysTrimmed",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "totalKeysTrimmed",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SigningKeyAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "operatorId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SigningKeyRemoved",
        "inputs": [
            {
                "type": "uint256",
                "name": "operatorId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "KeysOpIndexSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "keysOpIndex",
                "indexed": false
            }
        ]
    }
]
