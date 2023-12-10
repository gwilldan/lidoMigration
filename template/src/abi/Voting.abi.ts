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
        "name": "unsafelyChangeObjectionPhaseTime",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "_objectionPhaseTime"
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
                "name": "_token"
            },
            {
                "type": "uint64",
                "name": "_supportRequiredPct"
            },
            {
                "type": "uint64",
                "name": "_minAcceptQuorumPct"
            },
            {
                "type": "uint64",
                "name": "_voteTime"
            },
            {
                "type": "uint64",
                "name": "_objectionPhaseTime"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "UNSAFELY_MODIFY_VOTE_TIME_ROLE",
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
        "name": "unsafelyChangeVoteTime",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "_voteTime"
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
        "name": "MODIFY_QUORUM_ROLE",
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
        "name": "objectionPhaseTime",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoterState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
            },
            {
                "type": "address",
                "name": "_voter"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getVote",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "open"
            },
            {
                "type": "bool",
                "name": "executed"
            },
            {
                "type": "uint64",
                "name": "startDate"
            },
            {
                "type": "uint64",
                "name": "snapshotBlock"
            },
            {
                "type": "uint64",
                "name": "supportRequired"
            },
            {
                "type": "uint64",
                "name": "minAcceptQuorum"
            },
            {
                "type": "uint256",
                "name": "yea"
            },
            {
                "type": "uint256",
                "name": "nay"
            },
            {
                "type": "uint256",
                "name": "votingPower"
            },
            {
                "type": "bytes",
                "name": "script"
            },
            {
                "type": "uint8",
                "name": "phase"
            }
        ]
    },
    {
        "type": "function",
        "name": "changeMinAcceptQuorumPct",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "_minAcceptQuorumPct"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "MODIFY_SUPPORT_ROLE",
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
        "name": "changeSupportRequiredPct",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "_supportRequiredPct"
            }
        ],
        "outputs": []
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
        "name": "voteTime",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "CREATE_VOTES_ROLE",
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
        "name": "canForward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_sender"
            },
            {
                "type": "bytes",
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
        "name": "canExecute",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
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
        "name": "canVote",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
            },
            {
                "type": "address",
                "name": "_voter"
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
        "name": "newVote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_executionScript"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "voteId"
            }
        ]
    },
    {
        "type": "function",
        "name": "forward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_evmScript"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "minAcceptQuorumPct",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
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
        "name": "votesLength",
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
        "name": "vote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
            },
            {
                "type": "bool",
                "name": "_supports"
            },
            {
                "type": "bool",
                "name": "_executesIfDecided_deprecated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "newVote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_executionScript"
            },
            {
                "type": "string",
                "name": "_metadata"
            },
            {
                "type": "bool",
                "name": "_castVote"
            },
            {
                "type": "bool",
                "name": "_executesIfDecided_deprecated"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "voteId"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVotePhase",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "executeVote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_voteId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportRequiredPct",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "token",
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
        "name": "PCT_BASE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isForwarder",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "StartVote",
        "inputs": [
            {
                "type": "uint256",
                "name": "voteId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "indexed": true
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CastVote",
        "inputs": [
            {
                "type": "uint256",
                "name": "voteId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "supports",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "stake",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CastObjection",
        "inputs": [
            {
                "type": "uint256",
                "name": "voteId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stake",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExecuteVote",
        "inputs": [
            {
                "type": "uint256",
                "name": "voteId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeSupportRequired",
        "inputs": [
            {
                "type": "uint64",
                "name": "supportRequiredPct",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeMinQuorum",
        "inputs": [
            {
                "type": "uint64",
                "name": "minAcceptQuorumPct",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeVoteTime",
        "inputs": [
            {
                "type": "uint64",
                "name": "voteTime",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeObjectionPhaseTime",
        "inputs": [
            {
                "type": "uint64",
                "name": "objectionPhaseTime",
                "indexed": false
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
