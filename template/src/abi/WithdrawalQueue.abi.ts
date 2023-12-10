export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_wstETH"
            },
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "string",
                "name": "_symbol"
            }
        ]
    },
    {
        "type": "error",
        "name": "AdminZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApprovalToOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApproveToCaller",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BatchesAreNotSorted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CantSendValueRecipientMayHaveReverted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "EmptyBatches",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidContractVersionIncrement",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidHint",
        "inputs": [
            {
                "type": "uint256",
                "name": "_hint"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidOwnerAddress",
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidReportTimestamp",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidRequestId",
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidRequestIdRange",
        "inputs": [
            {
                "type": "uint256",
                "name": "startId"
            },
            {
                "type": "uint256",
                "name": "endId"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidState",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NonZeroContractVersionOnInit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEnoughEther",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotOwner",
        "inputs": [
            {
                "type": "address",
                "name": "_sender"
            },
            {
                "type": "address",
                "name": "_owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotOwnerOrApproved",
        "inputs": [
            {
                "type": "address",
                "name": "sender"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotOwnerOrApprovedForAll",
        "inputs": [
            {
                "type": "address",
                "name": "sender"
            }
        ]
    },
    {
        "type": "error",
        "name": "PauseUntilMustBeInFuture",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PausedExpected",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RequestAlreadyClaimed",
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ]
    },
    {
        "type": "error",
        "name": "RequestAmountTooLarge",
        "inputs": [
            {
                "type": "uint256",
                "name": "_amountOfStETH"
            }
        ]
    },
    {
        "type": "error",
        "name": "RequestAmountTooSmall",
        "inputs": [
            {
                "type": "uint256",
                "name": "_amountOfStETH"
            }
        ]
    },
    {
        "type": "error",
        "name": "RequestIdsNotSorted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RequestNotFoundOrNotFinalized",
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ]
    },
    {
        "type": "error",
        "name": "ResumedExpected",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StringTooLong",
        "inputs": [
            {
                "type": "string",
                "name": "str"
            }
        ]
    },
    {
        "type": "error",
        "name": "TooMuchEtherToFinalize",
        "inputs": [
            {
                "type": "uint256",
                "name": "sent"
            },
            {
                "type": "uint256",
                "name": "maxExpected"
            }
        ]
    },
    {
        "type": "error",
        "name": "TransferFromIncorrectOwner",
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "realOwner"
            }
        ]
    },
    {
        "type": "error",
        "name": "TransferFromZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferToNonIERC721Receiver",
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "error",
        "name": "TransferToThemselves",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferToZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnexpectedContractVersion",
        "inputs": [
            {
                "type": "uint256",
                "name": "expected"
            },
            {
                "type": "uint256",
                "name": "received"
            }
        ]
    },
    {
        "type": "error",
        "name": "ZeroAmountOfETH",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroMetadata",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroPauseDuration",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroRecipient",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroShareRate",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroTimestamp",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BaseURISet",
        "inputs": [
            {
                "type": "string",
                "name": "baseURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BunkerModeDisabled",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BunkerModeEnabled",
        "inputs": [
            {
                "type": "uint256",
                "name": "_sinceTimestamp",
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
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "InitializedV1",
        "inputs": [
            {
                "type": "address",
                "name": "_admin",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NftDescriptorAddressSet",
        "inputs": [
            {
                "type": "address",
                "name": "nftDescriptorAddress",
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
                "type": "uint256",
                "name": "duration",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Resumed",
        "inputs": []
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
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalClaimed",
        "inputs": [
            {
                "type": "uint256",
                "name": "requestId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "receiver",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amountOfETH",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalRequested",
        "inputs": [
            {
                "type": "uint256",
                "name": "requestId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "requestor",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amountOfStETH",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amountOfShares",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalsFinalized",
        "inputs": [
            {
                "type": "uint256",
                "name": "from",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amountOfETHLocked",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sharesToBurn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "BUNKER_MODE_DISABLED_TIMESTAMP",
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
        "name": "FINALIZE_ROLE",
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
        "name": "MANAGE_TOKEN_URI_ROLE",
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
        "name": "MAX_BATCHES_LENGTH",
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
        "name": "MAX_STETH_WITHDRAWAL_AMOUNT",
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
        "name": "MIN_STETH_WITHDRAWAL_AMOUNT",
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
        "name": "ORACLE_ROLE",
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
        "name": "PAUSE_INFINITELY",
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
        "name": "RESUME_ROLE",
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
        "name": "STETH",
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
        "name": "WSTETH",
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
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
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
        "name": "bunkerModeSinceTimestamp",
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
        "name": "calculateFinalizationBatches",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_maxShareRate"
            },
            {
                "type": "uint256",
                "name": "_maxTimestamp"
            },
            {
                "type": "uint256",
                "name": "_maxRequestsPerCall"
            },
            {
                "type": "tuple",
                "name": "_state",
                "components": [
                    {
                        "type": "uint256",
                        "name": "remainingEthBudget"
                    },
                    {
                        "type": "bool",
                        "name": "finished"
                    },
                    {
                        "type": "uint256[36]",
                        "name": "batches"
                    },
                    {
                        "type": "uint256",
                        "name": "batchesLength"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "remainingEthBudget"
                    },
                    {
                        "type": "bool",
                        "name": "finished"
                    },
                    {
                        "type": "uint256[36]",
                        "name": "batches"
                    },
                    {
                        "type": "uint256",
                        "name": "batchesLength"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "claimWithdrawal",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimWithdrawals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_requestIds"
            },
            {
                "type": "uint256[]",
                "name": "_hints"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimWithdrawalsTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_requestIds"
            },
            {
                "type": "uint256[]",
                "name": "_hints"
            },
            {
                "type": "address",
                "name": "_recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalize",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_batches"
            },
            {
                "type": "uint256",
                "name": "_maxShareRate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "findCheckpointHints",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_requestIds"
            },
            {
                "type": "uint256",
                "name": "_firstIndex"
            },
            {
                "type": "uint256",
                "name": "_lastIndex"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "hintIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
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
        "name": "getBaseURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getClaimableEther",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_requestIds"
            },
            {
                "type": "uint256[]",
                "name": "_hints"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "claimableEthValues"
            }
        ]
    },
    {
        "type": "function",
        "name": "getContractVersion",
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
        "name": "getLastCheckpointIndex",
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
        "name": "getLastFinalizedRequestId",
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
        "name": "getLastRequestId",
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
        "name": "getLockedEtherAmount",
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
        "name": "getNFTDescriptorAddress",
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
        "name": "getResumeSinceTimestamp",
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
        "name": "getRoleMember",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "uint256",
                "name": "index"
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
        "name": "getRoleMemberCount",
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
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getWithdrawalRequests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "requestsIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "getWithdrawalStatus",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_requestIds"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "statuses",
                "components": [
                    {
                        "type": "uint256",
                        "name": "amountOfStETH"
                    },
                    {
                        "type": "uint256",
                        "name": "amountOfShares"
                    },
                    {
                        "type": "address",
                        "name": "owner"
                    },
                    {
                        "type": "uint256",
                        "name": "timestamp"
                    },
                    {
                        "type": "bool",
                        "name": "isFinalized"
                    },
                    {
                        "type": "bool",
                        "name": "isClaimed"
                    }
                ]
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_admin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "address",
                "name": "_operator"
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
        "name": "isBunkerModeActive",
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
        "name": "isPaused",
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
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "onOracleReport",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_isBunkerModeNow"
            },
            {
                "type": "uint256",
                "name": "_bunkerStartTimestamp"
            },
            {
                "type": "uint256",
                "name": "_currentReportTimestamp"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
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
        "name": "pauseFor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_duration"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "pauseUntil",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_pauseUntilInclusive"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "prefinalize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_batches"
            },
            {
                "type": "uint256",
                "name": "_maxShareRate"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "ethToLock"
            },
            {
                "type": "uint256",
                "name": "sharesToBurn"
            }
        ]
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
        "name": "requestWithdrawals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "amounts"
            },
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "requestIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "requestWithdrawalsWithPermit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_amounts"
            },
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "tuple",
                "name": "_permit",
                "components": [
                    {
                        "type": "uint256",
                        "name": "value"
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "requestIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "requestWithdrawalsWstETH",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "amounts"
            },
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "requestIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "requestWithdrawalsWstETHWithPermit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_amounts"
            },
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "tuple",
                "name": "_permit",
                "components": [
                    {
                        "type": "uint256",
                        "name": "value"
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "requestIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "resume",
        "constant": false,
        "payable": false,
        "inputs": [],
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
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_requestId"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            },
            {
                "type": "bool",
                "name": "_approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setBaseURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_baseURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setNFTDescriptorAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nftDescriptorAddress"
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
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_requestId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unfinalizedRequestNumber",
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
        "name": "unfinalizedStETH",
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
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalBatchFinalized",
        "inputs": [
            {
                "type": "uint256",
                "name": "from",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amountOfETHLocked",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sharesToBurn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    }
]
