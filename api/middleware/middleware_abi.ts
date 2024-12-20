export const MIDDLEWARE_ABI = [
  {
    type: "constructor",
    inputs: [
      { name: "_network", type: "address", internalType: "address" },
      {
        name: "_operatorRegistry",
        type: "address",
        internalType: "address",
      },
      {
        name: "_vaultRegistry",
        type: "address",
        internalType: "address",
      },
      {
        name: "_operatorNetOptin",
        type: "address",
        internalType: "address",
      },
      { name: "_owner", type: "address", internalType: "address" },
      {
        name: "_epochDuration",
        type: "uint48",
        internalType: "uint48",
      },
      {
        name: "_slashingWindow",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "calcAndCacheStakes",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "totalStake", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "gateway",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IOGateway" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentEpoch",
    inputs: [],
    outputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentOperatorKey",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentOperators",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [
      {
        name: "activeOperators",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getEpochAtTs",
    inputs: [{ name: "timestamp", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getEpochStartTs",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "timestamp", type: "uint48", internalType: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOperatorByKey",
    inputs: [{ name: "key", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOperatorKeyAt",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "timestamp", type: "uint48", internalType: "uint48" },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOperatorStake",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "epoch", type: "uint48", internalType: "uint48" },
    ],
    outputs: [{ name: "stake", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOperatorVaultPairs",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [
      {
        name: "operatorVaultPairs",
        type: "tuple[]",
        internalType: "struct Middleware.OperatorVaultPair[]",
        components: [
          {
            name: "operator",
            type: "address",
            internalType: "address",
          },
          {
            name: "vaults",
            type: "address[]",
            internalType: "address[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTotalStake",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getValidatorSet",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [
      {
        name: "validatorsData",
        type: "tuple[]",
        internalType: "struct Middleware.ValidatorData[]",
        components: [
          { name: "stake", type: "uint256", internalType: "uint256" },
          { name: "key", type: "bytes32", internalType: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_epochDuration",
    inputs: [],
    outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_network",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_operatorNetworkOptin",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_operatorRegistry",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_slashingWindow",
    inputs: [],
    outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_startTime",
    inputs: [],
    outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "i_vaultRegistry",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isVaultRegistered",
    inputs: [{ name: "vault", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauseOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "pauseVault",
    inputs: [{ name: "vault", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerOperator",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "key", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerVault",
    inputs: [{ name: "vault", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "s_operatorStakeCache",
    inputs: [
      { name: "", type: "uint48", internalType: "uint48" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_subnetworksCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_totalStakeCache",
    inputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_totalStakeCached",
    inputs: [{ name: "", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "sendCurrentOperatorsKeys",
    inputs: [{ name: "epoch", type: "uint48", internalType: "uint48" }],
    outputs: [{ name: "keys", type: "bytes32[]", internalType: "bytes32[]" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setGateway",
    inputs: [{ name: "_gateway", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSubnetworksCount",
    inputs: [
      {
        name: "_subnetworksCount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "slash",
    inputs: [
      { name: "epoch", type: "uint48", internalType: "uint48" },
      { name: "operator", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpauseOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpauseVault",
    inputs: [{ name: "vault", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unregisterOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unregisterVault",
    inputs: [{ name: "vault", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOperatorKey",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "key", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "AlreadyAdded", inputs: [] },
  { type: "error", name: "AlreadyEnabled", inputs: [] },
  { type: "error", name: "CheckpointUnorderedInsertion", inputs: [] },
  { type: "error", name: "DuplicateKey", inputs: [] },
  {
    type: "error",
    name: "EnumerableMapNonexistentKey",
    inputs: [{ name: "key", type: "bytes32", internalType: "bytes32" }],
  },
  { type: "error", name: "Middleware__InvalidEpoch", inputs: [] },
  {
    type: "error",
    name: "Middleware__InvalidSubnetworksCnt",
    inputs: [],
  },
  { type: "error", name: "Middleware__NotOperator", inputs: [] },
  { type: "error", name: "Middleware__NotVault", inputs: [] },
  {
    type: "error",
    name: "Middleware__OperarorGracePeriodNotPassed",
    inputs: [],
  },
  {
    type: "error",
    name: "Middleware__OperatorAlreadyRegistred",
    inputs: [],
  },
  { type: "error", name: "Middleware__OperatorNotOptedIn", inputs: [] },
  {
    type: "error",
    name: "Middleware__OperatorNotRegistred",
    inputs: [],
  },
  {
    type: "error",
    name: "Middleware__SlashingWindowTooShort",
    inputs: [],
  },
  { type: "error", name: "Middleware__TooBigSlashAmount", inputs: [] },
  { type: "error", name: "Middleware__TooOldEpoch", inputs: [] },
  { type: "error", name: "Middleware__UnknownSlasherType", inputs: [] },
  {
    type: "error",
    name: "Middleware__VaultAlreadyRegistered",
    inputs: [],
  },
  { type: "error", name: "Middleware__VaultEpochTooShort", inputs: [] },
  {
    type: "error",
    name: "Middleware__VaultGracePeriodNotPassed",
    inputs: [],
  },
  { type: "error", name: "NotEnabled", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      { name: "bits", type: "uint8", internalType: "uint8" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
  },
];
