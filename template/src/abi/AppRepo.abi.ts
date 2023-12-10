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
        "name": "getBySemanticVersion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint16[3]",
                "name": "_semanticVersion"
            }
        ],
        "outputs": [
            {
                "type": "uint16[3]",
                "name": "semanticVersion"
            },
            {
                "type": "address",
                "name": "contractAddress"
            },
            {
                "type": "bytes",
                "name": "contentURI"
            }
        ]
    },
    {
        "type": "function",
        "name": "newVersion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16[3]",
                "name": "_newSemanticVersion"
            },
            {
                "type": "address",
                "name": "_contractAddress"
            },
            {
                "type": "bytes",
                "name": "_contentURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getByVersionId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_versionId"
            }
        ],
        "outputs": [
            {
                "type": "uint16[3]",
                "name": "semanticVersion"
            },
            {
                "type": "address",
                "name": "contractAddress"
            },
            {
                "type": "bytes",
                "name": "contentURI"
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
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
        "name": "getLatestForContractAddress",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_contractAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint16[3]",
                "name": "semanticVersion"
            },
            {
                "type": "address",
                "name": "contractAddress"
            },
            {
                "type": "bytes",
                "name": "contentURI"
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
        "name": "isValidBump",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint16[3]",
                "name": "_oldVersion"
            },
            {
                "type": "uint16[3]",
                "name": "_newVersion"
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
        "name": "CREATE_VERSION_ROLE",
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
        "name": "getLatest",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16[3]",
                "name": "semanticVersion"
            },
            {
                "type": "address",
                "name": "contractAddress"
            },
            {
                "type": "bytes",
                "name": "contentURI"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVersionsCount",
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
        "type": "event",
        "anonymous": false,
        "name": "NewVersion",
        "inputs": [
            {
                "type": "uint256",
                "name": "versionId",
                "indexed": false
            },
            {
                "type": "uint16[3]",
                "name": "semanticVersion"
            }
        ]
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
    }
]
