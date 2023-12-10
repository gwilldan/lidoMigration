export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "slotsPerEpoch"
            },
            {
                "type": "uint256",
                "name": "secondsPerSlot"
            },
            {
                "type": "uint256",
                "name": "genesisTime"
            },
            {
                "type": "uint256",
                "name": "epochsPerFrame"
            },
            {
                "type": "uint256",
                "name": "fastLaneLengthSlots"
            },
            {
                "type": "address",
                "name": "admin"
            },
            {
                "type": "address",
                "name": "reportProcessor"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AdminCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ConsensusReportAlreadyProcessing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "DuplicateMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "DuplicateReport",
        "inputs": []
    },
    {
        "type": "error",
        "name": "EmptyReport",
        "inputs": []
    },
    {
        "type": "error",
        "name": "EpochsPerFrameCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FastLanePeriodCannotBeLongerThanFrame",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InitialEpochAlreadyArrived",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InitialEpochIsYetToArrive",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InitialEpochRefSlotCannotBeEarlierThanProcessingSlot",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidChainConfig",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidSlot",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NewProcessorCannotBeTheSame",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NonFastLaneMemberCannotReportWithinFastLaneInterval",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NonMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NumericOverflow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "QuorumTooSmall",
        "inputs": [
            {
                "type": "uint256",
                "name": "minQuorum"
            },
            {
                "type": "uint256",
                "name": "receivedQuorum"
            }
        ]
    },
    {
        "type": "error",
        "name": "ReportProcessorCannotBeZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StaleReport",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnexpectedConsensusVersion",
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
        "type": "event",
        "anonymous": false,
        "name": "ConsensusLost",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConsensusReached",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "report",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "support",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FastLaneConfigSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "fastLaneLengthSlots",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FrameConfigSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "newInitialEpoch",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newEpochsPerFrame",
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
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newTotalMembers",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newQuorum",
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
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newTotalMembers",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newQuorum",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "QuorumSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "newQuorum",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalMembers",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "prevQuorum",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReportProcessorSet",
        "inputs": [
            {
                "type": "address",
                "name": "processor",
                "indexed": true
            },
            {
                "type": "address",
                "name": "prevProcessor",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReportReceived",
        "inputs": [
            {
                "type": "uint256",
                "name": "refSlot",
                "indexed": true
            },
            {
                "type": "address",
                "name": "member",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "report",
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
        "name": "DISABLE_CONSENSUS_ROLE",
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
        "name": "MANAGE_FAST_LANE_CONFIG_ROLE",
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
        "name": "MANAGE_FRAME_CONFIG_ROLE",
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
        "name": "MANAGE_MEMBERS_AND_QUORUM_ROLE",
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
        "name": "MANAGE_REPORT_PROCESSOR_ROLE",
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
        "name": "addMember",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            },
            {
                "type": "uint256",
                "name": "quorum"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "disableConsensus",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getChainConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "slotsPerEpoch"
            },
            {
                "type": "uint256",
                "name": "secondsPerSlot"
            },
            {
                "type": "uint256",
                "name": "genesisTime"
            }
        ]
    },
    {
        "type": "function",
        "name": "getConsensusState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "refSlot"
            },
            {
                "type": "bytes32",
                "name": "consensusReport"
            },
            {
                "type": "bool",
                "name": "isReportProcessing"
            }
        ]
    },
    {
        "type": "function",
        "name": "getConsensusStateForMember",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "result",
                "components": [
                    {
                        "type": "uint256",
                        "name": "currentFrameRefSlot"
                    },
                    {
                        "type": "bytes32",
                        "name": "currentFrameConsensusReport"
                    },
                    {
                        "type": "bool",
                        "name": "isMember"
                    },
                    {
                        "type": "bool",
                        "name": "isFastLane"
                    },
                    {
                        "type": "bool",
                        "name": "canReport"
                    },
                    {
                        "type": "uint256",
                        "name": "lastMemberReportRefSlot"
                    },
                    {
                        "type": "bytes32",
                        "name": "currentFrameMemberReport"
                    }
                ]
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
                "name": "refSlot"
            },
            {
                "type": "uint256",
                "name": "reportProcessingDeadlineSlot"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFastLaneMembers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": "addresses"
            },
            {
                "type": "uint256[]",
                "name": "lastReportedRefSlots"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFrameConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "initialEpoch"
            },
            {
                "type": "uint256",
                "name": "epochsPerFrame"
            },
            {
                "type": "uint256",
                "name": "fastLaneLengthSlots"
            }
        ]
    },
    {
        "type": "function",
        "name": "getInitialRefSlot",
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
        "name": "getIsFastLaneMember",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
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
        "name": "getIsMember",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
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
        "name": "getMembers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": "addresses"
            },
            {
                "type": "uint256[]",
                "name": "lastReportedRefSlots"
            }
        ]
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
        "name": "getReportProcessor",
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
        "name": "getReportVariants",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32[]",
                "name": "variants"
            },
            {
                "type": "uint256[]",
                "name": "support"
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
        "name": "removeMember",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            },
            {
                "type": "uint256",
                "name": "quorum"
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
        "name": "setFastLaneLengthSlots",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "fastLaneLengthSlots"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFrameConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "epochsPerFrame"
            },
            {
                "type": "uint256",
                "name": "fastLaneLengthSlots"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setQuorum",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "quorum"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setReportProcessor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newProcessor"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitReport",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "slot"
            },
            {
                "type": "bytes32",
                "name": "report"
            },
            {
                "type": "uint256",
                "name": "consensusVersion"
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
        "name": "updateInitialEpoch",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "initialEpoch"
            }
        ],
        "outputs": []
    }
]
