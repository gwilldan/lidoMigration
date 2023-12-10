export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_governanceToken"
            },
            {
                "type": "address",
                "name": "_admin"
            },
            {
                "type": "uint256",
                "name": "_motionDuration"
            },
            {
                "type": "uint256",
                "name": "_motionsCountLimit"
            },
            {
                "type": "uint256",
                "name": "_objectionsThreshold"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EVMScriptExecutorChanged",
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptExecutor",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EVMScriptFactoryAdded",
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptFactory",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "_permissions",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EVMScriptFactoryRemoved",
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptFactory",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionCanceled",
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "_creator",
                "indexed": false
            },
            {
                "type": "address",
                "name": "_evmScriptFactory",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "_evmScriptCallData",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "_evmScript",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionDurationChanged",
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionDuration",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionEnacted",
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionObjected",
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "_objector",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "_weight",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_newObjectionsAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_newObjectionsAmountPct",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionRejected",
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionsCountLimitChanged",
        "inputs": [
            {
                "type": "uint256",
                "name": "_newMotionsCountLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ObjectionsThresholdChanged",
        "inputs": [
            {
                "type": "uint256",
                "name": "_newThreshold",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "CANCEL_ROLE",
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
        "name": "DEFAULT_ADMIN_ROLE",
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
        "name": "MAX_MOTIONS_LIMIT",
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
        "name": "MAX_OBJECTIONS_THRESHOLD",
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
        "name": "MIN_MOTION_DURATION",
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
        "name": "PAUSE_ROLE",
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
        "name": "UNPAUSE_ROLE",
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
        "name": "addEVMScriptFactory",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptFactory"
            },
            {
                "type": "bytes",
                "name": "_permissions"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "canObjectToMotion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "address",
                "name": "_objector"
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
        "name": "cancelAllMotions",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelMotions",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_motionIds"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "createMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptFactory"
            },
            {
                "type": "bytes",
                "name": "_evmScriptCallData"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_newMotionId"
            }
        ]
    },
    {
        "type": "function",
        "name": "enactMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "bytes",
                "name": "_evmScriptCallData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "evmScriptExecutor",
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
        "name": "evmScriptFactories",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
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
        "name": "evmScriptFactoryPermissions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEVMScriptFactories",
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
        "name": "getMotion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "evmScriptFactory"
                    },
                    {
                        "type": "address",
                        "name": "creator"
                    },
                    {
                        "type": "uint256",
                        "name": "duration"
                    },
                    {
                        "type": "uint256",
                        "name": "startDate"
                    },
                    {
                        "type": "uint256",
                        "name": "snapshotBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "objectionsThreshold"
                    },
                    {
                        "type": "uint256",
                        "name": "objectionsAmount"
                    },
                    {
                        "type": "bytes32",
                        "name": "evmScriptHash"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getMotions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "evmScriptFactory"
                    },
                    {
                        "type": "address",
                        "name": "creator"
                    },
                    {
                        "type": "uint256",
                        "name": "duration"
                    },
                    {
                        "type": "uint256",
                        "name": "startDate"
                    },
                    {
                        "type": "uint256",
                        "name": "snapshotBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "objectionsThreshold"
                    },
                    {
                        "type": "uint256",
                        "name": "objectionsAmount"
                    },
                    {
                        "type": "bytes32",
                        "name": "evmScriptHash"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "governanceToken",
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
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
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
        "name": "isEVMScriptFactory",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_maybeEVMScriptFactory"
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
        "name": "motionDuration",
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
        "name": "motions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "id"
            },
            {
                "type": "address",
                "name": "evmScriptFactory"
            },
            {
                "type": "address",
                "name": "creator"
            },
            {
                "type": "uint256",
                "name": "duration"
            },
            {
                "type": "uint256",
                "name": "startDate"
            },
            {
                "type": "uint256",
                "name": "snapshotBlock"
            },
            {
                "type": "uint256",
                "name": "objectionsThreshold"
            },
            {
                "type": "uint256",
                "name": "objectionsAmount"
            },
            {
                "type": "bytes32",
                "name": "evmScriptHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "motionsCountLimit",
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
        "name": "objectToMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "objections",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "address",
                "name": ""
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
        "name": "objectionsThreshold",
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
        "name": "pause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "paused",
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
        "name": "removeEVMScriptFactory",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptFactory"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setEVMScriptExecutor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_evmScriptExecutor"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMotionDuration",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionDuration"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMotionsCountLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionsCountLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setObjectionsThreshold",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_objectionsThreshold"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
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
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    }
]
