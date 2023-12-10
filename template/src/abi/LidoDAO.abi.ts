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
        "name": "KERNEL_APP_ID",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "APP_ADDR_NAMESPACE",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "newAppInstance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "address",
                "name": "_appBase"
            },
            {
                "type": "bytes",
                "name": "_initializePayload"
            },
            {
                "type": "bool",
                "name": "_setDefault"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "appProxy"
            }
        ]
    },
    {
        "type": "function",
        "name": "apps",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            },
            {
                "type": "bytes32",
                "name": ""
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_baseAcl"
            },
            {
                "type": "address",
                "name": "_permissionsCreator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "CORE_NAMESPACE",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "newAppInstance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "address",
                "name": "_appBase"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "appProxy"
            }
        ]
    },
    {
        "type": "function",
        "name": "recoveryVaultAppId",
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
        "name": "setRecoveryVaultAppId",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_recoveryVaultAppId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "APP_MANAGER_ROLE",
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
        "name": "newPinnedAppInstance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "address",
                "name": "_appBase"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "appProxy"
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
        "name": "setApp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_namespace"
            },
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "address",
                "name": "_app"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getApp",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_namespace"
            },
            {
                "type": "bytes32",
                "name": "_appId"
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
        "name": "newPinnedAppInstance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "address",
                "name": "_appBase"
            },
            {
                "type": "bytes",
                "name": "_initializePayload"
            },
            {
                "type": "bool",
                "name": "_setDefault"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "appProxy"
            }
        ]
    },
    {
        "type": "function",
        "name": "newAppProxyPinned",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_kernel"
            },
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "bytes",
                "name": "_initializePayload"
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
        "name": "APP_BASES_NAMESPACE",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "acl",
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
        "type": "function",
        "name": "newAppProxy",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_kernel"
            },
            {
                "type": "bytes32",
                "name": "_appId"
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
        "name": "DEFAULT_ACL_APP_ID",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "newAppProxy",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_kernel"
            },
            {
                "type": "bytes32",
                "name": "_appId"
            },
            {
                "type": "bytes",
                "name": "_initializePayload"
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
        "name": "hasPermission",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_who"
            },
            {
                "type": "address",
                "name": "_where"
            },
            {
                "type": "bytes32",
                "name": "_what"
            },
            {
                "type": "bytes",
                "name": "_how"
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
        "name": "newAppProxyPinned",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_kernel"
            },
            {
                "type": "bytes32",
                "name": "_appId"
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
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_shouldPetrify"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewAppProxy",
        "inputs": [
            {
                "type": "address",
                "name": "proxy",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isUpgradeable",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "appId",
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
        "name": "SetApp",
        "inputs": [
            {
                "type": "bytes32",
                "name": "namespace",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "appId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "app",
                "indexed": false
            }
        ]
    }
]
